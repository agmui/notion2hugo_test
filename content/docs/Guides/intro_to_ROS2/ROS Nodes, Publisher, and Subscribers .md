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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMEQBYR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBEdaFSMR3afsqkvFYs5mLKEBB3ehIbg6w2YK2ckvf5cAiBLtZSRNOiTZpNycL2s%2FQmt0cmb%2BSMBCph9pkrqmPRY9Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMkUSnTlSpe9hBSfc8KtwDYEB%2BmNiWK5JKH8KODXGEFFqg5nvMsJS5p38anVHntONg9y2cg7W2cdkLTp0yLypZLnKB1mWtSN9iiS1Aoh56MhpIw0J%2BUg7QzfzIjwE7cQWL94Odac4pxVdjVwxXmwXBKm0Qc6TkqLJi%2Bs3igxB96E76ShMJlU42qvlOy077x70dIpfBd6LGeqp1swz8JusaHFhCzMA50DINZueWDDz4U52i03wUGWM9KNfBJOZIuWuKbLAQ%2BRUdie2qfz4iVGo3q133Hw0p%2FZc1HpWyRGAQIA106uf6fpMlBp9wjlUhrXeySsrYl8KvQhjeZhxYEhair9PMsEA3lQmGKvzHk3KSQUkXQ6Evo8RUOsCj0QlIaQcMXzBZxgs6LXoqgGG8NIaIyc8KopCji3hsAwDJ4A8YhYNcS%2BMURaV4ekuZYZjkflepo4cqCClRCzT27JupEdvIvlgn5k5xs%2BgN8Xzx%2FJsZkFDaFnrrvAfrW%2BrJaoCts4TGT2EiyTGI8rowYKFMOmohakgOSsLNMDaNB95RvxHBMV8VqrYxOJST6aGhywSKvjlZNI4nREo%2FvcLnNcJ%2F4rUNnAqZDGIoV03AQmRwIpDy4RzSlHnTgo9eaim7ulPHapzYk%2FT7HhSOehFMO2Uw%2FOSEwgY6pgHEz5wY53xQzxBNa7L2ZF3njKYHMK694rIseF0zwwbwJxCPc69J6PzfdPe9SyH67SGyr63twvFAHDN92XXcanWPh8ftcnUCYn5CShs8G2qufoa0gSLvDkYy5w%2BSbreYfqyITAju95LRB53fyDhheLc4q6dsqguv8mbcY3ufPsC38QoGE%2Fva4r1BJ7GIYepWCQVIQwBAD5UO8GFUk9DrGthyHi036U6L&X-Amz-Signature=d372b1920b15c0f6734fc9d617eb810bae6087f255adf93742a99a56cd1fb5b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMEQBYR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBEdaFSMR3afsqkvFYs5mLKEBB3ehIbg6w2YK2ckvf5cAiBLtZSRNOiTZpNycL2s%2FQmt0cmb%2BSMBCph9pkrqmPRY9Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMkUSnTlSpe9hBSfc8KtwDYEB%2BmNiWK5JKH8KODXGEFFqg5nvMsJS5p38anVHntONg9y2cg7W2cdkLTp0yLypZLnKB1mWtSN9iiS1Aoh56MhpIw0J%2BUg7QzfzIjwE7cQWL94Odac4pxVdjVwxXmwXBKm0Qc6TkqLJi%2Bs3igxB96E76ShMJlU42qvlOy077x70dIpfBd6LGeqp1swz8JusaHFhCzMA50DINZueWDDz4U52i03wUGWM9KNfBJOZIuWuKbLAQ%2BRUdie2qfz4iVGo3q133Hw0p%2FZc1HpWyRGAQIA106uf6fpMlBp9wjlUhrXeySsrYl8KvQhjeZhxYEhair9PMsEA3lQmGKvzHk3KSQUkXQ6Evo8RUOsCj0QlIaQcMXzBZxgs6LXoqgGG8NIaIyc8KopCji3hsAwDJ4A8YhYNcS%2BMURaV4ekuZYZjkflepo4cqCClRCzT27JupEdvIvlgn5k5xs%2BgN8Xzx%2FJsZkFDaFnrrvAfrW%2BrJaoCts4TGT2EiyTGI8rowYKFMOmohakgOSsLNMDaNB95RvxHBMV8VqrYxOJST6aGhywSKvjlZNI4nREo%2FvcLnNcJ%2F4rUNnAqZDGIoV03AQmRwIpDy4RzSlHnTgo9eaim7ulPHapzYk%2FT7HhSOehFMO2Uw%2FOSEwgY6pgHEz5wY53xQzxBNa7L2ZF3njKYHMK694rIseF0zwwbwJxCPc69J6PzfdPe9SyH67SGyr63twvFAHDN92XXcanWPh8ftcnUCYn5CShs8G2qufoa0gSLvDkYy5w%2BSbreYfqyITAju95LRB53fyDhheLc4q6dsqguv8mbcY3ufPsC38QoGE%2Fva4r1BJ7GIYepWCQVIQwBAD5UO8GFUk9DrGthyHi036U6L&X-Amz-Signature=3d9b63ef4b89591788262b5da1ac66249b251adfdcf9139d220084e6c8367cc5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMEQBYR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBEdaFSMR3afsqkvFYs5mLKEBB3ehIbg6w2YK2ckvf5cAiBLtZSRNOiTZpNycL2s%2FQmt0cmb%2BSMBCph9pkrqmPRY9Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMkUSnTlSpe9hBSfc8KtwDYEB%2BmNiWK5JKH8KODXGEFFqg5nvMsJS5p38anVHntONg9y2cg7W2cdkLTp0yLypZLnKB1mWtSN9iiS1Aoh56MhpIw0J%2BUg7QzfzIjwE7cQWL94Odac4pxVdjVwxXmwXBKm0Qc6TkqLJi%2Bs3igxB96E76ShMJlU42qvlOy077x70dIpfBd6LGeqp1swz8JusaHFhCzMA50DINZueWDDz4U52i03wUGWM9KNfBJOZIuWuKbLAQ%2BRUdie2qfz4iVGo3q133Hw0p%2FZc1HpWyRGAQIA106uf6fpMlBp9wjlUhrXeySsrYl8KvQhjeZhxYEhair9PMsEA3lQmGKvzHk3KSQUkXQ6Evo8RUOsCj0QlIaQcMXzBZxgs6LXoqgGG8NIaIyc8KopCji3hsAwDJ4A8YhYNcS%2BMURaV4ekuZYZjkflepo4cqCClRCzT27JupEdvIvlgn5k5xs%2BgN8Xzx%2FJsZkFDaFnrrvAfrW%2BrJaoCts4TGT2EiyTGI8rowYKFMOmohakgOSsLNMDaNB95RvxHBMV8VqrYxOJST6aGhywSKvjlZNI4nREo%2FvcLnNcJ%2F4rUNnAqZDGIoV03AQmRwIpDy4RzSlHnTgo9eaim7ulPHapzYk%2FT7HhSOehFMO2Uw%2FOSEwgY6pgHEz5wY53xQzxBNa7L2ZF3njKYHMK694rIseF0zwwbwJxCPc69J6PzfdPe9SyH67SGyr63twvFAHDN92XXcanWPh8ftcnUCYn5CShs8G2qufoa0gSLvDkYy5w%2BSbreYfqyITAju95LRB53fyDhheLc4q6dsqguv8mbcY3ufPsC38QoGE%2Fva4r1BJ7GIYepWCQVIQwBAD5UO8GFUk9DrGthyHi036U6L&X-Amz-Signature=5f51ba38ab90d0c636805e9ed5a951b3bdc09d163f275c873003e33502f18d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMEQBYR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBEdaFSMR3afsqkvFYs5mLKEBB3ehIbg6w2YK2ckvf5cAiBLtZSRNOiTZpNycL2s%2FQmt0cmb%2BSMBCph9pkrqmPRY9Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMkUSnTlSpe9hBSfc8KtwDYEB%2BmNiWK5JKH8KODXGEFFqg5nvMsJS5p38anVHntONg9y2cg7W2cdkLTp0yLypZLnKB1mWtSN9iiS1Aoh56MhpIw0J%2BUg7QzfzIjwE7cQWL94Odac4pxVdjVwxXmwXBKm0Qc6TkqLJi%2Bs3igxB96E76ShMJlU42qvlOy077x70dIpfBd6LGeqp1swz8JusaHFhCzMA50DINZueWDDz4U52i03wUGWM9KNfBJOZIuWuKbLAQ%2BRUdie2qfz4iVGo3q133Hw0p%2FZc1HpWyRGAQIA106uf6fpMlBp9wjlUhrXeySsrYl8KvQhjeZhxYEhair9PMsEA3lQmGKvzHk3KSQUkXQ6Evo8RUOsCj0QlIaQcMXzBZxgs6LXoqgGG8NIaIyc8KopCji3hsAwDJ4A8YhYNcS%2BMURaV4ekuZYZjkflepo4cqCClRCzT27JupEdvIvlgn5k5xs%2BgN8Xzx%2FJsZkFDaFnrrvAfrW%2BrJaoCts4TGT2EiyTGI8rowYKFMOmohakgOSsLNMDaNB95RvxHBMV8VqrYxOJST6aGhywSKvjlZNI4nREo%2FvcLnNcJ%2F4rUNnAqZDGIoV03AQmRwIpDy4RzSlHnTgo9eaim7ulPHapzYk%2FT7HhSOehFMO2Uw%2FOSEwgY6pgHEz5wY53xQzxBNa7L2ZF3njKYHMK694rIseF0zwwbwJxCPc69J6PzfdPe9SyH67SGyr63twvFAHDN92XXcanWPh8ftcnUCYn5CShs8G2qufoa0gSLvDkYy5w%2BSbreYfqyITAju95LRB53fyDhheLc4q6dsqguv8mbcY3ufPsC38QoGE%2Fva4r1BJ7GIYepWCQVIQwBAD5UO8GFUk9DrGthyHi036U6L&X-Amz-Signature=132e702a46e030acf799ca8da5f04e44cd262b502be9556521f94bab0ad7587d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMEQBYR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBEdaFSMR3afsqkvFYs5mLKEBB3ehIbg6w2YK2ckvf5cAiBLtZSRNOiTZpNycL2s%2FQmt0cmb%2BSMBCph9pkrqmPRY9Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMkUSnTlSpe9hBSfc8KtwDYEB%2BmNiWK5JKH8KODXGEFFqg5nvMsJS5p38anVHntONg9y2cg7W2cdkLTp0yLypZLnKB1mWtSN9iiS1Aoh56MhpIw0J%2BUg7QzfzIjwE7cQWL94Odac4pxVdjVwxXmwXBKm0Qc6TkqLJi%2Bs3igxB96E76ShMJlU42qvlOy077x70dIpfBd6LGeqp1swz8JusaHFhCzMA50DINZueWDDz4U52i03wUGWM9KNfBJOZIuWuKbLAQ%2BRUdie2qfz4iVGo3q133Hw0p%2FZc1HpWyRGAQIA106uf6fpMlBp9wjlUhrXeySsrYl8KvQhjeZhxYEhair9PMsEA3lQmGKvzHk3KSQUkXQ6Evo8RUOsCj0QlIaQcMXzBZxgs6LXoqgGG8NIaIyc8KopCji3hsAwDJ4A8YhYNcS%2BMURaV4ekuZYZjkflepo4cqCClRCzT27JupEdvIvlgn5k5xs%2BgN8Xzx%2FJsZkFDaFnrrvAfrW%2BrJaoCts4TGT2EiyTGI8rowYKFMOmohakgOSsLNMDaNB95RvxHBMV8VqrYxOJST6aGhywSKvjlZNI4nREo%2FvcLnNcJ%2F4rUNnAqZDGIoV03AQmRwIpDy4RzSlHnTgo9eaim7ulPHapzYk%2FT7HhSOehFMO2Uw%2FOSEwgY6pgHEz5wY53xQzxBNa7L2ZF3njKYHMK694rIseF0zwwbwJxCPc69J6PzfdPe9SyH67SGyr63twvFAHDN92XXcanWPh8ftcnUCYn5CShs8G2qufoa0gSLvDkYy5w%2BSbreYfqyITAju95LRB53fyDhheLc4q6dsqguv8mbcY3ufPsC38QoGE%2Fva4r1BJ7GIYepWCQVIQwBAD5UO8GFUk9DrGthyHi036U6L&X-Amz-Signature=948df466a09ac1a7e3906a2e721dfe4237eee05931448d7c9dec68b7373d2552&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMEQBYR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBEdaFSMR3afsqkvFYs5mLKEBB3ehIbg6w2YK2ckvf5cAiBLtZSRNOiTZpNycL2s%2FQmt0cmb%2BSMBCph9pkrqmPRY9Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMkUSnTlSpe9hBSfc8KtwDYEB%2BmNiWK5JKH8KODXGEFFqg5nvMsJS5p38anVHntONg9y2cg7W2cdkLTp0yLypZLnKB1mWtSN9iiS1Aoh56MhpIw0J%2BUg7QzfzIjwE7cQWL94Odac4pxVdjVwxXmwXBKm0Qc6TkqLJi%2Bs3igxB96E76ShMJlU42qvlOy077x70dIpfBd6LGeqp1swz8JusaHFhCzMA50DINZueWDDz4U52i03wUGWM9KNfBJOZIuWuKbLAQ%2BRUdie2qfz4iVGo3q133Hw0p%2FZc1HpWyRGAQIA106uf6fpMlBp9wjlUhrXeySsrYl8KvQhjeZhxYEhair9PMsEA3lQmGKvzHk3KSQUkXQ6Evo8RUOsCj0QlIaQcMXzBZxgs6LXoqgGG8NIaIyc8KopCji3hsAwDJ4A8YhYNcS%2BMURaV4ekuZYZjkflepo4cqCClRCzT27JupEdvIvlgn5k5xs%2BgN8Xzx%2FJsZkFDaFnrrvAfrW%2BrJaoCts4TGT2EiyTGI8rowYKFMOmohakgOSsLNMDaNB95RvxHBMV8VqrYxOJST6aGhywSKvjlZNI4nREo%2FvcLnNcJ%2F4rUNnAqZDGIoV03AQmRwIpDy4RzSlHnTgo9eaim7ulPHapzYk%2FT7HhSOehFMO2Uw%2FOSEwgY6pgHEz5wY53xQzxBNa7L2ZF3njKYHMK694rIseF0zwwbwJxCPc69J6PzfdPe9SyH67SGyr63twvFAHDN92XXcanWPh8ftcnUCYn5CShs8G2qufoa0gSLvDkYy5w%2BSbreYfqyITAju95LRB53fyDhheLc4q6dsqguv8mbcY3ufPsC38QoGE%2Fva4r1BJ7GIYepWCQVIQwBAD5UO8GFUk9DrGthyHi036U6L&X-Amz-Signature=3b752a13e9db6d3c313acb40ce9319472f2dcddf0aa97cd157ea0b4e2c3105f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMEQBYR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBEdaFSMR3afsqkvFYs5mLKEBB3ehIbg6w2YK2ckvf5cAiBLtZSRNOiTZpNycL2s%2FQmt0cmb%2BSMBCph9pkrqmPRY9Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMkUSnTlSpe9hBSfc8KtwDYEB%2BmNiWK5JKH8KODXGEFFqg5nvMsJS5p38anVHntONg9y2cg7W2cdkLTp0yLypZLnKB1mWtSN9iiS1Aoh56MhpIw0J%2BUg7QzfzIjwE7cQWL94Odac4pxVdjVwxXmwXBKm0Qc6TkqLJi%2Bs3igxB96E76ShMJlU42qvlOy077x70dIpfBd6LGeqp1swz8JusaHFhCzMA50DINZueWDDz4U52i03wUGWM9KNfBJOZIuWuKbLAQ%2BRUdie2qfz4iVGo3q133Hw0p%2FZc1HpWyRGAQIA106uf6fpMlBp9wjlUhrXeySsrYl8KvQhjeZhxYEhair9PMsEA3lQmGKvzHk3KSQUkXQ6Evo8RUOsCj0QlIaQcMXzBZxgs6LXoqgGG8NIaIyc8KopCji3hsAwDJ4A8YhYNcS%2BMURaV4ekuZYZjkflepo4cqCClRCzT27JupEdvIvlgn5k5xs%2BgN8Xzx%2FJsZkFDaFnrrvAfrW%2BrJaoCts4TGT2EiyTGI8rowYKFMOmohakgOSsLNMDaNB95RvxHBMV8VqrYxOJST6aGhywSKvjlZNI4nREo%2FvcLnNcJ%2F4rUNnAqZDGIoV03AQmRwIpDy4RzSlHnTgo9eaim7ulPHapzYk%2FT7HhSOehFMO2Uw%2FOSEwgY6pgHEz5wY53xQzxBNa7L2ZF3njKYHMK694rIseF0zwwbwJxCPc69J6PzfdPe9SyH67SGyr63twvFAHDN92XXcanWPh8ftcnUCYn5CShs8G2qufoa0gSLvDkYy5w%2BSbreYfqyITAju95LRB53fyDhheLc4q6dsqguv8mbcY3ufPsC38QoGE%2Fva4r1BJ7GIYepWCQVIQwBAD5UO8GFUk9DrGthyHi036U6L&X-Amz-Signature=fd381af6d1a063ad0d9a602569077aa1a94226830a865999bc9a1f0ce3d24231&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMEQBYR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBEdaFSMR3afsqkvFYs5mLKEBB3ehIbg6w2YK2ckvf5cAiBLtZSRNOiTZpNycL2s%2FQmt0cmb%2BSMBCph9pkrqmPRY9Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMkUSnTlSpe9hBSfc8KtwDYEB%2BmNiWK5JKH8KODXGEFFqg5nvMsJS5p38anVHntONg9y2cg7W2cdkLTp0yLypZLnKB1mWtSN9iiS1Aoh56MhpIw0J%2BUg7QzfzIjwE7cQWL94Odac4pxVdjVwxXmwXBKm0Qc6TkqLJi%2Bs3igxB96E76ShMJlU42qvlOy077x70dIpfBd6LGeqp1swz8JusaHFhCzMA50DINZueWDDz4U52i03wUGWM9KNfBJOZIuWuKbLAQ%2BRUdie2qfz4iVGo3q133Hw0p%2FZc1HpWyRGAQIA106uf6fpMlBp9wjlUhrXeySsrYl8KvQhjeZhxYEhair9PMsEA3lQmGKvzHk3KSQUkXQ6Evo8RUOsCj0QlIaQcMXzBZxgs6LXoqgGG8NIaIyc8KopCji3hsAwDJ4A8YhYNcS%2BMURaV4ekuZYZjkflepo4cqCClRCzT27JupEdvIvlgn5k5xs%2BgN8Xzx%2FJsZkFDaFnrrvAfrW%2BrJaoCts4TGT2EiyTGI8rowYKFMOmohakgOSsLNMDaNB95RvxHBMV8VqrYxOJST6aGhywSKvjlZNI4nREo%2FvcLnNcJ%2F4rUNnAqZDGIoV03AQmRwIpDy4RzSlHnTgo9eaim7ulPHapzYk%2FT7HhSOehFMO2Uw%2FOSEwgY6pgHEz5wY53xQzxBNa7L2ZF3njKYHMK694rIseF0zwwbwJxCPc69J6PzfdPe9SyH67SGyr63twvFAHDN92XXcanWPh8ftcnUCYn5CShs8G2qufoa0gSLvDkYy5w%2BSbreYfqyITAju95LRB53fyDhheLc4q6dsqguv8mbcY3ufPsC38QoGE%2Fva4r1BJ7GIYepWCQVIQwBAD5UO8GFUk9DrGthyHi036U6L&X-Amz-Signature=0676e15d810687f27b1911453ba223b66bd199706017e3d4d814258b128a3a94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
