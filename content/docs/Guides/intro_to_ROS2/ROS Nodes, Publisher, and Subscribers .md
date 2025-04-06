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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DFM733F%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHWhkXnGwE9qn%2BsSsEXIxABulwdKhsceK%2FTifoeK6UQAiEA%2F4OOSNUYx2m4IiWlv7EXQ2MUEHU7Wjri54rA5B1%2F1y8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIi46tlifAWJdG0HlSrcA%2BPy2ivwrXDSbUH%2BzhEE%2F8bB7mC5QdqD5cLYZIx%2B1pJhheaBJT659bm6BYy9bMIY0nPkQUV5bt%2Fv0Hcu3zOto7k%2BPHBLqLMvZ9w08mMJVU6hU3UUNO37lj60%2FGmOAac9GWD9u%2BalBYr%2FFHVtWJjynvC5Xok1PgJ9jfSqGC15pYVu%2FsyP0GD7pCU%2BXwC5vfg6ifVaXSKuelsEnW9cfxxVXf0wuNPOP%2BXc951asvcfahpd6pXpWlxwlYvlwPB%2FYvKof4Q9Ip6rVvSsCQzdIFIFLeGuwJydzKoFQqZOzetHONtKTw88NlS9oM02E%2BsjHNFCwDyKm4tr%2BqvZ10v0plzfRnhvGZ7Y5%2F4Q1ZAdFpOzm5EdkoVCHQt541NQMAJLX3lVNbtlHum7TdeL4FA6R61kfBaDMPT%2F8UTNfmJ9ZNzAHF9P3DGIPQ%2BbqkvqCy5PspxLp%2FNbgu%2Bh1gblriAyksA67JSZFuQ9Xf2ZaIgpzaNfPe8PfrA6CnpJSaGGX3ASgZPKn0lJlh1hW9Jv0P0AATJ%2F7BfxILhMY3uCSp%2BHRDOCycjHFOZiT83GEQtEjhCzPkLBiSLm6WkIS%2FrCWm5inHRB2LGkyLW3DG9rk4%2BrJHlUqGnL%2FlbRPR0uBrqWpk8eMLj%2ByL8GOqUBuYrH0nL4b%2FxbLDP1lqe6Y1eNuhEj7DiXeXaHgUBoLRjL1D9an8KPBMotqkGaLw7Z427Ti8dVZ9Sfj7xcdECGatxTHRw5aq3Flk2PG6EX2Kk8yMO5GjUsroHut1BOl6neq0sfCW1gLmAB1ZXs6ag7kHcfVCC9Wq1gHokALbHJC2iktNeITY8XWl%2FW18DacXNrmpfBOvyn7gcUr2yTYusXdGKFWk8G&X-Amz-Signature=c509c7d5b242094fe2236c6f31f3b4f5e1e376a56d9f70c99941f3b5d49d52f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DFM733F%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHWhkXnGwE9qn%2BsSsEXIxABulwdKhsceK%2FTifoeK6UQAiEA%2F4OOSNUYx2m4IiWlv7EXQ2MUEHU7Wjri54rA5B1%2F1y8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIi46tlifAWJdG0HlSrcA%2BPy2ivwrXDSbUH%2BzhEE%2F8bB7mC5QdqD5cLYZIx%2B1pJhheaBJT659bm6BYy9bMIY0nPkQUV5bt%2Fv0Hcu3zOto7k%2BPHBLqLMvZ9w08mMJVU6hU3UUNO37lj60%2FGmOAac9GWD9u%2BalBYr%2FFHVtWJjynvC5Xok1PgJ9jfSqGC15pYVu%2FsyP0GD7pCU%2BXwC5vfg6ifVaXSKuelsEnW9cfxxVXf0wuNPOP%2BXc951asvcfahpd6pXpWlxwlYvlwPB%2FYvKof4Q9Ip6rVvSsCQzdIFIFLeGuwJydzKoFQqZOzetHONtKTw88NlS9oM02E%2BsjHNFCwDyKm4tr%2BqvZ10v0plzfRnhvGZ7Y5%2F4Q1ZAdFpOzm5EdkoVCHQt541NQMAJLX3lVNbtlHum7TdeL4FA6R61kfBaDMPT%2F8UTNfmJ9ZNzAHF9P3DGIPQ%2BbqkvqCy5PspxLp%2FNbgu%2Bh1gblriAyksA67JSZFuQ9Xf2ZaIgpzaNfPe8PfrA6CnpJSaGGX3ASgZPKn0lJlh1hW9Jv0P0AATJ%2F7BfxILhMY3uCSp%2BHRDOCycjHFOZiT83GEQtEjhCzPkLBiSLm6WkIS%2FrCWm5inHRB2LGkyLW3DG9rk4%2BrJHlUqGnL%2FlbRPR0uBrqWpk8eMLj%2ByL8GOqUBuYrH0nL4b%2FxbLDP1lqe6Y1eNuhEj7DiXeXaHgUBoLRjL1D9an8KPBMotqkGaLw7Z427Ti8dVZ9Sfj7xcdECGatxTHRw5aq3Flk2PG6EX2Kk8yMO5GjUsroHut1BOl6neq0sfCW1gLmAB1ZXs6ag7kHcfVCC9Wq1gHokALbHJC2iktNeITY8XWl%2FW18DacXNrmpfBOvyn7gcUr2yTYusXdGKFWk8G&X-Amz-Signature=44de3bf01026cfc57573ac3ee7f90cc9479e5f8b4ac3c0ee0b105a122e79e2fd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DFM733F%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHWhkXnGwE9qn%2BsSsEXIxABulwdKhsceK%2FTifoeK6UQAiEA%2F4OOSNUYx2m4IiWlv7EXQ2MUEHU7Wjri54rA5B1%2F1y8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIi46tlifAWJdG0HlSrcA%2BPy2ivwrXDSbUH%2BzhEE%2F8bB7mC5QdqD5cLYZIx%2B1pJhheaBJT659bm6BYy9bMIY0nPkQUV5bt%2Fv0Hcu3zOto7k%2BPHBLqLMvZ9w08mMJVU6hU3UUNO37lj60%2FGmOAac9GWD9u%2BalBYr%2FFHVtWJjynvC5Xok1PgJ9jfSqGC15pYVu%2FsyP0GD7pCU%2BXwC5vfg6ifVaXSKuelsEnW9cfxxVXf0wuNPOP%2BXc951asvcfahpd6pXpWlxwlYvlwPB%2FYvKof4Q9Ip6rVvSsCQzdIFIFLeGuwJydzKoFQqZOzetHONtKTw88NlS9oM02E%2BsjHNFCwDyKm4tr%2BqvZ10v0plzfRnhvGZ7Y5%2F4Q1ZAdFpOzm5EdkoVCHQt541NQMAJLX3lVNbtlHum7TdeL4FA6R61kfBaDMPT%2F8UTNfmJ9ZNzAHF9P3DGIPQ%2BbqkvqCy5PspxLp%2FNbgu%2Bh1gblriAyksA67JSZFuQ9Xf2ZaIgpzaNfPe8PfrA6CnpJSaGGX3ASgZPKn0lJlh1hW9Jv0P0AATJ%2F7BfxILhMY3uCSp%2BHRDOCycjHFOZiT83GEQtEjhCzPkLBiSLm6WkIS%2FrCWm5inHRB2LGkyLW3DG9rk4%2BrJHlUqGnL%2FlbRPR0uBrqWpk8eMLj%2ByL8GOqUBuYrH0nL4b%2FxbLDP1lqe6Y1eNuhEj7DiXeXaHgUBoLRjL1D9an8KPBMotqkGaLw7Z427Ti8dVZ9Sfj7xcdECGatxTHRw5aq3Flk2PG6EX2Kk8yMO5GjUsroHut1BOl6neq0sfCW1gLmAB1ZXs6ag7kHcfVCC9Wq1gHokALbHJC2iktNeITY8XWl%2FW18DacXNrmpfBOvyn7gcUr2yTYusXdGKFWk8G&X-Amz-Signature=3fbfbc4991a0e3552443f7ed85985b0b51c4552bcbe4129dc7f7aa15821584e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DFM733F%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHWhkXnGwE9qn%2BsSsEXIxABulwdKhsceK%2FTifoeK6UQAiEA%2F4OOSNUYx2m4IiWlv7EXQ2MUEHU7Wjri54rA5B1%2F1y8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIi46tlifAWJdG0HlSrcA%2BPy2ivwrXDSbUH%2BzhEE%2F8bB7mC5QdqD5cLYZIx%2B1pJhheaBJT659bm6BYy9bMIY0nPkQUV5bt%2Fv0Hcu3zOto7k%2BPHBLqLMvZ9w08mMJVU6hU3UUNO37lj60%2FGmOAac9GWD9u%2BalBYr%2FFHVtWJjynvC5Xok1PgJ9jfSqGC15pYVu%2FsyP0GD7pCU%2BXwC5vfg6ifVaXSKuelsEnW9cfxxVXf0wuNPOP%2BXc951asvcfahpd6pXpWlxwlYvlwPB%2FYvKof4Q9Ip6rVvSsCQzdIFIFLeGuwJydzKoFQqZOzetHONtKTw88NlS9oM02E%2BsjHNFCwDyKm4tr%2BqvZ10v0plzfRnhvGZ7Y5%2F4Q1ZAdFpOzm5EdkoVCHQt541NQMAJLX3lVNbtlHum7TdeL4FA6R61kfBaDMPT%2F8UTNfmJ9ZNzAHF9P3DGIPQ%2BbqkvqCy5PspxLp%2FNbgu%2Bh1gblriAyksA67JSZFuQ9Xf2ZaIgpzaNfPe8PfrA6CnpJSaGGX3ASgZPKn0lJlh1hW9Jv0P0AATJ%2F7BfxILhMY3uCSp%2BHRDOCycjHFOZiT83GEQtEjhCzPkLBiSLm6WkIS%2FrCWm5inHRB2LGkyLW3DG9rk4%2BrJHlUqGnL%2FlbRPR0uBrqWpk8eMLj%2ByL8GOqUBuYrH0nL4b%2FxbLDP1lqe6Y1eNuhEj7DiXeXaHgUBoLRjL1D9an8KPBMotqkGaLw7Z427Ti8dVZ9Sfj7xcdECGatxTHRw5aq3Flk2PG6EX2Kk8yMO5GjUsroHut1BOl6neq0sfCW1gLmAB1ZXs6ag7kHcfVCC9Wq1gHokALbHJC2iktNeITY8XWl%2FW18DacXNrmpfBOvyn7gcUr2yTYusXdGKFWk8G&X-Amz-Signature=ec0cff9914e36c9ff062535413f565bcfd2aeb2e681621f9b47c21049951e2ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DFM733F%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHWhkXnGwE9qn%2BsSsEXIxABulwdKhsceK%2FTifoeK6UQAiEA%2F4OOSNUYx2m4IiWlv7EXQ2MUEHU7Wjri54rA5B1%2F1y8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIi46tlifAWJdG0HlSrcA%2BPy2ivwrXDSbUH%2BzhEE%2F8bB7mC5QdqD5cLYZIx%2B1pJhheaBJT659bm6BYy9bMIY0nPkQUV5bt%2Fv0Hcu3zOto7k%2BPHBLqLMvZ9w08mMJVU6hU3UUNO37lj60%2FGmOAac9GWD9u%2BalBYr%2FFHVtWJjynvC5Xok1PgJ9jfSqGC15pYVu%2FsyP0GD7pCU%2BXwC5vfg6ifVaXSKuelsEnW9cfxxVXf0wuNPOP%2BXc951asvcfahpd6pXpWlxwlYvlwPB%2FYvKof4Q9Ip6rVvSsCQzdIFIFLeGuwJydzKoFQqZOzetHONtKTw88NlS9oM02E%2BsjHNFCwDyKm4tr%2BqvZ10v0plzfRnhvGZ7Y5%2F4Q1ZAdFpOzm5EdkoVCHQt541NQMAJLX3lVNbtlHum7TdeL4FA6R61kfBaDMPT%2F8UTNfmJ9ZNzAHF9P3DGIPQ%2BbqkvqCy5PspxLp%2FNbgu%2Bh1gblriAyksA67JSZFuQ9Xf2ZaIgpzaNfPe8PfrA6CnpJSaGGX3ASgZPKn0lJlh1hW9Jv0P0AATJ%2F7BfxILhMY3uCSp%2BHRDOCycjHFOZiT83GEQtEjhCzPkLBiSLm6WkIS%2FrCWm5inHRB2LGkyLW3DG9rk4%2BrJHlUqGnL%2FlbRPR0uBrqWpk8eMLj%2ByL8GOqUBuYrH0nL4b%2FxbLDP1lqe6Y1eNuhEj7DiXeXaHgUBoLRjL1D9an8KPBMotqkGaLw7Z427Ti8dVZ9Sfj7xcdECGatxTHRw5aq3Flk2PG6EX2Kk8yMO5GjUsroHut1BOl6neq0sfCW1gLmAB1ZXs6ag7kHcfVCC9Wq1gHokALbHJC2iktNeITY8XWl%2FW18DacXNrmpfBOvyn7gcUr2yTYusXdGKFWk8G&X-Amz-Signature=efc18e30f007985ee11fe5057bb64458ad45ea8d1dab038132b2e559a9f853a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DFM733F%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHWhkXnGwE9qn%2BsSsEXIxABulwdKhsceK%2FTifoeK6UQAiEA%2F4OOSNUYx2m4IiWlv7EXQ2MUEHU7Wjri54rA5B1%2F1y8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIi46tlifAWJdG0HlSrcA%2BPy2ivwrXDSbUH%2BzhEE%2F8bB7mC5QdqD5cLYZIx%2B1pJhheaBJT659bm6BYy9bMIY0nPkQUV5bt%2Fv0Hcu3zOto7k%2BPHBLqLMvZ9w08mMJVU6hU3UUNO37lj60%2FGmOAac9GWD9u%2BalBYr%2FFHVtWJjynvC5Xok1PgJ9jfSqGC15pYVu%2FsyP0GD7pCU%2BXwC5vfg6ifVaXSKuelsEnW9cfxxVXf0wuNPOP%2BXc951asvcfahpd6pXpWlxwlYvlwPB%2FYvKof4Q9Ip6rVvSsCQzdIFIFLeGuwJydzKoFQqZOzetHONtKTw88NlS9oM02E%2BsjHNFCwDyKm4tr%2BqvZ10v0plzfRnhvGZ7Y5%2F4Q1ZAdFpOzm5EdkoVCHQt541NQMAJLX3lVNbtlHum7TdeL4FA6R61kfBaDMPT%2F8UTNfmJ9ZNzAHF9P3DGIPQ%2BbqkvqCy5PspxLp%2FNbgu%2Bh1gblriAyksA67JSZFuQ9Xf2ZaIgpzaNfPe8PfrA6CnpJSaGGX3ASgZPKn0lJlh1hW9Jv0P0AATJ%2F7BfxILhMY3uCSp%2BHRDOCycjHFOZiT83GEQtEjhCzPkLBiSLm6WkIS%2FrCWm5inHRB2LGkyLW3DG9rk4%2BrJHlUqGnL%2FlbRPR0uBrqWpk8eMLj%2ByL8GOqUBuYrH0nL4b%2FxbLDP1lqe6Y1eNuhEj7DiXeXaHgUBoLRjL1D9an8KPBMotqkGaLw7Z427Ti8dVZ9Sfj7xcdECGatxTHRw5aq3Flk2PG6EX2Kk8yMO5GjUsroHut1BOl6neq0sfCW1gLmAB1ZXs6ag7kHcfVCC9Wq1gHokALbHJC2iktNeITY8XWl%2FW18DacXNrmpfBOvyn7gcUr2yTYusXdGKFWk8G&X-Amz-Signature=fbb0de5987d1c09df4c1af879ee9d4329db2a32abe80469d100f3975c0832003&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DFM733F%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHWhkXnGwE9qn%2BsSsEXIxABulwdKhsceK%2FTifoeK6UQAiEA%2F4OOSNUYx2m4IiWlv7EXQ2MUEHU7Wjri54rA5B1%2F1y8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIi46tlifAWJdG0HlSrcA%2BPy2ivwrXDSbUH%2BzhEE%2F8bB7mC5QdqD5cLYZIx%2B1pJhheaBJT659bm6BYy9bMIY0nPkQUV5bt%2Fv0Hcu3zOto7k%2BPHBLqLMvZ9w08mMJVU6hU3UUNO37lj60%2FGmOAac9GWD9u%2BalBYr%2FFHVtWJjynvC5Xok1PgJ9jfSqGC15pYVu%2FsyP0GD7pCU%2BXwC5vfg6ifVaXSKuelsEnW9cfxxVXf0wuNPOP%2BXc951asvcfahpd6pXpWlxwlYvlwPB%2FYvKof4Q9Ip6rVvSsCQzdIFIFLeGuwJydzKoFQqZOzetHONtKTw88NlS9oM02E%2BsjHNFCwDyKm4tr%2BqvZ10v0plzfRnhvGZ7Y5%2F4Q1ZAdFpOzm5EdkoVCHQt541NQMAJLX3lVNbtlHum7TdeL4FA6R61kfBaDMPT%2F8UTNfmJ9ZNzAHF9P3DGIPQ%2BbqkvqCy5PspxLp%2FNbgu%2Bh1gblriAyksA67JSZFuQ9Xf2ZaIgpzaNfPe8PfrA6CnpJSaGGX3ASgZPKn0lJlh1hW9Jv0P0AATJ%2F7BfxILhMY3uCSp%2BHRDOCycjHFOZiT83GEQtEjhCzPkLBiSLm6WkIS%2FrCWm5inHRB2LGkyLW3DG9rk4%2BrJHlUqGnL%2FlbRPR0uBrqWpk8eMLj%2ByL8GOqUBuYrH0nL4b%2FxbLDP1lqe6Y1eNuhEj7DiXeXaHgUBoLRjL1D9an8KPBMotqkGaLw7Z427Ti8dVZ9Sfj7xcdECGatxTHRw5aq3Flk2PG6EX2Kk8yMO5GjUsroHut1BOl6neq0sfCW1gLmAB1ZXs6ag7kHcfVCC9Wq1gHokALbHJC2iktNeITY8XWl%2FW18DacXNrmpfBOvyn7gcUr2yTYusXdGKFWk8G&X-Amz-Signature=51c4149be62b193cc569d82ed8f1434161d45f306fa35ad219b4db0a7fe409b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DFM733F%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHWhkXnGwE9qn%2BsSsEXIxABulwdKhsceK%2FTifoeK6UQAiEA%2F4OOSNUYx2m4IiWlv7EXQ2MUEHU7Wjri54rA5B1%2F1y8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIi46tlifAWJdG0HlSrcA%2BPy2ivwrXDSbUH%2BzhEE%2F8bB7mC5QdqD5cLYZIx%2B1pJhheaBJT659bm6BYy9bMIY0nPkQUV5bt%2Fv0Hcu3zOto7k%2BPHBLqLMvZ9w08mMJVU6hU3UUNO37lj60%2FGmOAac9GWD9u%2BalBYr%2FFHVtWJjynvC5Xok1PgJ9jfSqGC15pYVu%2FsyP0GD7pCU%2BXwC5vfg6ifVaXSKuelsEnW9cfxxVXf0wuNPOP%2BXc951asvcfahpd6pXpWlxwlYvlwPB%2FYvKof4Q9Ip6rVvSsCQzdIFIFLeGuwJydzKoFQqZOzetHONtKTw88NlS9oM02E%2BsjHNFCwDyKm4tr%2BqvZ10v0plzfRnhvGZ7Y5%2F4Q1ZAdFpOzm5EdkoVCHQt541NQMAJLX3lVNbtlHum7TdeL4FA6R61kfBaDMPT%2F8UTNfmJ9ZNzAHF9P3DGIPQ%2BbqkvqCy5PspxLp%2FNbgu%2Bh1gblriAyksA67JSZFuQ9Xf2ZaIgpzaNfPe8PfrA6CnpJSaGGX3ASgZPKn0lJlh1hW9Jv0P0AATJ%2F7BfxILhMY3uCSp%2BHRDOCycjHFOZiT83GEQtEjhCzPkLBiSLm6WkIS%2FrCWm5inHRB2LGkyLW3DG9rk4%2BrJHlUqGnL%2FlbRPR0uBrqWpk8eMLj%2ByL8GOqUBuYrH0nL4b%2FxbLDP1lqe6Y1eNuhEj7DiXeXaHgUBoLRjL1D9an8KPBMotqkGaLw7Z427Ti8dVZ9Sfj7xcdECGatxTHRw5aq3Flk2PG6EX2Kk8yMO5GjUsroHut1BOl6neq0sfCW1gLmAB1ZXs6ag7kHcfVCC9Wq1gHokALbHJC2iktNeITY8XWl%2FW18DacXNrmpfBOvyn7gcUr2yTYusXdGKFWk8G&X-Amz-Signature=cbda98d4025fb5ca930de08f3f3cfd2d60c193b64d55a666fcb62fbc62d6a2f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
