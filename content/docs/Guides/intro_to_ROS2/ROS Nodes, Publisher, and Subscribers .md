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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V2YHQ5E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvU6Br4HOFUU%2BRGDYbqAXC3xkUDsl%2FMNFW%2BGiTwjKH%2FgIgSrYJQw5%2FsBBHWhLM6UFOP8t5nr1j9xaaom%2FCrlWdXycqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BwtEN9MPNRyftDXCrcA32XSaR7RKo0ZRdDrjlCzpmJuOiBnT1ezYQ1t4R17HN4SMMVyN2grpmnV9gasr%2FeEJXiPUL5AN%2FpoJREAxVWeherJ3f7L5GSwA1E9Pa7DbOVEgL5XK4YVKhOfcQbMT8KOPGxHHdovDSNz4LarY19KfYugOwU5fRjoNgHbGvFhWqkm25eJbJZtCKXwgb5kqbxTVHkoX9aKQM%2BrLUr5uRHU1Y%2B9OzE38Ve8jwbCl9z2SIKzcFf674INe1LJLDyV3O0dnSbKII1RNRDqiQI7qoSghlHQnUMMoQmgnGkkRRaa9QzoNtfu7F4fXcN852yVdaNlfDZpl1FSLpN5KjZskDOzsCfnjF4MOl%2BIZE6QTJueJGWg0%2FJAhhWBrCIbUbLZ0UgNhC%2FnKIv%2BO1npzzpdrfVKytSni4%2FDRVE07Ktj88uDI%2F88DPJJlwFfkActkFZJtCSSw2lLL8cf3BkN7QSj66dnwyIqU%2F8RSaZiLljNyzW2iU82ComTYM9GNoiqEzPvP5ySoNLGhSzMYhyZVxW3YVUEIHPuLjY7rcTprzSeQWwRG7cF%2FHdcH7aN6nGErgu6Plf%2FpPYI7Dq3Kn842TACJW%2F%2Bb7jtruhZZW2s4qyvyV0WzRwocgacO0ZpvnhIw%2FPMPXd%2FrwGOqUBvebtby6rli9BqHxptiTDIDsffgHgbK8VI%2Bgv6fsdY%2Bu5Ro9mRX0FG4dQUoM5QD5CiePCwRZJkxSPyFSTZQSrSudEmXxYm%2BkHFhvp4c0AZbPuUzV%2BDiujTcig3UniKXhj9u1bclneAjO1%2Bhx5NEKmTvYPquK4GhI5BzP0cuMQSCU2qF%2BHXOautNHDYsRlTfJLVCMXewk5SUtlDHAxXlZd7W0rDEWJ&X-Amz-Signature=2ff1e4ab18b6aab736449a3db13d45d93df0c38117b801e1db6887d8454206b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V2YHQ5E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvU6Br4HOFUU%2BRGDYbqAXC3xkUDsl%2FMNFW%2BGiTwjKH%2FgIgSrYJQw5%2FsBBHWhLM6UFOP8t5nr1j9xaaom%2FCrlWdXycqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BwtEN9MPNRyftDXCrcA32XSaR7RKo0ZRdDrjlCzpmJuOiBnT1ezYQ1t4R17HN4SMMVyN2grpmnV9gasr%2FeEJXiPUL5AN%2FpoJREAxVWeherJ3f7L5GSwA1E9Pa7DbOVEgL5XK4YVKhOfcQbMT8KOPGxHHdovDSNz4LarY19KfYugOwU5fRjoNgHbGvFhWqkm25eJbJZtCKXwgb5kqbxTVHkoX9aKQM%2BrLUr5uRHU1Y%2B9OzE38Ve8jwbCl9z2SIKzcFf674INe1LJLDyV3O0dnSbKII1RNRDqiQI7qoSghlHQnUMMoQmgnGkkRRaa9QzoNtfu7F4fXcN852yVdaNlfDZpl1FSLpN5KjZskDOzsCfnjF4MOl%2BIZE6QTJueJGWg0%2FJAhhWBrCIbUbLZ0UgNhC%2FnKIv%2BO1npzzpdrfVKytSni4%2FDRVE07Ktj88uDI%2F88DPJJlwFfkActkFZJtCSSw2lLL8cf3BkN7QSj66dnwyIqU%2F8RSaZiLljNyzW2iU82ComTYM9GNoiqEzPvP5ySoNLGhSzMYhyZVxW3YVUEIHPuLjY7rcTprzSeQWwRG7cF%2FHdcH7aN6nGErgu6Plf%2FpPYI7Dq3Kn842TACJW%2F%2Bb7jtruhZZW2s4qyvyV0WzRwocgacO0ZpvnhIw%2FPMPXd%2FrwGOqUBvebtby6rli9BqHxptiTDIDsffgHgbK8VI%2Bgv6fsdY%2Bu5Ro9mRX0FG4dQUoM5QD5CiePCwRZJkxSPyFSTZQSrSudEmXxYm%2BkHFhvp4c0AZbPuUzV%2BDiujTcig3UniKXhj9u1bclneAjO1%2Bhx5NEKmTvYPquK4GhI5BzP0cuMQSCU2qF%2BHXOautNHDYsRlTfJLVCMXewk5SUtlDHAxXlZd7W0rDEWJ&X-Amz-Signature=07bb224be697d4535921f4c11e6bf64aff1946bc623850ddad3e4e17baa26fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V2YHQ5E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvU6Br4HOFUU%2BRGDYbqAXC3xkUDsl%2FMNFW%2BGiTwjKH%2FgIgSrYJQw5%2FsBBHWhLM6UFOP8t5nr1j9xaaom%2FCrlWdXycqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BwtEN9MPNRyftDXCrcA32XSaR7RKo0ZRdDrjlCzpmJuOiBnT1ezYQ1t4R17HN4SMMVyN2grpmnV9gasr%2FeEJXiPUL5AN%2FpoJREAxVWeherJ3f7L5GSwA1E9Pa7DbOVEgL5XK4YVKhOfcQbMT8KOPGxHHdovDSNz4LarY19KfYugOwU5fRjoNgHbGvFhWqkm25eJbJZtCKXwgb5kqbxTVHkoX9aKQM%2BrLUr5uRHU1Y%2B9OzE38Ve8jwbCl9z2SIKzcFf674INe1LJLDyV3O0dnSbKII1RNRDqiQI7qoSghlHQnUMMoQmgnGkkRRaa9QzoNtfu7F4fXcN852yVdaNlfDZpl1FSLpN5KjZskDOzsCfnjF4MOl%2BIZE6QTJueJGWg0%2FJAhhWBrCIbUbLZ0UgNhC%2FnKIv%2BO1npzzpdrfVKytSni4%2FDRVE07Ktj88uDI%2F88DPJJlwFfkActkFZJtCSSw2lLL8cf3BkN7QSj66dnwyIqU%2F8RSaZiLljNyzW2iU82ComTYM9GNoiqEzPvP5ySoNLGhSzMYhyZVxW3YVUEIHPuLjY7rcTprzSeQWwRG7cF%2FHdcH7aN6nGErgu6Plf%2FpPYI7Dq3Kn842TACJW%2F%2Bb7jtruhZZW2s4qyvyV0WzRwocgacO0ZpvnhIw%2FPMPXd%2FrwGOqUBvebtby6rli9BqHxptiTDIDsffgHgbK8VI%2Bgv6fsdY%2Bu5Ro9mRX0FG4dQUoM5QD5CiePCwRZJkxSPyFSTZQSrSudEmXxYm%2BkHFhvp4c0AZbPuUzV%2BDiujTcig3UniKXhj9u1bclneAjO1%2Bhx5NEKmTvYPquK4GhI5BzP0cuMQSCU2qF%2BHXOautNHDYsRlTfJLVCMXewk5SUtlDHAxXlZd7W0rDEWJ&X-Amz-Signature=fd92f9e661c0815dee6f5ec63b1d6e72f913141f6d26079926fbf1e5a833c9eb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V2YHQ5E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvU6Br4HOFUU%2BRGDYbqAXC3xkUDsl%2FMNFW%2BGiTwjKH%2FgIgSrYJQw5%2FsBBHWhLM6UFOP8t5nr1j9xaaom%2FCrlWdXycqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BwtEN9MPNRyftDXCrcA32XSaR7RKo0ZRdDrjlCzpmJuOiBnT1ezYQ1t4R17HN4SMMVyN2grpmnV9gasr%2FeEJXiPUL5AN%2FpoJREAxVWeherJ3f7L5GSwA1E9Pa7DbOVEgL5XK4YVKhOfcQbMT8KOPGxHHdovDSNz4LarY19KfYugOwU5fRjoNgHbGvFhWqkm25eJbJZtCKXwgb5kqbxTVHkoX9aKQM%2BrLUr5uRHU1Y%2B9OzE38Ve8jwbCl9z2SIKzcFf674INe1LJLDyV3O0dnSbKII1RNRDqiQI7qoSghlHQnUMMoQmgnGkkRRaa9QzoNtfu7F4fXcN852yVdaNlfDZpl1FSLpN5KjZskDOzsCfnjF4MOl%2BIZE6QTJueJGWg0%2FJAhhWBrCIbUbLZ0UgNhC%2FnKIv%2BO1npzzpdrfVKytSni4%2FDRVE07Ktj88uDI%2F88DPJJlwFfkActkFZJtCSSw2lLL8cf3BkN7QSj66dnwyIqU%2F8RSaZiLljNyzW2iU82ComTYM9GNoiqEzPvP5ySoNLGhSzMYhyZVxW3YVUEIHPuLjY7rcTprzSeQWwRG7cF%2FHdcH7aN6nGErgu6Plf%2FpPYI7Dq3Kn842TACJW%2F%2Bb7jtruhZZW2s4qyvyV0WzRwocgacO0ZpvnhIw%2FPMPXd%2FrwGOqUBvebtby6rli9BqHxptiTDIDsffgHgbK8VI%2Bgv6fsdY%2Bu5Ro9mRX0FG4dQUoM5QD5CiePCwRZJkxSPyFSTZQSrSudEmXxYm%2BkHFhvp4c0AZbPuUzV%2BDiujTcig3UniKXhj9u1bclneAjO1%2Bhx5NEKmTvYPquK4GhI5BzP0cuMQSCU2qF%2BHXOautNHDYsRlTfJLVCMXewk5SUtlDHAxXlZd7W0rDEWJ&X-Amz-Signature=7c7fb68ea83399627d5a1fdd1602267b97289220280607a0f5d0238efb53ed43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V2YHQ5E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvU6Br4HOFUU%2BRGDYbqAXC3xkUDsl%2FMNFW%2BGiTwjKH%2FgIgSrYJQw5%2FsBBHWhLM6UFOP8t5nr1j9xaaom%2FCrlWdXycqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BwtEN9MPNRyftDXCrcA32XSaR7RKo0ZRdDrjlCzpmJuOiBnT1ezYQ1t4R17HN4SMMVyN2grpmnV9gasr%2FeEJXiPUL5AN%2FpoJREAxVWeherJ3f7L5GSwA1E9Pa7DbOVEgL5XK4YVKhOfcQbMT8KOPGxHHdovDSNz4LarY19KfYugOwU5fRjoNgHbGvFhWqkm25eJbJZtCKXwgb5kqbxTVHkoX9aKQM%2BrLUr5uRHU1Y%2B9OzE38Ve8jwbCl9z2SIKzcFf674INe1LJLDyV3O0dnSbKII1RNRDqiQI7qoSghlHQnUMMoQmgnGkkRRaa9QzoNtfu7F4fXcN852yVdaNlfDZpl1FSLpN5KjZskDOzsCfnjF4MOl%2BIZE6QTJueJGWg0%2FJAhhWBrCIbUbLZ0UgNhC%2FnKIv%2BO1npzzpdrfVKytSni4%2FDRVE07Ktj88uDI%2F88DPJJlwFfkActkFZJtCSSw2lLL8cf3BkN7QSj66dnwyIqU%2F8RSaZiLljNyzW2iU82ComTYM9GNoiqEzPvP5ySoNLGhSzMYhyZVxW3YVUEIHPuLjY7rcTprzSeQWwRG7cF%2FHdcH7aN6nGErgu6Plf%2FpPYI7Dq3Kn842TACJW%2F%2Bb7jtruhZZW2s4qyvyV0WzRwocgacO0ZpvnhIw%2FPMPXd%2FrwGOqUBvebtby6rli9BqHxptiTDIDsffgHgbK8VI%2Bgv6fsdY%2Bu5Ro9mRX0FG4dQUoM5QD5CiePCwRZJkxSPyFSTZQSrSudEmXxYm%2BkHFhvp4c0AZbPuUzV%2BDiujTcig3UniKXhj9u1bclneAjO1%2Bhx5NEKmTvYPquK4GhI5BzP0cuMQSCU2qF%2BHXOautNHDYsRlTfJLVCMXewk5SUtlDHAxXlZd7W0rDEWJ&X-Amz-Signature=3b28f0364bb24a8194b9d40f5e378c4236b8d44524679e6a6dc619785a2a0449&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V2YHQ5E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvU6Br4HOFUU%2BRGDYbqAXC3xkUDsl%2FMNFW%2BGiTwjKH%2FgIgSrYJQw5%2FsBBHWhLM6UFOP8t5nr1j9xaaom%2FCrlWdXycqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BwtEN9MPNRyftDXCrcA32XSaR7RKo0ZRdDrjlCzpmJuOiBnT1ezYQ1t4R17HN4SMMVyN2grpmnV9gasr%2FeEJXiPUL5AN%2FpoJREAxVWeherJ3f7L5GSwA1E9Pa7DbOVEgL5XK4YVKhOfcQbMT8KOPGxHHdovDSNz4LarY19KfYugOwU5fRjoNgHbGvFhWqkm25eJbJZtCKXwgb5kqbxTVHkoX9aKQM%2BrLUr5uRHU1Y%2B9OzE38Ve8jwbCl9z2SIKzcFf674INe1LJLDyV3O0dnSbKII1RNRDqiQI7qoSghlHQnUMMoQmgnGkkRRaa9QzoNtfu7F4fXcN852yVdaNlfDZpl1FSLpN5KjZskDOzsCfnjF4MOl%2BIZE6QTJueJGWg0%2FJAhhWBrCIbUbLZ0UgNhC%2FnKIv%2BO1npzzpdrfVKytSni4%2FDRVE07Ktj88uDI%2F88DPJJlwFfkActkFZJtCSSw2lLL8cf3BkN7QSj66dnwyIqU%2F8RSaZiLljNyzW2iU82ComTYM9GNoiqEzPvP5ySoNLGhSzMYhyZVxW3YVUEIHPuLjY7rcTprzSeQWwRG7cF%2FHdcH7aN6nGErgu6Plf%2FpPYI7Dq3Kn842TACJW%2F%2Bb7jtruhZZW2s4qyvyV0WzRwocgacO0ZpvnhIw%2FPMPXd%2FrwGOqUBvebtby6rli9BqHxptiTDIDsffgHgbK8VI%2Bgv6fsdY%2Bu5Ro9mRX0FG4dQUoM5QD5CiePCwRZJkxSPyFSTZQSrSudEmXxYm%2BkHFhvp4c0AZbPuUzV%2BDiujTcig3UniKXhj9u1bclneAjO1%2Bhx5NEKmTvYPquK4GhI5BzP0cuMQSCU2qF%2BHXOautNHDYsRlTfJLVCMXewk5SUtlDHAxXlZd7W0rDEWJ&X-Amz-Signature=6b5ba70513041406fa16c6509aebfdc287c540ddf72b152ff77e1d3115c48e20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V2YHQ5E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvU6Br4HOFUU%2BRGDYbqAXC3xkUDsl%2FMNFW%2BGiTwjKH%2FgIgSrYJQw5%2FsBBHWhLM6UFOP8t5nr1j9xaaom%2FCrlWdXycqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BwtEN9MPNRyftDXCrcA32XSaR7RKo0ZRdDrjlCzpmJuOiBnT1ezYQ1t4R17HN4SMMVyN2grpmnV9gasr%2FeEJXiPUL5AN%2FpoJREAxVWeherJ3f7L5GSwA1E9Pa7DbOVEgL5XK4YVKhOfcQbMT8KOPGxHHdovDSNz4LarY19KfYugOwU5fRjoNgHbGvFhWqkm25eJbJZtCKXwgb5kqbxTVHkoX9aKQM%2BrLUr5uRHU1Y%2B9OzE38Ve8jwbCl9z2SIKzcFf674INe1LJLDyV3O0dnSbKII1RNRDqiQI7qoSghlHQnUMMoQmgnGkkRRaa9QzoNtfu7F4fXcN852yVdaNlfDZpl1FSLpN5KjZskDOzsCfnjF4MOl%2BIZE6QTJueJGWg0%2FJAhhWBrCIbUbLZ0UgNhC%2FnKIv%2BO1npzzpdrfVKytSni4%2FDRVE07Ktj88uDI%2F88DPJJlwFfkActkFZJtCSSw2lLL8cf3BkN7QSj66dnwyIqU%2F8RSaZiLljNyzW2iU82ComTYM9GNoiqEzPvP5ySoNLGhSzMYhyZVxW3YVUEIHPuLjY7rcTprzSeQWwRG7cF%2FHdcH7aN6nGErgu6Plf%2FpPYI7Dq3Kn842TACJW%2F%2Bb7jtruhZZW2s4qyvyV0WzRwocgacO0ZpvnhIw%2FPMPXd%2FrwGOqUBvebtby6rli9BqHxptiTDIDsffgHgbK8VI%2Bgv6fsdY%2Bu5Ro9mRX0FG4dQUoM5QD5CiePCwRZJkxSPyFSTZQSrSudEmXxYm%2BkHFhvp4c0AZbPuUzV%2BDiujTcig3UniKXhj9u1bclneAjO1%2Bhx5NEKmTvYPquK4GhI5BzP0cuMQSCU2qF%2BHXOautNHDYsRlTfJLVCMXewk5SUtlDHAxXlZd7W0rDEWJ&X-Amz-Signature=8c475882459b7c79ad2d793ef11c6d1c4035bac61070ba0b190e63d2795dbeb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V2YHQ5E%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvU6Br4HOFUU%2BRGDYbqAXC3xkUDsl%2FMNFW%2BGiTwjKH%2FgIgSrYJQw5%2FsBBHWhLM6UFOP8t5nr1j9xaaom%2FCrlWdXycqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BwtEN9MPNRyftDXCrcA32XSaR7RKo0ZRdDrjlCzpmJuOiBnT1ezYQ1t4R17HN4SMMVyN2grpmnV9gasr%2FeEJXiPUL5AN%2FpoJREAxVWeherJ3f7L5GSwA1E9Pa7DbOVEgL5XK4YVKhOfcQbMT8KOPGxHHdovDSNz4LarY19KfYugOwU5fRjoNgHbGvFhWqkm25eJbJZtCKXwgb5kqbxTVHkoX9aKQM%2BrLUr5uRHU1Y%2B9OzE38Ve8jwbCl9z2SIKzcFf674INe1LJLDyV3O0dnSbKII1RNRDqiQI7qoSghlHQnUMMoQmgnGkkRRaa9QzoNtfu7F4fXcN852yVdaNlfDZpl1FSLpN5KjZskDOzsCfnjF4MOl%2BIZE6QTJueJGWg0%2FJAhhWBrCIbUbLZ0UgNhC%2FnKIv%2BO1npzzpdrfVKytSni4%2FDRVE07Ktj88uDI%2F88DPJJlwFfkActkFZJtCSSw2lLL8cf3BkN7QSj66dnwyIqU%2F8RSaZiLljNyzW2iU82ComTYM9GNoiqEzPvP5ySoNLGhSzMYhyZVxW3YVUEIHPuLjY7rcTprzSeQWwRG7cF%2FHdcH7aN6nGErgu6Plf%2FpPYI7Dq3Kn842TACJW%2F%2Bb7jtruhZZW2s4qyvyV0WzRwocgacO0ZpvnhIw%2FPMPXd%2FrwGOqUBvebtby6rli9BqHxptiTDIDsffgHgbK8VI%2Bgv6fsdY%2Bu5Ro9mRX0FG4dQUoM5QD5CiePCwRZJkxSPyFSTZQSrSudEmXxYm%2BkHFhvp4c0AZbPuUzV%2BDiujTcig3UniKXhj9u1bclneAjO1%2Bhx5NEKmTvYPquK4GhI5BzP0cuMQSCU2qF%2BHXOautNHDYsRlTfJLVCMXewk5SUtlDHAxXlZd7W0rDEWJ&X-Amz-Signature=80b01988cef53462107f53e8bc2a8b070cb0837983726999027b882c78242fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
