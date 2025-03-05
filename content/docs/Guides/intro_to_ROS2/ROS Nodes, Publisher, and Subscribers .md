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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLYE57P%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw7svvjBn1UcGE1iXtPJepgI%2FJnJnKcYBvVfiUrR0K8gIhAJZKlhtZFVAKAIX93W35o6BkMsdW3xl75IKHZbGr5pkpKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqP0uNCzTaGxnP0VUq3APDOoKhFxqqes1KMhb7e9J3Fm4Motl9WYHvlt3JSH8QXmrE4MZjtbu19rOXuFAUVrIz4mPhz8G2lqpFUPpovVFYIWzxjhI61gqnAjU7sR4Y0s6qwBO1t4MRElG6qzhbtFqx1ZOw7VVON5OZRzos9s7sMU87Gase0WnujXaDsgi8rxyJeUnlCm21Jv7RH1rDRlx9eM%2BttavGSOOMDkOzL3kMIzY2lB%2BV2ToOxOtWSEHp0%2Fg1ChHMRZ65IGjRBpWBzv%2F5JDQxgD50lY9rHmHo1VIdF4hG5JDL1Dt7CWXFOk4zoWkw90LZ%2BwJf7HSdliNC%2B7aa1migFSj6XZ3fhyx%2BvX4LaHus77pRC4cmCLMn4snztY9yu4mC2DGy5OiMYHxei1Kqp8H8QlnIS7rZLWDM2PblqxQaCpctqcesN6L7l7aHVCtqpsegZtSjz%2F25Ez4X1NJ5P8%2F%2Bavxrgz2VfaK0krcByNPCmR1%2FjDPQscPQeV%2B1I4R5pwZeV71pj7x19A1YLDsBkchgIezGfaVhFb4H6%2Fj2uNfdXZZNgzkJpeDXFmiWC81tieJQZinzeGHizQS1CmHeK9aW4t8fmM36j5M%2B%2BwOkb%2BPdJC%2F%2B9Z%2BuIjEs4nKyc6zT5ZV%2FoefkgG1vhTDlg6K%2BBjqkAeJiPXXq3XzbGneHgUp6HuT3X1nA2b7bYhBqigVA54A7ODdTR4%2BRWWMMMdYmEZChJHBi1RkQZOp1BjxqEj6PdBS8X%2BLCRIW5BJxjOepBdXFKlvufQBrKy3C8y%2BI6IRxPE0u9UyTowDum3QuR5ZoVspbk7juX0qYRaejz3MVg9uUHzqXkYIybZp86ztUtwZvYwVjBETTNAjY%2F4D%2FMSOiD5knrQ1sj&X-Amz-Signature=9f2c3f964f29743f4e083786054a3dc556f38fdbbdfa9210cbadfe6178873e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLYE57P%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw7svvjBn1UcGE1iXtPJepgI%2FJnJnKcYBvVfiUrR0K8gIhAJZKlhtZFVAKAIX93W35o6BkMsdW3xl75IKHZbGr5pkpKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqP0uNCzTaGxnP0VUq3APDOoKhFxqqes1KMhb7e9J3Fm4Motl9WYHvlt3JSH8QXmrE4MZjtbu19rOXuFAUVrIz4mPhz8G2lqpFUPpovVFYIWzxjhI61gqnAjU7sR4Y0s6qwBO1t4MRElG6qzhbtFqx1ZOw7VVON5OZRzos9s7sMU87Gase0WnujXaDsgi8rxyJeUnlCm21Jv7RH1rDRlx9eM%2BttavGSOOMDkOzL3kMIzY2lB%2BV2ToOxOtWSEHp0%2Fg1ChHMRZ65IGjRBpWBzv%2F5JDQxgD50lY9rHmHo1VIdF4hG5JDL1Dt7CWXFOk4zoWkw90LZ%2BwJf7HSdliNC%2B7aa1migFSj6XZ3fhyx%2BvX4LaHus77pRC4cmCLMn4snztY9yu4mC2DGy5OiMYHxei1Kqp8H8QlnIS7rZLWDM2PblqxQaCpctqcesN6L7l7aHVCtqpsegZtSjz%2F25Ez4X1NJ5P8%2F%2Bavxrgz2VfaK0krcByNPCmR1%2FjDPQscPQeV%2B1I4R5pwZeV71pj7x19A1YLDsBkchgIezGfaVhFb4H6%2Fj2uNfdXZZNgzkJpeDXFmiWC81tieJQZinzeGHizQS1CmHeK9aW4t8fmM36j5M%2B%2BwOkb%2BPdJC%2F%2B9Z%2BuIjEs4nKyc6zT5ZV%2FoefkgG1vhTDlg6K%2BBjqkAeJiPXXq3XzbGneHgUp6HuT3X1nA2b7bYhBqigVA54A7ODdTR4%2BRWWMMMdYmEZChJHBi1RkQZOp1BjxqEj6PdBS8X%2BLCRIW5BJxjOepBdXFKlvufQBrKy3C8y%2BI6IRxPE0u9UyTowDum3QuR5ZoVspbk7juX0qYRaejz3MVg9uUHzqXkYIybZp86ztUtwZvYwVjBETTNAjY%2F4D%2FMSOiD5knrQ1sj&X-Amz-Signature=a81897ab1139f1ad4eed0fee5464f48b90d5e8cfffba96651710d54d780db15c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLYE57P%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw7svvjBn1UcGE1iXtPJepgI%2FJnJnKcYBvVfiUrR0K8gIhAJZKlhtZFVAKAIX93W35o6BkMsdW3xl75IKHZbGr5pkpKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqP0uNCzTaGxnP0VUq3APDOoKhFxqqes1KMhb7e9J3Fm4Motl9WYHvlt3JSH8QXmrE4MZjtbu19rOXuFAUVrIz4mPhz8G2lqpFUPpovVFYIWzxjhI61gqnAjU7sR4Y0s6qwBO1t4MRElG6qzhbtFqx1ZOw7VVON5OZRzos9s7sMU87Gase0WnujXaDsgi8rxyJeUnlCm21Jv7RH1rDRlx9eM%2BttavGSOOMDkOzL3kMIzY2lB%2BV2ToOxOtWSEHp0%2Fg1ChHMRZ65IGjRBpWBzv%2F5JDQxgD50lY9rHmHo1VIdF4hG5JDL1Dt7CWXFOk4zoWkw90LZ%2BwJf7HSdliNC%2B7aa1migFSj6XZ3fhyx%2BvX4LaHus77pRC4cmCLMn4snztY9yu4mC2DGy5OiMYHxei1Kqp8H8QlnIS7rZLWDM2PblqxQaCpctqcesN6L7l7aHVCtqpsegZtSjz%2F25Ez4X1NJ5P8%2F%2Bavxrgz2VfaK0krcByNPCmR1%2FjDPQscPQeV%2B1I4R5pwZeV71pj7x19A1YLDsBkchgIezGfaVhFb4H6%2Fj2uNfdXZZNgzkJpeDXFmiWC81tieJQZinzeGHizQS1CmHeK9aW4t8fmM36j5M%2B%2BwOkb%2BPdJC%2F%2B9Z%2BuIjEs4nKyc6zT5ZV%2FoefkgG1vhTDlg6K%2BBjqkAeJiPXXq3XzbGneHgUp6HuT3X1nA2b7bYhBqigVA54A7ODdTR4%2BRWWMMMdYmEZChJHBi1RkQZOp1BjxqEj6PdBS8X%2BLCRIW5BJxjOepBdXFKlvufQBrKy3C8y%2BI6IRxPE0u9UyTowDum3QuR5ZoVspbk7juX0qYRaejz3MVg9uUHzqXkYIybZp86ztUtwZvYwVjBETTNAjY%2F4D%2FMSOiD5knrQ1sj&X-Amz-Signature=99e95eb0dc648b9a4ae1d2153ce12dc6eab3a1966ad6bafcd4194b5e762b63cc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLYE57P%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw7svvjBn1UcGE1iXtPJepgI%2FJnJnKcYBvVfiUrR0K8gIhAJZKlhtZFVAKAIX93W35o6BkMsdW3xl75IKHZbGr5pkpKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqP0uNCzTaGxnP0VUq3APDOoKhFxqqes1KMhb7e9J3Fm4Motl9WYHvlt3JSH8QXmrE4MZjtbu19rOXuFAUVrIz4mPhz8G2lqpFUPpovVFYIWzxjhI61gqnAjU7sR4Y0s6qwBO1t4MRElG6qzhbtFqx1ZOw7VVON5OZRzos9s7sMU87Gase0WnujXaDsgi8rxyJeUnlCm21Jv7RH1rDRlx9eM%2BttavGSOOMDkOzL3kMIzY2lB%2BV2ToOxOtWSEHp0%2Fg1ChHMRZ65IGjRBpWBzv%2F5JDQxgD50lY9rHmHo1VIdF4hG5JDL1Dt7CWXFOk4zoWkw90LZ%2BwJf7HSdliNC%2B7aa1migFSj6XZ3fhyx%2BvX4LaHus77pRC4cmCLMn4snztY9yu4mC2DGy5OiMYHxei1Kqp8H8QlnIS7rZLWDM2PblqxQaCpctqcesN6L7l7aHVCtqpsegZtSjz%2F25Ez4X1NJ5P8%2F%2Bavxrgz2VfaK0krcByNPCmR1%2FjDPQscPQeV%2B1I4R5pwZeV71pj7x19A1YLDsBkchgIezGfaVhFb4H6%2Fj2uNfdXZZNgzkJpeDXFmiWC81tieJQZinzeGHizQS1CmHeK9aW4t8fmM36j5M%2B%2BwOkb%2BPdJC%2F%2B9Z%2BuIjEs4nKyc6zT5ZV%2FoefkgG1vhTDlg6K%2BBjqkAeJiPXXq3XzbGneHgUp6HuT3X1nA2b7bYhBqigVA54A7ODdTR4%2BRWWMMMdYmEZChJHBi1RkQZOp1BjxqEj6PdBS8X%2BLCRIW5BJxjOepBdXFKlvufQBrKy3C8y%2BI6IRxPE0u9UyTowDum3QuR5ZoVspbk7juX0qYRaejz3MVg9uUHzqXkYIybZp86ztUtwZvYwVjBETTNAjY%2F4D%2FMSOiD5knrQ1sj&X-Amz-Signature=c65c96ca9975fe580abd7438c1f1eb3f9417698082a17f5e762c42a97f166db4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLYE57P%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw7svvjBn1UcGE1iXtPJepgI%2FJnJnKcYBvVfiUrR0K8gIhAJZKlhtZFVAKAIX93W35o6BkMsdW3xl75IKHZbGr5pkpKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqP0uNCzTaGxnP0VUq3APDOoKhFxqqes1KMhb7e9J3Fm4Motl9WYHvlt3JSH8QXmrE4MZjtbu19rOXuFAUVrIz4mPhz8G2lqpFUPpovVFYIWzxjhI61gqnAjU7sR4Y0s6qwBO1t4MRElG6qzhbtFqx1ZOw7VVON5OZRzos9s7sMU87Gase0WnujXaDsgi8rxyJeUnlCm21Jv7RH1rDRlx9eM%2BttavGSOOMDkOzL3kMIzY2lB%2BV2ToOxOtWSEHp0%2Fg1ChHMRZ65IGjRBpWBzv%2F5JDQxgD50lY9rHmHo1VIdF4hG5JDL1Dt7CWXFOk4zoWkw90LZ%2BwJf7HSdliNC%2B7aa1migFSj6XZ3fhyx%2BvX4LaHus77pRC4cmCLMn4snztY9yu4mC2DGy5OiMYHxei1Kqp8H8QlnIS7rZLWDM2PblqxQaCpctqcesN6L7l7aHVCtqpsegZtSjz%2F25Ez4X1NJ5P8%2F%2Bavxrgz2VfaK0krcByNPCmR1%2FjDPQscPQeV%2B1I4R5pwZeV71pj7x19A1YLDsBkchgIezGfaVhFb4H6%2Fj2uNfdXZZNgzkJpeDXFmiWC81tieJQZinzeGHizQS1CmHeK9aW4t8fmM36j5M%2B%2BwOkb%2BPdJC%2F%2B9Z%2BuIjEs4nKyc6zT5ZV%2FoefkgG1vhTDlg6K%2BBjqkAeJiPXXq3XzbGneHgUp6HuT3X1nA2b7bYhBqigVA54A7ODdTR4%2BRWWMMMdYmEZChJHBi1RkQZOp1BjxqEj6PdBS8X%2BLCRIW5BJxjOepBdXFKlvufQBrKy3C8y%2BI6IRxPE0u9UyTowDum3QuR5ZoVspbk7juX0qYRaejz3MVg9uUHzqXkYIybZp86ztUtwZvYwVjBETTNAjY%2F4D%2FMSOiD5knrQ1sj&X-Amz-Signature=4d3189886490b193a7d85dff38a67c37d51867865b332a12089f61eb19c2f7f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLYE57P%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw7svvjBn1UcGE1iXtPJepgI%2FJnJnKcYBvVfiUrR0K8gIhAJZKlhtZFVAKAIX93W35o6BkMsdW3xl75IKHZbGr5pkpKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqP0uNCzTaGxnP0VUq3APDOoKhFxqqes1KMhb7e9J3Fm4Motl9WYHvlt3JSH8QXmrE4MZjtbu19rOXuFAUVrIz4mPhz8G2lqpFUPpovVFYIWzxjhI61gqnAjU7sR4Y0s6qwBO1t4MRElG6qzhbtFqx1ZOw7VVON5OZRzos9s7sMU87Gase0WnujXaDsgi8rxyJeUnlCm21Jv7RH1rDRlx9eM%2BttavGSOOMDkOzL3kMIzY2lB%2BV2ToOxOtWSEHp0%2Fg1ChHMRZ65IGjRBpWBzv%2F5JDQxgD50lY9rHmHo1VIdF4hG5JDL1Dt7CWXFOk4zoWkw90LZ%2BwJf7HSdliNC%2B7aa1migFSj6XZ3fhyx%2BvX4LaHus77pRC4cmCLMn4snztY9yu4mC2DGy5OiMYHxei1Kqp8H8QlnIS7rZLWDM2PblqxQaCpctqcesN6L7l7aHVCtqpsegZtSjz%2F25Ez4X1NJ5P8%2F%2Bavxrgz2VfaK0krcByNPCmR1%2FjDPQscPQeV%2B1I4R5pwZeV71pj7x19A1YLDsBkchgIezGfaVhFb4H6%2Fj2uNfdXZZNgzkJpeDXFmiWC81tieJQZinzeGHizQS1CmHeK9aW4t8fmM36j5M%2B%2BwOkb%2BPdJC%2F%2B9Z%2BuIjEs4nKyc6zT5ZV%2FoefkgG1vhTDlg6K%2BBjqkAeJiPXXq3XzbGneHgUp6HuT3X1nA2b7bYhBqigVA54A7ODdTR4%2BRWWMMMdYmEZChJHBi1RkQZOp1BjxqEj6PdBS8X%2BLCRIW5BJxjOepBdXFKlvufQBrKy3C8y%2BI6IRxPE0u9UyTowDum3QuR5ZoVspbk7juX0qYRaejz3MVg9uUHzqXkYIybZp86ztUtwZvYwVjBETTNAjY%2F4D%2FMSOiD5knrQ1sj&X-Amz-Signature=830cc141eeed2439706471020de47e6778b0609259ecc815e12c39f79ec047ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLYE57P%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw7svvjBn1UcGE1iXtPJepgI%2FJnJnKcYBvVfiUrR0K8gIhAJZKlhtZFVAKAIX93W35o6BkMsdW3xl75IKHZbGr5pkpKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqP0uNCzTaGxnP0VUq3APDOoKhFxqqes1KMhb7e9J3Fm4Motl9WYHvlt3JSH8QXmrE4MZjtbu19rOXuFAUVrIz4mPhz8G2lqpFUPpovVFYIWzxjhI61gqnAjU7sR4Y0s6qwBO1t4MRElG6qzhbtFqx1ZOw7VVON5OZRzos9s7sMU87Gase0WnujXaDsgi8rxyJeUnlCm21Jv7RH1rDRlx9eM%2BttavGSOOMDkOzL3kMIzY2lB%2BV2ToOxOtWSEHp0%2Fg1ChHMRZ65IGjRBpWBzv%2F5JDQxgD50lY9rHmHo1VIdF4hG5JDL1Dt7CWXFOk4zoWkw90LZ%2BwJf7HSdliNC%2B7aa1migFSj6XZ3fhyx%2BvX4LaHus77pRC4cmCLMn4snztY9yu4mC2DGy5OiMYHxei1Kqp8H8QlnIS7rZLWDM2PblqxQaCpctqcesN6L7l7aHVCtqpsegZtSjz%2F25Ez4X1NJ5P8%2F%2Bavxrgz2VfaK0krcByNPCmR1%2FjDPQscPQeV%2B1I4R5pwZeV71pj7x19A1YLDsBkchgIezGfaVhFb4H6%2Fj2uNfdXZZNgzkJpeDXFmiWC81tieJQZinzeGHizQS1CmHeK9aW4t8fmM36j5M%2B%2BwOkb%2BPdJC%2F%2B9Z%2BuIjEs4nKyc6zT5ZV%2FoefkgG1vhTDlg6K%2BBjqkAeJiPXXq3XzbGneHgUp6HuT3X1nA2b7bYhBqigVA54A7ODdTR4%2BRWWMMMdYmEZChJHBi1RkQZOp1BjxqEj6PdBS8X%2BLCRIW5BJxjOepBdXFKlvufQBrKy3C8y%2BI6IRxPE0u9UyTowDum3QuR5ZoVspbk7juX0qYRaejz3MVg9uUHzqXkYIybZp86ztUtwZvYwVjBETTNAjY%2F4D%2FMSOiD5knrQ1sj&X-Amz-Signature=8557498e0db87e74dff3f9a0ca3143f9e9b9bb3207de731e9090c5a1393d4119&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLYE57P%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw7svvjBn1UcGE1iXtPJepgI%2FJnJnKcYBvVfiUrR0K8gIhAJZKlhtZFVAKAIX93W35o6BkMsdW3xl75IKHZbGr5pkpKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqP0uNCzTaGxnP0VUq3APDOoKhFxqqes1KMhb7e9J3Fm4Motl9WYHvlt3JSH8QXmrE4MZjtbu19rOXuFAUVrIz4mPhz8G2lqpFUPpovVFYIWzxjhI61gqnAjU7sR4Y0s6qwBO1t4MRElG6qzhbtFqx1ZOw7VVON5OZRzos9s7sMU87Gase0WnujXaDsgi8rxyJeUnlCm21Jv7RH1rDRlx9eM%2BttavGSOOMDkOzL3kMIzY2lB%2BV2ToOxOtWSEHp0%2Fg1ChHMRZ65IGjRBpWBzv%2F5JDQxgD50lY9rHmHo1VIdF4hG5JDL1Dt7CWXFOk4zoWkw90LZ%2BwJf7HSdliNC%2B7aa1migFSj6XZ3fhyx%2BvX4LaHus77pRC4cmCLMn4snztY9yu4mC2DGy5OiMYHxei1Kqp8H8QlnIS7rZLWDM2PblqxQaCpctqcesN6L7l7aHVCtqpsegZtSjz%2F25Ez4X1NJ5P8%2F%2Bavxrgz2VfaK0krcByNPCmR1%2FjDPQscPQeV%2B1I4R5pwZeV71pj7x19A1YLDsBkchgIezGfaVhFb4H6%2Fj2uNfdXZZNgzkJpeDXFmiWC81tieJQZinzeGHizQS1CmHeK9aW4t8fmM36j5M%2B%2BwOkb%2BPdJC%2F%2B9Z%2BuIjEs4nKyc6zT5ZV%2FoefkgG1vhTDlg6K%2BBjqkAeJiPXXq3XzbGneHgUp6HuT3X1nA2b7bYhBqigVA54A7ODdTR4%2BRWWMMMdYmEZChJHBi1RkQZOp1BjxqEj6PdBS8X%2BLCRIW5BJxjOepBdXFKlvufQBrKy3C8y%2BI6IRxPE0u9UyTowDum3QuR5ZoVspbk7juX0qYRaejz3MVg9uUHzqXkYIybZp86ztUtwZvYwVjBETTNAjY%2F4D%2FMSOiD5knrQ1sj&X-Amz-Signature=58263a8008d48f6cb6b163cbbb4477091b41da72ee588afb5a28cce0c0702fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
