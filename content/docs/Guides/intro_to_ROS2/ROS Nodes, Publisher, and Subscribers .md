---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSLVDVK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4t1vngpg83NiinE%2FVC3ZVmlzU5MA5rbS%2BsV6ZORRfMAiEA29zNGEtre5PaqYiDD16SE3eNzmf%2FXIT8RhRtCn0u3bQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPLWs1eaQgLZX9vrhCrcA%2FNLEl%2FHK8V8VlPL8a413nsyPG6AYybchZXFydt73RuQhLjthM49rIUztYrhT%2Fi3AMxljwNr%2B0uZgYGx1ujDOboU7fXyyCxrdrXly9sFXt6mghn6vxsPgmCzECRBsWL0PQhB4Q9orhi4Mt8Pq0jyDyYSjL45Ftg6srSo6QOaQcvrco0dKQMxoH8Q4zXs%2BPgHOBGvYzguwvoOAIM5Xo%2BfHrNQRcYHLGdhC5ZBEfU8DNIQGZxMiT8wUtbQCxeX6%2FImR6aNljT97ER%2FvkL%2FjRapkq7PbnkbxvpSCWzraGwj%2Fj8gAWX2h29KBqDcqm7vRkppRPf6v%2BQRHMzWmpgQjCpgowmB1Wl8HDfhp08mCu1is7BjKYMAJn%2FsJrYAmL0ooJRSSrplb81zeS7u0jZ2hn0zGls5lKNo35so%2F5WabVp%2FRRBsXKZidr4ANV4rn33OkVWXAGcrrV3oACa9InhUy8HMr5IDWLZ4LKmIii6VTCdVzcQBtK3QM%2F3Uul91waUIX%2BtuJi8Ee3pM2buRsgKQtP57YidTzeO%2BvIX711%2BAO5tjmyb8XlTT5z1qdzDdN%2BAqDZmZ9uFVCSJZKInKxqxvuv%2F%2BojXhFkpvPXr7en6T3yx3NaWfQS%2FkxiUQ7glj%2BP7SMKv6h8oGOqUBmxGXlo%2BPz41nV5%2B48E8JSUAnnn6CslyK%2BO61S7CHEhBMnK49Lh8RTtyIfm5tzSQdPwfFWnqtIBa0VZXhfdIGC2pckkbI3KTK4fW8QldAR%2BZDI8aLdXXlE2C4psh7WbnKpACUJbbYFHOlhMudUGt%2FpLDzTAAlZrH4BV6B%2BbUovDMw562q4RHNA%2BHb9C%2FNiB%2BQ9wfkSP8OYT3IGrF8KPRJxqx%2BY7lD&X-Amz-Signature=372ff659d49115d3ccc0f051f4758ad4750ee1913aac6d15c0dfe7016d4eee93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSLVDVK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4t1vngpg83NiinE%2FVC3ZVmlzU5MA5rbS%2BsV6ZORRfMAiEA29zNGEtre5PaqYiDD16SE3eNzmf%2FXIT8RhRtCn0u3bQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPLWs1eaQgLZX9vrhCrcA%2FNLEl%2FHK8V8VlPL8a413nsyPG6AYybchZXFydt73RuQhLjthM49rIUztYrhT%2Fi3AMxljwNr%2B0uZgYGx1ujDOboU7fXyyCxrdrXly9sFXt6mghn6vxsPgmCzECRBsWL0PQhB4Q9orhi4Mt8Pq0jyDyYSjL45Ftg6srSo6QOaQcvrco0dKQMxoH8Q4zXs%2BPgHOBGvYzguwvoOAIM5Xo%2BfHrNQRcYHLGdhC5ZBEfU8DNIQGZxMiT8wUtbQCxeX6%2FImR6aNljT97ER%2FvkL%2FjRapkq7PbnkbxvpSCWzraGwj%2Fj8gAWX2h29KBqDcqm7vRkppRPf6v%2BQRHMzWmpgQjCpgowmB1Wl8HDfhp08mCu1is7BjKYMAJn%2FsJrYAmL0ooJRSSrplb81zeS7u0jZ2hn0zGls5lKNo35so%2F5WabVp%2FRRBsXKZidr4ANV4rn33OkVWXAGcrrV3oACa9InhUy8HMr5IDWLZ4LKmIii6VTCdVzcQBtK3QM%2F3Uul91waUIX%2BtuJi8Ee3pM2buRsgKQtP57YidTzeO%2BvIX711%2BAO5tjmyb8XlTT5z1qdzDdN%2BAqDZmZ9uFVCSJZKInKxqxvuv%2F%2BojXhFkpvPXr7en6T3yx3NaWfQS%2FkxiUQ7glj%2BP7SMKv6h8oGOqUBmxGXlo%2BPz41nV5%2B48E8JSUAnnn6CslyK%2BO61S7CHEhBMnK49Lh8RTtyIfm5tzSQdPwfFWnqtIBa0VZXhfdIGC2pckkbI3KTK4fW8QldAR%2BZDI8aLdXXlE2C4psh7WbnKpACUJbbYFHOlhMudUGt%2FpLDzTAAlZrH4BV6B%2BbUovDMw562q4RHNA%2BHb9C%2FNiB%2BQ9wfkSP8OYT3IGrF8KPRJxqx%2BY7lD&X-Amz-Signature=caaba938e06421f4135de4a26441be61acfbb702e13a70cb01cbcd4d1194a9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSLVDVK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4t1vngpg83NiinE%2FVC3ZVmlzU5MA5rbS%2BsV6ZORRfMAiEA29zNGEtre5PaqYiDD16SE3eNzmf%2FXIT8RhRtCn0u3bQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPLWs1eaQgLZX9vrhCrcA%2FNLEl%2FHK8V8VlPL8a413nsyPG6AYybchZXFydt73RuQhLjthM49rIUztYrhT%2Fi3AMxljwNr%2B0uZgYGx1ujDOboU7fXyyCxrdrXly9sFXt6mghn6vxsPgmCzECRBsWL0PQhB4Q9orhi4Mt8Pq0jyDyYSjL45Ftg6srSo6QOaQcvrco0dKQMxoH8Q4zXs%2BPgHOBGvYzguwvoOAIM5Xo%2BfHrNQRcYHLGdhC5ZBEfU8DNIQGZxMiT8wUtbQCxeX6%2FImR6aNljT97ER%2FvkL%2FjRapkq7PbnkbxvpSCWzraGwj%2Fj8gAWX2h29KBqDcqm7vRkppRPf6v%2BQRHMzWmpgQjCpgowmB1Wl8HDfhp08mCu1is7BjKYMAJn%2FsJrYAmL0ooJRSSrplb81zeS7u0jZ2hn0zGls5lKNo35so%2F5WabVp%2FRRBsXKZidr4ANV4rn33OkVWXAGcrrV3oACa9InhUy8HMr5IDWLZ4LKmIii6VTCdVzcQBtK3QM%2F3Uul91waUIX%2BtuJi8Ee3pM2buRsgKQtP57YidTzeO%2BvIX711%2BAO5tjmyb8XlTT5z1qdzDdN%2BAqDZmZ9uFVCSJZKInKxqxvuv%2F%2BojXhFkpvPXr7en6T3yx3NaWfQS%2FkxiUQ7glj%2BP7SMKv6h8oGOqUBmxGXlo%2BPz41nV5%2B48E8JSUAnnn6CslyK%2BO61S7CHEhBMnK49Lh8RTtyIfm5tzSQdPwfFWnqtIBa0VZXhfdIGC2pckkbI3KTK4fW8QldAR%2BZDI8aLdXXlE2C4psh7WbnKpACUJbbYFHOlhMudUGt%2FpLDzTAAlZrH4BV6B%2BbUovDMw562q4RHNA%2BHb9C%2FNiB%2BQ9wfkSP8OYT3IGrF8KPRJxqx%2BY7lD&X-Amz-Signature=a208150e8207de4013f67b1413b1ec53be0a2fb550a49e4f946552261cf61351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSLVDVK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4t1vngpg83NiinE%2FVC3ZVmlzU5MA5rbS%2BsV6ZORRfMAiEA29zNGEtre5PaqYiDD16SE3eNzmf%2FXIT8RhRtCn0u3bQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPLWs1eaQgLZX9vrhCrcA%2FNLEl%2FHK8V8VlPL8a413nsyPG6AYybchZXFydt73RuQhLjthM49rIUztYrhT%2Fi3AMxljwNr%2B0uZgYGx1ujDOboU7fXyyCxrdrXly9sFXt6mghn6vxsPgmCzECRBsWL0PQhB4Q9orhi4Mt8Pq0jyDyYSjL45Ftg6srSo6QOaQcvrco0dKQMxoH8Q4zXs%2BPgHOBGvYzguwvoOAIM5Xo%2BfHrNQRcYHLGdhC5ZBEfU8DNIQGZxMiT8wUtbQCxeX6%2FImR6aNljT97ER%2FvkL%2FjRapkq7PbnkbxvpSCWzraGwj%2Fj8gAWX2h29KBqDcqm7vRkppRPf6v%2BQRHMzWmpgQjCpgowmB1Wl8HDfhp08mCu1is7BjKYMAJn%2FsJrYAmL0ooJRSSrplb81zeS7u0jZ2hn0zGls5lKNo35so%2F5WabVp%2FRRBsXKZidr4ANV4rn33OkVWXAGcrrV3oACa9InhUy8HMr5IDWLZ4LKmIii6VTCdVzcQBtK3QM%2F3Uul91waUIX%2BtuJi8Ee3pM2buRsgKQtP57YidTzeO%2BvIX711%2BAO5tjmyb8XlTT5z1qdzDdN%2BAqDZmZ9uFVCSJZKInKxqxvuv%2F%2BojXhFkpvPXr7en6T3yx3NaWfQS%2FkxiUQ7glj%2BP7SMKv6h8oGOqUBmxGXlo%2BPz41nV5%2B48E8JSUAnnn6CslyK%2BO61S7CHEhBMnK49Lh8RTtyIfm5tzSQdPwfFWnqtIBa0VZXhfdIGC2pckkbI3KTK4fW8QldAR%2BZDI8aLdXXlE2C4psh7WbnKpACUJbbYFHOlhMudUGt%2FpLDzTAAlZrH4BV6B%2BbUovDMw562q4RHNA%2BHb9C%2FNiB%2BQ9wfkSP8OYT3IGrF8KPRJxqx%2BY7lD&X-Amz-Signature=dc01b57c6935f1bab2f7fcdc1ab1f8c255a671fea34dca9ab48805050c7eeb0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSLVDVK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4t1vngpg83NiinE%2FVC3ZVmlzU5MA5rbS%2BsV6ZORRfMAiEA29zNGEtre5PaqYiDD16SE3eNzmf%2FXIT8RhRtCn0u3bQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPLWs1eaQgLZX9vrhCrcA%2FNLEl%2FHK8V8VlPL8a413nsyPG6AYybchZXFydt73RuQhLjthM49rIUztYrhT%2Fi3AMxljwNr%2B0uZgYGx1ujDOboU7fXyyCxrdrXly9sFXt6mghn6vxsPgmCzECRBsWL0PQhB4Q9orhi4Mt8Pq0jyDyYSjL45Ftg6srSo6QOaQcvrco0dKQMxoH8Q4zXs%2BPgHOBGvYzguwvoOAIM5Xo%2BfHrNQRcYHLGdhC5ZBEfU8DNIQGZxMiT8wUtbQCxeX6%2FImR6aNljT97ER%2FvkL%2FjRapkq7PbnkbxvpSCWzraGwj%2Fj8gAWX2h29KBqDcqm7vRkppRPf6v%2BQRHMzWmpgQjCpgowmB1Wl8HDfhp08mCu1is7BjKYMAJn%2FsJrYAmL0ooJRSSrplb81zeS7u0jZ2hn0zGls5lKNo35so%2F5WabVp%2FRRBsXKZidr4ANV4rn33OkVWXAGcrrV3oACa9InhUy8HMr5IDWLZ4LKmIii6VTCdVzcQBtK3QM%2F3Uul91waUIX%2BtuJi8Ee3pM2buRsgKQtP57YidTzeO%2BvIX711%2BAO5tjmyb8XlTT5z1qdzDdN%2BAqDZmZ9uFVCSJZKInKxqxvuv%2F%2BojXhFkpvPXr7en6T3yx3NaWfQS%2FkxiUQ7glj%2BP7SMKv6h8oGOqUBmxGXlo%2BPz41nV5%2B48E8JSUAnnn6CslyK%2BO61S7CHEhBMnK49Lh8RTtyIfm5tzSQdPwfFWnqtIBa0VZXhfdIGC2pckkbI3KTK4fW8QldAR%2BZDI8aLdXXlE2C4psh7WbnKpACUJbbYFHOlhMudUGt%2FpLDzTAAlZrH4BV6B%2BbUovDMw562q4RHNA%2BHb9C%2FNiB%2BQ9wfkSP8OYT3IGrF8KPRJxqx%2BY7lD&X-Amz-Signature=3ea5c4370684cea6891f8c8644e79bab5887accd11123cac45affaf163db4590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSLVDVK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4t1vngpg83NiinE%2FVC3ZVmlzU5MA5rbS%2BsV6ZORRfMAiEA29zNGEtre5PaqYiDD16SE3eNzmf%2FXIT8RhRtCn0u3bQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPLWs1eaQgLZX9vrhCrcA%2FNLEl%2FHK8V8VlPL8a413nsyPG6AYybchZXFydt73RuQhLjthM49rIUztYrhT%2Fi3AMxljwNr%2B0uZgYGx1ujDOboU7fXyyCxrdrXly9sFXt6mghn6vxsPgmCzECRBsWL0PQhB4Q9orhi4Mt8Pq0jyDyYSjL45Ftg6srSo6QOaQcvrco0dKQMxoH8Q4zXs%2BPgHOBGvYzguwvoOAIM5Xo%2BfHrNQRcYHLGdhC5ZBEfU8DNIQGZxMiT8wUtbQCxeX6%2FImR6aNljT97ER%2FvkL%2FjRapkq7PbnkbxvpSCWzraGwj%2Fj8gAWX2h29KBqDcqm7vRkppRPf6v%2BQRHMzWmpgQjCpgowmB1Wl8HDfhp08mCu1is7BjKYMAJn%2FsJrYAmL0ooJRSSrplb81zeS7u0jZ2hn0zGls5lKNo35so%2F5WabVp%2FRRBsXKZidr4ANV4rn33OkVWXAGcrrV3oACa9InhUy8HMr5IDWLZ4LKmIii6VTCdVzcQBtK3QM%2F3Uul91waUIX%2BtuJi8Ee3pM2buRsgKQtP57YidTzeO%2BvIX711%2BAO5tjmyb8XlTT5z1qdzDdN%2BAqDZmZ9uFVCSJZKInKxqxvuv%2F%2BojXhFkpvPXr7en6T3yx3NaWfQS%2FkxiUQ7glj%2BP7SMKv6h8oGOqUBmxGXlo%2BPz41nV5%2B48E8JSUAnnn6CslyK%2BO61S7CHEhBMnK49Lh8RTtyIfm5tzSQdPwfFWnqtIBa0VZXhfdIGC2pckkbI3KTK4fW8QldAR%2BZDI8aLdXXlE2C4psh7WbnKpACUJbbYFHOlhMudUGt%2FpLDzTAAlZrH4BV6B%2BbUovDMw562q4RHNA%2BHb9C%2FNiB%2BQ9wfkSP8OYT3IGrF8KPRJxqx%2BY7lD&X-Amz-Signature=7c3e16ac3361d309db19e9b013188af0981ecf7eff57694aff4cdaf8a723496c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSLVDVK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4t1vngpg83NiinE%2FVC3ZVmlzU5MA5rbS%2BsV6ZORRfMAiEA29zNGEtre5PaqYiDD16SE3eNzmf%2FXIT8RhRtCn0u3bQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPLWs1eaQgLZX9vrhCrcA%2FNLEl%2FHK8V8VlPL8a413nsyPG6AYybchZXFydt73RuQhLjthM49rIUztYrhT%2Fi3AMxljwNr%2B0uZgYGx1ujDOboU7fXyyCxrdrXly9sFXt6mghn6vxsPgmCzECRBsWL0PQhB4Q9orhi4Mt8Pq0jyDyYSjL45Ftg6srSo6QOaQcvrco0dKQMxoH8Q4zXs%2BPgHOBGvYzguwvoOAIM5Xo%2BfHrNQRcYHLGdhC5ZBEfU8DNIQGZxMiT8wUtbQCxeX6%2FImR6aNljT97ER%2FvkL%2FjRapkq7PbnkbxvpSCWzraGwj%2Fj8gAWX2h29KBqDcqm7vRkppRPf6v%2BQRHMzWmpgQjCpgowmB1Wl8HDfhp08mCu1is7BjKYMAJn%2FsJrYAmL0ooJRSSrplb81zeS7u0jZ2hn0zGls5lKNo35so%2F5WabVp%2FRRBsXKZidr4ANV4rn33OkVWXAGcrrV3oACa9InhUy8HMr5IDWLZ4LKmIii6VTCdVzcQBtK3QM%2F3Uul91waUIX%2BtuJi8Ee3pM2buRsgKQtP57YidTzeO%2BvIX711%2BAO5tjmyb8XlTT5z1qdzDdN%2BAqDZmZ9uFVCSJZKInKxqxvuv%2F%2BojXhFkpvPXr7en6T3yx3NaWfQS%2FkxiUQ7glj%2BP7SMKv6h8oGOqUBmxGXlo%2BPz41nV5%2B48E8JSUAnnn6CslyK%2BO61S7CHEhBMnK49Lh8RTtyIfm5tzSQdPwfFWnqtIBa0VZXhfdIGC2pckkbI3KTK4fW8QldAR%2BZDI8aLdXXlE2C4psh7WbnKpACUJbbYFHOlhMudUGt%2FpLDzTAAlZrH4BV6B%2BbUovDMw562q4RHNA%2BHb9C%2FNiB%2BQ9wfkSP8OYT3IGrF8KPRJxqx%2BY7lD&X-Amz-Signature=cb205ce76feb2542f764983a0fe652ca28686919e3bc268fa56d2cebe364c355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKSLVDVK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4t1vngpg83NiinE%2FVC3ZVmlzU5MA5rbS%2BsV6ZORRfMAiEA29zNGEtre5PaqYiDD16SE3eNzmf%2FXIT8RhRtCn0u3bQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPLWs1eaQgLZX9vrhCrcA%2FNLEl%2FHK8V8VlPL8a413nsyPG6AYybchZXFydt73RuQhLjthM49rIUztYrhT%2Fi3AMxljwNr%2B0uZgYGx1ujDOboU7fXyyCxrdrXly9sFXt6mghn6vxsPgmCzECRBsWL0PQhB4Q9orhi4Mt8Pq0jyDyYSjL45Ftg6srSo6QOaQcvrco0dKQMxoH8Q4zXs%2BPgHOBGvYzguwvoOAIM5Xo%2BfHrNQRcYHLGdhC5ZBEfU8DNIQGZxMiT8wUtbQCxeX6%2FImR6aNljT97ER%2FvkL%2FjRapkq7PbnkbxvpSCWzraGwj%2Fj8gAWX2h29KBqDcqm7vRkppRPf6v%2BQRHMzWmpgQjCpgowmB1Wl8HDfhp08mCu1is7BjKYMAJn%2FsJrYAmL0ooJRSSrplb81zeS7u0jZ2hn0zGls5lKNo35so%2F5WabVp%2FRRBsXKZidr4ANV4rn33OkVWXAGcrrV3oACa9InhUy8HMr5IDWLZ4LKmIii6VTCdVzcQBtK3QM%2F3Uul91waUIX%2BtuJi8Ee3pM2buRsgKQtP57YidTzeO%2BvIX711%2BAO5tjmyb8XlTT5z1qdzDdN%2BAqDZmZ9uFVCSJZKInKxqxvuv%2F%2BojXhFkpvPXr7en6T3yx3NaWfQS%2FkxiUQ7glj%2BP7SMKv6h8oGOqUBmxGXlo%2BPz41nV5%2B48E8JSUAnnn6CslyK%2BO61S7CHEhBMnK49Lh8RTtyIfm5tzSQdPwfFWnqtIBa0VZXhfdIGC2pckkbI3KTK4fW8QldAR%2BZDI8aLdXXlE2C4psh7WbnKpACUJbbYFHOlhMudUGt%2FpLDzTAAlZrH4BV6B%2BbUovDMw562q4RHNA%2BHb9C%2FNiB%2BQ9wfkSP8OYT3IGrF8KPRJxqx%2BY7lD&X-Amz-Signature=e87f6b16a01b24ffb3d66cbc248f9d189e967bda9fa83e59ed190faf4d293c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
