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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWJW2YA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFvfGxgRbkPSFQmuy9pY6%2FgPKCEG6Cj4uuhnVT54MZcMAiBGaBB%2FU0KTJReOm1SzUfAs6tTM75WnUXZvD00w37ftTCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrp6513HOzjk2qZGzKtwD3XKj7xZMBFMWRZYcC78W2CmhkxzgtlkdwllZSlBmY7czaZoRp4vg%2FU9QM5knXkAqmjHmaBAYhjsFehoAyFdJhTNl%2B4Y1V6Olq7lZcScnXsjkFWdFXK92AhTywq7PfDvUj6gJ1NqsPFWCx33lis7jeU%2BpUBYsJ6M%2BcVYizif6oymdP6djtTg9ASfrI156hMj%2Bj%2FI%2BOKPBvLT6HyriFTPUwTJzK%2FOzobKkX0hvX8VqMBy5jaIzP0T8vndhIoMTP81Z%2F94OmmT9%2FyFoEQkBVQZc9LXfRjlUkEhboOZLcvEpZn81m2qnF%2FXfvw%2B1Aad10qmzDdxlFC%2FuRRkcqf4oAIx7aNpLnPuMyogKfPFqAetuv%2FGqxsISks6qY1K8lkVv7b9FP3fygDd8ZUZckwQIUVvAkI1UI7DiPRP60lhcoZc3X59I0XkVWf7yzzRCoYgxHjzWzzFdC17GPByhTuAJolN5B3Bk%2BpuDEc5IN1iCiFJOSVANfzD5Qt4GkTc%2FsKYPE%2F%2BwJPmh7ao%2B5XjL9ShHgyQmTQw0IUuuydBwbkpz8QpJSv1%2FeW0jnHa3ZJ4CoqKVLs5iOOvKDxTUNUR2HihhR96x%2B4P%2BgmKJDcLHNTTYx3k9kQWlNWiO1jwO5Sv55Isw3PeKwQY6pgEmczhOmPOen0jYkPqHqhr%2FrU9RFTZyKidrWbew7BNIMMsVHTQ3eL2nBTnNutMvIvSABbuRp2ErPQQ8CZRjJ7SxYkEerb1YG66xVe3xLmMD3nApp8KXGQMBW7CrNcZs6Yruqbf7g0RepxHvubrfnLqpONjbnxKfaijdwCcu021eEN7PqlplnKnnAkwDwjDffkVbHSfMzWPyqr7lSiFswMe1LOrDzwuv&X-Amz-Signature=abf94ddad3ee6552ae8176d661483ec0a89a98fdce5f77d326ba860a2ee50ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWJW2YA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFvfGxgRbkPSFQmuy9pY6%2FgPKCEG6Cj4uuhnVT54MZcMAiBGaBB%2FU0KTJReOm1SzUfAs6tTM75WnUXZvD00w37ftTCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrp6513HOzjk2qZGzKtwD3XKj7xZMBFMWRZYcC78W2CmhkxzgtlkdwllZSlBmY7czaZoRp4vg%2FU9QM5knXkAqmjHmaBAYhjsFehoAyFdJhTNl%2B4Y1V6Olq7lZcScnXsjkFWdFXK92AhTywq7PfDvUj6gJ1NqsPFWCx33lis7jeU%2BpUBYsJ6M%2BcVYizif6oymdP6djtTg9ASfrI156hMj%2Bj%2FI%2BOKPBvLT6HyriFTPUwTJzK%2FOzobKkX0hvX8VqMBy5jaIzP0T8vndhIoMTP81Z%2F94OmmT9%2FyFoEQkBVQZc9LXfRjlUkEhboOZLcvEpZn81m2qnF%2FXfvw%2B1Aad10qmzDdxlFC%2FuRRkcqf4oAIx7aNpLnPuMyogKfPFqAetuv%2FGqxsISks6qY1K8lkVv7b9FP3fygDd8ZUZckwQIUVvAkI1UI7DiPRP60lhcoZc3X59I0XkVWf7yzzRCoYgxHjzWzzFdC17GPByhTuAJolN5B3Bk%2BpuDEc5IN1iCiFJOSVANfzD5Qt4GkTc%2FsKYPE%2F%2BwJPmh7ao%2B5XjL9ShHgyQmTQw0IUuuydBwbkpz8QpJSv1%2FeW0jnHa3ZJ4CoqKVLs5iOOvKDxTUNUR2HihhR96x%2B4P%2BgmKJDcLHNTTYx3k9kQWlNWiO1jwO5Sv55Isw3PeKwQY6pgEmczhOmPOen0jYkPqHqhr%2FrU9RFTZyKidrWbew7BNIMMsVHTQ3eL2nBTnNutMvIvSABbuRp2ErPQQ8CZRjJ7SxYkEerb1YG66xVe3xLmMD3nApp8KXGQMBW7CrNcZs6Yruqbf7g0RepxHvubrfnLqpONjbnxKfaijdwCcu021eEN7PqlplnKnnAkwDwjDffkVbHSfMzWPyqr7lSiFswMe1LOrDzwuv&X-Amz-Signature=d3670c12dfefaebc0f3a1de529759734fab71fb7632c5baf3b8965fb8d3cba09&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWJW2YA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFvfGxgRbkPSFQmuy9pY6%2FgPKCEG6Cj4uuhnVT54MZcMAiBGaBB%2FU0KTJReOm1SzUfAs6tTM75WnUXZvD00w37ftTCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrp6513HOzjk2qZGzKtwD3XKj7xZMBFMWRZYcC78W2CmhkxzgtlkdwllZSlBmY7czaZoRp4vg%2FU9QM5knXkAqmjHmaBAYhjsFehoAyFdJhTNl%2B4Y1V6Olq7lZcScnXsjkFWdFXK92AhTywq7PfDvUj6gJ1NqsPFWCx33lis7jeU%2BpUBYsJ6M%2BcVYizif6oymdP6djtTg9ASfrI156hMj%2Bj%2FI%2BOKPBvLT6HyriFTPUwTJzK%2FOzobKkX0hvX8VqMBy5jaIzP0T8vndhIoMTP81Z%2F94OmmT9%2FyFoEQkBVQZc9LXfRjlUkEhboOZLcvEpZn81m2qnF%2FXfvw%2B1Aad10qmzDdxlFC%2FuRRkcqf4oAIx7aNpLnPuMyogKfPFqAetuv%2FGqxsISks6qY1K8lkVv7b9FP3fygDd8ZUZckwQIUVvAkI1UI7DiPRP60lhcoZc3X59I0XkVWf7yzzRCoYgxHjzWzzFdC17GPByhTuAJolN5B3Bk%2BpuDEc5IN1iCiFJOSVANfzD5Qt4GkTc%2FsKYPE%2F%2BwJPmh7ao%2B5XjL9ShHgyQmTQw0IUuuydBwbkpz8QpJSv1%2FeW0jnHa3ZJ4CoqKVLs5iOOvKDxTUNUR2HihhR96x%2B4P%2BgmKJDcLHNTTYx3k9kQWlNWiO1jwO5Sv55Isw3PeKwQY6pgEmczhOmPOen0jYkPqHqhr%2FrU9RFTZyKidrWbew7BNIMMsVHTQ3eL2nBTnNutMvIvSABbuRp2ErPQQ8CZRjJ7SxYkEerb1YG66xVe3xLmMD3nApp8KXGQMBW7CrNcZs6Yruqbf7g0RepxHvubrfnLqpONjbnxKfaijdwCcu021eEN7PqlplnKnnAkwDwjDffkVbHSfMzWPyqr7lSiFswMe1LOrDzwuv&X-Amz-Signature=430fd3d23c8507d6d173c6c877acc6e935c482df5ca7e261440185fc5471e5b2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWJW2YA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFvfGxgRbkPSFQmuy9pY6%2FgPKCEG6Cj4uuhnVT54MZcMAiBGaBB%2FU0KTJReOm1SzUfAs6tTM75WnUXZvD00w37ftTCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrp6513HOzjk2qZGzKtwD3XKj7xZMBFMWRZYcC78W2CmhkxzgtlkdwllZSlBmY7czaZoRp4vg%2FU9QM5knXkAqmjHmaBAYhjsFehoAyFdJhTNl%2B4Y1V6Olq7lZcScnXsjkFWdFXK92AhTywq7PfDvUj6gJ1NqsPFWCx33lis7jeU%2BpUBYsJ6M%2BcVYizif6oymdP6djtTg9ASfrI156hMj%2Bj%2FI%2BOKPBvLT6HyriFTPUwTJzK%2FOzobKkX0hvX8VqMBy5jaIzP0T8vndhIoMTP81Z%2F94OmmT9%2FyFoEQkBVQZc9LXfRjlUkEhboOZLcvEpZn81m2qnF%2FXfvw%2B1Aad10qmzDdxlFC%2FuRRkcqf4oAIx7aNpLnPuMyogKfPFqAetuv%2FGqxsISks6qY1K8lkVv7b9FP3fygDd8ZUZckwQIUVvAkI1UI7DiPRP60lhcoZc3X59I0XkVWf7yzzRCoYgxHjzWzzFdC17GPByhTuAJolN5B3Bk%2BpuDEc5IN1iCiFJOSVANfzD5Qt4GkTc%2FsKYPE%2F%2BwJPmh7ao%2B5XjL9ShHgyQmTQw0IUuuydBwbkpz8QpJSv1%2FeW0jnHa3ZJ4CoqKVLs5iOOvKDxTUNUR2HihhR96x%2B4P%2BgmKJDcLHNTTYx3k9kQWlNWiO1jwO5Sv55Isw3PeKwQY6pgEmczhOmPOen0jYkPqHqhr%2FrU9RFTZyKidrWbew7BNIMMsVHTQ3eL2nBTnNutMvIvSABbuRp2ErPQQ8CZRjJ7SxYkEerb1YG66xVe3xLmMD3nApp8KXGQMBW7CrNcZs6Yruqbf7g0RepxHvubrfnLqpONjbnxKfaijdwCcu021eEN7PqlplnKnnAkwDwjDffkVbHSfMzWPyqr7lSiFswMe1LOrDzwuv&X-Amz-Signature=0ad75ebdafd753b3f8ae676a7a04edd6a9b9ada32e9c1baa97633e494faedcbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWJW2YA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFvfGxgRbkPSFQmuy9pY6%2FgPKCEG6Cj4uuhnVT54MZcMAiBGaBB%2FU0KTJReOm1SzUfAs6tTM75WnUXZvD00w37ftTCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrp6513HOzjk2qZGzKtwD3XKj7xZMBFMWRZYcC78W2CmhkxzgtlkdwllZSlBmY7czaZoRp4vg%2FU9QM5knXkAqmjHmaBAYhjsFehoAyFdJhTNl%2B4Y1V6Olq7lZcScnXsjkFWdFXK92AhTywq7PfDvUj6gJ1NqsPFWCx33lis7jeU%2BpUBYsJ6M%2BcVYizif6oymdP6djtTg9ASfrI156hMj%2Bj%2FI%2BOKPBvLT6HyriFTPUwTJzK%2FOzobKkX0hvX8VqMBy5jaIzP0T8vndhIoMTP81Z%2F94OmmT9%2FyFoEQkBVQZc9LXfRjlUkEhboOZLcvEpZn81m2qnF%2FXfvw%2B1Aad10qmzDdxlFC%2FuRRkcqf4oAIx7aNpLnPuMyogKfPFqAetuv%2FGqxsISks6qY1K8lkVv7b9FP3fygDd8ZUZckwQIUVvAkI1UI7DiPRP60lhcoZc3X59I0XkVWf7yzzRCoYgxHjzWzzFdC17GPByhTuAJolN5B3Bk%2BpuDEc5IN1iCiFJOSVANfzD5Qt4GkTc%2FsKYPE%2F%2BwJPmh7ao%2B5XjL9ShHgyQmTQw0IUuuydBwbkpz8QpJSv1%2FeW0jnHa3ZJ4CoqKVLs5iOOvKDxTUNUR2HihhR96x%2B4P%2BgmKJDcLHNTTYx3k9kQWlNWiO1jwO5Sv55Isw3PeKwQY6pgEmczhOmPOen0jYkPqHqhr%2FrU9RFTZyKidrWbew7BNIMMsVHTQ3eL2nBTnNutMvIvSABbuRp2ErPQQ8CZRjJ7SxYkEerb1YG66xVe3xLmMD3nApp8KXGQMBW7CrNcZs6Yruqbf7g0RepxHvubrfnLqpONjbnxKfaijdwCcu021eEN7PqlplnKnnAkwDwjDffkVbHSfMzWPyqr7lSiFswMe1LOrDzwuv&X-Amz-Signature=7ff5c2660a62818ba20d3ef5544c136e29e59e7bfe2d7891aefc82c1f099ba48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWJW2YA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFvfGxgRbkPSFQmuy9pY6%2FgPKCEG6Cj4uuhnVT54MZcMAiBGaBB%2FU0KTJReOm1SzUfAs6tTM75WnUXZvD00w37ftTCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrp6513HOzjk2qZGzKtwD3XKj7xZMBFMWRZYcC78W2CmhkxzgtlkdwllZSlBmY7czaZoRp4vg%2FU9QM5knXkAqmjHmaBAYhjsFehoAyFdJhTNl%2B4Y1V6Olq7lZcScnXsjkFWdFXK92AhTywq7PfDvUj6gJ1NqsPFWCx33lis7jeU%2BpUBYsJ6M%2BcVYizif6oymdP6djtTg9ASfrI156hMj%2Bj%2FI%2BOKPBvLT6HyriFTPUwTJzK%2FOzobKkX0hvX8VqMBy5jaIzP0T8vndhIoMTP81Z%2F94OmmT9%2FyFoEQkBVQZc9LXfRjlUkEhboOZLcvEpZn81m2qnF%2FXfvw%2B1Aad10qmzDdxlFC%2FuRRkcqf4oAIx7aNpLnPuMyogKfPFqAetuv%2FGqxsISks6qY1K8lkVv7b9FP3fygDd8ZUZckwQIUVvAkI1UI7DiPRP60lhcoZc3X59I0XkVWf7yzzRCoYgxHjzWzzFdC17GPByhTuAJolN5B3Bk%2BpuDEc5IN1iCiFJOSVANfzD5Qt4GkTc%2FsKYPE%2F%2BwJPmh7ao%2B5XjL9ShHgyQmTQw0IUuuydBwbkpz8QpJSv1%2FeW0jnHa3ZJ4CoqKVLs5iOOvKDxTUNUR2HihhR96x%2B4P%2BgmKJDcLHNTTYx3k9kQWlNWiO1jwO5Sv55Isw3PeKwQY6pgEmczhOmPOen0jYkPqHqhr%2FrU9RFTZyKidrWbew7BNIMMsVHTQ3eL2nBTnNutMvIvSABbuRp2ErPQQ8CZRjJ7SxYkEerb1YG66xVe3xLmMD3nApp8KXGQMBW7CrNcZs6Yruqbf7g0RepxHvubrfnLqpONjbnxKfaijdwCcu021eEN7PqlplnKnnAkwDwjDffkVbHSfMzWPyqr7lSiFswMe1LOrDzwuv&X-Amz-Signature=3f4d525494ffd4ec88f6a97d70a35becc7083d01a6814a613338645b51d71aca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWJW2YA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFvfGxgRbkPSFQmuy9pY6%2FgPKCEG6Cj4uuhnVT54MZcMAiBGaBB%2FU0KTJReOm1SzUfAs6tTM75WnUXZvD00w37ftTCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrp6513HOzjk2qZGzKtwD3XKj7xZMBFMWRZYcC78W2CmhkxzgtlkdwllZSlBmY7czaZoRp4vg%2FU9QM5knXkAqmjHmaBAYhjsFehoAyFdJhTNl%2B4Y1V6Olq7lZcScnXsjkFWdFXK92AhTywq7PfDvUj6gJ1NqsPFWCx33lis7jeU%2BpUBYsJ6M%2BcVYizif6oymdP6djtTg9ASfrI156hMj%2Bj%2FI%2BOKPBvLT6HyriFTPUwTJzK%2FOzobKkX0hvX8VqMBy5jaIzP0T8vndhIoMTP81Z%2F94OmmT9%2FyFoEQkBVQZc9LXfRjlUkEhboOZLcvEpZn81m2qnF%2FXfvw%2B1Aad10qmzDdxlFC%2FuRRkcqf4oAIx7aNpLnPuMyogKfPFqAetuv%2FGqxsISks6qY1K8lkVv7b9FP3fygDd8ZUZckwQIUVvAkI1UI7DiPRP60lhcoZc3X59I0XkVWf7yzzRCoYgxHjzWzzFdC17GPByhTuAJolN5B3Bk%2BpuDEc5IN1iCiFJOSVANfzD5Qt4GkTc%2FsKYPE%2F%2BwJPmh7ao%2B5XjL9ShHgyQmTQw0IUuuydBwbkpz8QpJSv1%2FeW0jnHa3ZJ4CoqKVLs5iOOvKDxTUNUR2HihhR96x%2B4P%2BgmKJDcLHNTTYx3k9kQWlNWiO1jwO5Sv55Isw3PeKwQY6pgEmczhOmPOen0jYkPqHqhr%2FrU9RFTZyKidrWbew7BNIMMsVHTQ3eL2nBTnNutMvIvSABbuRp2ErPQQ8CZRjJ7SxYkEerb1YG66xVe3xLmMD3nApp8KXGQMBW7CrNcZs6Yruqbf7g0RepxHvubrfnLqpONjbnxKfaijdwCcu021eEN7PqlplnKnnAkwDwjDffkVbHSfMzWPyqr7lSiFswMe1LOrDzwuv&X-Amz-Signature=e845c7c0db6eff2a3f910bd74a560896d72cb83f9f5601380d45d334383b3bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWJW2YA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFvfGxgRbkPSFQmuy9pY6%2FgPKCEG6Cj4uuhnVT54MZcMAiBGaBB%2FU0KTJReOm1SzUfAs6tTM75WnUXZvD00w37ftTCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrp6513HOzjk2qZGzKtwD3XKj7xZMBFMWRZYcC78W2CmhkxzgtlkdwllZSlBmY7czaZoRp4vg%2FU9QM5knXkAqmjHmaBAYhjsFehoAyFdJhTNl%2B4Y1V6Olq7lZcScnXsjkFWdFXK92AhTywq7PfDvUj6gJ1NqsPFWCx33lis7jeU%2BpUBYsJ6M%2BcVYizif6oymdP6djtTg9ASfrI156hMj%2Bj%2FI%2BOKPBvLT6HyriFTPUwTJzK%2FOzobKkX0hvX8VqMBy5jaIzP0T8vndhIoMTP81Z%2F94OmmT9%2FyFoEQkBVQZc9LXfRjlUkEhboOZLcvEpZn81m2qnF%2FXfvw%2B1Aad10qmzDdxlFC%2FuRRkcqf4oAIx7aNpLnPuMyogKfPFqAetuv%2FGqxsISks6qY1K8lkVv7b9FP3fygDd8ZUZckwQIUVvAkI1UI7DiPRP60lhcoZc3X59I0XkVWf7yzzRCoYgxHjzWzzFdC17GPByhTuAJolN5B3Bk%2BpuDEc5IN1iCiFJOSVANfzD5Qt4GkTc%2FsKYPE%2F%2BwJPmh7ao%2B5XjL9ShHgyQmTQw0IUuuydBwbkpz8QpJSv1%2FeW0jnHa3ZJ4CoqKVLs5iOOvKDxTUNUR2HihhR96x%2B4P%2BgmKJDcLHNTTYx3k9kQWlNWiO1jwO5Sv55Isw3PeKwQY6pgEmczhOmPOen0jYkPqHqhr%2FrU9RFTZyKidrWbew7BNIMMsVHTQ3eL2nBTnNutMvIvSABbuRp2ErPQQ8CZRjJ7SxYkEerb1YG66xVe3xLmMD3nApp8KXGQMBW7CrNcZs6Yruqbf7g0RepxHvubrfnLqpONjbnxKfaijdwCcu021eEN7PqlplnKnnAkwDwjDffkVbHSfMzWPyqr7lSiFswMe1LOrDzwuv&X-Amz-Signature=a08879ba5f89f8ed26f104da37af12677ed5779373a0892eba95aaba1754ac6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
