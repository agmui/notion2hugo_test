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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY4GSEKU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAeFi1XuZ1eP5SSciUIgx6guf3klHFpIORLkM4O1HRsBAiBRYb3GP6%2BXz9dF4aEMbgREzaVSbRLWUPm9idS%2BImvpGSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMe%2BUpeY8V%2FCQMzwqfKtwDXZxrYffnSyIwP6e5P1jUdxdbl5h6GHf7%2Fgg1kkUQ5rPpBTv4oqql3mPyX7%2B5NN0DrDga%2BcUVkEpBz8tEwB2XdhJIaZR6OuHxAxDgaZnxYMfJ%2FLkxkjK4owcN%2FN1PRKZiQVI%2BcAXnN8u%2BoPDLigKfu05GlcDE5n4ImyINn%2B0BA1z%2FarZdAy69YFnfA2CFdVfAV1bEN5S4ASqczjDsnOqAIc94pYIbEucP8t%2BW5YdoLo48rvsH9rl6qob5mFXUkqpZHwuvXsLomcHylOk4S%2BzcBh7iQTUtt%2FHMHcbRkrmAX49aLFc7I1zCzxrjQLmQVMeVIdaPPG6ECCRaKSljaXnfbWGyQ84A6L33JOOjxp6CWoMyrxS4nOAF3oDhTluqkhFcTWT4E%2BeuYOfqiVQvx1cxNzvuFRTDvgM4v%2FTvDHu8t5n8HkMMQycx%2BaqRT3yPwkNYyilpsZiqBW9NAHhmtEyPC5gmeMaw7FUxZ53VwXxjhBsiPUvy8hOcjeojjiKheOU0RHG01LtEQjziLF4hwVnrlyqUCHNogzniYtqauKK486vVAu9QVYxbQaZcTkkNGGxLSpns6Ll2pO1qndg34qXu5X4xwOdBGxry%2FD3r6P7tcNFdsQtCPECJX36K4XQw54LhwAY6pgGcEFknKHqOaksEt%2BvpvTayDAxcCz92aA6lCuldD6uVQIvyUt8bhYsS5TZIakgZ3C%2FFMWtFzxhmPFcMVhSOsxXiSSvCA4L6e8O73g5Zvw%2BlN7%2Fs7P65gxUsAlZFQ5vkKXP0R873x%2B6NgaslhxZ813jGjEqa7p7nkYF74gL1irLO7%2FxyHS1ROJzH4iS626rXRC4QXaKeCnVPuJ0RnzLeSks3VQfUHFIU&X-Amz-Signature=1476b3022c5adb34a6253c84aab2f030671d43adae9fe2c98a4381ecba04083b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY4GSEKU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAeFi1XuZ1eP5SSciUIgx6guf3klHFpIORLkM4O1HRsBAiBRYb3GP6%2BXz9dF4aEMbgREzaVSbRLWUPm9idS%2BImvpGSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMe%2BUpeY8V%2FCQMzwqfKtwDXZxrYffnSyIwP6e5P1jUdxdbl5h6GHf7%2Fgg1kkUQ5rPpBTv4oqql3mPyX7%2B5NN0DrDga%2BcUVkEpBz8tEwB2XdhJIaZR6OuHxAxDgaZnxYMfJ%2FLkxkjK4owcN%2FN1PRKZiQVI%2BcAXnN8u%2BoPDLigKfu05GlcDE5n4ImyINn%2B0BA1z%2FarZdAy69YFnfA2CFdVfAV1bEN5S4ASqczjDsnOqAIc94pYIbEucP8t%2BW5YdoLo48rvsH9rl6qob5mFXUkqpZHwuvXsLomcHylOk4S%2BzcBh7iQTUtt%2FHMHcbRkrmAX49aLFc7I1zCzxrjQLmQVMeVIdaPPG6ECCRaKSljaXnfbWGyQ84A6L33JOOjxp6CWoMyrxS4nOAF3oDhTluqkhFcTWT4E%2BeuYOfqiVQvx1cxNzvuFRTDvgM4v%2FTvDHu8t5n8HkMMQycx%2BaqRT3yPwkNYyilpsZiqBW9NAHhmtEyPC5gmeMaw7FUxZ53VwXxjhBsiPUvy8hOcjeojjiKheOU0RHG01LtEQjziLF4hwVnrlyqUCHNogzniYtqauKK486vVAu9QVYxbQaZcTkkNGGxLSpns6Ll2pO1qndg34qXu5X4xwOdBGxry%2FD3r6P7tcNFdsQtCPECJX36K4XQw54LhwAY6pgGcEFknKHqOaksEt%2BvpvTayDAxcCz92aA6lCuldD6uVQIvyUt8bhYsS5TZIakgZ3C%2FFMWtFzxhmPFcMVhSOsxXiSSvCA4L6e8O73g5Zvw%2BlN7%2Fs7P65gxUsAlZFQ5vkKXP0R873x%2B6NgaslhxZ813jGjEqa7p7nkYF74gL1irLO7%2FxyHS1ROJzH4iS626rXRC4QXaKeCnVPuJ0RnzLeSks3VQfUHFIU&X-Amz-Signature=016b2c68f7ef987a8e46aa891ecb0fa4dd05488760b335326729b7f5872fedd1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY4GSEKU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAeFi1XuZ1eP5SSciUIgx6guf3klHFpIORLkM4O1HRsBAiBRYb3GP6%2BXz9dF4aEMbgREzaVSbRLWUPm9idS%2BImvpGSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMe%2BUpeY8V%2FCQMzwqfKtwDXZxrYffnSyIwP6e5P1jUdxdbl5h6GHf7%2Fgg1kkUQ5rPpBTv4oqql3mPyX7%2B5NN0DrDga%2BcUVkEpBz8tEwB2XdhJIaZR6OuHxAxDgaZnxYMfJ%2FLkxkjK4owcN%2FN1PRKZiQVI%2BcAXnN8u%2BoPDLigKfu05GlcDE5n4ImyINn%2B0BA1z%2FarZdAy69YFnfA2CFdVfAV1bEN5S4ASqczjDsnOqAIc94pYIbEucP8t%2BW5YdoLo48rvsH9rl6qob5mFXUkqpZHwuvXsLomcHylOk4S%2BzcBh7iQTUtt%2FHMHcbRkrmAX49aLFc7I1zCzxrjQLmQVMeVIdaPPG6ECCRaKSljaXnfbWGyQ84A6L33JOOjxp6CWoMyrxS4nOAF3oDhTluqkhFcTWT4E%2BeuYOfqiVQvx1cxNzvuFRTDvgM4v%2FTvDHu8t5n8HkMMQycx%2BaqRT3yPwkNYyilpsZiqBW9NAHhmtEyPC5gmeMaw7FUxZ53VwXxjhBsiPUvy8hOcjeojjiKheOU0RHG01LtEQjziLF4hwVnrlyqUCHNogzniYtqauKK486vVAu9QVYxbQaZcTkkNGGxLSpns6Ll2pO1qndg34qXu5X4xwOdBGxry%2FD3r6P7tcNFdsQtCPECJX36K4XQw54LhwAY6pgGcEFknKHqOaksEt%2BvpvTayDAxcCz92aA6lCuldD6uVQIvyUt8bhYsS5TZIakgZ3C%2FFMWtFzxhmPFcMVhSOsxXiSSvCA4L6e8O73g5Zvw%2BlN7%2Fs7P65gxUsAlZFQ5vkKXP0R873x%2B6NgaslhxZ813jGjEqa7p7nkYF74gL1irLO7%2FxyHS1ROJzH4iS626rXRC4QXaKeCnVPuJ0RnzLeSks3VQfUHFIU&X-Amz-Signature=fc3dffc4228cfaf76b423ef80c16c36ca68872803b939e94c8545206da5ab659&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY4GSEKU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAeFi1XuZ1eP5SSciUIgx6guf3klHFpIORLkM4O1HRsBAiBRYb3GP6%2BXz9dF4aEMbgREzaVSbRLWUPm9idS%2BImvpGSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMe%2BUpeY8V%2FCQMzwqfKtwDXZxrYffnSyIwP6e5P1jUdxdbl5h6GHf7%2Fgg1kkUQ5rPpBTv4oqql3mPyX7%2B5NN0DrDga%2BcUVkEpBz8tEwB2XdhJIaZR6OuHxAxDgaZnxYMfJ%2FLkxkjK4owcN%2FN1PRKZiQVI%2BcAXnN8u%2BoPDLigKfu05GlcDE5n4ImyINn%2B0BA1z%2FarZdAy69YFnfA2CFdVfAV1bEN5S4ASqczjDsnOqAIc94pYIbEucP8t%2BW5YdoLo48rvsH9rl6qob5mFXUkqpZHwuvXsLomcHylOk4S%2BzcBh7iQTUtt%2FHMHcbRkrmAX49aLFc7I1zCzxrjQLmQVMeVIdaPPG6ECCRaKSljaXnfbWGyQ84A6L33JOOjxp6CWoMyrxS4nOAF3oDhTluqkhFcTWT4E%2BeuYOfqiVQvx1cxNzvuFRTDvgM4v%2FTvDHu8t5n8HkMMQycx%2BaqRT3yPwkNYyilpsZiqBW9NAHhmtEyPC5gmeMaw7FUxZ53VwXxjhBsiPUvy8hOcjeojjiKheOU0RHG01LtEQjziLF4hwVnrlyqUCHNogzniYtqauKK486vVAu9QVYxbQaZcTkkNGGxLSpns6Ll2pO1qndg34qXu5X4xwOdBGxry%2FD3r6P7tcNFdsQtCPECJX36K4XQw54LhwAY6pgGcEFknKHqOaksEt%2BvpvTayDAxcCz92aA6lCuldD6uVQIvyUt8bhYsS5TZIakgZ3C%2FFMWtFzxhmPFcMVhSOsxXiSSvCA4L6e8O73g5Zvw%2BlN7%2Fs7P65gxUsAlZFQ5vkKXP0R873x%2B6NgaslhxZ813jGjEqa7p7nkYF74gL1irLO7%2FxyHS1ROJzH4iS626rXRC4QXaKeCnVPuJ0RnzLeSks3VQfUHFIU&X-Amz-Signature=0d0115fd5454a40687096bcf29bbfeb6ff8ac9a9d64eec8dd25abbeb63035a78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY4GSEKU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAeFi1XuZ1eP5SSciUIgx6guf3klHFpIORLkM4O1HRsBAiBRYb3GP6%2BXz9dF4aEMbgREzaVSbRLWUPm9idS%2BImvpGSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMe%2BUpeY8V%2FCQMzwqfKtwDXZxrYffnSyIwP6e5P1jUdxdbl5h6GHf7%2Fgg1kkUQ5rPpBTv4oqql3mPyX7%2B5NN0DrDga%2BcUVkEpBz8tEwB2XdhJIaZR6OuHxAxDgaZnxYMfJ%2FLkxkjK4owcN%2FN1PRKZiQVI%2BcAXnN8u%2BoPDLigKfu05GlcDE5n4ImyINn%2B0BA1z%2FarZdAy69YFnfA2CFdVfAV1bEN5S4ASqczjDsnOqAIc94pYIbEucP8t%2BW5YdoLo48rvsH9rl6qob5mFXUkqpZHwuvXsLomcHylOk4S%2BzcBh7iQTUtt%2FHMHcbRkrmAX49aLFc7I1zCzxrjQLmQVMeVIdaPPG6ECCRaKSljaXnfbWGyQ84A6L33JOOjxp6CWoMyrxS4nOAF3oDhTluqkhFcTWT4E%2BeuYOfqiVQvx1cxNzvuFRTDvgM4v%2FTvDHu8t5n8HkMMQycx%2BaqRT3yPwkNYyilpsZiqBW9NAHhmtEyPC5gmeMaw7FUxZ53VwXxjhBsiPUvy8hOcjeojjiKheOU0RHG01LtEQjziLF4hwVnrlyqUCHNogzniYtqauKK486vVAu9QVYxbQaZcTkkNGGxLSpns6Ll2pO1qndg34qXu5X4xwOdBGxry%2FD3r6P7tcNFdsQtCPECJX36K4XQw54LhwAY6pgGcEFknKHqOaksEt%2BvpvTayDAxcCz92aA6lCuldD6uVQIvyUt8bhYsS5TZIakgZ3C%2FFMWtFzxhmPFcMVhSOsxXiSSvCA4L6e8O73g5Zvw%2BlN7%2Fs7P65gxUsAlZFQ5vkKXP0R873x%2B6NgaslhxZ813jGjEqa7p7nkYF74gL1irLO7%2FxyHS1ROJzH4iS626rXRC4QXaKeCnVPuJ0RnzLeSks3VQfUHFIU&X-Amz-Signature=9ad6bf97ea1b9b13033d4ddd8e8945d2dc58ae4e30502c83c5268af7a30b580c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY4GSEKU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAeFi1XuZ1eP5SSciUIgx6guf3klHFpIORLkM4O1HRsBAiBRYb3GP6%2BXz9dF4aEMbgREzaVSbRLWUPm9idS%2BImvpGSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMe%2BUpeY8V%2FCQMzwqfKtwDXZxrYffnSyIwP6e5P1jUdxdbl5h6GHf7%2Fgg1kkUQ5rPpBTv4oqql3mPyX7%2B5NN0DrDga%2BcUVkEpBz8tEwB2XdhJIaZR6OuHxAxDgaZnxYMfJ%2FLkxkjK4owcN%2FN1PRKZiQVI%2BcAXnN8u%2BoPDLigKfu05GlcDE5n4ImyINn%2B0BA1z%2FarZdAy69YFnfA2CFdVfAV1bEN5S4ASqczjDsnOqAIc94pYIbEucP8t%2BW5YdoLo48rvsH9rl6qob5mFXUkqpZHwuvXsLomcHylOk4S%2BzcBh7iQTUtt%2FHMHcbRkrmAX49aLFc7I1zCzxrjQLmQVMeVIdaPPG6ECCRaKSljaXnfbWGyQ84A6L33JOOjxp6CWoMyrxS4nOAF3oDhTluqkhFcTWT4E%2BeuYOfqiVQvx1cxNzvuFRTDvgM4v%2FTvDHu8t5n8HkMMQycx%2BaqRT3yPwkNYyilpsZiqBW9NAHhmtEyPC5gmeMaw7FUxZ53VwXxjhBsiPUvy8hOcjeojjiKheOU0RHG01LtEQjziLF4hwVnrlyqUCHNogzniYtqauKK486vVAu9QVYxbQaZcTkkNGGxLSpns6Ll2pO1qndg34qXu5X4xwOdBGxry%2FD3r6P7tcNFdsQtCPECJX36K4XQw54LhwAY6pgGcEFknKHqOaksEt%2BvpvTayDAxcCz92aA6lCuldD6uVQIvyUt8bhYsS5TZIakgZ3C%2FFMWtFzxhmPFcMVhSOsxXiSSvCA4L6e8O73g5Zvw%2BlN7%2Fs7P65gxUsAlZFQ5vkKXP0R873x%2B6NgaslhxZ813jGjEqa7p7nkYF74gL1irLO7%2FxyHS1ROJzH4iS626rXRC4QXaKeCnVPuJ0RnzLeSks3VQfUHFIU&X-Amz-Signature=1ae8ba8905957ee9388f6812e44dd938dc3a05053289d00d329346fc08bc51e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY4GSEKU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAeFi1XuZ1eP5SSciUIgx6guf3klHFpIORLkM4O1HRsBAiBRYb3GP6%2BXz9dF4aEMbgREzaVSbRLWUPm9idS%2BImvpGSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMe%2BUpeY8V%2FCQMzwqfKtwDXZxrYffnSyIwP6e5P1jUdxdbl5h6GHf7%2Fgg1kkUQ5rPpBTv4oqql3mPyX7%2B5NN0DrDga%2BcUVkEpBz8tEwB2XdhJIaZR6OuHxAxDgaZnxYMfJ%2FLkxkjK4owcN%2FN1PRKZiQVI%2BcAXnN8u%2BoPDLigKfu05GlcDE5n4ImyINn%2B0BA1z%2FarZdAy69YFnfA2CFdVfAV1bEN5S4ASqczjDsnOqAIc94pYIbEucP8t%2BW5YdoLo48rvsH9rl6qob5mFXUkqpZHwuvXsLomcHylOk4S%2BzcBh7iQTUtt%2FHMHcbRkrmAX49aLFc7I1zCzxrjQLmQVMeVIdaPPG6ECCRaKSljaXnfbWGyQ84A6L33JOOjxp6CWoMyrxS4nOAF3oDhTluqkhFcTWT4E%2BeuYOfqiVQvx1cxNzvuFRTDvgM4v%2FTvDHu8t5n8HkMMQycx%2BaqRT3yPwkNYyilpsZiqBW9NAHhmtEyPC5gmeMaw7FUxZ53VwXxjhBsiPUvy8hOcjeojjiKheOU0RHG01LtEQjziLF4hwVnrlyqUCHNogzniYtqauKK486vVAu9QVYxbQaZcTkkNGGxLSpns6Ll2pO1qndg34qXu5X4xwOdBGxry%2FD3r6P7tcNFdsQtCPECJX36K4XQw54LhwAY6pgGcEFknKHqOaksEt%2BvpvTayDAxcCz92aA6lCuldD6uVQIvyUt8bhYsS5TZIakgZ3C%2FFMWtFzxhmPFcMVhSOsxXiSSvCA4L6e8O73g5Zvw%2BlN7%2Fs7P65gxUsAlZFQ5vkKXP0R873x%2B6NgaslhxZ813jGjEqa7p7nkYF74gL1irLO7%2FxyHS1ROJzH4iS626rXRC4QXaKeCnVPuJ0RnzLeSks3VQfUHFIU&X-Amz-Signature=868c7f2edcc14458404a12d04c72649afb392c787ecb3c0d55c91e04abaf6584&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY4GSEKU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAeFi1XuZ1eP5SSciUIgx6guf3klHFpIORLkM4O1HRsBAiBRYb3GP6%2BXz9dF4aEMbgREzaVSbRLWUPm9idS%2BImvpGSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMe%2BUpeY8V%2FCQMzwqfKtwDXZxrYffnSyIwP6e5P1jUdxdbl5h6GHf7%2Fgg1kkUQ5rPpBTv4oqql3mPyX7%2B5NN0DrDga%2BcUVkEpBz8tEwB2XdhJIaZR6OuHxAxDgaZnxYMfJ%2FLkxkjK4owcN%2FN1PRKZiQVI%2BcAXnN8u%2BoPDLigKfu05GlcDE5n4ImyINn%2B0BA1z%2FarZdAy69YFnfA2CFdVfAV1bEN5S4ASqczjDsnOqAIc94pYIbEucP8t%2BW5YdoLo48rvsH9rl6qob5mFXUkqpZHwuvXsLomcHylOk4S%2BzcBh7iQTUtt%2FHMHcbRkrmAX49aLFc7I1zCzxrjQLmQVMeVIdaPPG6ECCRaKSljaXnfbWGyQ84A6L33JOOjxp6CWoMyrxS4nOAF3oDhTluqkhFcTWT4E%2BeuYOfqiVQvx1cxNzvuFRTDvgM4v%2FTvDHu8t5n8HkMMQycx%2BaqRT3yPwkNYyilpsZiqBW9NAHhmtEyPC5gmeMaw7FUxZ53VwXxjhBsiPUvy8hOcjeojjiKheOU0RHG01LtEQjziLF4hwVnrlyqUCHNogzniYtqauKK486vVAu9QVYxbQaZcTkkNGGxLSpns6Ll2pO1qndg34qXu5X4xwOdBGxry%2FD3r6P7tcNFdsQtCPECJX36K4XQw54LhwAY6pgGcEFknKHqOaksEt%2BvpvTayDAxcCz92aA6lCuldD6uVQIvyUt8bhYsS5TZIakgZ3C%2FFMWtFzxhmPFcMVhSOsxXiSSvCA4L6e8O73g5Zvw%2BlN7%2Fs7P65gxUsAlZFQ5vkKXP0R873x%2B6NgaslhxZ813jGjEqa7p7nkYF74gL1irLO7%2FxyHS1ROJzH4iS626rXRC4QXaKeCnVPuJ0RnzLeSks3VQfUHFIU&X-Amz-Signature=bc5e4ff0d001b0f6132bd99ce58b21621c6f827357169f80a6b3a056cae9fc21&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
