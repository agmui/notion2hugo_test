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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRZSNDY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxk3kxNcwdWow1tZbHRPzJZk7FJQwEUDRPca6%2FrWN7PAIhAKvNqfyu4pEoifWRZsWjGrl6%2FNCpApZdduRlGrLB0ChDKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7%2FKyghjhVXyc%2FIjgq3AOe30f0JZLnNXr0%2FaWSr73%2B9ueS6uuNbJiGHa%2BEOlfG%2BsU%2BXgwHdaIiJ7%2FBsy0qesjYAgSvtqqIn%2B2h1%2Fliw4vYQLBaSN1EhJoYGlNSXkhBElE%2BrCcE4bZrKUFgud3dbiysKngsWO2Fq%2BnXVCpenVwRQxh9oaCt%2FLcFfMgyZ0b1FZQuv9lkdR6VOtNFqFnUXQT6%2F2egKhWcbMNQz81SOzbB6PQhnj5CJ2QhzN6aJ3uABVotgawIDsoX5jFcjn4p1dOdYGV7KS70omiJkDmKIK76uSJhjKaFussdy8qKAm2UcTKXyoLA5QmgV%2BrNISgTr9ImdZADpPCEG1zi%2FcITzWs7g47f3iqxqtFB7wa96Fk0zEoXU22nstDK9UqCwi8gTa%2FMeSs7LxrA6pKqXisi9kcl8jMKsmarrkEko7MxOebEMsGBNvuLlsNn%2FFn67jw3yh4KE%2BMoIrvQYLgBQ%2BPxV1r7X4LtlV9843X2lm%2FeO8IqjHBNKgBe3UKSUyvZuOHaIiRTJdj4DzctKItawLirUhNC0T2T03fuc7NdIJVWuLX8cPDrkUOMSkHD%2FI7JuQ5fynTkR4goODR%2BuiF6YXr9jOQMpBw0EmCBxIccRXhYLHVop7A%2BQ%2FZT4Egwfh%2FjKDDLk82%2BBjqkARP5JXgDTtzkFavT6RTsNiOVLzD%2BEFWJzy6Ws1cZVQwBvfLnG%2FMqIL7dnUxodXvXDv7%2F25IQ0XD3rvWgth1%2FpIKHBE%2F8FZHYXDx3z7yn7IENBpEIiK8PbWy6oZS%2Bp3KG%2B2%2FxAJus4xb4j8S%2Bxz6pG1kBXg93mqvUWTS0kHF4%2FJZ5Ao549u%2BdjWK%2BoEpJUR%2FPn1MuWro1cOeOxLpBOfl%2BAhk7yZxu&X-Amz-Signature=5ee6765459c6d93eb31aa290370c06f40e8b5d5a710151408375f8f087d43551&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRZSNDY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxk3kxNcwdWow1tZbHRPzJZk7FJQwEUDRPca6%2FrWN7PAIhAKvNqfyu4pEoifWRZsWjGrl6%2FNCpApZdduRlGrLB0ChDKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7%2FKyghjhVXyc%2FIjgq3AOe30f0JZLnNXr0%2FaWSr73%2B9ueS6uuNbJiGHa%2BEOlfG%2BsU%2BXgwHdaIiJ7%2FBsy0qesjYAgSvtqqIn%2B2h1%2Fliw4vYQLBaSN1EhJoYGlNSXkhBElE%2BrCcE4bZrKUFgud3dbiysKngsWO2Fq%2BnXVCpenVwRQxh9oaCt%2FLcFfMgyZ0b1FZQuv9lkdR6VOtNFqFnUXQT6%2F2egKhWcbMNQz81SOzbB6PQhnj5CJ2QhzN6aJ3uABVotgawIDsoX5jFcjn4p1dOdYGV7KS70omiJkDmKIK76uSJhjKaFussdy8qKAm2UcTKXyoLA5QmgV%2BrNISgTr9ImdZADpPCEG1zi%2FcITzWs7g47f3iqxqtFB7wa96Fk0zEoXU22nstDK9UqCwi8gTa%2FMeSs7LxrA6pKqXisi9kcl8jMKsmarrkEko7MxOebEMsGBNvuLlsNn%2FFn67jw3yh4KE%2BMoIrvQYLgBQ%2BPxV1r7X4LtlV9843X2lm%2FeO8IqjHBNKgBe3UKSUyvZuOHaIiRTJdj4DzctKItawLirUhNC0T2T03fuc7NdIJVWuLX8cPDrkUOMSkHD%2FI7JuQ5fynTkR4goODR%2BuiF6YXr9jOQMpBw0EmCBxIccRXhYLHVop7A%2BQ%2FZT4Egwfh%2FjKDDLk82%2BBjqkARP5JXgDTtzkFavT6RTsNiOVLzD%2BEFWJzy6Ws1cZVQwBvfLnG%2FMqIL7dnUxodXvXDv7%2F25IQ0XD3rvWgth1%2FpIKHBE%2F8FZHYXDx3z7yn7IENBpEIiK8PbWy6oZS%2Bp3KG%2B2%2FxAJus4xb4j8S%2Bxz6pG1kBXg93mqvUWTS0kHF4%2FJZ5Ao549u%2BdjWK%2BoEpJUR%2FPn1MuWro1cOeOxLpBOfl%2BAhk7yZxu&X-Amz-Signature=7df50ac2a7088f214450a34982abb5ee3b4176c75fc16cd3e25e8677209a3261&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRZSNDY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxk3kxNcwdWow1tZbHRPzJZk7FJQwEUDRPca6%2FrWN7PAIhAKvNqfyu4pEoifWRZsWjGrl6%2FNCpApZdduRlGrLB0ChDKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7%2FKyghjhVXyc%2FIjgq3AOe30f0JZLnNXr0%2FaWSr73%2B9ueS6uuNbJiGHa%2BEOlfG%2BsU%2BXgwHdaIiJ7%2FBsy0qesjYAgSvtqqIn%2B2h1%2Fliw4vYQLBaSN1EhJoYGlNSXkhBElE%2BrCcE4bZrKUFgud3dbiysKngsWO2Fq%2BnXVCpenVwRQxh9oaCt%2FLcFfMgyZ0b1FZQuv9lkdR6VOtNFqFnUXQT6%2F2egKhWcbMNQz81SOzbB6PQhnj5CJ2QhzN6aJ3uABVotgawIDsoX5jFcjn4p1dOdYGV7KS70omiJkDmKIK76uSJhjKaFussdy8qKAm2UcTKXyoLA5QmgV%2BrNISgTr9ImdZADpPCEG1zi%2FcITzWs7g47f3iqxqtFB7wa96Fk0zEoXU22nstDK9UqCwi8gTa%2FMeSs7LxrA6pKqXisi9kcl8jMKsmarrkEko7MxOebEMsGBNvuLlsNn%2FFn67jw3yh4KE%2BMoIrvQYLgBQ%2BPxV1r7X4LtlV9843X2lm%2FeO8IqjHBNKgBe3UKSUyvZuOHaIiRTJdj4DzctKItawLirUhNC0T2T03fuc7NdIJVWuLX8cPDrkUOMSkHD%2FI7JuQ5fynTkR4goODR%2BuiF6YXr9jOQMpBw0EmCBxIccRXhYLHVop7A%2BQ%2FZT4Egwfh%2FjKDDLk82%2BBjqkARP5JXgDTtzkFavT6RTsNiOVLzD%2BEFWJzy6Ws1cZVQwBvfLnG%2FMqIL7dnUxodXvXDv7%2F25IQ0XD3rvWgth1%2FpIKHBE%2F8FZHYXDx3z7yn7IENBpEIiK8PbWy6oZS%2Bp3KG%2B2%2FxAJus4xb4j8S%2Bxz6pG1kBXg93mqvUWTS0kHF4%2FJZ5Ao549u%2BdjWK%2BoEpJUR%2FPn1MuWro1cOeOxLpBOfl%2BAhk7yZxu&X-Amz-Signature=7147a9505ab16551eb092ae3f4b709037085677e45b5c784e3c9bf3177732494&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRZSNDY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxk3kxNcwdWow1tZbHRPzJZk7FJQwEUDRPca6%2FrWN7PAIhAKvNqfyu4pEoifWRZsWjGrl6%2FNCpApZdduRlGrLB0ChDKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7%2FKyghjhVXyc%2FIjgq3AOe30f0JZLnNXr0%2FaWSr73%2B9ueS6uuNbJiGHa%2BEOlfG%2BsU%2BXgwHdaIiJ7%2FBsy0qesjYAgSvtqqIn%2B2h1%2Fliw4vYQLBaSN1EhJoYGlNSXkhBElE%2BrCcE4bZrKUFgud3dbiysKngsWO2Fq%2BnXVCpenVwRQxh9oaCt%2FLcFfMgyZ0b1FZQuv9lkdR6VOtNFqFnUXQT6%2F2egKhWcbMNQz81SOzbB6PQhnj5CJ2QhzN6aJ3uABVotgawIDsoX5jFcjn4p1dOdYGV7KS70omiJkDmKIK76uSJhjKaFussdy8qKAm2UcTKXyoLA5QmgV%2BrNISgTr9ImdZADpPCEG1zi%2FcITzWs7g47f3iqxqtFB7wa96Fk0zEoXU22nstDK9UqCwi8gTa%2FMeSs7LxrA6pKqXisi9kcl8jMKsmarrkEko7MxOebEMsGBNvuLlsNn%2FFn67jw3yh4KE%2BMoIrvQYLgBQ%2BPxV1r7X4LtlV9843X2lm%2FeO8IqjHBNKgBe3UKSUyvZuOHaIiRTJdj4DzctKItawLirUhNC0T2T03fuc7NdIJVWuLX8cPDrkUOMSkHD%2FI7JuQ5fynTkR4goODR%2BuiF6YXr9jOQMpBw0EmCBxIccRXhYLHVop7A%2BQ%2FZT4Egwfh%2FjKDDLk82%2BBjqkARP5JXgDTtzkFavT6RTsNiOVLzD%2BEFWJzy6Ws1cZVQwBvfLnG%2FMqIL7dnUxodXvXDv7%2F25IQ0XD3rvWgth1%2FpIKHBE%2F8FZHYXDx3z7yn7IENBpEIiK8PbWy6oZS%2Bp3KG%2B2%2FxAJus4xb4j8S%2Bxz6pG1kBXg93mqvUWTS0kHF4%2FJZ5Ao549u%2BdjWK%2BoEpJUR%2FPn1MuWro1cOeOxLpBOfl%2BAhk7yZxu&X-Amz-Signature=f2dca885ad25e2bd0b758cae1845217690ebc7a4f31d23c5311df6df3ad36a98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRZSNDY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxk3kxNcwdWow1tZbHRPzJZk7FJQwEUDRPca6%2FrWN7PAIhAKvNqfyu4pEoifWRZsWjGrl6%2FNCpApZdduRlGrLB0ChDKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7%2FKyghjhVXyc%2FIjgq3AOe30f0JZLnNXr0%2FaWSr73%2B9ueS6uuNbJiGHa%2BEOlfG%2BsU%2BXgwHdaIiJ7%2FBsy0qesjYAgSvtqqIn%2B2h1%2Fliw4vYQLBaSN1EhJoYGlNSXkhBElE%2BrCcE4bZrKUFgud3dbiysKngsWO2Fq%2BnXVCpenVwRQxh9oaCt%2FLcFfMgyZ0b1FZQuv9lkdR6VOtNFqFnUXQT6%2F2egKhWcbMNQz81SOzbB6PQhnj5CJ2QhzN6aJ3uABVotgawIDsoX5jFcjn4p1dOdYGV7KS70omiJkDmKIK76uSJhjKaFussdy8qKAm2UcTKXyoLA5QmgV%2BrNISgTr9ImdZADpPCEG1zi%2FcITzWs7g47f3iqxqtFB7wa96Fk0zEoXU22nstDK9UqCwi8gTa%2FMeSs7LxrA6pKqXisi9kcl8jMKsmarrkEko7MxOebEMsGBNvuLlsNn%2FFn67jw3yh4KE%2BMoIrvQYLgBQ%2BPxV1r7X4LtlV9843X2lm%2FeO8IqjHBNKgBe3UKSUyvZuOHaIiRTJdj4DzctKItawLirUhNC0T2T03fuc7NdIJVWuLX8cPDrkUOMSkHD%2FI7JuQ5fynTkR4goODR%2BuiF6YXr9jOQMpBw0EmCBxIccRXhYLHVop7A%2BQ%2FZT4Egwfh%2FjKDDLk82%2BBjqkARP5JXgDTtzkFavT6RTsNiOVLzD%2BEFWJzy6Ws1cZVQwBvfLnG%2FMqIL7dnUxodXvXDv7%2F25IQ0XD3rvWgth1%2FpIKHBE%2F8FZHYXDx3z7yn7IENBpEIiK8PbWy6oZS%2Bp3KG%2B2%2FxAJus4xb4j8S%2Bxz6pG1kBXg93mqvUWTS0kHF4%2FJZ5Ao549u%2BdjWK%2BoEpJUR%2FPn1MuWro1cOeOxLpBOfl%2BAhk7yZxu&X-Amz-Signature=30f74a70b8079ec8bd6c9b17104654f4bb307eb78f1486c081fe71a6452ce30d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRZSNDY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxk3kxNcwdWow1tZbHRPzJZk7FJQwEUDRPca6%2FrWN7PAIhAKvNqfyu4pEoifWRZsWjGrl6%2FNCpApZdduRlGrLB0ChDKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7%2FKyghjhVXyc%2FIjgq3AOe30f0JZLnNXr0%2FaWSr73%2B9ueS6uuNbJiGHa%2BEOlfG%2BsU%2BXgwHdaIiJ7%2FBsy0qesjYAgSvtqqIn%2B2h1%2Fliw4vYQLBaSN1EhJoYGlNSXkhBElE%2BrCcE4bZrKUFgud3dbiysKngsWO2Fq%2BnXVCpenVwRQxh9oaCt%2FLcFfMgyZ0b1FZQuv9lkdR6VOtNFqFnUXQT6%2F2egKhWcbMNQz81SOzbB6PQhnj5CJ2QhzN6aJ3uABVotgawIDsoX5jFcjn4p1dOdYGV7KS70omiJkDmKIK76uSJhjKaFussdy8qKAm2UcTKXyoLA5QmgV%2BrNISgTr9ImdZADpPCEG1zi%2FcITzWs7g47f3iqxqtFB7wa96Fk0zEoXU22nstDK9UqCwi8gTa%2FMeSs7LxrA6pKqXisi9kcl8jMKsmarrkEko7MxOebEMsGBNvuLlsNn%2FFn67jw3yh4KE%2BMoIrvQYLgBQ%2BPxV1r7X4LtlV9843X2lm%2FeO8IqjHBNKgBe3UKSUyvZuOHaIiRTJdj4DzctKItawLirUhNC0T2T03fuc7NdIJVWuLX8cPDrkUOMSkHD%2FI7JuQ5fynTkR4goODR%2BuiF6YXr9jOQMpBw0EmCBxIccRXhYLHVop7A%2BQ%2FZT4Egwfh%2FjKDDLk82%2BBjqkARP5JXgDTtzkFavT6RTsNiOVLzD%2BEFWJzy6Ws1cZVQwBvfLnG%2FMqIL7dnUxodXvXDv7%2F25IQ0XD3rvWgth1%2FpIKHBE%2F8FZHYXDx3z7yn7IENBpEIiK8PbWy6oZS%2Bp3KG%2B2%2FxAJus4xb4j8S%2Bxz6pG1kBXg93mqvUWTS0kHF4%2FJZ5Ao549u%2BdjWK%2BoEpJUR%2FPn1MuWro1cOeOxLpBOfl%2BAhk7yZxu&X-Amz-Signature=be9dc54c5019bebfde97bbdfb6752efeb88f6b409b963e6a4c5ed394f303fd90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRZSNDY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxk3kxNcwdWow1tZbHRPzJZk7FJQwEUDRPca6%2FrWN7PAIhAKvNqfyu4pEoifWRZsWjGrl6%2FNCpApZdduRlGrLB0ChDKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7%2FKyghjhVXyc%2FIjgq3AOe30f0JZLnNXr0%2FaWSr73%2B9ueS6uuNbJiGHa%2BEOlfG%2BsU%2BXgwHdaIiJ7%2FBsy0qesjYAgSvtqqIn%2B2h1%2Fliw4vYQLBaSN1EhJoYGlNSXkhBElE%2BrCcE4bZrKUFgud3dbiysKngsWO2Fq%2BnXVCpenVwRQxh9oaCt%2FLcFfMgyZ0b1FZQuv9lkdR6VOtNFqFnUXQT6%2F2egKhWcbMNQz81SOzbB6PQhnj5CJ2QhzN6aJ3uABVotgawIDsoX5jFcjn4p1dOdYGV7KS70omiJkDmKIK76uSJhjKaFussdy8qKAm2UcTKXyoLA5QmgV%2BrNISgTr9ImdZADpPCEG1zi%2FcITzWs7g47f3iqxqtFB7wa96Fk0zEoXU22nstDK9UqCwi8gTa%2FMeSs7LxrA6pKqXisi9kcl8jMKsmarrkEko7MxOebEMsGBNvuLlsNn%2FFn67jw3yh4KE%2BMoIrvQYLgBQ%2BPxV1r7X4LtlV9843X2lm%2FeO8IqjHBNKgBe3UKSUyvZuOHaIiRTJdj4DzctKItawLirUhNC0T2T03fuc7NdIJVWuLX8cPDrkUOMSkHD%2FI7JuQ5fynTkR4goODR%2BuiF6YXr9jOQMpBw0EmCBxIccRXhYLHVop7A%2BQ%2FZT4Egwfh%2FjKDDLk82%2BBjqkARP5JXgDTtzkFavT6RTsNiOVLzD%2BEFWJzy6Ws1cZVQwBvfLnG%2FMqIL7dnUxodXvXDv7%2F25IQ0XD3rvWgth1%2FpIKHBE%2F8FZHYXDx3z7yn7IENBpEIiK8PbWy6oZS%2Bp3KG%2B2%2FxAJus4xb4j8S%2Bxz6pG1kBXg93mqvUWTS0kHF4%2FJZ5Ao549u%2BdjWK%2BoEpJUR%2FPn1MuWro1cOeOxLpBOfl%2BAhk7yZxu&X-Amz-Signature=9186944873799f136d48556f310ae340a61b3129df2455c378346a9a477de003&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRZSNDY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxk3kxNcwdWow1tZbHRPzJZk7FJQwEUDRPca6%2FrWN7PAIhAKvNqfyu4pEoifWRZsWjGrl6%2FNCpApZdduRlGrLB0ChDKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7%2FKyghjhVXyc%2FIjgq3AOe30f0JZLnNXr0%2FaWSr73%2B9ueS6uuNbJiGHa%2BEOlfG%2BsU%2BXgwHdaIiJ7%2FBsy0qesjYAgSvtqqIn%2B2h1%2Fliw4vYQLBaSN1EhJoYGlNSXkhBElE%2BrCcE4bZrKUFgud3dbiysKngsWO2Fq%2BnXVCpenVwRQxh9oaCt%2FLcFfMgyZ0b1FZQuv9lkdR6VOtNFqFnUXQT6%2F2egKhWcbMNQz81SOzbB6PQhnj5CJ2QhzN6aJ3uABVotgawIDsoX5jFcjn4p1dOdYGV7KS70omiJkDmKIK76uSJhjKaFussdy8qKAm2UcTKXyoLA5QmgV%2BrNISgTr9ImdZADpPCEG1zi%2FcITzWs7g47f3iqxqtFB7wa96Fk0zEoXU22nstDK9UqCwi8gTa%2FMeSs7LxrA6pKqXisi9kcl8jMKsmarrkEko7MxOebEMsGBNvuLlsNn%2FFn67jw3yh4KE%2BMoIrvQYLgBQ%2BPxV1r7X4LtlV9843X2lm%2FeO8IqjHBNKgBe3UKSUyvZuOHaIiRTJdj4DzctKItawLirUhNC0T2T03fuc7NdIJVWuLX8cPDrkUOMSkHD%2FI7JuQ5fynTkR4goODR%2BuiF6YXr9jOQMpBw0EmCBxIccRXhYLHVop7A%2BQ%2FZT4Egwfh%2FjKDDLk82%2BBjqkARP5JXgDTtzkFavT6RTsNiOVLzD%2BEFWJzy6Ws1cZVQwBvfLnG%2FMqIL7dnUxodXvXDv7%2F25IQ0XD3rvWgth1%2FpIKHBE%2F8FZHYXDx3z7yn7IENBpEIiK8PbWy6oZS%2Bp3KG%2B2%2FxAJus4xb4j8S%2Bxz6pG1kBXg93mqvUWTS0kHF4%2FJZ5Ao549u%2BdjWK%2BoEpJUR%2FPn1MuWro1cOeOxLpBOfl%2BAhk7yZxu&X-Amz-Signature=79891e431ae2d9f8d25d9385863ff335a9775c65bd489c1cfdbfd29a7698c023&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
