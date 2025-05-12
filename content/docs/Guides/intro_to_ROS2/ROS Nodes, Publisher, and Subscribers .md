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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WAXBW6H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBhpUoNvoAF7WCcXKD4hvNQ5AMOZU5HiZTc5DxpBvj48AiBonWVUN2eu0hhEwynx9VHDc8GJEMtlarW5XP6BPZZ2TyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOlskiMcSCNsadCGwKtwDyNa0lP2vTOSJi%2BPvFMY%2FSohQslRQ%2FrzTNkI70YqoV1IbpsRHM8yt79%2BhntJG4cf5Bf0YmRR9QBoV%2F8En8Iylc8cj9IYKSwbRsWkvzERuUU7hLjdKUKNE19KIX%2FmBG%2BSi194OjIvSoAptetQCm6dH%2BM0UBo1U82d441VWfRKDF2TsSy7RLGXdYZmqwtZ6whHc0Tox%2FPhFPv%2FlJKd%2F%2FL%2B9d0NZ%2Fsj4oqiHQ27Zid5qK%2BxFDZFYVrrfEWtU4SIUh3XfhsJm3bX%2FOiSOTe6NiB%2FNXnEWbN6YwgZQBtm%2BhTk3BFtGoaCI7UqZjQhAObtW6C7nKmED3awk0IXMMLoIPMC9XRyQcm9jluhdCOTetTLqAtHL6HKhy9193T%2Ffca896w5rTOaSBM%2FSe3I8O1BuZSL96OR1WZ6gd3H2t%2BJGBw%2B3UvhIqXOPiybNGKeUyRxEXYH1cvb8yHgjDqrTdVSHdlwiPQuwOtUyT2t%2FhXf15J3iRkmGU4o7YbnLZY8ovXXABuzSIKuCNBHf4wvjzeaECtYQVSctWZ8PSppOvuOqTReRq7Hl9sPJgP51geD4ssjBRC2b3%2Bb8tIRKpqwomCmA0OWz4i8Yy5v9wM%2Fp%2Bi0jMkSya7eD5WBxTqvxwQtAd1Aw0pyHwQY6pgGXkDgh8McgMxfXCsHWHx2GS6%2BnAqEaSKK%2FiChbakK4lv%2BuNmCyxDzkZ136jUvZs%2FdFiRIqpcxkBzipOUc2yghTXOpsnB8Puh2rmSZHE82%2BRIqt7VtTY3FYyTA2zeJhk5oRuJvkXvQ4cni%2B%2BK%2F0B53fmUPdfSoXLt%2FofCtVbbZCDtwjQ0hiu6Ki82y2X7yh7S41FV%2FPv%2B1fA0BQ%2Fz%2F0voX1VnOykt%2B%2F&X-Amz-Signature=d1ac5add1bc310f7f3bea98f29bc07d433d9d195b31a7568145e197c38ad2a23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WAXBW6H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBhpUoNvoAF7WCcXKD4hvNQ5AMOZU5HiZTc5DxpBvj48AiBonWVUN2eu0hhEwynx9VHDc8GJEMtlarW5XP6BPZZ2TyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOlskiMcSCNsadCGwKtwDyNa0lP2vTOSJi%2BPvFMY%2FSohQslRQ%2FrzTNkI70YqoV1IbpsRHM8yt79%2BhntJG4cf5Bf0YmRR9QBoV%2F8En8Iylc8cj9IYKSwbRsWkvzERuUU7hLjdKUKNE19KIX%2FmBG%2BSi194OjIvSoAptetQCm6dH%2BM0UBo1U82d441VWfRKDF2TsSy7RLGXdYZmqwtZ6whHc0Tox%2FPhFPv%2FlJKd%2F%2FL%2B9d0NZ%2Fsj4oqiHQ27Zid5qK%2BxFDZFYVrrfEWtU4SIUh3XfhsJm3bX%2FOiSOTe6NiB%2FNXnEWbN6YwgZQBtm%2BhTk3BFtGoaCI7UqZjQhAObtW6C7nKmED3awk0IXMMLoIPMC9XRyQcm9jluhdCOTetTLqAtHL6HKhy9193T%2Ffca896w5rTOaSBM%2FSe3I8O1BuZSL96OR1WZ6gd3H2t%2BJGBw%2B3UvhIqXOPiybNGKeUyRxEXYH1cvb8yHgjDqrTdVSHdlwiPQuwOtUyT2t%2FhXf15J3iRkmGU4o7YbnLZY8ovXXABuzSIKuCNBHf4wvjzeaECtYQVSctWZ8PSppOvuOqTReRq7Hl9sPJgP51geD4ssjBRC2b3%2Bb8tIRKpqwomCmA0OWz4i8Yy5v9wM%2Fp%2Bi0jMkSya7eD5WBxTqvxwQtAd1Aw0pyHwQY6pgGXkDgh8McgMxfXCsHWHx2GS6%2BnAqEaSKK%2FiChbakK4lv%2BuNmCyxDzkZ136jUvZs%2FdFiRIqpcxkBzipOUc2yghTXOpsnB8Puh2rmSZHE82%2BRIqt7VtTY3FYyTA2zeJhk5oRuJvkXvQ4cni%2B%2BK%2F0B53fmUPdfSoXLt%2FofCtVbbZCDtwjQ0hiu6Ki82y2X7yh7S41FV%2FPv%2B1fA0BQ%2Fz%2F0voX1VnOykt%2B%2F&X-Amz-Signature=bd5ad13f85b991df1951e945cebb8681353d74f2f3cd892d357331efd48afb6f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WAXBW6H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBhpUoNvoAF7WCcXKD4hvNQ5AMOZU5HiZTc5DxpBvj48AiBonWVUN2eu0hhEwynx9VHDc8GJEMtlarW5XP6BPZZ2TyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOlskiMcSCNsadCGwKtwDyNa0lP2vTOSJi%2BPvFMY%2FSohQslRQ%2FrzTNkI70YqoV1IbpsRHM8yt79%2BhntJG4cf5Bf0YmRR9QBoV%2F8En8Iylc8cj9IYKSwbRsWkvzERuUU7hLjdKUKNE19KIX%2FmBG%2BSi194OjIvSoAptetQCm6dH%2BM0UBo1U82d441VWfRKDF2TsSy7RLGXdYZmqwtZ6whHc0Tox%2FPhFPv%2FlJKd%2F%2FL%2B9d0NZ%2Fsj4oqiHQ27Zid5qK%2BxFDZFYVrrfEWtU4SIUh3XfhsJm3bX%2FOiSOTe6NiB%2FNXnEWbN6YwgZQBtm%2BhTk3BFtGoaCI7UqZjQhAObtW6C7nKmED3awk0IXMMLoIPMC9XRyQcm9jluhdCOTetTLqAtHL6HKhy9193T%2Ffca896w5rTOaSBM%2FSe3I8O1BuZSL96OR1WZ6gd3H2t%2BJGBw%2B3UvhIqXOPiybNGKeUyRxEXYH1cvb8yHgjDqrTdVSHdlwiPQuwOtUyT2t%2FhXf15J3iRkmGU4o7YbnLZY8ovXXABuzSIKuCNBHf4wvjzeaECtYQVSctWZ8PSppOvuOqTReRq7Hl9sPJgP51geD4ssjBRC2b3%2Bb8tIRKpqwomCmA0OWz4i8Yy5v9wM%2Fp%2Bi0jMkSya7eD5WBxTqvxwQtAd1Aw0pyHwQY6pgGXkDgh8McgMxfXCsHWHx2GS6%2BnAqEaSKK%2FiChbakK4lv%2BuNmCyxDzkZ136jUvZs%2FdFiRIqpcxkBzipOUc2yghTXOpsnB8Puh2rmSZHE82%2BRIqt7VtTY3FYyTA2zeJhk5oRuJvkXvQ4cni%2B%2BK%2F0B53fmUPdfSoXLt%2FofCtVbbZCDtwjQ0hiu6Ki82y2X7yh7S41FV%2FPv%2B1fA0BQ%2Fz%2F0voX1VnOykt%2B%2F&X-Amz-Signature=6466ca6620fb1827ec8b1cae323fea510779faa29e6a2ace6b38f0d3c4cb4b10&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WAXBW6H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBhpUoNvoAF7WCcXKD4hvNQ5AMOZU5HiZTc5DxpBvj48AiBonWVUN2eu0hhEwynx9VHDc8GJEMtlarW5XP6BPZZ2TyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOlskiMcSCNsadCGwKtwDyNa0lP2vTOSJi%2BPvFMY%2FSohQslRQ%2FrzTNkI70YqoV1IbpsRHM8yt79%2BhntJG4cf5Bf0YmRR9QBoV%2F8En8Iylc8cj9IYKSwbRsWkvzERuUU7hLjdKUKNE19KIX%2FmBG%2BSi194OjIvSoAptetQCm6dH%2BM0UBo1U82d441VWfRKDF2TsSy7RLGXdYZmqwtZ6whHc0Tox%2FPhFPv%2FlJKd%2F%2FL%2B9d0NZ%2Fsj4oqiHQ27Zid5qK%2BxFDZFYVrrfEWtU4SIUh3XfhsJm3bX%2FOiSOTe6NiB%2FNXnEWbN6YwgZQBtm%2BhTk3BFtGoaCI7UqZjQhAObtW6C7nKmED3awk0IXMMLoIPMC9XRyQcm9jluhdCOTetTLqAtHL6HKhy9193T%2Ffca896w5rTOaSBM%2FSe3I8O1BuZSL96OR1WZ6gd3H2t%2BJGBw%2B3UvhIqXOPiybNGKeUyRxEXYH1cvb8yHgjDqrTdVSHdlwiPQuwOtUyT2t%2FhXf15J3iRkmGU4o7YbnLZY8ovXXABuzSIKuCNBHf4wvjzeaECtYQVSctWZ8PSppOvuOqTReRq7Hl9sPJgP51geD4ssjBRC2b3%2Bb8tIRKpqwomCmA0OWz4i8Yy5v9wM%2Fp%2Bi0jMkSya7eD5WBxTqvxwQtAd1Aw0pyHwQY6pgGXkDgh8McgMxfXCsHWHx2GS6%2BnAqEaSKK%2FiChbakK4lv%2BuNmCyxDzkZ136jUvZs%2FdFiRIqpcxkBzipOUc2yghTXOpsnB8Puh2rmSZHE82%2BRIqt7VtTY3FYyTA2zeJhk5oRuJvkXvQ4cni%2B%2BK%2F0B53fmUPdfSoXLt%2FofCtVbbZCDtwjQ0hiu6Ki82y2X7yh7S41FV%2FPv%2B1fA0BQ%2Fz%2F0voX1VnOykt%2B%2F&X-Amz-Signature=5f3391c704dc610cdd35d0683ffe6c434ff9b3add86d47958ceb26bb524b1458&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WAXBW6H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBhpUoNvoAF7WCcXKD4hvNQ5AMOZU5HiZTc5DxpBvj48AiBonWVUN2eu0hhEwynx9VHDc8GJEMtlarW5XP6BPZZ2TyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOlskiMcSCNsadCGwKtwDyNa0lP2vTOSJi%2BPvFMY%2FSohQslRQ%2FrzTNkI70YqoV1IbpsRHM8yt79%2BhntJG4cf5Bf0YmRR9QBoV%2F8En8Iylc8cj9IYKSwbRsWkvzERuUU7hLjdKUKNE19KIX%2FmBG%2BSi194OjIvSoAptetQCm6dH%2BM0UBo1U82d441VWfRKDF2TsSy7RLGXdYZmqwtZ6whHc0Tox%2FPhFPv%2FlJKd%2F%2FL%2B9d0NZ%2Fsj4oqiHQ27Zid5qK%2BxFDZFYVrrfEWtU4SIUh3XfhsJm3bX%2FOiSOTe6NiB%2FNXnEWbN6YwgZQBtm%2BhTk3BFtGoaCI7UqZjQhAObtW6C7nKmED3awk0IXMMLoIPMC9XRyQcm9jluhdCOTetTLqAtHL6HKhy9193T%2Ffca896w5rTOaSBM%2FSe3I8O1BuZSL96OR1WZ6gd3H2t%2BJGBw%2B3UvhIqXOPiybNGKeUyRxEXYH1cvb8yHgjDqrTdVSHdlwiPQuwOtUyT2t%2FhXf15J3iRkmGU4o7YbnLZY8ovXXABuzSIKuCNBHf4wvjzeaECtYQVSctWZ8PSppOvuOqTReRq7Hl9sPJgP51geD4ssjBRC2b3%2Bb8tIRKpqwomCmA0OWz4i8Yy5v9wM%2Fp%2Bi0jMkSya7eD5WBxTqvxwQtAd1Aw0pyHwQY6pgGXkDgh8McgMxfXCsHWHx2GS6%2BnAqEaSKK%2FiChbakK4lv%2BuNmCyxDzkZ136jUvZs%2FdFiRIqpcxkBzipOUc2yghTXOpsnB8Puh2rmSZHE82%2BRIqt7VtTY3FYyTA2zeJhk5oRuJvkXvQ4cni%2B%2BK%2F0B53fmUPdfSoXLt%2FofCtVbbZCDtwjQ0hiu6Ki82y2X7yh7S41FV%2FPv%2B1fA0BQ%2Fz%2F0voX1VnOykt%2B%2F&X-Amz-Signature=4060d18b7390eb3f28f98d22db051eafd950f52d85892fc56e7ee50554e532ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WAXBW6H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBhpUoNvoAF7WCcXKD4hvNQ5AMOZU5HiZTc5DxpBvj48AiBonWVUN2eu0hhEwynx9VHDc8GJEMtlarW5XP6BPZZ2TyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOlskiMcSCNsadCGwKtwDyNa0lP2vTOSJi%2BPvFMY%2FSohQslRQ%2FrzTNkI70YqoV1IbpsRHM8yt79%2BhntJG4cf5Bf0YmRR9QBoV%2F8En8Iylc8cj9IYKSwbRsWkvzERuUU7hLjdKUKNE19KIX%2FmBG%2BSi194OjIvSoAptetQCm6dH%2BM0UBo1U82d441VWfRKDF2TsSy7RLGXdYZmqwtZ6whHc0Tox%2FPhFPv%2FlJKd%2F%2FL%2B9d0NZ%2Fsj4oqiHQ27Zid5qK%2BxFDZFYVrrfEWtU4SIUh3XfhsJm3bX%2FOiSOTe6NiB%2FNXnEWbN6YwgZQBtm%2BhTk3BFtGoaCI7UqZjQhAObtW6C7nKmED3awk0IXMMLoIPMC9XRyQcm9jluhdCOTetTLqAtHL6HKhy9193T%2Ffca896w5rTOaSBM%2FSe3I8O1BuZSL96OR1WZ6gd3H2t%2BJGBw%2B3UvhIqXOPiybNGKeUyRxEXYH1cvb8yHgjDqrTdVSHdlwiPQuwOtUyT2t%2FhXf15J3iRkmGU4o7YbnLZY8ovXXABuzSIKuCNBHf4wvjzeaECtYQVSctWZ8PSppOvuOqTReRq7Hl9sPJgP51geD4ssjBRC2b3%2Bb8tIRKpqwomCmA0OWz4i8Yy5v9wM%2Fp%2Bi0jMkSya7eD5WBxTqvxwQtAd1Aw0pyHwQY6pgGXkDgh8McgMxfXCsHWHx2GS6%2BnAqEaSKK%2FiChbakK4lv%2BuNmCyxDzkZ136jUvZs%2FdFiRIqpcxkBzipOUc2yghTXOpsnB8Puh2rmSZHE82%2BRIqt7VtTY3FYyTA2zeJhk5oRuJvkXvQ4cni%2B%2BK%2F0B53fmUPdfSoXLt%2FofCtVbbZCDtwjQ0hiu6Ki82y2X7yh7S41FV%2FPv%2B1fA0BQ%2Fz%2F0voX1VnOykt%2B%2F&X-Amz-Signature=93916a66dcac0be62f166be4ae7871f0d349eb50db2f67d488717c5cbfadb157&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WAXBW6H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBhpUoNvoAF7WCcXKD4hvNQ5AMOZU5HiZTc5DxpBvj48AiBonWVUN2eu0hhEwynx9VHDc8GJEMtlarW5XP6BPZZ2TyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOlskiMcSCNsadCGwKtwDyNa0lP2vTOSJi%2BPvFMY%2FSohQslRQ%2FrzTNkI70YqoV1IbpsRHM8yt79%2BhntJG4cf5Bf0YmRR9QBoV%2F8En8Iylc8cj9IYKSwbRsWkvzERuUU7hLjdKUKNE19KIX%2FmBG%2BSi194OjIvSoAptetQCm6dH%2BM0UBo1U82d441VWfRKDF2TsSy7RLGXdYZmqwtZ6whHc0Tox%2FPhFPv%2FlJKd%2F%2FL%2B9d0NZ%2Fsj4oqiHQ27Zid5qK%2BxFDZFYVrrfEWtU4SIUh3XfhsJm3bX%2FOiSOTe6NiB%2FNXnEWbN6YwgZQBtm%2BhTk3BFtGoaCI7UqZjQhAObtW6C7nKmED3awk0IXMMLoIPMC9XRyQcm9jluhdCOTetTLqAtHL6HKhy9193T%2Ffca896w5rTOaSBM%2FSe3I8O1BuZSL96OR1WZ6gd3H2t%2BJGBw%2B3UvhIqXOPiybNGKeUyRxEXYH1cvb8yHgjDqrTdVSHdlwiPQuwOtUyT2t%2FhXf15J3iRkmGU4o7YbnLZY8ovXXABuzSIKuCNBHf4wvjzeaECtYQVSctWZ8PSppOvuOqTReRq7Hl9sPJgP51geD4ssjBRC2b3%2Bb8tIRKpqwomCmA0OWz4i8Yy5v9wM%2Fp%2Bi0jMkSya7eD5WBxTqvxwQtAd1Aw0pyHwQY6pgGXkDgh8McgMxfXCsHWHx2GS6%2BnAqEaSKK%2FiChbakK4lv%2BuNmCyxDzkZ136jUvZs%2FdFiRIqpcxkBzipOUc2yghTXOpsnB8Puh2rmSZHE82%2BRIqt7VtTY3FYyTA2zeJhk5oRuJvkXvQ4cni%2B%2BK%2F0B53fmUPdfSoXLt%2FofCtVbbZCDtwjQ0hiu6Ki82y2X7yh7S41FV%2FPv%2B1fA0BQ%2Fz%2F0voX1VnOykt%2B%2F&X-Amz-Signature=05b58d101b29166bc59ec6133a5f084a5edc6efaba2b9258e553bde0fe7af2a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WAXBW6H%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBhpUoNvoAF7WCcXKD4hvNQ5AMOZU5HiZTc5DxpBvj48AiBonWVUN2eu0hhEwynx9VHDc8GJEMtlarW5XP6BPZZ2TyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOlskiMcSCNsadCGwKtwDyNa0lP2vTOSJi%2BPvFMY%2FSohQslRQ%2FrzTNkI70YqoV1IbpsRHM8yt79%2BhntJG4cf5Bf0YmRR9QBoV%2F8En8Iylc8cj9IYKSwbRsWkvzERuUU7hLjdKUKNE19KIX%2FmBG%2BSi194OjIvSoAptetQCm6dH%2BM0UBo1U82d441VWfRKDF2TsSy7RLGXdYZmqwtZ6whHc0Tox%2FPhFPv%2FlJKd%2F%2FL%2B9d0NZ%2Fsj4oqiHQ27Zid5qK%2BxFDZFYVrrfEWtU4SIUh3XfhsJm3bX%2FOiSOTe6NiB%2FNXnEWbN6YwgZQBtm%2BhTk3BFtGoaCI7UqZjQhAObtW6C7nKmED3awk0IXMMLoIPMC9XRyQcm9jluhdCOTetTLqAtHL6HKhy9193T%2Ffca896w5rTOaSBM%2FSe3I8O1BuZSL96OR1WZ6gd3H2t%2BJGBw%2B3UvhIqXOPiybNGKeUyRxEXYH1cvb8yHgjDqrTdVSHdlwiPQuwOtUyT2t%2FhXf15J3iRkmGU4o7YbnLZY8ovXXABuzSIKuCNBHf4wvjzeaECtYQVSctWZ8PSppOvuOqTReRq7Hl9sPJgP51geD4ssjBRC2b3%2Bb8tIRKpqwomCmA0OWz4i8Yy5v9wM%2Fp%2Bi0jMkSya7eD5WBxTqvxwQtAd1Aw0pyHwQY6pgGXkDgh8McgMxfXCsHWHx2GS6%2BnAqEaSKK%2FiChbakK4lv%2BuNmCyxDzkZ136jUvZs%2FdFiRIqpcxkBzipOUc2yghTXOpsnB8Puh2rmSZHE82%2BRIqt7VtTY3FYyTA2zeJhk5oRuJvkXvQ4cni%2B%2BK%2F0B53fmUPdfSoXLt%2FofCtVbbZCDtwjQ0hiu6Ki82y2X7yh7S41FV%2FPv%2B1fA0BQ%2Fz%2F0voX1VnOykt%2B%2F&X-Amz-Signature=bf8aca421448b4e0e23071fdc8c0a29c54cdda45e372d9c5c48cf270d4685e71&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
