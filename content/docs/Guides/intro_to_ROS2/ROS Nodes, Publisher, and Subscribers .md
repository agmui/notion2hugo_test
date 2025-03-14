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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRMN7LVP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbQ8HHTUbSziLwwUYvpH7OiN%2BDVY%2B3qLFxA3GJPCLL8AIhAKt3E5rkdvstx1jTCxR8iywAAALc4Oj%2BfD7HS%2FYBEPRzKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVKR9yQbkq9dWJ7kUq3APR4UCuoJbVMuOLKFAS5wOxE4%2BusLgWeUTvaUmg6cTK4XsuHiMmtz4tCk7xgoVF5MrZjb6OFJtHUSPjnQ%2BUzPDkqIaE%2F%2BuSY6rTQrFioo7EapnRsq54HOh%2FlDpG7cF2CVqJcYUXC%2B3IyIeNz%2FAv7fy6hUnhfmghp26k4WdBA4O3E934FP%2FEq4IJKlFcqXUt3uuCNE9NhUMAGMIop%2F5VDwFnT07p5P%2Bh%2BxndBp3LU8dt%2FQ6k2hvXOyeWtNkY72Y4mJGw%2BnwBaGW%2B73ybhQ8qy4bOGArA8OGoydyTIrbP1h1V09lLvkBmtb7ZqVyLRW%2Bq7VdLy5oKqwEXel1Kxx3cImnAwt7H4ly2FlPIBn9B6Et1gwDJyRwqCZ2fCAj4kn9BtVxk4iTLedhKByj8hIc6ppu0%2FCg9cpVFyq89qT11pMdWc8FAjqaXud%2F0N11MRn4SmYvN4%2BnqOwV0iZ%2BTh%2BO53LFMdaAua%2BSkC75nbI2wQ3AAtexQsqAni41ARlbDvKxFleW2BeN%2FDLVZi5o5f0WHcoSJoMfcsyttrE4EI9Cr%2FZfsirHTz%2BHgO5DwUzWlwhajGi98zUgf43y2Xi04j89rqgz3c0cDK3rYZPcqKK5Xo2GirPjR7mGB5hs%2Fb51r2TCS6M%2B%2BBjqkAW5AVxu%2FDPnaDZHr1OoCGU1d19nB8UIe5OoMXBiUQvY6xMOqgIjTu4UKqsM6jdxwe5ls7l9Haay0gjKCNjRQzhavnKvEWP7NDEDO0JMmIiM8NMAQEGWlvsK3G4RpAoOlk1NbZE9YEX2bgCLDy8emjkTMBvGNdgEb9HL8W96bgB8GIEBcAKXMo6E4OOKQ%2BmzSGIehGqB1odABJWzA%2F73F%2FhbIH0pp&X-Amz-Signature=c6a81778c7d644fc5ba1c6aae0003d4a5540eda1d8289b90459e50eedf5c2658&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRMN7LVP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbQ8HHTUbSziLwwUYvpH7OiN%2BDVY%2B3qLFxA3GJPCLL8AIhAKt3E5rkdvstx1jTCxR8iywAAALc4Oj%2BfD7HS%2FYBEPRzKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVKR9yQbkq9dWJ7kUq3APR4UCuoJbVMuOLKFAS5wOxE4%2BusLgWeUTvaUmg6cTK4XsuHiMmtz4tCk7xgoVF5MrZjb6OFJtHUSPjnQ%2BUzPDkqIaE%2F%2BuSY6rTQrFioo7EapnRsq54HOh%2FlDpG7cF2CVqJcYUXC%2B3IyIeNz%2FAv7fy6hUnhfmghp26k4WdBA4O3E934FP%2FEq4IJKlFcqXUt3uuCNE9NhUMAGMIop%2F5VDwFnT07p5P%2Bh%2BxndBp3LU8dt%2FQ6k2hvXOyeWtNkY72Y4mJGw%2BnwBaGW%2B73ybhQ8qy4bOGArA8OGoydyTIrbP1h1V09lLvkBmtb7ZqVyLRW%2Bq7VdLy5oKqwEXel1Kxx3cImnAwt7H4ly2FlPIBn9B6Et1gwDJyRwqCZ2fCAj4kn9BtVxk4iTLedhKByj8hIc6ppu0%2FCg9cpVFyq89qT11pMdWc8FAjqaXud%2F0N11MRn4SmYvN4%2BnqOwV0iZ%2BTh%2BO53LFMdaAua%2BSkC75nbI2wQ3AAtexQsqAni41ARlbDvKxFleW2BeN%2FDLVZi5o5f0WHcoSJoMfcsyttrE4EI9Cr%2FZfsirHTz%2BHgO5DwUzWlwhajGi98zUgf43y2Xi04j89rqgz3c0cDK3rYZPcqKK5Xo2GirPjR7mGB5hs%2Fb51r2TCS6M%2B%2BBjqkAW5AVxu%2FDPnaDZHr1OoCGU1d19nB8UIe5OoMXBiUQvY6xMOqgIjTu4UKqsM6jdxwe5ls7l9Haay0gjKCNjRQzhavnKvEWP7NDEDO0JMmIiM8NMAQEGWlvsK3G4RpAoOlk1NbZE9YEX2bgCLDy8emjkTMBvGNdgEb9HL8W96bgB8GIEBcAKXMo6E4OOKQ%2BmzSGIehGqB1odABJWzA%2F73F%2FhbIH0pp&X-Amz-Signature=8120bf88aa31ae374ec670abafffe0d26a6ec9b78e1e99db73ac1d0271e9775c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRMN7LVP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbQ8HHTUbSziLwwUYvpH7OiN%2BDVY%2B3qLFxA3GJPCLL8AIhAKt3E5rkdvstx1jTCxR8iywAAALc4Oj%2BfD7HS%2FYBEPRzKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVKR9yQbkq9dWJ7kUq3APR4UCuoJbVMuOLKFAS5wOxE4%2BusLgWeUTvaUmg6cTK4XsuHiMmtz4tCk7xgoVF5MrZjb6OFJtHUSPjnQ%2BUzPDkqIaE%2F%2BuSY6rTQrFioo7EapnRsq54HOh%2FlDpG7cF2CVqJcYUXC%2B3IyIeNz%2FAv7fy6hUnhfmghp26k4WdBA4O3E934FP%2FEq4IJKlFcqXUt3uuCNE9NhUMAGMIop%2F5VDwFnT07p5P%2Bh%2BxndBp3LU8dt%2FQ6k2hvXOyeWtNkY72Y4mJGw%2BnwBaGW%2B73ybhQ8qy4bOGArA8OGoydyTIrbP1h1V09lLvkBmtb7ZqVyLRW%2Bq7VdLy5oKqwEXel1Kxx3cImnAwt7H4ly2FlPIBn9B6Et1gwDJyRwqCZ2fCAj4kn9BtVxk4iTLedhKByj8hIc6ppu0%2FCg9cpVFyq89qT11pMdWc8FAjqaXud%2F0N11MRn4SmYvN4%2BnqOwV0iZ%2BTh%2BO53LFMdaAua%2BSkC75nbI2wQ3AAtexQsqAni41ARlbDvKxFleW2BeN%2FDLVZi5o5f0WHcoSJoMfcsyttrE4EI9Cr%2FZfsirHTz%2BHgO5DwUzWlwhajGi98zUgf43y2Xi04j89rqgz3c0cDK3rYZPcqKK5Xo2GirPjR7mGB5hs%2Fb51r2TCS6M%2B%2BBjqkAW5AVxu%2FDPnaDZHr1OoCGU1d19nB8UIe5OoMXBiUQvY6xMOqgIjTu4UKqsM6jdxwe5ls7l9Haay0gjKCNjRQzhavnKvEWP7NDEDO0JMmIiM8NMAQEGWlvsK3G4RpAoOlk1NbZE9YEX2bgCLDy8emjkTMBvGNdgEb9HL8W96bgB8GIEBcAKXMo6E4OOKQ%2BmzSGIehGqB1odABJWzA%2F73F%2FhbIH0pp&X-Amz-Signature=8b1abcd46431ad09cdc9dcfce038d5ac136342decef3d804d09737169d01dfe3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRMN7LVP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbQ8HHTUbSziLwwUYvpH7OiN%2BDVY%2B3qLFxA3GJPCLL8AIhAKt3E5rkdvstx1jTCxR8iywAAALc4Oj%2BfD7HS%2FYBEPRzKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVKR9yQbkq9dWJ7kUq3APR4UCuoJbVMuOLKFAS5wOxE4%2BusLgWeUTvaUmg6cTK4XsuHiMmtz4tCk7xgoVF5MrZjb6OFJtHUSPjnQ%2BUzPDkqIaE%2F%2BuSY6rTQrFioo7EapnRsq54HOh%2FlDpG7cF2CVqJcYUXC%2B3IyIeNz%2FAv7fy6hUnhfmghp26k4WdBA4O3E934FP%2FEq4IJKlFcqXUt3uuCNE9NhUMAGMIop%2F5VDwFnT07p5P%2Bh%2BxndBp3LU8dt%2FQ6k2hvXOyeWtNkY72Y4mJGw%2BnwBaGW%2B73ybhQ8qy4bOGArA8OGoydyTIrbP1h1V09lLvkBmtb7ZqVyLRW%2Bq7VdLy5oKqwEXel1Kxx3cImnAwt7H4ly2FlPIBn9B6Et1gwDJyRwqCZ2fCAj4kn9BtVxk4iTLedhKByj8hIc6ppu0%2FCg9cpVFyq89qT11pMdWc8FAjqaXud%2F0N11MRn4SmYvN4%2BnqOwV0iZ%2BTh%2BO53LFMdaAua%2BSkC75nbI2wQ3AAtexQsqAni41ARlbDvKxFleW2BeN%2FDLVZi5o5f0WHcoSJoMfcsyttrE4EI9Cr%2FZfsirHTz%2BHgO5DwUzWlwhajGi98zUgf43y2Xi04j89rqgz3c0cDK3rYZPcqKK5Xo2GirPjR7mGB5hs%2Fb51r2TCS6M%2B%2BBjqkAW5AVxu%2FDPnaDZHr1OoCGU1d19nB8UIe5OoMXBiUQvY6xMOqgIjTu4UKqsM6jdxwe5ls7l9Haay0gjKCNjRQzhavnKvEWP7NDEDO0JMmIiM8NMAQEGWlvsK3G4RpAoOlk1NbZE9YEX2bgCLDy8emjkTMBvGNdgEb9HL8W96bgB8GIEBcAKXMo6E4OOKQ%2BmzSGIehGqB1odABJWzA%2F73F%2FhbIH0pp&X-Amz-Signature=7b011b4d470211881b3fac156595d3255f7495edb8dea5f326b4472581bb2e68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRMN7LVP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbQ8HHTUbSziLwwUYvpH7OiN%2BDVY%2B3qLFxA3GJPCLL8AIhAKt3E5rkdvstx1jTCxR8iywAAALc4Oj%2BfD7HS%2FYBEPRzKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVKR9yQbkq9dWJ7kUq3APR4UCuoJbVMuOLKFAS5wOxE4%2BusLgWeUTvaUmg6cTK4XsuHiMmtz4tCk7xgoVF5MrZjb6OFJtHUSPjnQ%2BUzPDkqIaE%2F%2BuSY6rTQrFioo7EapnRsq54HOh%2FlDpG7cF2CVqJcYUXC%2B3IyIeNz%2FAv7fy6hUnhfmghp26k4WdBA4O3E934FP%2FEq4IJKlFcqXUt3uuCNE9NhUMAGMIop%2F5VDwFnT07p5P%2Bh%2BxndBp3LU8dt%2FQ6k2hvXOyeWtNkY72Y4mJGw%2BnwBaGW%2B73ybhQ8qy4bOGArA8OGoydyTIrbP1h1V09lLvkBmtb7ZqVyLRW%2Bq7VdLy5oKqwEXel1Kxx3cImnAwt7H4ly2FlPIBn9B6Et1gwDJyRwqCZ2fCAj4kn9BtVxk4iTLedhKByj8hIc6ppu0%2FCg9cpVFyq89qT11pMdWc8FAjqaXud%2F0N11MRn4SmYvN4%2BnqOwV0iZ%2BTh%2BO53LFMdaAua%2BSkC75nbI2wQ3AAtexQsqAni41ARlbDvKxFleW2BeN%2FDLVZi5o5f0WHcoSJoMfcsyttrE4EI9Cr%2FZfsirHTz%2BHgO5DwUzWlwhajGi98zUgf43y2Xi04j89rqgz3c0cDK3rYZPcqKK5Xo2GirPjR7mGB5hs%2Fb51r2TCS6M%2B%2BBjqkAW5AVxu%2FDPnaDZHr1OoCGU1d19nB8UIe5OoMXBiUQvY6xMOqgIjTu4UKqsM6jdxwe5ls7l9Haay0gjKCNjRQzhavnKvEWP7NDEDO0JMmIiM8NMAQEGWlvsK3G4RpAoOlk1NbZE9YEX2bgCLDy8emjkTMBvGNdgEb9HL8W96bgB8GIEBcAKXMo6E4OOKQ%2BmzSGIehGqB1odABJWzA%2F73F%2FhbIH0pp&X-Amz-Signature=94b9f7b2e84f142e529f6d8c37a43d6986942823a8900866d283658cd9828e45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRMN7LVP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbQ8HHTUbSziLwwUYvpH7OiN%2BDVY%2B3qLFxA3GJPCLL8AIhAKt3E5rkdvstx1jTCxR8iywAAALc4Oj%2BfD7HS%2FYBEPRzKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVKR9yQbkq9dWJ7kUq3APR4UCuoJbVMuOLKFAS5wOxE4%2BusLgWeUTvaUmg6cTK4XsuHiMmtz4tCk7xgoVF5MrZjb6OFJtHUSPjnQ%2BUzPDkqIaE%2F%2BuSY6rTQrFioo7EapnRsq54HOh%2FlDpG7cF2CVqJcYUXC%2B3IyIeNz%2FAv7fy6hUnhfmghp26k4WdBA4O3E934FP%2FEq4IJKlFcqXUt3uuCNE9NhUMAGMIop%2F5VDwFnT07p5P%2Bh%2BxndBp3LU8dt%2FQ6k2hvXOyeWtNkY72Y4mJGw%2BnwBaGW%2B73ybhQ8qy4bOGArA8OGoydyTIrbP1h1V09lLvkBmtb7ZqVyLRW%2Bq7VdLy5oKqwEXel1Kxx3cImnAwt7H4ly2FlPIBn9B6Et1gwDJyRwqCZ2fCAj4kn9BtVxk4iTLedhKByj8hIc6ppu0%2FCg9cpVFyq89qT11pMdWc8FAjqaXud%2F0N11MRn4SmYvN4%2BnqOwV0iZ%2BTh%2BO53LFMdaAua%2BSkC75nbI2wQ3AAtexQsqAni41ARlbDvKxFleW2BeN%2FDLVZi5o5f0WHcoSJoMfcsyttrE4EI9Cr%2FZfsirHTz%2BHgO5DwUzWlwhajGi98zUgf43y2Xi04j89rqgz3c0cDK3rYZPcqKK5Xo2GirPjR7mGB5hs%2Fb51r2TCS6M%2B%2BBjqkAW5AVxu%2FDPnaDZHr1OoCGU1d19nB8UIe5OoMXBiUQvY6xMOqgIjTu4UKqsM6jdxwe5ls7l9Haay0gjKCNjRQzhavnKvEWP7NDEDO0JMmIiM8NMAQEGWlvsK3G4RpAoOlk1NbZE9YEX2bgCLDy8emjkTMBvGNdgEb9HL8W96bgB8GIEBcAKXMo6E4OOKQ%2BmzSGIehGqB1odABJWzA%2F73F%2FhbIH0pp&X-Amz-Signature=315c90123a2ad56b3c49004b735c9a09ab06d719a33430c17f21057848412667&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRMN7LVP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbQ8HHTUbSziLwwUYvpH7OiN%2BDVY%2B3qLFxA3GJPCLL8AIhAKt3E5rkdvstx1jTCxR8iywAAALc4Oj%2BfD7HS%2FYBEPRzKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVKR9yQbkq9dWJ7kUq3APR4UCuoJbVMuOLKFAS5wOxE4%2BusLgWeUTvaUmg6cTK4XsuHiMmtz4tCk7xgoVF5MrZjb6OFJtHUSPjnQ%2BUzPDkqIaE%2F%2BuSY6rTQrFioo7EapnRsq54HOh%2FlDpG7cF2CVqJcYUXC%2B3IyIeNz%2FAv7fy6hUnhfmghp26k4WdBA4O3E934FP%2FEq4IJKlFcqXUt3uuCNE9NhUMAGMIop%2F5VDwFnT07p5P%2Bh%2BxndBp3LU8dt%2FQ6k2hvXOyeWtNkY72Y4mJGw%2BnwBaGW%2B73ybhQ8qy4bOGArA8OGoydyTIrbP1h1V09lLvkBmtb7ZqVyLRW%2Bq7VdLy5oKqwEXel1Kxx3cImnAwt7H4ly2FlPIBn9B6Et1gwDJyRwqCZ2fCAj4kn9BtVxk4iTLedhKByj8hIc6ppu0%2FCg9cpVFyq89qT11pMdWc8FAjqaXud%2F0N11MRn4SmYvN4%2BnqOwV0iZ%2BTh%2BO53LFMdaAua%2BSkC75nbI2wQ3AAtexQsqAni41ARlbDvKxFleW2BeN%2FDLVZi5o5f0WHcoSJoMfcsyttrE4EI9Cr%2FZfsirHTz%2BHgO5DwUzWlwhajGi98zUgf43y2Xi04j89rqgz3c0cDK3rYZPcqKK5Xo2GirPjR7mGB5hs%2Fb51r2TCS6M%2B%2BBjqkAW5AVxu%2FDPnaDZHr1OoCGU1d19nB8UIe5OoMXBiUQvY6xMOqgIjTu4UKqsM6jdxwe5ls7l9Haay0gjKCNjRQzhavnKvEWP7NDEDO0JMmIiM8NMAQEGWlvsK3G4RpAoOlk1NbZE9YEX2bgCLDy8emjkTMBvGNdgEb9HL8W96bgB8GIEBcAKXMo6E4OOKQ%2BmzSGIehGqB1odABJWzA%2F73F%2FhbIH0pp&X-Amz-Signature=0902b7c07f02c521e26595f14c1065e8e2c74c2e568cfdeda9ef4c7e0f66e032&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRMN7LVP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbQ8HHTUbSziLwwUYvpH7OiN%2BDVY%2B3qLFxA3GJPCLL8AIhAKt3E5rkdvstx1jTCxR8iywAAALc4Oj%2BfD7HS%2FYBEPRzKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVKR9yQbkq9dWJ7kUq3APR4UCuoJbVMuOLKFAS5wOxE4%2BusLgWeUTvaUmg6cTK4XsuHiMmtz4tCk7xgoVF5MrZjb6OFJtHUSPjnQ%2BUzPDkqIaE%2F%2BuSY6rTQrFioo7EapnRsq54HOh%2FlDpG7cF2CVqJcYUXC%2B3IyIeNz%2FAv7fy6hUnhfmghp26k4WdBA4O3E934FP%2FEq4IJKlFcqXUt3uuCNE9NhUMAGMIop%2F5VDwFnT07p5P%2Bh%2BxndBp3LU8dt%2FQ6k2hvXOyeWtNkY72Y4mJGw%2BnwBaGW%2B73ybhQ8qy4bOGArA8OGoydyTIrbP1h1V09lLvkBmtb7ZqVyLRW%2Bq7VdLy5oKqwEXel1Kxx3cImnAwt7H4ly2FlPIBn9B6Et1gwDJyRwqCZ2fCAj4kn9BtVxk4iTLedhKByj8hIc6ppu0%2FCg9cpVFyq89qT11pMdWc8FAjqaXud%2F0N11MRn4SmYvN4%2BnqOwV0iZ%2BTh%2BO53LFMdaAua%2BSkC75nbI2wQ3AAtexQsqAni41ARlbDvKxFleW2BeN%2FDLVZi5o5f0WHcoSJoMfcsyttrE4EI9Cr%2FZfsirHTz%2BHgO5DwUzWlwhajGi98zUgf43y2Xi04j89rqgz3c0cDK3rYZPcqKK5Xo2GirPjR7mGB5hs%2Fb51r2TCS6M%2B%2BBjqkAW5AVxu%2FDPnaDZHr1OoCGU1d19nB8UIe5OoMXBiUQvY6xMOqgIjTu4UKqsM6jdxwe5ls7l9Haay0gjKCNjRQzhavnKvEWP7NDEDO0JMmIiM8NMAQEGWlvsK3G4RpAoOlk1NbZE9YEX2bgCLDy8emjkTMBvGNdgEb9HL8W96bgB8GIEBcAKXMo6E4OOKQ%2BmzSGIehGqB1odABJWzA%2F73F%2FhbIH0pp&X-Amz-Signature=60ac4bb76eea717262d9ab8e53f3d27ad189c96dbd19bab2b4d07e54cd6982f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
