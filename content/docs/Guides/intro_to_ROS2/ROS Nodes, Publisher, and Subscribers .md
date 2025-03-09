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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUTPZI7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCHTSMiTn2%2BAm%2F7qEPZQIkcaZDzXAqn3kt98wfAQpYaQAIhAIqbdzd0qbGw%2BtelzoOQoWjWl4FUXjRHkCsqlQdWgAgeKv8DCHcQABoMNjM3NDIzMTgzODA1IgxJX%2BsWq14lHuZv%2Bkoq3AMAedrqZwFvKFxCe94fGrYerUkHAjNO0YCqndju12lnMrD7qT7ZoZ7fZ%2BFv7%2BtSwDewMoqRR3EGKVJpb1%2B8EtBh%2FgVDBmpjsrJOSgnYJWLW24Fkwxmx1zyn0C6tVD8cvjx31D3PJA5uNPe2zTWP%2BsvRl%2BoMiqmDiz2uxj44Mr80SvI63VdmY%2B6jTdxCe24aqMvE46zGiJDpXx90r%2BXFmKb3QbISSeQRq9gSW3c%2BYY5Qgyw5uJ9ELiblXj1DMnxPPMijaAycjzKH5QoNfV2%2BlysN7VK5rbzJa5kt5QhzCYfS8lrzR%2FSbFcl7vQ9JxgxH1Mh42A1222wqrGbrLrwo7Fu9fPeNuOQIcOp9xVRgGIHLMFt7zTGAW1X6e52deJeXXE0N2qqAcefF9Dnq%2F4yKnrNdZQ2g%2BUhApwkD9d9xfG1gbMD3p1mhxgphQMbvI1sBW1qaV2oa6JYYa78LHTCNka5FTpT4wLK3U2SbM7JdQ9swR23uz4cu1saCwaQ7AnpRQQL8mKva3w5NeCS2LzxmhnKMz4PV%2BfVQNLUd7yYxQkJQzK9eYJb8cT%2B6HrLO3TrpzDgI6EWDuGbbCywN89x4QFTVa8GFztzZKNasRXTJQryw5VnZsQRG47YfrnUSXzC9ura%2BBjqkAaNTlUbsNDFPq5IAdL%2BWk7DDVwFt%2FF3Ofu%2Bryv1E7eHcXd317POXdgsDLF0l8zlPJDSQ3v12ly6nbGn8HZhkfM57cdCapnML1m%2B7vziJpHKaMR5PgEF1QxxEhMMPZEgETwIcdavIgLhCxOGCH33hogHV8r1r9oa3q96sDlThGJh35IBHunjQ0jctjrLarJnj5TmM0JGf9r2jLzxlJvhfm6zw2rKG&X-Amz-Signature=faa3a39fea456d8682b64f1f9be23f034dbdd1a9ae22f7a0bbcfaabebb2ebbcc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUTPZI7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCHTSMiTn2%2BAm%2F7qEPZQIkcaZDzXAqn3kt98wfAQpYaQAIhAIqbdzd0qbGw%2BtelzoOQoWjWl4FUXjRHkCsqlQdWgAgeKv8DCHcQABoMNjM3NDIzMTgzODA1IgxJX%2BsWq14lHuZv%2Bkoq3AMAedrqZwFvKFxCe94fGrYerUkHAjNO0YCqndju12lnMrD7qT7ZoZ7fZ%2BFv7%2BtSwDewMoqRR3EGKVJpb1%2B8EtBh%2FgVDBmpjsrJOSgnYJWLW24Fkwxmx1zyn0C6tVD8cvjx31D3PJA5uNPe2zTWP%2BsvRl%2BoMiqmDiz2uxj44Mr80SvI63VdmY%2B6jTdxCe24aqMvE46zGiJDpXx90r%2BXFmKb3QbISSeQRq9gSW3c%2BYY5Qgyw5uJ9ELiblXj1DMnxPPMijaAycjzKH5QoNfV2%2BlysN7VK5rbzJa5kt5QhzCYfS8lrzR%2FSbFcl7vQ9JxgxH1Mh42A1222wqrGbrLrwo7Fu9fPeNuOQIcOp9xVRgGIHLMFt7zTGAW1X6e52deJeXXE0N2qqAcefF9Dnq%2F4yKnrNdZQ2g%2BUhApwkD9d9xfG1gbMD3p1mhxgphQMbvI1sBW1qaV2oa6JYYa78LHTCNka5FTpT4wLK3U2SbM7JdQ9swR23uz4cu1saCwaQ7AnpRQQL8mKva3w5NeCS2LzxmhnKMz4PV%2BfVQNLUd7yYxQkJQzK9eYJb8cT%2B6HrLO3TrpzDgI6EWDuGbbCywN89x4QFTVa8GFztzZKNasRXTJQryw5VnZsQRG47YfrnUSXzC9ura%2BBjqkAaNTlUbsNDFPq5IAdL%2BWk7DDVwFt%2FF3Ofu%2Bryv1E7eHcXd317POXdgsDLF0l8zlPJDSQ3v12ly6nbGn8HZhkfM57cdCapnML1m%2B7vziJpHKaMR5PgEF1QxxEhMMPZEgETwIcdavIgLhCxOGCH33hogHV8r1r9oa3q96sDlThGJh35IBHunjQ0jctjrLarJnj5TmM0JGf9r2jLzxlJvhfm6zw2rKG&X-Amz-Signature=4f753e062bc24ed2c86732a3bb24ed7e8bd1cbb4240a1913deecc812ac0fa540&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUTPZI7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCHTSMiTn2%2BAm%2F7qEPZQIkcaZDzXAqn3kt98wfAQpYaQAIhAIqbdzd0qbGw%2BtelzoOQoWjWl4FUXjRHkCsqlQdWgAgeKv8DCHcQABoMNjM3NDIzMTgzODA1IgxJX%2BsWq14lHuZv%2Bkoq3AMAedrqZwFvKFxCe94fGrYerUkHAjNO0YCqndju12lnMrD7qT7ZoZ7fZ%2BFv7%2BtSwDewMoqRR3EGKVJpb1%2B8EtBh%2FgVDBmpjsrJOSgnYJWLW24Fkwxmx1zyn0C6tVD8cvjx31D3PJA5uNPe2zTWP%2BsvRl%2BoMiqmDiz2uxj44Mr80SvI63VdmY%2B6jTdxCe24aqMvE46zGiJDpXx90r%2BXFmKb3QbISSeQRq9gSW3c%2BYY5Qgyw5uJ9ELiblXj1DMnxPPMijaAycjzKH5QoNfV2%2BlysN7VK5rbzJa5kt5QhzCYfS8lrzR%2FSbFcl7vQ9JxgxH1Mh42A1222wqrGbrLrwo7Fu9fPeNuOQIcOp9xVRgGIHLMFt7zTGAW1X6e52deJeXXE0N2qqAcefF9Dnq%2F4yKnrNdZQ2g%2BUhApwkD9d9xfG1gbMD3p1mhxgphQMbvI1sBW1qaV2oa6JYYa78LHTCNka5FTpT4wLK3U2SbM7JdQ9swR23uz4cu1saCwaQ7AnpRQQL8mKva3w5NeCS2LzxmhnKMz4PV%2BfVQNLUd7yYxQkJQzK9eYJb8cT%2B6HrLO3TrpzDgI6EWDuGbbCywN89x4QFTVa8GFztzZKNasRXTJQryw5VnZsQRG47YfrnUSXzC9ura%2BBjqkAaNTlUbsNDFPq5IAdL%2BWk7DDVwFt%2FF3Ofu%2Bryv1E7eHcXd317POXdgsDLF0l8zlPJDSQ3v12ly6nbGn8HZhkfM57cdCapnML1m%2B7vziJpHKaMR5PgEF1QxxEhMMPZEgETwIcdavIgLhCxOGCH33hogHV8r1r9oa3q96sDlThGJh35IBHunjQ0jctjrLarJnj5TmM0JGf9r2jLzxlJvhfm6zw2rKG&X-Amz-Signature=565c8cc8b3cca2dc76305ac08af246619109385a1621c9f09a83d369ffc4a526&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUTPZI7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCHTSMiTn2%2BAm%2F7qEPZQIkcaZDzXAqn3kt98wfAQpYaQAIhAIqbdzd0qbGw%2BtelzoOQoWjWl4FUXjRHkCsqlQdWgAgeKv8DCHcQABoMNjM3NDIzMTgzODA1IgxJX%2BsWq14lHuZv%2Bkoq3AMAedrqZwFvKFxCe94fGrYerUkHAjNO0YCqndju12lnMrD7qT7ZoZ7fZ%2BFv7%2BtSwDewMoqRR3EGKVJpb1%2B8EtBh%2FgVDBmpjsrJOSgnYJWLW24Fkwxmx1zyn0C6tVD8cvjx31D3PJA5uNPe2zTWP%2BsvRl%2BoMiqmDiz2uxj44Mr80SvI63VdmY%2B6jTdxCe24aqMvE46zGiJDpXx90r%2BXFmKb3QbISSeQRq9gSW3c%2BYY5Qgyw5uJ9ELiblXj1DMnxPPMijaAycjzKH5QoNfV2%2BlysN7VK5rbzJa5kt5QhzCYfS8lrzR%2FSbFcl7vQ9JxgxH1Mh42A1222wqrGbrLrwo7Fu9fPeNuOQIcOp9xVRgGIHLMFt7zTGAW1X6e52deJeXXE0N2qqAcefF9Dnq%2F4yKnrNdZQ2g%2BUhApwkD9d9xfG1gbMD3p1mhxgphQMbvI1sBW1qaV2oa6JYYa78LHTCNka5FTpT4wLK3U2SbM7JdQ9swR23uz4cu1saCwaQ7AnpRQQL8mKva3w5NeCS2LzxmhnKMz4PV%2BfVQNLUd7yYxQkJQzK9eYJb8cT%2B6HrLO3TrpzDgI6EWDuGbbCywN89x4QFTVa8GFztzZKNasRXTJQryw5VnZsQRG47YfrnUSXzC9ura%2BBjqkAaNTlUbsNDFPq5IAdL%2BWk7DDVwFt%2FF3Ofu%2Bryv1E7eHcXd317POXdgsDLF0l8zlPJDSQ3v12ly6nbGn8HZhkfM57cdCapnML1m%2B7vziJpHKaMR5PgEF1QxxEhMMPZEgETwIcdavIgLhCxOGCH33hogHV8r1r9oa3q96sDlThGJh35IBHunjQ0jctjrLarJnj5TmM0JGf9r2jLzxlJvhfm6zw2rKG&X-Amz-Signature=ef8706112e79403277a1f88fc575de3912d8dd057b8e94350a43ac039e79148c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUTPZI7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCHTSMiTn2%2BAm%2F7qEPZQIkcaZDzXAqn3kt98wfAQpYaQAIhAIqbdzd0qbGw%2BtelzoOQoWjWl4FUXjRHkCsqlQdWgAgeKv8DCHcQABoMNjM3NDIzMTgzODA1IgxJX%2BsWq14lHuZv%2Bkoq3AMAedrqZwFvKFxCe94fGrYerUkHAjNO0YCqndju12lnMrD7qT7ZoZ7fZ%2BFv7%2BtSwDewMoqRR3EGKVJpb1%2B8EtBh%2FgVDBmpjsrJOSgnYJWLW24Fkwxmx1zyn0C6tVD8cvjx31D3PJA5uNPe2zTWP%2BsvRl%2BoMiqmDiz2uxj44Mr80SvI63VdmY%2B6jTdxCe24aqMvE46zGiJDpXx90r%2BXFmKb3QbISSeQRq9gSW3c%2BYY5Qgyw5uJ9ELiblXj1DMnxPPMijaAycjzKH5QoNfV2%2BlysN7VK5rbzJa5kt5QhzCYfS8lrzR%2FSbFcl7vQ9JxgxH1Mh42A1222wqrGbrLrwo7Fu9fPeNuOQIcOp9xVRgGIHLMFt7zTGAW1X6e52deJeXXE0N2qqAcefF9Dnq%2F4yKnrNdZQ2g%2BUhApwkD9d9xfG1gbMD3p1mhxgphQMbvI1sBW1qaV2oa6JYYa78LHTCNka5FTpT4wLK3U2SbM7JdQ9swR23uz4cu1saCwaQ7AnpRQQL8mKva3w5NeCS2LzxmhnKMz4PV%2BfVQNLUd7yYxQkJQzK9eYJb8cT%2B6HrLO3TrpzDgI6EWDuGbbCywN89x4QFTVa8GFztzZKNasRXTJQryw5VnZsQRG47YfrnUSXzC9ura%2BBjqkAaNTlUbsNDFPq5IAdL%2BWk7DDVwFt%2FF3Ofu%2Bryv1E7eHcXd317POXdgsDLF0l8zlPJDSQ3v12ly6nbGn8HZhkfM57cdCapnML1m%2B7vziJpHKaMR5PgEF1QxxEhMMPZEgETwIcdavIgLhCxOGCH33hogHV8r1r9oa3q96sDlThGJh35IBHunjQ0jctjrLarJnj5TmM0JGf9r2jLzxlJvhfm6zw2rKG&X-Amz-Signature=c65f6eb4460c1b66c5d2ddfece4a9b764d6e9981c3fba69581857cea87208216&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUTPZI7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCHTSMiTn2%2BAm%2F7qEPZQIkcaZDzXAqn3kt98wfAQpYaQAIhAIqbdzd0qbGw%2BtelzoOQoWjWl4FUXjRHkCsqlQdWgAgeKv8DCHcQABoMNjM3NDIzMTgzODA1IgxJX%2BsWq14lHuZv%2Bkoq3AMAedrqZwFvKFxCe94fGrYerUkHAjNO0YCqndju12lnMrD7qT7ZoZ7fZ%2BFv7%2BtSwDewMoqRR3EGKVJpb1%2B8EtBh%2FgVDBmpjsrJOSgnYJWLW24Fkwxmx1zyn0C6tVD8cvjx31D3PJA5uNPe2zTWP%2BsvRl%2BoMiqmDiz2uxj44Mr80SvI63VdmY%2B6jTdxCe24aqMvE46zGiJDpXx90r%2BXFmKb3QbISSeQRq9gSW3c%2BYY5Qgyw5uJ9ELiblXj1DMnxPPMijaAycjzKH5QoNfV2%2BlysN7VK5rbzJa5kt5QhzCYfS8lrzR%2FSbFcl7vQ9JxgxH1Mh42A1222wqrGbrLrwo7Fu9fPeNuOQIcOp9xVRgGIHLMFt7zTGAW1X6e52deJeXXE0N2qqAcefF9Dnq%2F4yKnrNdZQ2g%2BUhApwkD9d9xfG1gbMD3p1mhxgphQMbvI1sBW1qaV2oa6JYYa78LHTCNka5FTpT4wLK3U2SbM7JdQ9swR23uz4cu1saCwaQ7AnpRQQL8mKva3w5NeCS2LzxmhnKMz4PV%2BfVQNLUd7yYxQkJQzK9eYJb8cT%2B6HrLO3TrpzDgI6EWDuGbbCywN89x4QFTVa8GFztzZKNasRXTJQryw5VnZsQRG47YfrnUSXzC9ura%2BBjqkAaNTlUbsNDFPq5IAdL%2BWk7DDVwFt%2FF3Ofu%2Bryv1E7eHcXd317POXdgsDLF0l8zlPJDSQ3v12ly6nbGn8HZhkfM57cdCapnML1m%2B7vziJpHKaMR5PgEF1QxxEhMMPZEgETwIcdavIgLhCxOGCH33hogHV8r1r9oa3q96sDlThGJh35IBHunjQ0jctjrLarJnj5TmM0JGf9r2jLzxlJvhfm6zw2rKG&X-Amz-Signature=c23b8264a003072d630e912989a125e61495cd7ba0581e2976300463e240b576&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUTPZI7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCHTSMiTn2%2BAm%2F7qEPZQIkcaZDzXAqn3kt98wfAQpYaQAIhAIqbdzd0qbGw%2BtelzoOQoWjWl4FUXjRHkCsqlQdWgAgeKv8DCHcQABoMNjM3NDIzMTgzODA1IgxJX%2BsWq14lHuZv%2Bkoq3AMAedrqZwFvKFxCe94fGrYerUkHAjNO0YCqndju12lnMrD7qT7ZoZ7fZ%2BFv7%2BtSwDewMoqRR3EGKVJpb1%2B8EtBh%2FgVDBmpjsrJOSgnYJWLW24Fkwxmx1zyn0C6tVD8cvjx31D3PJA5uNPe2zTWP%2BsvRl%2BoMiqmDiz2uxj44Mr80SvI63VdmY%2B6jTdxCe24aqMvE46zGiJDpXx90r%2BXFmKb3QbISSeQRq9gSW3c%2BYY5Qgyw5uJ9ELiblXj1DMnxPPMijaAycjzKH5QoNfV2%2BlysN7VK5rbzJa5kt5QhzCYfS8lrzR%2FSbFcl7vQ9JxgxH1Mh42A1222wqrGbrLrwo7Fu9fPeNuOQIcOp9xVRgGIHLMFt7zTGAW1X6e52deJeXXE0N2qqAcefF9Dnq%2F4yKnrNdZQ2g%2BUhApwkD9d9xfG1gbMD3p1mhxgphQMbvI1sBW1qaV2oa6JYYa78LHTCNka5FTpT4wLK3U2SbM7JdQ9swR23uz4cu1saCwaQ7AnpRQQL8mKva3w5NeCS2LzxmhnKMz4PV%2BfVQNLUd7yYxQkJQzK9eYJb8cT%2B6HrLO3TrpzDgI6EWDuGbbCywN89x4QFTVa8GFztzZKNasRXTJQryw5VnZsQRG47YfrnUSXzC9ura%2BBjqkAaNTlUbsNDFPq5IAdL%2BWk7DDVwFt%2FF3Ofu%2Bryv1E7eHcXd317POXdgsDLF0l8zlPJDSQ3v12ly6nbGn8HZhkfM57cdCapnML1m%2B7vziJpHKaMR5PgEF1QxxEhMMPZEgETwIcdavIgLhCxOGCH33hogHV8r1r9oa3q96sDlThGJh35IBHunjQ0jctjrLarJnj5TmM0JGf9r2jLzxlJvhfm6zw2rKG&X-Amz-Signature=8b86fc56f72926af349a18b894fecfbb15f634096f820cc6526bdae9dd16d522&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUTPZI7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCHTSMiTn2%2BAm%2F7qEPZQIkcaZDzXAqn3kt98wfAQpYaQAIhAIqbdzd0qbGw%2BtelzoOQoWjWl4FUXjRHkCsqlQdWgAgeKv8DCHcQABoMNjM3NDIzMTgzODA1IgxJX%2BsWq14lHuZv%2Bkoq3AMAedrqZwFvKFxCe94fGrYerUkHAjNO0YCqndju12lnMrD7qT7ZoZ7fZ%2BFv7%2BtSwDewMoqRR3EGKVJpb1%2B8EtBh%2FgVDBmpjsrJOSgnYJWLW24Fkwxmx1zyn0C6tVD8cvjx31D3PJA5uNPe2zTWP%2BsvRl%2BoMiqmDiz2uxj44Mr80SvI63VdmY%2B6jTdxCe24aqMvE46zGiJDpXx90r%2BXFmKb3QbISSeQRq9gSW3c%2BYY5Qgyw5uJ9ELiblXj1DMnxPPMijaAycjzKH5QoNfV2%2BlysN7VK5rbzJa5kt5QhzCYfS8lrzR%2FSbFcl7vQ9JxgxH1Mh42A1222wqrGbrLrwo7Fu9fPeNuOQIcOp9xVRgGIHLMFt7zTGAW1X6e52deJeXXE0N2qqAcefF9Dnq%2F4yKnrNdZQ2g%2BUhApwkD9d9xfG1gbMD3p1mhxgphQMbvI1sBW1qaV2oa6JYYa78LHTCNka5FTpT4wLK3U2SbM7JdQ9swR23uz4cu1saCwaQ7AnpRQQL8mKva3w5NeCS2LzxmhnKMz4PV%2BfVQNLUd7yYxQkJQzK9eYJb8cT%2B6HrLO3TrpzDgI6EWDuGbbCywN89x4QFTVa8GFztzZKNasRXTJQryw5VnZsQRG47YfrnUSXzC9ura%2BBjqkAaNTlUbsNDFPq5IAdL%2BWk7DDVwFt%2FF3Ofu%2Bryv1E7eHcXd317POXdgsDLF0l8zlPJDSQ3v12ly6nbGn8HZhkfM57cdCapnML1m%2B7vziJpHKaMR5PgEF1QxxEhMMPZEgETwIcdavIgLhCxOGCH33hogHV8r1r9oa3q96sDlThGJh35IBHunjQ0jctjrLarJnj5TmM0JGf9r2jLzxlJvhfm6zw2rKG&X-Amz-Signature=d200d7420c91a813f2faba84e1eceb48e23d492d0bf1436668d1690755cbf81e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
