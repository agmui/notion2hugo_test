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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQF3IF5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDIweoI%2FW49QsWn9miZqUzgEbTHE07e88WB7hmj75EFtQIhAJAS64vl7FfbiLR08RBGnduGc9lUp0RRP%2BFY3upp%2BbGZKv8DCGYQABoMNjM3NDIzMTgzODA1IgxXbStWJLJYYhMI9wMq3ANyoFL48zqLy5IVndQPDdPORrc6q5LDBWt%2BskA4rHYe%2FKsgjnEYmWdbyba%2F39gQzVNKZmp9UgIHISl8YF%2BDxzEt6%2FQB7nY%2BH5wXUVwD%2BUHT6wgdXK%2BS3TSTrQDfD7jm%2BSPuF%2Fs4AjhWJbkOJOVURZKIowWfVcEUgUrXYsk24QApmTq8WerlzOZGdc5GOl6oM7oNqYs2qp1hCJrdbdu3b0KPBVaBKCBAEq4L9MC%2FhbP2nTvlCTRSSlA%2B3Xg2Ay%2BBP9YA4RNxM6C74jnqPz0Lf8DxrLMlo5U1iOiXFh3ZY8DhWottWJgD7tBz9t0eqDetMXqbAaMPcV4JkukWb3Kua4IS45QMHlCGVLWUyDaLkC6L1JT8X3huvEBxAOzReKfGWY9Zmzy640EXYH8BVdUtZoEBVblrVrhIe2YUxbIo8z8Dj%2FWcQxSnjok%2B56bCKcq7mU9LTBemsiqi95AwLqn7vwTZxx%2BiC%2FgjfDUp69ShqgKjEhGae2lz7YDVi6E6itRGOL2D2piN7Xra0Ba7kpL3au%2BdN6syam2Xkf1fMUQm7lTEpQNk5N%2F8bv304lzmLMdYMeyNE6yFCY%2Bi7vCSROLghpbkXj9WTxZMtHFM7RaP5QUY9eTrvI4G9Ijhk%2FncpDC6jsLCBjqkAUE7moGYoCf4%2BYKQqIXNrcFGMrY%2F7z4izXx5oexYEI4JotjSVuPvEbFkTJfbt0OUeLyz%2FUpgXAZ%2FNmQeZTmTYWbbkyHhV9SXqQ2V1yBMYcZt%2BhBRcq0BRbfVZCBHzs2c33rA%2BcgLEwvuq%2FFRl4X942hxqyauRaxE59j6pneJrTCtEqK1w62h5kxJk7MC%2BpsnvThM1aOwtbnp6vCWFpsjJewa3MVR&X-Amz-Signature=035786371363d8623bde3364804e4481f9ab8c01179702e48ebf5bac5a2e1be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQF3IF5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDIweoI%2FW49QsWn9miZqUzgEbTHE07e88WB7hmj75EFtQIhAJAS64vl7FfbiLR08RBGnduGc9lUp0RRP%2BFY3upp%2BbGZKv8DCGYQABoMNjM3NDIzMTgzODA1IgxXbStWJLJYYhMI9wMq3ANyoFL48zqLy5IVndQPDdPORrc6q5LDBWt%2BskA4rHYe%2FKsgjnEYmWdbyba%2F39gQzVNKZmp9UgIHISl8YF%2BDxzEt6%2FQB7nY%2BH5wXUVwD%2BUHT6wgdXK%2BS3TSTrQDfD7jm%2BSPuF%2Fs4AjhWJbkOJOVURZKIowWfVcEUgUrXYsk24QApmTq8WerlzOZGdc5GOl6oM7oNqYs2qp1hCJrdbdu3b0KPBVaBKCBAEq4L9MC%2FhbP2nTvlCTRSSlA%2B3Xg2Ay%2BBP9YA4RNxM6C74jnqPz0Lf8DxrLMlo5U1iOiXFh3ZY8DhWottWJgD7tBz9t0eqDetMXqbAaMPcV4JkukWb3Kua4IS45QMHlCGVLWUyDaLkC6L1JT8X3huvEBxAOzReKfGWY9Zmzy640EXYH8BVdUtZoEBVblrVrhIe2YUxbIo8z8Dj%2FWcQxSnjok%2B56bCKcq7mU9LTBemsiqi95AwLqn7vwTZxx%2BiC%2FgjfDUp69ShqgKjEhGae2lz7YDVi6E6itRGOL2D2piN7Xra0Ba7kpL3au%2BdN6syam2Xkf1fMUQm7lTEpQNk5N%2F8bv304lzmLMdYMeyNE6yFCY%2Bi7vCSROLghpbkXj9WTxZMtHFM7RaP5QUY9eTrvI4G9Ijhk%2FncpDC6jsLCBjqkAUE7moGYoCf4%2BYKQqIXNrcFGMrY%2F7z4izXx5oexYEI4JotjSVuPvEbFkTJfbt0OUeLyz%2FUpgXAZ%2FNmQeZTmTYWbbkyHhV9SXqQ2V1yBMYcZt%2BhBRcq0BRbfVZCBHzs2c33rA%2BcgLEwvuq%2FFRl4X942hxqyauRaxE59j6pneJrTCtEqK1w62h5kxJk7MC%2BpsnvThM1aOwtbnp6vCWFpsjJewa3MVR&X-Amz-Signature=dff83d8787a19df9ec83e697cdf5f553a81520e23b1d9ab49c23b2af00f9add1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQF3IF5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDIweoI%2FW49QsWn9miZqUzgEbTHE07e88WB7hmj75EFtQIhAJAS64vl7FfbiLR08RBGnduGc9lUp0RRP%2BFY3upp%2BbGZKv8DCGYQABoMNjM3NDIzMTgzODA1IgxXbStWJLJYYhMI9wMq3ANyoFL48zqLy5IVndQPDdPORrc6q5LDBWt%2BskA4rHYe%2FKsgjnEYmWdbyba%2F39gQzVNKZmp9UgIHISl8YF%2BDxzEt6%2FQB7nY%2BH5wXUVwD%2BUHT6wgdXK%2BS3TSTrQDfD7jm%2BSPuF%2Fs4AjhWJbkOJOVURZKIowWfVcEUgUrXYsk24QApmTq8WerlzOZGdc5GOl6oM7oNqYs2qp1hCJrdbdu3b0KPBVaBKCBAEq4L9MC%2FhbP2nTvlCTRSSlA%2B3Xg2Ay%2BBP9YA4RNxM6C74jnqPz0Lf8DxrLMlo5U1iOiXFh3ZY8DhWottWJgD7tBz9t0eqDetMXqbAaMPcV4JkukWb3Kua4IS45QMHlCGVLWUyDaLkC6L1JT8X3huvEBxAOzReKfGWY9Zmzy640EXYH8BVdUtZoEBVblrVrhIe2YUxbIo8z8Dj%2FWcQxSnjok%2B56bCKcq7mU9LTBemsiqi95AwLqn7vwTZxx%2BiC%2FgjfDUp69ShqgKjEhGae2lz7YDVi6E6itRGOL2D2piN7Xra0Ba7kpL3au%2BdN6syam2Xkf1fMUQm7lTEpQNk5N%2F8bv304lzmLMdYMeyNE6yFCY%2Bi7vCSROLghpbkXj9WTxZMtHFM7RaP5QUY9eTrvI4G9Ijhk%2FncpDC6jsLCBjqkAUE7moGYoCf4%2BYKQqIXNrcFGMrY%2F7z4izXx5oexYEI4JotjSVuPvEbFkTJfbt0OUeLyz%2FUpgXAZ%2FNmQeZTmTYWbbkyHhV9SXqQ2V1yBMYcZt%2BhBRcq0BRbfVZCBHzs2c33rA%2BcgLEwvuq%2FFRl4X942hxqyauRaxE59j6pneJrTCtEqK1w62h5kxJk7MC%2BpsnvThM1aOwtbnp6vCWFpsjJewa3MVR&X-Amz-Signature=0f2c876874b0c31d1e83b8a0df70edf6e3fb25838248e664e277609761deea09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQF3IF5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDIweoI%2FW49QsWn9miZqUzgEbTHE07e88WB7hmj75EFtQIhAJAS64vl7FfbiLR08RBGnduGc9lUp0RRP%2BFY3upp%2BbGZKv8DCGYQABoMNjM3NDIzMTgzODA1IgxXbStWJLJYYhMI9wMq3ANyoFL48zqLy5IVndQPDdPORrc6q5LDBWt%2BskA4rHYe%2FKsgjnEYmWdbyba%2F39gQzVNKZmp9UgIHISl8YF%2BDxzEt6%2FQB7nY%2BH5wXUVwD%2BUHT6wgdXK%2BS3TSTrQDfD7jm%2BSPuF%2Fs4AjhWJbkOJOVURZKIowWfVcEUgUrXYsk24QApmTq8WerlzOZGdc5GOl6oM7oNqYs2qp1hCJrdbdu3b0KPBVaBKCBAEq4L9MC%2FhbP2nTvlCTRSSlA%2B3Xg2Ay%2BBP9YA4RNxM6C74jnqPz0Lf8DxrLMlo5U1iOiXFh3ZY8DhWottWJgD7tBz9t0eqDetMXqbAaMPcV4JkukWb3Kua4IS45QMHlCGVLWUyDaLkC6L1JT8X3huvEBxAOzReKfGWY9Zmzy640EXYH8BVdUtZoEBVblrVrhIe2YUxbIo8z8Dj%2FWcQxSnjok%2B56bCKcq7mU9LTBemsiqi95AwLqn7vwTZxx%2BiC%2FgjfDUp69ShqgKjEhGae2lz7YDVi6E6itRGOL2D2piN7Xra0Ba7kpL3au%2BdN6syam2Xkf1fMUQm7lTEpQNk5N%2F8bv304lzmLMdYMeyNE6yFCY%2Bi7vCSROLghpbkXj9WTxZMtHFM7RaP5QUY9eTrvI4G9Ijhk%2FncpDC6jsLCBjqkAUE7moGYoCf4%2BYKQqIXNrcFGMrY%2F7z4izXx5oexYEI4JotjSVuPvEbFkTJfbt0OUeLyz%2FUpgXAZ%2FNmQeZTmTYWbbkyHhV9SXqQ2V1yBMYcZt%2BhBRcq0BRbfVZCBHzs2c33rA%2BcgLEwvuq%2FFRl4X942hxqyauRaxE59j6pneJrTCtEqK1w62h5kxJk7MC%2BpsnvThM1aOwtbnp6vCWFpsjJewa3MVR&X-Amz-Signature=40c4ea4e4552b44a320d26c2f7cfd69309f4df0d22bb8626801f9fee21a3b906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQF3IF5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDIweoI%2FW49QsWn9miZqUzgEbTHE07e88WB7hmj75EFtQIhAJAS64vl7FfbiLR08RBGnduGc9lUp0RRP%2BFY3upp%2BbGZKv8DCGYQABoMNjM3NDIzMTgzODA1IgxXbStWJLJYYhMI9wMq3ANyoFL48zqLy5IVndQPDdPORrc6q5LDBWt%2BskA4rHYe%2FKsgjnEYmWdbyba%2F39gQzVNKZmp9UgIHISl8YF%2BDxzEt6%2FQB7nY%2BH5wXUVwD%2BUHT6wgdXK%2BS3TSTrQDfD7jm%2BSPuF%2Fs4AjhWJbkOJOVURZKIowWfVcEUgUrXYsk24QApmTq8WerlzOZGdc5GOl6oM7oNqYs2qp1hCJrdbdu3b0KPBVaBKCBAEq4L9MC%2FhbP2nTvlCTRSSlA%2B3Xg2Ay%2BBP9YA4RNxM6C74jnqPz0Lf8DxrLMlo5U1iOiXFh3ZY8DhWottWJgD7tBz9t0eqDetMXqbAaMPcV4JkukWb3Kua4IS45QMHlCGVLWUyDaLkC6L1JT8X3huvEBxAOzReKfGWY9Zmzy640EXYH8BVdUtZoEBVblrVrhIe2YUxbIo8z8Dj%2FWcQxSnjok%2B56bCKcq7mU9LTBemsiqi95AwLqn7vwTZxx%2BiC%2FgjfDUp69ShqgKjEhGae2lz7YDVi6E6itRGOL2D2piN7Xra0Ba7kpL3au%2BdN6syam2Xkf1fMUQm7lTEpQNk5N%2F8bv304lzmLMdYMeyNE6yFCY%2Bi7vCSROLghpbkXj9WTxZMtHFM7RaP5QUY9eTrvI4G9Ijhk%2FncpDC6jsLCBjqkAUE7moGYoCf4%2BYKQqIXNrcFGMrY%2F7z4izXx5oexYEI4JotjSVuPvEbFkTJfbt0OUeLyz%2FUpgXAZ%2FNmQeZTmTYWbbkyHhV9SXqQ2V1yBMYcZt%2BhBRcq0BRbfVZCBHzs2c33rA%2BcgLEwvuq%2FFRl4X942hxqyauRaxE59j6pneJrTCtEqK1w62h5kxJk7MC%2BpsnvThM1aOwtbnp6vCWFpsjJewa3MVR&X-Amz-Signature=b42df28fc8224ee356f8932a1645a16053258987042f77007b42188380ae3ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQF3IF5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDIweoI%2FW49QsWn9miZqUzgEbTHE07e88WB7hmj75EFtQIhAJAS64vl7FfbiLR08RBGnduGc9lUp0RRP%2BFY3upp%2BbGZKv8DCGYQABoMNjM3NDIzMTgzODA1IgxXbStWJLJYYhMI9wMq3ANyoFL48zqLy5IVndQPDdPORrc6q5LDBWt%2BskA4rHYe%2FKsgjnEYmWdbyba%2F39gQzVNKZmp9UgIHISl8YF%2BDxzEt6%2FQB7nY%2BH5wXUVwD%2BUHT6wgdXK%2BS3TSTrQDfD7jm%2BSPuF%2Fs4AjhWJbkOJOVURZKIowWfVcEUgUrXYsk24QApmTq8WerlzOZGdc5GOl6oM7oNqYs2qp1hCJrdbdu3b0KPBVaBKCBAEq4L9MC%2FhbP2nTvlCTRSSlA%2B3Xg2Ay%2BBP9YA4RNxM6C74jnqPz0Lf8DxrLMlo5U1iOiXFh3ZY8DhWottWJgD7tBz9t0eqDetMXqbAaMPcV4JkukWb3Kua4IS45QMHlCGVLWUyDaLkC6L1JT8X3huvEBxAOzReKfGWY9Zmzy640EXYH8BVdUtZoEBVblrVrhIe2YUxbIo8z8Dj%2FWcQxSnjok%2B56bCKcq7mU9LTBemsiqi95AwLqn7vwTZxx%2BiC%2FgjfDUp69ShqgKjEhGae2lz7YDVi6E6itRGOL2D2piN7Xra0Ba7kpL3au%2BdN6syam2Xkf1fMUQm7lTEpQNk5N%2F8bv304lzmLMdYMeyNE6yFCY%2Bi7vCSROLghpbkXj9WTxZMtHFM7RaP5QUY9eTrvI4G9Ijhk%2FncpDC6jsLCBjqkAUE7moGYoCf4%2BYKQqIXNrcFGMrY%2F7z4izXx5oexYEI4JotjSVuPvEbFkTJfbt0OUeLyz%2FUpgXAZ%2FNmQeZTmTYWbbkyHhV9SXqQ2V1yBMYcZt%2BhBRcq0BRbfVZCBHzs2c33rA%2BcgLEwvuq%2FFRl4X942hxqyauRaxE59j6pneJrTCtEqK1w62h5kxJk7MC%2BpsnvThM1aOwtbnp6vCWFpsjJewa3MVR&X-Amz-Signature=e3c40feb41d489b36165c2d9808b4331501ccc449fcce33863360d7d9706cb63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQF3IF5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDIweoI%2FW49QsWn9miZqUzgEbTHE07e88WB7hmj75EFtQIhAJAS64vl7FfbiLR08RBGnduGc9lUp0RRP%2BFY3upp%2BbGZKv8DCGYQABoMNjM3NDIzMTgzODA1IgxXbStWJLJYYhMI9wMq3ANyoFL48zqLy5IVndQPDdPORrc6q5LDBWt%2BskA4rHYe%2FKsgjnEYmWdbyba%2F39gQzVNKZmp9UgIHISl8YF%2BDxzEt6%2FQB7nY%2BH5wXUVwD%2BUHT6wgdXK%2BS3TSTrQDfD7jm%2BSPuF%2Fs4AjhWJbkOJOVURZKIowWfVcEUgUrXYsk24QApmTq8WerlzOZGdc5GOl6oM7oNqYs2qp1hCJrdbdu3b0KPBVaBKCBAEq4L9MC%2FhbP2nTvlCTRSSlA%2B3Xg2Ay%2BBP9YA4RNxM6C74jnqPz0Lf8DxrLMlo5U1iOiXFh3ZY8DhWottWJgD7tBz9t0eqDetMXqbAaMPcV4JkukWb3Kua4IS45QMHlCGVLWUyDaLkC6L1JT8X3huvEBxAOzReKfGWY9Zmzy640EXYH8BVdUtZoEBVblrVrhIe2YUxbIo8z8Dj%2FWcQxSnjok%2B56bCKcq7mU9LTBemsiqi95AwLqn7vwTZxx%2BiC%2FgjfDUp69ShqgKjEhGae2lz7YDVi6E6itRGOL2D2piN7Xra0Ba7kpL3au%2BdN6syam2Xkf1fMUQm7lTEpQNk5N%2F8bv304lzmLMdYMeyNE6yFCY%2Bi7vCSROLghpbkXj9WTxZMtHFM7RaP5QUY9eTrvI4G9Ijhk%2FncpDC6jsLCBjqkAUE7moGYoCf4%2BYKQqIXNrcFGMrY%2F7z4izXx5oexYEI4JotjSVuPvEbFkTJfbt0OUeLyz%2FUpgXAZ%2FNmQeZTmTYWbbkyHhV9SXqQ2V1yBMYcZt%2BhBRcq0BRbfVZCBHzs2c33rA%2BcgLEwvuq%2FFRl4X942hxqyauRaxE59j6pneJrTCtEqK1w62h5kxJk7MC%2BpsnvThM1aOwtbnp6vCWFpsjJewa3MVR&X-Amz-Signature=3ebaae3dff5ded8a43eff42b6feda810eac1a2212be4e15d4fb5e0ccc41a041e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQF3IF5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDIweoI%2FW49QsWn9miZqUzgEbTHE07e88WB7hmj75EFtQIhAJAS64vl7FfbiLR08RBGnduGc9lUp0RRP%2BFY3upp%2BbGZKv8DCGYQABoMNjM3NDIzMTgzODA1IgxXbStWJLJYYhMI9wMq3ANyoFL48zqLy5IVndQPDdPORrc6q5LDBWt%2BskA4rHYe%2FKsgjnEYmWdbyba%2F39gQzVNKZmp9UgIHISl8YF%2BDxzEt6%2FQB7nY%2BH5wXUVwD%2BUHT6wgdXK%2BS3TSTrQDfD7jm%2BSPuF%2Fs4AjhWJbkOJOVURZKIowWfVcEUgUrXYsk24QApmTq8WerlzOZGdc5GOl6oM7oNqYs2qp1hCJrdbdu3b0KPBVaBKCBAEq4L9MC%2FhbP2nTvlCTRSSlA%2B3Xg2Ay%2BBP9YA4RNxM6C74jnqPz0Lf8DxrLMlo5U1iOiXFh3ZY8DhWottWJgD7tBz9t0eqDetMXqbAaMPcV4JkukWb3Kua4IS45QMHlCGVLWUyDaLkC6L1JT8X3huvEBxAOzReKfGWY9Zmzy640EXYH8BVdUtZoEBVblrVrhIe2YUxbIo8z8Dj%2FWcQxSnjok%2B56bCKcq7mU9LTBemsiqi95AwLqn7vwTZxx%2BiC%2FgjfDUp69ShqgKjEhGae2lz7YDVi6E6itRGOL2D2piN7Xra0Ba7kpL3au%2BdN6syam2Xkf1fMUQm7lTEpQNk5N%2F8bv304lzmLMdYMeyNE6yFCY%2Bi7vCSROLghpbkXj9WTxZMtHFM7RaP5QUY9eTrvI4G9Ijhk%2FncpDC6jsLCBjqkAUE7moGYoCf4%2BYKQqIXNrcFGMrY%2F7z4izXx5oexYEI4JotjSVuPvEbFkTJfbt0OUeLyz%2FUpgXAZ%2FNmQeZTmTYWbbkyHhV9SXqQ2V1yBMYcZt%2BhBRcq0BRbfVZCBHzs2c33rA%2BcgLEwvuq%2FFRl4X942hxqyauRaxE59j6pneJrTCtEqK1w62h5kxJk7MC%2BpsnvThM1aOwtbnp6vCWFpsjJewa3MVR&X-Amz-Signature=6185f2b74ebc046921f23ade8eac113ad074cdd6909639ab76ce9ab7960da537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
