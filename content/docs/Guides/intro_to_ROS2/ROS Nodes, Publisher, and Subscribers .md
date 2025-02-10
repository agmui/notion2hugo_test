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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU6IQEUP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvA0N1vZpPeV0q5KbAadSSPcz5AEkzrYD%2Fm9kyCxlPkAiEA9VR0MqQw9qVij0iEq2DKQfamGxijA84VF1ECV92Lh9YqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCLcAKRBtRBjQuKZircAwsV6SKYPfSbmXY14xoeCrvvPUOcNXWcNBhOXZafWp04uasv8xuiEZC0zTsDMw5sPASPmfEshTlEBY%2Bn0%2BAtTlAXNmhQUyHMXif5mi0QOzWxXdCvmBF%2BXgfbF4Q8gUdE%2BmzLLbfeczGDpoSqLBXaOyLmqBe%2BN4d30h3x9bfJIEG4S96aJW43yFyn9Y47ED%2BzMRF6VHCCoI3DM8U1P7tLbis7z5LDCn3sW%2BHRs19t30dC%2BUTVybvEFc8lwRTSTqeTCw%2Fq2oSQs4XdWNE88KpJaVHe9zWdnWNNWLFg164D1U7doheYt3UOEUkip6%2B4PTPE0HCAt18zlXkrLtTEy5xMiyZHmXhmYcjwzK%2BmAyHyyUTjQa2e2vcUOPZLB31atrBUphnM01JojA9WurFdJ4UNzxjwouWSY6Y6fr2VSA75QOjqHM%2Bftx4K10Svmx86BKSIUbv6khTaRsxbU39EZLTRwKEFBXmBTdz7URl7hczGb784u2z1sk6jqPS813svkrWaEqzJekLoPbuYhb26WOFxtMSpPOTRRCnHt7tXs0DZwr7kG0iRvEQN8XkRcSb3hHvkWj2wpDyAsKnFYtsUnlHWPYrKqQjURwZUDkN%2BMfaq7S7pBCd9a6Oa8TXHPJAgMMbgpL0GOqUBsHhCMURw%2FLqiFi3e5oo7qSCsVRlDwF%2BLKT4hEfL2eJNpt%2FktQcGl3%2B0YVziNHueWrRf2Fq8Zdy5XzwzjnutKkIkuyTBEvvItfpmK5GupJFx9xpMkn85FPJJfkeAZz2eXBEXxfgXe4V0JQoQDmysqXBaG0NfQa3L14rC%2BmoNLo3h7M031WEoWNogMTz0gAdU4fc51lAuA%2FN%2BMe09H7q%2F3Jp1sA%2F15&X-Amz-Signature=e11b7471c9f1d397ab0abc2d68cb67b337f8b52696bdeaad7015b6a93dd1922c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU6IQEUP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvA0N1vZpPeV0q5KbAadSSPcz5AEkzrYD%2Fm9kyCxlPkAiEA9VR0MqQw9qVij0iEq2DKQfamGxijA84VF1ECV92Lh9YqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCLcAKRBtRBjQuKZircAwsV6SKYPfSbmXY14xoeCrvvPUOcNXWcNBhOXZafWp04uasv8xuiEZC0zTsDMw5sPASPmfEshTlEBY%2Bn0%2BAtTlAXNmhQUyHMXif5mi0QOzWxXdCvmBF%2BXgfbF4Q8gUdE%2BmzLLbfeczGDpoSqLBXaOyLmqBe%2BN4d30h3x9bfJIEG4S96aJW43yFyn9Y47ED%2BzMRF6VHCCoI3DM8U1P7tLbis7z5LDCn3sW%2BHRs19t30dC%2BUTVybvEFc8lwRTSTqeTCw%2Fq2oSQs4XdWNE88KpJaVHe9zWdnWNNWLFg164D1U7doheYt3UOEUkip6%2B4PTPE0HCAt18zlXkrLtTEy5xMiyZHmXhmYcjwzK%2BmAyHyyUTjQa2e2vcUOPZLB31atrBUphnM01JojA9WurFdJ4UNzxjwouWSY6Y6fr2VSA75QOjqHM%2Bftx4K10Svmx86BKSIUbv6khTaRsxbU39EZLTRwKEFBXmBTdz7URl7hczGb784u2z1sk6jqPS813svkrWaEqzJekLoPbuYhb26WOFxtMSpPOTRRCnHt7tXs0DZwr7kG0iRvEQN8XkRcSb3hHvkWj2wpDyAsKnFYtsUnlHWPYrKqQjURwZUDkN%2BMfaq7S7pBCd9a6Oa8TXHPJAgMMbgpL0GOqUBsHhCMURw%2FLqiFi3e5oo7qSCsVRlDwF%2BLKT4hEfL2eJNpt%2FktQcGl3%2B0YVziNHueWrRf2Fq8Zdy5XzwzjnutKkIkuyTBEvvItfpmK5GupJFx9xpMkn85FPJJfkeAZz2eXBEXxfgXe4V0JQoQDmysqXBaG0NfQa3L14rC%2BmoNLo3h7M031WEoWNogMTz0gAdU4fc51lAuA%2FN%2BMe09H7q%2F3Jp1sA%2F15&X-Amz-Signature=ed1f19dd10ce935243773c8488f54658df53419502822262c1d1b5a6ac459007&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU6IQEUP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvA0N1vZpPeV0q5KbAadSSPcz5AEkzrYD%2Fm9kyCxlPkAiEA9VR0MqQw9qVij0iEq2DKQfamGxijA84VF1ECV92Lh9YqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCLcAKRBtRBjQuKZircAwsV6SKYPfSbmXY14xoeCrvvPUOcNXWcNBhOXZafWp04uasv8xuiEZC0zTsDMw5sPASPmfEshTlEBY%2Bn0%2BAtTlAXNmhQUyHMXif5mi0QOzWxXdCvmBF%2BXgfbF4Q8gUdE%2BmzLLbfeczGDpoSqLBXaOyLmqBe%2BN4d30h3x9bfJIEG4S96aJW43yFyn9Y47ED%2BzMRF6VHCCoI3DM8U1P7tLbis7z5LDCn3sW%2BHRs19t30dC%2BUTVybvEFc8lwRTSTqeTCw%2Fq2oSQs4XdWNE88KpJaVHe9zWdnWNNWLFg164D1U7doheYt3UOEUkip6%2B4PTPE0HCAt18zlXkrLtTEy5xMiyZHmXhmYcjwzK%2BmAyHyyUTjQa2e2vcUOPZLB31atrBUphnM01JojA9WurFdJ4UNzxjwouWSY6Y6fr2VSA75QOjqHM%2Bftx4K10Svmx86BKSIUbv6khTaRsxbU39EZLTRwKEFBXmBTdz7URl7hczGb784u2z1sk6jqPS813svkrWaEqzJekLoPbuYhb26WOFxtMSpPOTRRCnHt7tXs0DZwr7kG0iRvEQN8XkRcSb3hHvkWj2wpDyAsKnFYtsUnlHWPYrKqQjURwZUDkN%2BMfaq7S7pBCd9a6Oa8TXHPJAgMMbgpL0GOqUBsHhCMURw%2FLqiFi3e5oo7qSCsVRlDwF%2BLKT4hEfL2eJNpt%2FktQcGl3%2B0YVziNHueWrRf2Fq8Zdy5XzwzjnutKkIkuyTBEvvItfpmK5GupJFx9xpMkn85FPJJfkeAZz2eXBEXxfgXe4V0JQoQDmysqXBaG0NfQa3L14rC%2BmoNLo3h7M031WEoWNogMTz0gAdU4fc51lAuA%2FN%2BMe09H7q%2F3Jp1sA%2F15&X-Amz-Signature=ee4d34cc28e82c4ae295c3ee83299884cc527ef2c67b1e985e59f60e4cb47bda&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU6IQEUP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvA0N1vZpPeV0q5KbAadSSPcz5AEkzrYD%2Fm9kyCxlPkAiEA9VR0MqQw9qVij0iEq2DKQfamGxijA84VF1ECV92Lh9YqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCLcAKRBtRBjQuKZircAwsV6SKYPfSbmXY14xoeCrvvPUOcNXWcNBhOXZafWp04uasv8xuiEZC0zTsDMw5sPASPmfEshTlEBY%2Bn0%2BAtTlAXNmhQUyHMXif5mi0QOzWxXdCvmBF%2BXgfbF4Q8gUdE%2BmzLLbfeczGDpoSqLBXaOyLmqBe%2BN4d30h3x9bfJIEG4S96aJW43yFyn9Y47ED%2BzMRF6VHCCoI3DM8U1P7tLbis7z5LDCn3sW%2BHRs19t30dC%2BUTVybvEFc8lwRTSTqeTCw%2Fq2oSQs4XdWNE88KpJaVHe9zWdnWNNWLFg164D1U7doheYt3UOEUkip6%2B4PTPE0HCAt18zlXkrLtTEy5xMiyZHmXhmYcjwzK%2BmAyHyyUTjQa2e2vcUOPZLB31atrBUphnM01JojA9WurFdJ4UNzxjwouWSY6Y6fr2VSA75QOjqHM%2Bftx4K10Svmx86BKSIUbv6khTaRsxbU39EZLTRwKEFBXmBTdz7URl7hczGb784u2z1sk6jqPS813svkrWaEqzJekLoPbuYhb26WOFxtMSpPOTRRCnHt7tXs0DZwr7kG0iRvEQN8XkRcSb3hHvkWj2wpDyAsKnFYtsUnlHWPYrKqQjURwZUDkN%2BMfaq7S7pBCd9a6Oa8TXHPJAgMMbgpL0GOqUBsHhCMURw%2FLqiFi3e5oo7qSCsVRlDwF%2BLKT4hEfL2eJNpt%2FktQcGl3%2B0YVziNHueWrRf2Fq8Zdy5XzwzjnutKkIkuyTBEvvItfpmK5GupJFx9xpMkn85FPJJfkeAZz2eXBEXxfgXe4V0JQoQDmysqXBaG0NfQa3L14rC%2BmoNLo3h7M031WEoWNogMTz0gAdU4fc51lAuA%2FN%2BMe09H7q%2F3Jp1sA%2F15&X-Amz-Signature=0b327da962806ca6cd40dc3be4429670ebf69bbc6efa7cb4c69d4ee81f49b185&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU6IQEUP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvA0N1vZpPeV0q5KbAadSSPcz5AEkzrYD%2Fm9kyCxlPkAiEA9VR0MqQw9qVij0iEq2DKQfamGxijA84VF1ECV92Lh9YqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCLcAKRBtRBjQuKZircAwsV6SKYPfSbmXY14xoeCrvvPUOcNXWcNBhOXZafWp04uasv8xuiEZC0zTsDMw5sPASPmfEshTlEBY%2Bn0%2BAtTlAXNmhQUyHMXif5mi0QOzWxXdCvmBF%2BXgfbF4Q8gUdE%2BmzLLbfeczGDpoSqLBXaOyLmqBe%2BN4d30h3x9bfJIEG4S96aJW43yFyn9Y47ED%2BzMRF6VHCCoI3DM8U1P7tLbis7z5LDCn3sW%2BHRs19t30dC%2BUTVybvEFc8lwRTSTqeTCw%2Fq2oSQs4XdWNE88KpJaVHe9zWdnWNNWLFg164D1U7doheYt3UOEUkip6%2B4PTPE0HCAt18zlXkrLtTEy5xMiyZHmXhmYcjwzK%2BmAyHyyUTjQa2e2vcUOPZLB31atrBUphnM01JojA9WurFdJ4UNzxjwouWSY6Y6fr2VSA75QOjqHM%2Bftx4K10Svmx86BKSIUbv6khTaRsxbU39EZLTRwKEFBXmBTdz7URl7hczGb784u2z1sk6jqPS813svkrWaEqzJekLoPbuYhb26WOFxtMSpPOTRRCnHt7tXs0DZwr7kG0iRvEQN8XkRcSb3hHvkWj2wpDyAsKnFYtsUnlHWPYrKqQjURwZUDkN%2BMfaq7S7pBCd9a6Oa8TXHPJAgMMbgpL0GOqUBsHhCMURw%2FLqiFi3e5oo7qSCsVRlDwF%2BLKT4hEfL2eJNpt%2FktQcGl3%2B0YVziNHueWrRf2Fq8Zdy5XzwzjnutKkIkuyTBEvvItfpmK5GupJFx9xpMkn85FPJJfkeAZz2eXBEXxfgXe4V0JQoQDmysqXBaG0NfQa3L14rC%2BmoNLo3h7M031WEoWNogMTz0gAdU4fc51lAuA%2FN%2BMe09H7q%2F3Jp1sA%2F15&X-Amz-Signature=d92c0ab354255064c7f0cba27fc8dbf97b971f6f64d2a5277c4ae2fc6470092c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU6IQEUP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvA0N1vZpPeV0q5KbAadSSPcz5AEkzrYD%2Fm9kyCxlPkAiEA9VR0MqQw9qVij0iEq2DKQfamGxijA84VF1ECV92Lh9YqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCLcAKRBtRBjQuKZircAwsV6SKYPfSbmXY14xoeCrvvPUOcNXWcNBhOXZafWp04uasv8xuiEZC0zTsDMw5sPASPmfEshTlEBY%2Bn0%2BAtTlAXNmhQUyHMXif5mi0QOzWxXdCvmBF%2BXgfbF4Q8gUdE%2BmzLLbfeczGDpoSqLBXaOyLmqBe%2BN4d30h3x9bfJIEG4S96aJW43yFyn9Y47ED%2BzMRF6VHCCoI3DM8U1P7tLbis7z5LDCn3sW%2BHRs19t30dC%2BUTVybvEFc8lwRTSTqeTCw%2Fq2oSQs4XdWNE88KpJaVHe9zWdnWNNWLFg164D1U7doheYt3UOEUkip6%2B4PTPE0HCAt18zlXkrLtTEy5xMiyZHmXhmYcjwzK%2BmAyHyyUTjQa2e2vcUOPZLB31atrBUphnM01JojA9WurFdJ4UNzxjwouWSY6Y6fr2VSA75QOjqHM%2Bftx4K10Svmx86BKSIUbv6khTaRsxbU39EZLTRwKEFBXmBTdz7URl7hczGb784u2z1sk6jqPS813svkrWaEqzJekLoPbuYhb26WOFxtMSpPOTRRCnHt7tXs0DZwr7kG0iRvEQN8XkRcSb3hHvkWj2wpDyAsKnFYtsUnlHWPYrKqQjURwZUDkN%2BMfaq7S7pBCd9a6Oa8TXHPJAgMMbgpL0GOqUBsHhCMURw%2FLqiFi3e5oo7qSCsVRlDwF%2BLKT4hEfL2eJNpt%2FktQcGl3%2B0YVziNHueWrRf2Fq8Zdy5XzwzjnutKkIkuyTBEvvItfpmK5GupJFx9xpMkn85FPJJfkeAZz2eXBEXxfgXe4V0JQoQDmysqXBaG0NfQa3L14rC%2BmoNLo3h7M031WEoWNogMTz0gAdU4fc51lAuA%2FN%2BMe09H7q%2F3Jp1sA%2F15&X-Amz-Signature=f078d2a7f48833a45776b29c89e5f053396e4940d46ed930012a447e7cb518a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU6IQEUP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvA0N1vZpPeV0q5KbAadSSPcz5AEkzrYD%2Fm9kyCxlPkAiEA9VR0MqQw9qVij0iEq2DKQfamGxijA84VF1ECV92Lh9YqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCLcAKRBtRBjQuKZircAwsV6SKYPfSbmXY14xoeCrvvPUOcNXWcNBhOXZafWp04uasv8xuiEZC0zTsDMw5sPASPmfEshTlEBY%2Bn0%2BAtTlAXNmhQUyHMXif5mi0QOzWxXdCvmBF%2BXgfbF4Q8gUdE%2BmzLLbfeczGDpoSqLBXaOyLmqBe%2BN4d30h3x9bfJIEG4S96aJW43yFyn9Y47ED%2BzMRF6VHCCoI3DM8U1P7tLbis7z5LDCn3sW%2BHRs19t30dC%2BUTVybvEFc8lwRTSTqeTCw%2Fq2oSQs4XdWNE88KpJaVHe9zWdnWNNWLFg164D1U7doheYt3UOEUkip6%2B4PTPE0HCAt18zlXkrLtTEy5xMiyZHmXhmYcjwzK%2BmAyHyyUTjQa2e2vcUOPZLB31atrBUphnM01JojA9WurFdJ4UNzxjwouWSY6Y6fr2VSA75QOjqHM%2Bftx4K10Svmx86BKSIUbv6khTaRsxbU39EZLTRwKEFBXmBTdz7URl7hczGb784u2z1sk6jqPS813svkrWaEqzJekLoPbuYhb26WOFxtMSpPOTRRCnHt7tXs0DZwr7kG0iRvEQN8XkRcSb3hHvkWj2wpDyAsKnFYtsUnlHWPYrKqQjURwZUDkN%2BMfaq7S7pBCd9a6Oa8TXHPJAgMMbgpL0GOqUBsHhCMURw%2FLqiFi3e5oo7qSCsVRlDwF%2BLKT4hEfL2eJNpt%2FktQcGl3%2B0YVziNHueWrRf2Fq8Zdy5XzwzjnutKkIkuyTBEvvItfpmK5GupJFx9xpMkn85FPJJfkeAZz2eXBEXxfgXe4V0JQoQDmysqXBaG0NfQa3L14rC%2BmoNLo3h7M031WEoWNogMTz0gAdU4fc51lAuA%2FN%2BMe09H7q%2F3Jp1sA%2F15&X-Amz-Signature=069ffa60ea026d90db231a47e5b0ebae598d5896b2508c7ff96831569c760170&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU6IQEUP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvA0N1vZpPeV0q5KbAadSSPcz5AEkzrYD%2Fm9kyCxlPkAiEA9VR0MqQw9qVij0iEq2DKQfamGxijA84VF1ECV92Lh9YqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCLcAKRBtRBjQuKZircAwsV6SKYPfSbmXY14xoeCrvvPUOcNXWcNBhOXZafWp04uasv8xuiEZC0zTsDMw5sPASPmfEshTlEBY%2Bn0%2BAtTlAXNmhQUyHMXif5mi0QOzWxXdCvmBF%2BXgfbF4Q8gUdE%2BmzLLbfeczGDpoSqLBXaOyLmqBe%2BN4d30h3x9bfJIEG4S96aJW43yFyn9Y47ED%2BzMRF6VHCCoI3DM8U1P7tLbis7z5LDCn3sW%2BHRs19t30dC%2BUTVybvEFc8lwRTSTqeTCw%2Fq2oSQs4XdWNE88KpJaVHe9zWdnWNNWLFg164D1U7doheYt3UOEUkip6%2B4PTPE0HCAt18zlXkrLtTEy5xMiyZHmXhmYcjwzK%2BmAyHyyUTjQa2e2vcUOPZLB31atrBUphnM01JojA9WurFdJ4UNzxjwouWSY6Y6fr2VSA75QOjqHM%2Bftx4K10Svmx86BKSIUbv6khTaRsxbU39EZLTRwKEFBXmBTdz7URl7hczGb784u2z1sk6jqPS813svkrWaEqzJekLoPbuYhb26WOFxtMSpPOTRRCnHt7tXs0DZwr7kG0iRvEQN8XkRcSb3hHvkWj2wpDyAsKnFYtsUnlHWPYrKqQjURwZUDkN%2BMfaq7S7pBCd9a6Oa8TXHPJAgMMbgpL0GOqUBsHhCMURw%2FLqiFi3e5oo7qSCsVRlDwF%2BLKT4hEfL2eJNpt%2FktQcGl3%2B0YVziNHueWrRf2Fq8Zdy5XzwzjnutKkIkuyTBEvvItfpmK5GupJFx9xpMkn85FPJJfkeAZz2eXBEXxfgXe4V0JQoQDmysqXBaG0NfQa3L14rC%2BmoNLo3h7M031WEoWNogMTz0gAdU4fc51lAuA%2FN%2BMe09H7q%2F3Jp1sA%2F15&X-Amz-Signature=be611f1bd55a31307e6235eb9186c5c1607ecf9fd2773dd784c517f3c3a8cd53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
