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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG3XP6RK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCJN2lXW8%2Bkh%2FrNxQnmcBNh8qaBoUZG6UG%2FBSw3l4YvOAIhAOPhdS%2FZJRB%2Fr%2F275tlsDz8owG7tKPgOu7L0D%2FJb88l0KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3tMk5mSopKzmab9kq3APXm%2Bbv5O%2Fj6H2C3OpaadfO7CWOreVqMqj4Q83V0BrNQE%2BVCWr%2Bhg%2BEK1XbTjG4ksPGBF4hSEYoT78AObBPzctVFdXwbaWU66ohMvADzKlUUfIIMy8GftQzdOYzmvNHL3noZ%2BrsqcjNuK%2FEQ89jZzl0eqGTrPO3fPWvqz%2Bpsf4Mzq1LkgWYl2GjrcvP07PwFoSZycRLRZbcI9KtZE1v8DoP%2BV6vFtD3fwyhG0ntoTaVlQo5A6uTPaGf9Q5jI0ZFFrsSeGnmVsFk2PNdJ0pSSef34JK8pd2LOHnd1m1X0H%2B5y%2BJkPVzxJZfG8FTHK0nSLBjWO%2BsolH2Q%2BSY6tYCMJ5Ty0JPC90xJs4xKQRLfqVA24GTjLF%2FCElHAbUmooOsMEOG92FxG%2BysA%2FeWZoi65uE7oKAdxE8plfHLE0bR9d5BqmOq5Mk05%2BXZFSsosikASTjRgoilIpIobRvuByBANqSKYb%2Bdr7J0YaHAiJYB1J55xw219mUkrlKEBd%2BwC%2FnKytlXGY3f0FlWME7bMWCkNfzYoi7%2FwO3HIdGasPcoHAxqw%2Be7dRzy3hFvGNbwg4Z7qOrKkBBk5Zhkto%2Fij5x8uUdhYcNRVAPGc6%2FcYadl4uPRM6caqbOHHi4mPhzjTljCqvOa8BjqkAY6x1yHKCGLoe7PFJPTRcbo8ZhNY3VcMd92S91RVIwaRFN4O0Z%2FxQqnzQH133WQcHlxStYBGTjrk42InTbjpJTHCyjLZJrBlvmIJ8AU6B9WduJqWzJBgfJX%2Bp%2FX4Xgh6J%2BJsU%2BrKndBeMW8XUYDL8JVveX1GmAOtyaVePbiOhny8Tw6nlGtCJmORREFzbNGiBJbGRBLD1qtR5HpMXe6ZGarqVHCC&X-Amz-Signature=8136880c3c7924c90546f1da6411c49552e2d78cd0d970879a75df1f32b47cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG3XP6RK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCJN2lXW8%2Bkh%2FrNxQnmcBNh8qaBoUZG6UG%2FBSw3l4YvOAIhAOPhdS%2FZJRB%2Fr%2F275tlsDz8owG7tKPgOu7L0D%2FJb88l0KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3tMk5mSopKzmab9kq3APXm%2Bbv5O%2Fj6H2C3OpaadfO7CWOreVqMqj4Q83V0BrNQE%2BVCWr%2Bhg%2BEK1XbTjG4ksPGBF4hSEYoT78AObBPzctVFdXwbaWU66ohMvADzKlUUfIIMy8GftQzdOYzmvNHL3noZ%2BrsqcjNuK%2FEQ89jZzl0eqGTrPO3fPWvqz%2Bpsf4Mzq1LkgWYl2GjrcvP07PwFoSZycRLRZbcI9KtZE1v8DoP%2BV6vFtD3fwyhG0ntoTaVlQo5A6uTPaGf9Q5jI0ZFFrsSeGnmVsFk2PNdJ0pSSef34JK8pd2LOHnd1m1X0H%2B5y%2BJkPVzxJZfG8FTHK0nSLBjWO%2BsolH2Q%2BSY6tYCMJ5Ty0JPC90xJs4xKQRLfqVA24GTjLF%2FCElHAbUmooOsMEOG92FxG%2BysA%2FeWZoi65uE7oKAdxE8plfHLE0bR9d5BqmOq5Mk05%2BXZFSsosikASTjRgoilIpIobRvuByBANqSKYb%2Bdr7J0YaHAiJYB1J55xw219mUkrlKEBd%2BwC%2FnKytlXGY3f0FlWME7bMWCkNfzYoi7%2FwO3HIdGasPcoHAxqw%2Be7dRzy3hFvGNbwg4Z7qOrKkBBk5Zhkto%2Fij5x8uUdhYcNRVAPGc6%2FcYadl4uPRM6caqbOHHi4mPhzjTljCqvOa8BjqkAY6x1yHKCGLoe7PFJPTRcbo8ZhNY3VcMd92S91RVIwaRFN4O0Z%2FxQqnzQH133WQcHlxStYBGTjrk42InTbjpJTHCyjLZJrBlvmIJ8AU6B9WduJqWzJBgfJX%2Bp%2FX4Xgh6J%2BJsU%2BrKndBeMW8XUYDL8JVveX1GmAOtyaVePbiOhny8Tw6nlGtCJmORREFzbNGiBJbGRBLD1qtR5HpMXe6ZGarqVHCC&X-Amz-Signature=eed2c97b13fea71b740144db975ecf83b8d5897dc433fc51742e43c5400ab49f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG3XP6RK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCJN2lXW8%2Bkh%2FrNxQnmcBNh8qaBoUZG6UG%2FBSw3l4YvOAIhAOPhdS%2FZJRB%2Fr%2F275tlsDz8owG7tKPgOu7L0D%2FJb88l0KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3tMk5mSopKzmab9kq3APXm%2Bbv5O%2Fj6H2C3OpaadfO7CWOreVqMqj4Q83V0BrNQE%2BVCWr%2Bhg%2BEK1XbTjG4ksPGBF4hSEYoT78AObBPzctVFdXwbaWU66ohMvADzKlUUfIIMy8GftQzdOYzmvNHL3noZ%2BrsqcjNuK%2FEQ89jZzl0eqGTrPO3fPWvqz%2Bpsf4Mzq1LkgWYl2GjrcvP07PwFoSZycRLRZbcI9KtZE1v8DoP%2BV6vFtD3fwyhG0ntoTaVlQo5A6uTPaGf9Q5jI0ZFFrsSeGnmVsFk2PNdJ0pSSef34JK8pd2LOHnd1m1X0H%2B5y%2BJkPVzxJZfG8FTHK0nSLBjWO%2BsolH2Q%2BSY6tYCMJ5Ty0JPC90xJs4xKQRLfqVA24GTjLF%2FCElHAbUmooOsMEOG92FxG%2BysA%2FeWZoi65uE7oKAdxE8plfHLE0bR9d5BqmOq5Mk05%2BXZFSsosikASTjRgoilIpIobRvuByBANqSKYb%2Bdr7J0YaHAiJYB1J55xw219mUkrlKEBd%2BwC%2FnKytlXGY3f0FlWME7bMWCkNfzYoi7%2FwO3HIdGasPcoHAxqw%2Be7dRzy3hFvGNbwg4Z7qOrKkBBk5Zhkto%2Fij5x8uUdhYcNRVAPGc6%2FcYadl4uPRM6caqbOHHi4mPhzjTljCqvOa8BjqkAY6x1yHKCGLoe7PFJPTRcbo8ZhNY3VcMd92S91RVIwaRFN4O0Z%2FxQqnzQH133WQcHlxStYBGTjrk42InTbjpJTHCyjLZJrBlvmIJ8AU6B9WduJqWzJBgfJX%2Bp%2FX4Xgh6J%2BJsU%2BrKndBeMW8XUYDL8JVveX1GmAOtyaVePbiOhny8Tw6nlGtCJmORREFzbNGiBJbGRBLD1qtR5HpMXe6ZGarqVHCC&X-Amz-Signature=2f3588b46a79cd1c80e2796b34c7df689834475b40054eeca9f35ddb870a9d21&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG3XP6RK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCJN2lXW8%2Bkh%2FrNxQnmcBNh8qaBoUZG6UG%2FBSw3l4YvOAIhAOPhdS%2FZJRB%2Fr%2F275tlsDz8owG7tKPgOu7L0D%2FJb88l0KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3tMk5mSopKzmab9kq3APXm%2Bbv5O%2Fj6H2C3OpaadfO7CWOreVqMqj4Q83V0BrNQE%2BVCWr%2Bhg%2BEK1XbTjG4ksPGBF4hSEYoT78AObBPzctVFdXwbaWU66ohMvADzKlUUfIIMy8GftQzdOYzmvNHL3noZ%2BrsqcjNuK%2FEQ89jZzl0eqGTrPO3fPWvqz%2Bpsf4Mzq1LkgWYl2GjrcvP07PwFoSZycRLRZbcI9KtZE1v8DoP%2BV6vFtD3fwyhG0ntoTaVlQo5A6uTPaGf9Q5jI0ZFFrsSeGnmVsFk2PNdJ0pSSef34JK8pd2LOHnd1m1X0H%2B5y%2BJkPVzxJZfG8FTHK0nSLBjWO%2BsolH2Q%2BSY6tYCMJ5Ty0JPC90xJs4xKQRLfqVA24GTjLF%2FCElHAbUmooOsMEOG92FxG%2BysA%2FeWZoi65uE7oKAdxE8plfHLE0bR9d5BqmOq5Mk05%2BXZFSsosikASTjRgoilIpIobRvuByBANqSKYb%2Bdr7J0YaHAiJYB1J55xw219mUkrlKEBd%2BwC%2FnKytlXGY3f0FlWME7bMWCkNfzYoi7%2FwO3HIdGasPcoHAxqw%2Be7dRzy3hFvGNbwg4Z7qOrKkBBk5Zhkto%2Fij5x8uUdhYcNRVAPGc6%2FcYadl4uPRM6caqbOHHi4mPhzjTljCqvOa8BjqkAY6x1yHKCGLoe7PFJPTRcbo8ZhNY3VcMd92S91RVIwaRFN4O0Z%2FxQqnzQH133WQcHlxStYBGTjrk42InTbjpJTHCyjLZJrBlvmIJ8AU6B9WduJqWzJBgfJX%2Bp%2FX4Xgh6J%2BJsU%2BrKndBeMW8XUYDL8JVveX1GmAOtyaVePbiOhny8Tw6nlGtCJmORREFzbNGiBJbGRBLD1qtR5HpMXe6ZGarqVHCC&X-Amz-Signature=ce7810a8ba4e867bbcf97514d5c90555c02ee689c0d2d4a98bcd85a886f49208&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG3XP6RK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCJN2lXW8%2Bkh%2FrNxQnmcBNh8qaBoUZG6UG%2FBSw3l4YvOAIhAOPhdS%2FZJRB%2Fr%2F275tlsDz8owG7tKPgOu7L0D%2FJb88l0KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3tMk5mSopKzmab9kq3APXm%2Bbv5O%2Fj6H2C3OpaadfO7CWOreVqMqj4Q83V0BrNQE%2BVCWr%2Bhg%2BEK1XbTjG4ksPGBF4hSEYoT78AObBPzctVFdXwbaWU66ohMvADzKlUUfIIMy8GftQzdOYzmvNHL3noZ%2BrsqcjNuK%2FEQ89jZzl0eqGTrPO3fPWvqz%2Bpsf4Mzq1LkgWYl2GjrcvP07PwFoSZycRLRZbcI9KtZE1v8DoP%2BV6vFtD3fwyhG0ntoTaVlQo5A6uTPaGf9Q5jI0ZFFrsSeGnmVsFk2PNdJ0pSSef34JK8pd2LOHnd1m1X0H%2B5y%2BJkPVzxJZfG8FTHK0nSLBjWO%2BsolH2Q%2BSY6tYCMJ5Ty0JPC90xJs4xKQRLfqVA24GTjLF%2FCElHAbUmooOsMEOG92FxG%2BysA%2FeWZoi65uE7oKAdxE8plfHLE0bR9d5BqmOq5Mk05%2BXZFSsosikASTjRgoilIpIobRvuByBANqSKYb%2Bdr7J0YaHAiJYB1J55xw219mUkrlKEBd%2BwC%2FnKytlXGY3f0FlWME7bMWCkNfzYoi7%2FwO3HIdGasPcoHAxqw%2Be7dRzy3hFvGNbwg4Z7qOrKkBBk5Zhkto%2Fij5x8uUdhYcNRVAPGc6%2FcYadl4uPRM6caqbOHHi4mPhzjTljCqvOa8BjqkAY6x1yHKCGLoe7PFJPTRcbo8ZhNY3VcMd92S91RVIwaRFN4O0Z%2FxQqnzQH133WQcHlxStYBGTjrk42InTbjpJTHCyjLZJrBlvmIJ8AU6B9WduJqWzJBgfJX%2Bp%2FX4Xgh6J%2BJsU%2BrKndBeMW8XUYDL8JVveX1GmAOtyaVePbiOhny8Tw6nlGtCJmORREFzbNGiBJbGRBLD1qtR5HpMXe6ZGarqVHCC&X-Amz-Signature=5f93504c5834f9c85d059a8d1d5df74fb8a83703b3b78bb813549a0d53ca6ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG3XP6RK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCJN2lXW8%2Bkh%2FrNxQnmcBNh8qaBoUZG6UG%2FBSw3l4YvOAIhAOPhdS%2FZJRB%2Fr%2F275tlsDz8owG7tKPgOu7L0D%2FJb88l0KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3tMk5mSopKzmab9kq3APXm%2Bbv5O%2Fj6H2C3OpaadfO7CWOreVqMqj4Q83V0BrNQE%2BVCWr%2Bhg%2BEK1XbTjG4ksPGBF4hSEYoT78AObBPzctVFdXwbaWU66ohMvADzKlUUfIIMy8GftQzdOYzmvNHL3noZ%2BrsqcjNuK%2FEQ89jZzl0eqGTrPO3fPWvqz%2Bpsf4Mzq1LkgWYl2GjrcvP07PwFoSZycRLRZbcI9KtZE1v8DoP%2BV6vFtD3fwyhG0ntoTaVlQo5A6uTPaGf9Q5jI0ZFFrsSeGnmVsFk2PNdJ0pSSef34JK8pd2LOHnd1m1X0H%2B5y%2BJkPVzxJZfG8FTHK0nSLBjWO%2BsolH2Q%2BSY6tYCMJ5Ty0JPC90xJs4xKQRLfqVA24GTjLF%2FCElHAbUmooOsMEOG92FxG%2BysA%2FeWZoi65uE7oKAdxE8plfHLE0bR9d5BqmOq5Mk05%2BXZFSsosikASTjRgoilIpIobRvuByBANqSKYb%2Bdr7J0YaHAiJYB1J55xw219mUkrlKEBd%2BwC%2FnKytlXGY3f0FlWME7bMWCkNfzYoi7%2FwO3HIdGasPcoHAxqw%2Be7dRzy3hFvGNbwg4Z7qOrKkBBk5Zhkto%2Fij5x8uUdhYcNRVAPGc6%2FcYadl4uPRM6caqbOHHi4mPhzjTljCqvOa8BjqkAY6x1yHKCGLoe7PFJPTRcbo8ZhNY3VcMd92S91RVIwaRFN4O0Z%2FxQqnzQH133WQcHlxStYBGTjrk42InTbjpJTHCyjLZJrBlvmIJ8AU6B9WduJqWzJBgfJX%2Bp%2FX4Xgh6J%2BJsU%2BrKndBeMW8XUYDL8JVveX1GmAOtyaVePbiOhny8Tw6nlGtCJmORREFzbNGiBJbGRBLD1qtR5HpMXe6ZGarqVHCC&X-Amz-Signature=3bebae4b89bd7d9959febcd190b8aafb9f99246c8f40a815bd19102cfe28da36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG3XP6RK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCJN2lXW8%2Bkh%2FrNxQnmcBNh8qaBoUZG6UG%2FBSw3l4YvOAIhAOPhdS%2FZJRB%2Fr%2F275tlsDz8owG7tKPgOu7L0D%2FJb88l0KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3tMk5mSopKzmab9kq3APXm%2Bbv5O%2Fj6H2C3OpaadfO7CWOreVqMqj4Q83V0BrNQE%2BVCWr%2Bhg%2BEK1XbTjG4ksPGBF4hSEYoT78AObBPzctVFdXwbaWU66ohMvADzKlUUfIIMy8GftQzdOYzmvNHL3noZ%2BrsqcjNuK%2FEQ89jZzl0eqGTrPO3fPWvqz%2Bpsf4Mzq1LkgWYl2GjrcvP07PwFoSZycRLRZbcI9KtZE1v8DoP%2BV6vFtD3fwyhG0ntoTaVlQo5A6uTPaGf9Q5jI0ZFFrsSeGnmVsFk2PNdJ0pSSef34JK8pd2LOHnd1m1X0H%2B5y%2BJkPVzxJZfG8FTHK0nSLBjWO%2BsolH2Q%2BSY6tYCMJ5Ty0JPC90xJs4xKQRLfqVA24GTjLF%2FCElHAbUmooOsMEOG92FxG%2BysA%2FeWZoi65uE7oKAdxE8plfHLE0bR9d5BqmOq5Mk05%2BXZFSsosikASTjRgoilIpIobRvuByBANqSKYb%2Bdr7J0YaHAiJYB1J55xw219mUkrlKEBd%2BwC%2FnKytlXGY3f0FlWME7bMWCkNfzYoi7%2FwO3HIdGasPcoHAxqw%2Be7dRzy3hFvGNbwg4Z7qOrKkBBk5Zhkto%2Fij5x8uUdhYcNRVAPGc6%2FcYadl4uPRM6caqbOHHi4mPhzjTljCqvOa8BjqkAY6x1yHKCGLoe7PFJPTRcbo8ZhNY3VcMd92S91RVIwaRFN4O0Z%2FxQqnzQH133WQcHlxStYBGTjrk42InTbjpJTHCyjLZJrBlvmIJ8AU6B9WduJqWzJBgfJX%2Bp%2FX4Xgh6J%2BJsU%2BrKndBeMW8XUYDL8JVveX1GmAOtyaVePbiOhny8Tw6nlGtCJmORREFzbNGiBJbGRBLD1qtR5HpMXe6ZGarqVHCC&X-Amz-Signature=1e4801026d99ee45bd95161e8e3244503f91ef60ba164c751084eb83741d3808&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG3XP6RK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCJN2lXW8%2Bkh%2FrNxQnmcBNh8qaBoUZG6UG%2FBSw3l4YvOAIhAOPhdS%2FZJRB%2Fr%2F275tlsDz8owG7tKPgOu7L0D%2FJb88l0KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3tMk5mSopKzmab9kq3APXm%2Bbv5O%2Fj6H2C3OpaadfO7CWOreVqMqj4Q83V0BrNQE%2BVCWr%2Bhg%2BEK1XbTjG4ksPGBF4hSEYoT78AObBPzctVFdXwbaWU66ohMvADzKlUUfIIMy8GftQzdOYzmvNHL3noZ%2BrsqcjNuK%2FEQ89jZzl0eqGTrPO3fPWvqz%2Bpsf4Mzq1LkgWYl2GjrcvP07PwFoSZycRLRZbcI9KtZE1v8DoP%2BV6vFtD3fwyhG0ntoTaVlQo5A6uTPaGf9Q5jI0ZFFrsSeGnmVsFk2PNdJ0pSSef34JK8pd2LOHnd1m1X0H%2B5y%2BJkPVzxJZfG8FTHK0nSLBjWO%2BsolH2Q%2BSY6tYCMJ5Ty0JPC90xJs4xKQRLfqVA24GTjLF%2FCElHAbUmooOsMEOG92FxG%2BysA%2FeWZoi65uE7oKAdxE8plfHLE0bR9d5BqmOq5Mk05%2BXZFSsosikASTjRgoilIpIobRvuByBANqSKYb%2Bdr7J0YaHAiJYB1J55xw219mUkrlKEBd%2BwC%2FnKytlXGY3f0FlWME7bMWCkNfzYoi7%2FwO3HIdGasPcoHAxqw%2Be7dRzy3hFvGNbwg4Z7qOrKkBBk5Zhkto%2Fij5x8uUdhYcNRVAPGc6%2FcYadl4uPRM6caqbOHHi4mPhzjTljCqvOa8BjqkAY6x1yHKCGLoe7PFJPTRcbo8ZhNY3VcMd92S91RVIwaRFN4O0Z%2FxQqnzQH133WQcHlxStYBGTjrk42InTbjpJTHCyjLZJrBlvmIJ8AU6B9WduJqWzJBgfJX%2Bp%2FX4Xgh6J%2BJsU%2BrKndBeMW8XUYDL8JVveX1GmAOtyaVePbiOhny8Tw6nlGtCJmORREFzbNGiBJbGRBLD1qtR5HpMXe6ZGarqVHCC&X-Amz-Signature=9ae10588091f75c0aa14101e340eec55ae47707d6cba0521c4bf1b444c7615b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
