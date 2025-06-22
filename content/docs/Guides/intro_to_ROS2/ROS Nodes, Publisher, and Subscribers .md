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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVKEKXC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChxDMeP5PVf%2BCitv990OFqVJZZAbHKEPe29%2BC97d0xcQIhAKdVpvTusJpEsIF%2BlCo7MJ7cDrGZW8%2FERc5Y0PrH96nYKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAk6UrN4TTlWL1ZCwq3AP8qSoRc45frgWgNUi%2BTN55D6ZfUDBsWGeif2%2BOvAsFEynFf6mQ9jQgM%2F3Qt2kdGC21IlitjJ18VwzeR6VdTYPHtlz%2BDkh0YBCdeOjU0N55Wo23tXCEKUAU8qM3HVt4WXF1wgAiLCxRuidyDAtmCEaKDAI2twULvCpNOty%2B4czVvlBJdff04P94b9SzOI9SUcxOY%2BKP9Hm3n7cOnpIeCJjqBTBwHtKlCYlJwMiRzNk0b0CfDBCfM9w2g2Gx7noH4QiaiEEVdXgIi8UR86h86ZMKglgLdotfsJSexy8DYDsAXByEWkrQHR1AyPFEQKRhhAV849sG%2BdqM4HyhUrXgjl237uUZgYriOEUA73iPZ0O5jKAsFvFJsy%2FzxGF1t2JbPn2%2FcsYBeZYQPe5KY2ZFsMz%2BAYQmTiXBlk3IUUqojVvIjNDvJBYULk6ZLIvdRea7Z0NUyXUSTZfvdQ0c9qG5yPacVHhLh3BcX61UBPX8KgJVsi%2BQAB%2BBxmrIvbrXQ%2BAQE1R1WZZfoadIbi7Z8ezxQ8hC%2F%2BVHps9FumTMgdXqY34OQFXoeZbKzqDbGdAaPMN70q4sah1XhZTaGoIiuJeSqOY8OLgHsFVZBaNfnt1bsnAjAvRyp5nIr%2BamsJ3YWzCxx97CBjqkAWE6j78QtUMdd1D3mMYaU8tA3AxGLg7ugYafcmCJM%2Fk5u%2FmMfXzyZwKbmbtWvAXPbz%2B%2FqbvpGtvwAKW%2FVW40JMVS8aqNIGGq3L7fXiV5dr11ZAVe9tzX%2FkruKJWFCedg48lQC%2FREGWwlU%2BOJ5YSvHXKZSGNgUz3qLDIPeVjgmkLQZTDlqkcVcE3062ow20KQZfZcWvpbNnH00fSDX9uo28hLmIOE&X-Amz-Signature=2a7d10254ce808a076e7d6d61b472db60bd9aee4956413c285758f820bc2d7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVKEKXC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChxDMeP5PVf%2BCitv990OFqVJZZAbHKEPe29%2BC97d0xcQIhAKdVpvTusJpEsIF%2BlCo7MJ7cDrGZW8%2FERc5Y0PrH96nYKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAk6UrN4TTlWL1ZCwq3AP8qSoRc45frgWgNUi%2BTN55D6ZfUDBsWGeif2%2BOvAsFEynFf6mQ9jQgM%2F3Qt2kdGC21IlitjJ18VwzeR6VdTYPHtlz%2BDkh0YBCdeOjU0N55Wo23tXCEKUAU8qM3HVt4WXF1wgAiLCxRuidyDAtmCEaKDAI2twULvCpNOty%2B4czVvlBJdff04P94b9SzOI9SUcxOY%2BKP9Hm3n7cOnpIeCJjqBTBwHtKlCYlJwMiRzNk0b0CfDBCfM9w2g2Gx7noH4QiaiEEVdXgIi8UR86h86ZMKglgLdotfsJSexy8DYDsAXByEWkrQHR1AyPFEQKRhhAV849sG%2BdqM4HyhUrXgjl237uUZgYriOEUA73iPZ0O5jKAsFvFJsy%2FzxGF1t2JbPn2%2FcsYBeZYQPe5KY2ZFsMz%2BAYQmTiXBlk3IUUqojVvIjNDvJBYULk6ZLIvdRea7Z0NUyXUSTZfvdQ0c9qG5yPacVHhLh3BcX61UBPX8KgJVsi%2BQAB%2BBxmrIvbrXQ%2BAQE1R1WZZfoadIbi7Z8ezxQ8hC%2F%2BVHps9FumTMgdXqY34OQFXoeZbKzqDbGdAaPMN70q4sah1XhZTaGoIiuJeSqOY8OLgHsFVZBaNfnt1bsnAjAvRyp5nIr%2BamsJ3YWzCxx97CBjqkAWE6j78QtUMdd1D3mMYaU8tA3AxGLg7ugYafcmCJM%2Fk5u%2FmMfXzyZwKbmbtWvAXPbz%2B%2FqbvpGtvwAKW%2FVW40JMVS8aqNIGGq3L7fXiV5dr11ZAVe9tzX%2FkruKJWFCedg48lQC%2FREGWwlU%2BOJ5YSvHXKZSGNgUz3qLDIPeVjgmkLQZTDlqkcVcE3062ow20KQZfZcWvpbNnH00fSDX9uo28hLmIOE&X-Amz-Signature=b9de266bf904a57a80f5c54b1359490a89638de3ee09bb5ddc670fd2541a15f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVKEKXC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChxDMeP5PVf%2BCitv990OFqVJZZAbHKEPe29%2BC97d0xcQIhAKdVpvTusJpEsIF%2BlCo7MJ7cDrGZW8%2FERc5Y0PrH96nYKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAk6UrN4TTlWL1ZCwq3AP8qSoRc45frgWgNUi%2BTN55D6ZfUDBsWGeif2%2BOvAsFEynFf6mQ9jQgM%2F3Qt2kdGC21IlitjJ18VwzeR6VdTYPHtlz%2BDkh0YBCdeOjU0N55Wo23tXCEKUAU8qM3HVt4WXF1wgAiLCxRuidyDAtmCEaKDAI2twULvCpNOty%2B4czVvlBJdff04P94b9SzOI9SUcxOY%2BKP9Hm3n7cOnpIeCJjqBTBwHtKlCYlJwMiRzNk0b0CfDBCfM9w2g2Gx7noH4QiaiEEVdXgIi8UR86h86ZMKglgLdotfsJSexy8DYDsAXByEWkrQHR1AyPFEQKRhhAV849sG%2BdqM4HyhUrXgjl237uUZgYriOEUA73iPZ0O5jKAsFvFJsy%2FzxGF1t2JbPn2%2FcsYBeZYQPe5KY2ZFsMz%2BAYQmTiXBlk3IUUqojVvIjNDvJBYULk6ZLIvdRea7Z0NUyXUSTZfvdQ0c9qG5yPacVHhLh3BcX61UBPX8KgJVsi%2BQAB%2BBxmrIvbrXQ%2BAQE1R1WZZfoadIbi7Z8ezxQ8hC%2F%2BVHps9FumTMgdXqY34OQFXoeZbKzqDbGdAaPMN70q4sah1XhZTaGoIiuJeSqOY8OLgHsFVZBaNfnt1bsnAjAvRyp5nIr%2BamsJ3YWzCxx97CBjqkAWE6j78QtUMdd1D3mMYaU8tA3AxGLg7ugYafcmCJM%2Fk5u%2FmMfXzyZwKbmbtWvAXPbz%2B%2FqbvpGtvwAKW%2FVW40JMVS8aqNIGGq3L7fXiV5dr11ZAVe9tzX%2FkruKJWFCedg48lQC%2FREGWwlU%2BOJ5YSvHXKZSGNgUz3qLDIPeVjgmkLQZTDlqkcVcE3062ow20KQZfZcWvpbNnH00fSDX9uo28hLmIOE&X-Amz-Signature=67108cc495489517f2808055fc1bd32e7b8f33165cd0e45f6308b02deb3d5c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVKEKXC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChxDMeP5PVf%2BCitv990OFqVJZZAbHKEPe29%2BC97d0xcQIhAKdVpvTusJpEsIF%2BlCo7MJ7cDrGZW8%2FERc5Y0PrH96nYKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAk6UrN4TTlWL1ZCwq3AP8qSoRc45frgWgNUi%2BTN55D6ZfUDBsWGeif2%2BOvAsFEynFf6mQ9jQgM%2F3Qt2kdGC21IlitjJ18VwzeR6VdTYPHtlz%2BDkh0YBCdeOjU0N55Wo23tXCEKUAU8qM3HVt4WXF1wgAiLCxRuidyDAtmCEaKDAI2twULvCpNOty%2B4czVvlBJdff04P94b9SzOI9SUcxOY%2BKP9Hm3n7cOnpIeCJjqBTBwHtKlCYlJwMiRzNk0b0CfDBCfM9w2g2Gx7noH4QiaiEEVdXgIi8UR86h86ZMKglgLdotfsJSexy8DYDsAXByEWkrQHR1AyPFEQKRhhAV849sG%2BdqM4HyhUrXgjl237uUZgYriOEUA73iPZ0O5jKAsFvFJsy%2FzxGF1t2JbPn2%2FcsYBeZYQPe5KY2ZFsMz%2BAYQmTiXBlk3IUUqojVvIjNDvJBYULk6ZLIvdRea7Z0NUyXUSTZfvdQ0c9qG5yPacVHhLh3BcX61UBPX8KgJVsi%2BQAB%2BBxmrIvbrXQ%2BAQE1R1WZZfoadIbi7Z8ezxQ8hC%2F%2BVHps9FumTMgdXqY34OQFXoeZbKzqDbGdAaPMN70q4sah1XhZTaGoIiuJeSqOY8OLgHsFVZBaNfnt1bsnAjAvRyp5nIr%2BamsJ3YWzCxx97CBjqkAWE6j78QtUMdd1D3mMYaU8tA3AxGLg7ugYafcmCJM%2Fk5u%2FmMfXzyZwKbmbtWvAXPbz%2B%2FqbvpGtvwAKW%2FVW40JMVS8aqNIGGq3L7fXiV5dr11ZAVe9tzX%2FkruKJWFCedg48lQC%2FREGWwlU%2BOJ5YSvHXKZSGNgUz3qLDIPeVjgmkLQZTDlqkcVcE3062ow20KQZfZcWvpbNnH00fSDX9uo28hLmIOE&X-Amz-Signature=e64064d7563507010945d7fd1aeb055c3be532b9e065ba442d4f734b0c24a741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVKEKXC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChxDMeP5PVf%2BCitv990OFqVJZZAbHKEPe29%2BC97d0xcQIhAKdVpvTusJpEsIF%2BlCo7MJ7cDrGZW8%2FERc5Y0PrH96nYKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAk6UrN4TTlWL1ZCwq3AP8qSoRc45frgWgNUi%2BTN55D6ZfUDBsWGeif2%2BOvAsFEynFf6mQ9jQgM%2F3Qt2kdGC21IlitjJ18VwzeR6VdTYPHtlz%2BDkh0YBCdeOjU0N55Wo23tXCEKUAU8qM3HVt4WXF1wgAiLCxRuidyDAtmCEaKDAI2twULvCpNOty%2B4czVvlBJdff04P94b9SzOI9SUcxOY%2BKP9Hm3n7cOnpIeCJjqBTBwHtKlCYlJwMiRzNk0b0CfDBCfM9w2g2Gx7noH4QiaiEEVdXgIi8UR86h86ZMKglgLdotfsJSexy8DYDsAXByEWkrQHR1AyPFEQKRhhAV849sG%2BdqM4HyhUrXgjl237uUZgYriOEUA73iPZ0O5jKAsFvFJsy%2FzxGF1t2JbPn2%2FcsYBeZYQPe5KY2ZFsMz%2BAYQmTiXBlk3IUUqojVvIjNDvJBYULk6ZLIvdRea7Z0NUyXUSTZfvdQ0c9qG5yPacVHhLh3BcX61UBPX8KgJVsi%2BQAB%2BBxmrIvbrXQ%2BAQE1R1WZZfoadIbi7Z8ezxQ8hC%2F%2BVHps9FumTMgdXqY34OQFXoeZbKzqDbGdAaPMN70q4sah1XhZTaGoIiuJeSqOY8OLgHsFVZBaNfnt1bsnAjAvRyp5nIr%2BamsJ3YWzCxx97CBjqkAWE6j78QtUMdd1D3mMYaU8tA3AxGLg7ugYafcmCJM%2Fk5u%2FmMfXzyZwKbmbtWvAXPbz%2B%2FqbvpGtvwAKW%2FVW40JMVS8aqNIGGq3L7fXiV5dr11ZAVe9tzX%2FkruKJWFCedg48lQC%2FREGWwlU%2BOJ5YSvHXKZSGNgUz3qLDIPeVjgmkLQZTDlqkcVcE3062ow20KQZfZcWvpbNnH00fSDX9uo28hLmIOE&X-Amz-Signature=7b12bdff652cd1023f0f876b1fccf98fcee50741b4ee478fafbca42f672f46e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVKEKXC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChxDMeP5PVf%2BCitv990OFqVJZZAbHKEPe29%2BC97d0xcQIhAKdVpvTusJpEsIF%2BlCo7MJ7cDrGZW8%2FERc5Y0PrH96nYKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAk6UrN4TTlWL1ZCwq3AP8qSoRc45frgWgNUi%2BTN55D6ZfUDBsWGeif2%2BOvAsFEynFf6mQ9jQgM%2F3Qt2kdGC21IlitjJ18VwzeR6VdTYPHtlz%2BDkh0YBCdeOjU0N55Wo23tXCEKUAU8qM3HVt4WXF1wgAiLCxRuidyDAtmCEaKDAI2twULvCpNOty%2B4czVvlBJdff04P94b9SzOI9SUcxOY%2BKP9Hm3n7cOnpIeCJjqBTBwHtKlCYlJwMiRzNk0b0CfDBCfM9w2g2Gx7noH4QiaiEEVdXgIi8UR86h86ZMKglgLdotfsJSexy8DYDsAXByEWkrQHR1AyPFEQKRhhAV849sG%2BdqM4HyhUrXgjl237uUZgYriOEUA73iPZ0O5jKAsFvFJsy%2FzxGF1t2JbPn2%2FcsYBeZYQPe5KY2ZFsMz%2BAYQmTiXBlk3IUUqojVvIjNDvJBYULk6ZLIvdRea7Z0NUyXUSTZfvdQ0c9qG5yPacVHhLh3BcX61UBPX8KgJVsi%2BQAB%2BBxmrIvbrXQ%2BAQE1R1WZZfoadIbi7Z8ezxQ8hC%2F%2BVHps9FumTMgdXqY34OQFXoeZbKzqDbGdAaPMN70q4sah1XhZTaGoIiuJeSqOY8OLgHsFVZBaNfnt1bsnAjAvRyp5nIr%2BamsJ3YWzCxx97CBjqkAWE6j78QtUMdd1D3mMYaU8tA3AxGLg7ugYafcmCJM%2Fk5u%2FmMfXzyZwKbmbtWvAXPbz%2B%2FqbvpGtvwAKW%2FVW40JMVS8aqNIGGq3L7fXiV5dr11ZAVe9tzX%2FkruKJWFCedg48lQC%2FREGWwlU%2BOJ5YSvHXKZSGNgUz3qLDIPeVjgmkLQZTDlqkcVcE3062ow20KQZfZcWvpbNnH00fSDX9uo28hLmIOE&X-Amz-Signature=1f61d6b63de81f8ffe21a3de5f4edb9bf5a6fe8f51c8d335ab640c8070479ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVKEKXC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChxDMeP5PVf%2BCitv990OFqVJZZAbHKEPe29%2BC97d0xcQIhAKdVpvTusJpEsIF%2BlCo7MJ7cDrGZW8%2FERc5Y0PrH96nYKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAk6UrN4TTlWL1ZCwq3AP8qSoRc45frgWgNUi%2BTN55D6ZfUDBsWGeif2%2BOvAsFEynFf6mQ9jQgM%2F3Qt2kdGC21IlitjJ18VwzeR6VdTYPHtlz%2BDkh0YBCdeOjU0N55Wo23tXCEKUAU8qM3HVt4WXF1wgAiLCxRuidyDAtmCEaKDAI2twULvCpNOty%2B4czVvlBJdff04P94b9SzOI9SUcxOY%2BKP9Hm3n7cOnpIeCJjqBTBwHtKlCYlJwMiRzNk0b0CfDBCfM9w2g2Gx7noH4QiaiEEVdXgIi8UR86h86ZMKglgLdotfsJSexy8DYDsAXByEWkrQHR1AyPFEQKRhhAV849sG%2BdqM4HyhUrXgjl237uUZgYriOEUA73iPZ0O5jKAsFvFJsy%2FzxGF1t2JbPn2%2FcsYBeZYQPe5KY2ZFsMz%2BAYQmTiXBlk3IUUqojVvIjNDvJBYULk6ZLIvdRea7Z0NUyXUSTZfvdQ0c9qG5yPacVHhLh3BcX61UBPX8KgJVsi%2BQAB%2BBxmrIvbrXQ%2BAQE1R1WZZfoadIbi7Z8ezxQ8hC%2F%2BVHps9FumTMgdXqY34OQFXoeZbKzqDbGdAaPMN70q4sah1XhZTaGoIiuJeSqOY8OLgHsFVZBaNfnt1bsnAjAvRyp5nIr%2BamsJ3YWzCxx97CBjqkAWE6j78QtUMdd1D3mMYaU8tA3AxGLg7ugYafcmCJM%2Fk5u%2FmMfXzyZwKbmbtWvAXPbz%2B%2FqbvpGtvwAKW%2FVW40JMVS8aqNIGGq3L7fXiV5dr11ZAVe9tzX%2FkruKJWFCedg48lQC%2FREGWwlU%2BOJ5YSvHXKZSGNgUz3qLDIPeVjgmkLQZTDlqkcVcE3062ow20KQZfZcWvpbNnH00fSDX9uo28hLmIOE&X-Amz-Signature=4d5eea38038393b260d5acf49fd1711b81a33784cf3686852688aa136e168aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVKEKXC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChxDMeP5PVf%2BCitv990OFqVJZZAbHKEPe29%2BC97d0xcQIhAKdVpvTusJpEsIF%2BlCo7MJ7cDrGZW8%2FERc5Y0PrH96nYKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAk6UrN4TTlWL1ZCwq3AP8qSoRc45frgWgNUi%2BTN55D6ZfUDBsWGeif2%2BOvAsFEynFf6mQ9jQgM%2F3Qt2kdGC21IlitjJ18VwzeR6VdTYPHtlz%2BDkh0YBCdeOjU0N55Wo23tXCEKUAU8qM3HVt4WXF1wgAiLCxRuidyDAtmCEaKDAI2twULvCpNOty%2B4czVvlBJdff04P94b9SzOI9SUcxOY%2BKP9Hm3n7cOnpIeCJjqBTBwHtKlCYlJwMiRzNk0b0CfDBCfM9w2g2Gx7noH4QiaiEEVdXgIi8UR86h86ZMKglgLdotfsJSexy8DYDsAXByEWkrQHR1AyPFEQKRhhAV849sG%2BdqM4HyhUrXgjl237uUZgYriOEUA73iPZ0O5jKAsFvFJsy%2FzxGF1t2JbPn2%2FcsYBeZYQPe5KY2ZFsMz%2BAYQmTiXBlk3IUUqojVvIjNDvJBYULk6ZLIvdRea7Z0NUyXUSTZfvdQ0c9qG5yPacVHhLh3BcX61UBPX8KgJVsi%2BQAB%2BBxmrIvbrXQ%2BAQE1R1WZZfoadIbi7Z8ezxQ8hC%2F%2BVHps9FumTMgdXqY34OQFXoeZbKzqDbGdAaPMN70q4sah1XhZTaGoIiuJeSqOY8OLgHsFVZBaNfnt1bsnAjAvRyp5nIr%2BamsJ3YWzCxx97CBjqkAWE6j78QtUMdd1D3mMYaU8tA3AxGLg7ugYafcmCJM%2Fk5u%2FmMfXzyZwKbmbtWvAXPbz%2B%2FqbvpGtvwAKW%2FVW40JMVS8aqNIGGq3L7fXiV5dr11ZAVe9tzX%2FkruKJWFCedg48lQC%2FREGWwlU%2BOJ5YSvHXKZSGNgUz3qLDIPeVjgmkLQZTDlqkcVcE3062ow20KQZfZcWvpbNnH00fSDX9uo28hLmIOE&X-Amz-Signature=25ba523072f15c05def380c71979ae9aebcfa18f62b77f860308b2f3c73fe040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
