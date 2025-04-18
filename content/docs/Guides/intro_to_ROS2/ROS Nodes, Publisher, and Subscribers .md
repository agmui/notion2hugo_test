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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4FCSIN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRG85LgvbaApcvFeA0Ncm8JQ%2BkDfLFRUEub6eeyRhYqAiEAgq5K36akiG2s2fxiRvipTA5G4VadzJQb4yLtNfcd%2F%2BYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDK7HAhhBNj2V5DkwsSrcA7KiJOfvoxyFzBT%2BJfgIqDn6buICAoWluFlNN4FdLtlDezSDzRunnJfSiX9XUYEr%2F4Zj7wOLQ4ZtmXBYpdAUoD5cAZnPj55uXBKEY2ypeJQNLK3aYCzbUsF9gPxv2nG175eYB9uTscqXiR8EauhK9Kpd5OXkSFLqNzImOUWYuOuBCN9gIu7Zymx5ZcY0s2ViT4PQ7JBuh6sNj%2BwQWGncX8ihNuBzAro8kWvHWlIv984xa2a6%2BPOPz4NmKGgYUrCZyiscKrhgo9ABW4o5pQF%2FBYB%2BXr3qPu8Gu3aYI%2BAfA82CHVw7lZU6CjhFLz%2FVGJ9rN8yjmypD9m7sXRFWMtr%2Bf86DSGIUMpBG1ShfvWOI1KA01j8GHucokiy3QF1roqXqy8LSMpgYX7%2FwfKx1IxdDdjTN7iciKhhNkxgztQy2poyX2dDvSn0UmB3oQI0XDUIzsalJt19j68J1wyosMJVfdCmTzFmOWp96MwnzzJwS2q%2Brohr5UZgOu3qpO6iacq7UchtDJM2GHw7i2%2F6cfTSzUVUwplJLtkqFynHlq%2F%2B%2BNO8lcqHtdt4PberIwi99PXaHfcwZ4rODtCnMqI2pcAetMGG7T0UPTHxZRYSHU8ZcK86jFYLWgXmma0LgJ%2FduMP6siMAGOqUB24Gv1kF3oaWOINmGCJM0VXcX8rlkfKI%2BiFQj2xLXIjGb0rdZ509ETJtIZZ5KXOW0MhcBhQEoEdKqN1eJD0vZdOzWG%2BnnskUkTGW3PgtuWyUPkk7vzMb7MRrPyw3IydIul%2Frsa2SpY39GyUWNwKVrjPt2hVYkwCsq8%2FGWRqnRxr7w%2FlssoKsxH18B3%2FvOSO9sMfc0JkRhPAV%2BeGHNBMak8x42XD%2Bl&X-Amz-Signature=c9e82b130310b96faf9cd825b842c023ca65de8d546a06b5608b4a8d8a462081&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4FCSIN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRG85LgvbaApcvFeA0Ncm8JQ%2BkDfLFRUEub6eeyRhYqAiEAgq5K36akiG2s2fxiRvipTA5G4VadzJQb4yLtNfcd%2F%2BYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDK7HAhhBNj2V5DkwsSrcA7KiJOfvoxyFzBT%2BJfgIqDn6buICAoWluFlNN4FdLtlDezSDzRunnJfSiX9XUYEr%2F4Zj7wOLQ4ZtmXBYpdAUoD5cAZnPj55uXBKEY2ypeJQNLK3aYCzbUsF9gPxv2nG175eYB9uTscqXiR8EauhK9Kpd5OXkSFLqNzImOUWYuOuBCN9gIu7Zymx5ZcY0s2ViT4PQ7JBuh6sNj%2BwQWGncX8ihNuBzAro8kWvHWlIv984xa2a6%2BPOPz4NmKGgYUrCZyiscKrhgo9ABW4o5pQF%2FBYB%2BXr3qPu8Gu3aYI%2BAfA82CHVw7lZU6CjhFLz%2FVGJ9rN8yjmypD9m7sXRFWMtr%2Bf86DSGIUMpBG1ShfvWOI1KA01j8GHucokiy3QF1roqXqy8LSMpgYX7%2FwfKx1IxdDdjTN7iciKhhNkxgztQy2poyX2dDvSn0UmB3oQI0XDUIzsalJt19j68J1wyosMJVfdCmTzFmOWp96MwnzzJwS2q%2Brohr5UZgOu3qpO6iacq7UchtDJM2GHw7i2%2F6cfTSzUVUwplJLtkqFynHlq%2F%2B%2BNO8lcqHtdt4PberIwi99PXaHfcwZ4rODtCnMqI2pcAetMGG7T0UPTHxZRYSHU8ZcK86jFYLWgXmma0LgJ%2FduMP6siMAGOqUB24Gv1kF3oaWOINmGCJM0VXcX8rlkfKI%2BiFQj2xLXIjGb0rdZ509ETJtIZZ5KXOW0MhcBhQEoEdKqN1eJD0vZdOzWG%2BnnskUkTGW3PgtuWyUPkk7vzMb7MRrPyw3IydIul%2Frsa2SpY39GyUWNwKVrjPt2hVYkwCsq8%2FGWRqnRxr7w%2FlssoKsxH18B3%2FvOSO9sMfc0JkRhPAV%2BeGHNBMak8x42XD%2Bl&X-Amz-Signature=092ffdb522201e35fef21003e2dcb9e23b04d87defebe309ef43f8e9c41cfcf9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4FCSIN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRG85LgvbaApcvFeA0Ncm8JQ%2BkDfLFRUEub6eeyRhYqAiEAgq5K36akiG2s2fxiRvipTA5G4VadzJQb4yLtNfcd%2F%2BYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDK7HAhhBNj2V5DkwsSrcA7KiJOfvoxyFzBT%2BJfgIqDn6buICAoWluFlNN4FdLtlDezSDzRunnJfSiX9XUYEr%2F4Zj7wOLQ4ZtmXBYpdAUoD5cAZnPj55uXBKEY2ypeJQNLK3aYCzbUsF9gPxv2nG175eYB9uTscqXiR8EauhK9Kpd5OXkSFLqNzImOUWYuOuBCN9gIu7Zymx5ZcY0s2ViT4PQ7JBuh6sNj%2BwQWGncX8ihNuBzAro8kWvHWlIv984xa2a6%2BPOPz4NmKGgYUrCZyiscKrhgo9ABW4o5pQF%2FBYB%2BXr3qPu8Gu3aYI%2BAfA82CHVw7lZU6CjhFLz%2FVGJ9rN8yjmypD9m7sXRFWMtr%2Bf86DSGIUMpBG1ShfvWOI1KA01j8GHucokiy3QF1roqXqy8LSMpgYX7%2FwfKx1IxdDdjTN7iciKhhNkxgztQy2poyX2dDvSn0UmB3oQI0XDUIzsalJt19j68J1wyosMJVfdCmTzFmOWp96MwnzzJwS2q%2Brohr5UZgOu3qpO6iacq7UchtDJM2GHw7i2%2F6cfTSzUVUwplJLtkqFynHlq%2F%2B%2BNO8lcqHtdt4PberIwi99PXaHfcwZ4rODtCnMqI2pcAetMGG7T0UPTHxZRYSHU8ZcK86jFYLWgXmma0LgJ%2FduMP6siMAGOqUB24Gv1kF3oaWOINmGCJM0VXcX8rlkfKI%2BiFQj2xLXIjGb0rdZ509ETJtIZZ5KXOW0MhcBhQEoEdKqN1eJD0vZdOzWG%2BnnskUkTGW3PgtuWyUPkk7vzMb7MRrPyw3IydIul%2Frsa2SpY39GyUWNwKVrjPt2hVYkwCsq8%2FGWRqnRxr7w%2FlssoKsxH18B3%2FvOSO9sMfc0JkRhPAV%2BeGHNBMak8x42XD%2Bl&X-Amz-Signature=9700dfeda29d3c39c4e9c25ebc574ca0f9828c08dbb4add55a4fd737ea7b5cad&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4FCSIN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRG85LgvbaApcvFeA0Ncm8JQ%2BkDfLFRUEub6eeyRhYqAiEAgq5K36akiG2s2fxiRvipTA5G4VadzJQb4yLtNfcd%2F%2BYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDK7HAhhBNj2V5DkwsSrcA7KiJOfvoxyFzBT%2BJfgIqDn6buICAoWluFlNN4FdLtlDezSDzRunnJfSiX9XUYEr%2F4Zj7wOLQ4ZtmXBYpdAUoD5cAZnPj55uXBKEY2ypeJQNLK3aYCzbUsF9gPxv2nG175eYB9uTscqXiR8EauhK9Kpd5OXkSFLqNzImOUWYuOuBCN9gIu7Zymx5ZcY0s2ViT4PQ7JBuh6sNj%2BwQWGncX8ihNuBzAro8kWvHWlIv984xa2a6%2BPOPz4NmKGgYUrCZyiscKrhgo9ABW4o5pQF%2FBYB%2BXr3qPu8Gu3aYI%2BAfA82CHVw7lZU6CjhFLz%2FVGJ9rN8yjmypD9m7sXRFWMtr%2Bf86DSGIUMpBG1ShfvWOI1KA01j8GHucokiy3QF1roqXqy8LSMpgYX7%2FwfKx1IxdDdjTN7iciKhhNkxgztQy2poyX2dDvSn0UmB3oQI0XDUIzsalJt19j68J1wyosMJVfdCmTzFmOWp96MwnzzJwS2q%2Brohr5UZgOu3qpO6iacq7UchtDJM2GHw7i2%2F6cfTSzUVUwplJLtkqFynHlq%2F%2B%2BNO8lcqHtdt4PberIwi99PXaHfcwZ4rODtCnMqI2pcAetMGG7T0UPTHxZRYSHU8ZcK86jFYLWgXmma0LgJ%2FduMP6siMAGOqUB24Gv1kF3oaWOINmGCJM0VXcX8rlkfKI%2BiFQj2xLXIjGb0rdZ509ETJtIZZ5KXOW0MhcBhQEoEdKqN1eJD0vZdOzWG%2BnnskUkTGW3PgtuWyUPkk7vzMb7MRrPyw3IydIul%2Frsa2SpY39GyUWNwKVrjPt2hVYkwCsq8%2FGWRqnRxr7w%2FlssoKsxH18B3%2FvOSO9sMfc0JkRhPAV%2BeGHNBMak8x42XD%2Bl&X-Amz-Signature=dda35b131557b129fa037cc05ad9be7ed882afda82dc5efb7d871154d4a8a150&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4FCSIN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRG85LgvbaApcvFeA0Ncm8JQ%2BkDfLFRUEub6eeyRhYqAiEAgq5K36akiG2s2fxiRvipTA5G4VadzJQb4yLtNfcd%2F%2BYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDK7HAhhBNj2V5DkwsSrcA7KiJOfvoxyFzBT%2BJfgIqDn6buICAoWluFlNN4FdLtlDezSDzRunnJfSiX9XUYEr%2F4Zj7wOLQ4ZtmXBYpdAUoD5cAZnPj55uXBKEY2ypeJQNLK3aYCzbUsF9gPxv2nG175eYB9uTscqXiR8EauhK9Kpd5OXkSFLqNzImOUWYuOuBCN9gIu7Zymx5ZcY0s2ViT4PQ7JBuh6sNj%2BwQWGncX8ihNuBzAro8kWvHWlIv984xa2a6%2BPOPz4NmKGgYUrCZyiscKrhgo9ABW4o5pQF%2FBYB%2BXr3qPu8Gu3aYI%2BAfA82CHVw7lZU6CjhFLz%2FVGJ9rN8yjmypD9m7sXRFWMtr%2Bf86DSGIUMpBG1ShfvWOI1KA01j8GHucokiy3QF1roqXqy8LSMpgYX7%2FwfKx1IxdDdjTN7iciKhhNkxgztQy2poyX2dDvSn0UmB3oQI0XDUIzsalJt19j68J1wyosMJVfdCmTzFmOWp96MwnzzJwS2q%2Brohr5UZgOu3qpO6iacq7UchtDJM2GHw7i2%2F6cfTSzUVUwplJLtkqFynHlq%2F%2B%2BNO8lcqHtdt4PberIwi99PXaHfcwZ4rODtCnMqI2pcAetMGG7T0UPTHxZRYSHU8ZcK86jFYLWgXmma0LgJ%2FduMP6siMAGOqUB24Gv1kF3oaWOINmGCJM0VXcX8rlkfKI%2BiFQj2xLXIjGb0rdZ509ETJtIZZ5KXOW0MhcBhQEoEdKqN1eJD0vZdOzWG%2BnnskUkTGW3PgtuWyUPkk7vzMb7MRrPyw3IydIul%2Frsa2SpY39GyUWNwKVrjPt2hVYkwCsq8%2FGWRqnRxr7w%2FlssoKsxH18B3%2FvOSO9sMfc0JkRhPAV%2BeGHNBMak8x42XD%2Bl&X-Amz-Signature=1c8648db3d292a091ea9c185f5e52e0d4a48748c9349ba65d2b9243ddd5ceaed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4FCSIN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRG85LgvbaApcvFeA0Ncm8JQ%2BkDfLFRUEub6eeyRhYqAiEAgq5K36akiG2s2fxiRvipTA5G4VadzJQb4yLtNfcd%2F%2BYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDK7HAhhBNj2V5DkwsSrcA7KiJOfvoxyFzBT%2BJfgIqDn6buICAoWluFlNN4FdLtlDezSDzRunnJfSiX9XUYEr%2F4Zj7wOLQ4ZtmXBYpdAUoD5cAZnPj55uXBKEY2ypeJQNLK3aYCzbUsF9gPxv2nG175eYB9uTscqXiR8EauhK9Kpd5OXkSFLqNzImOUWYuOuBCN9gIu7Zymx5ZcY0s2ViT4PQ7JBuh6sNj%2BwQWGncX8ihNuBzAro8kWvHWlIv984xa2a6%2BPOPz4NmKGgYUrCZyiscKrhgo9ABW4o5pQF%2FBYB%2BXr3qPu8Gu3aYI%2BAfA82CHVw7lZU6CjhFLz%2FVGJ9rN8yjmypD9m7sXRFWMtr%2Bf86DSGIUMpBG1ShfvWOI1KA01j8GHucokiy3QF1roqXqy8LSMpgYX7%2FwfKx1IxdDdjTN7iciKhhNkxgztQy2poyX2dDvSn0UmB3oQI0XDUIzsalJt19j68J1wyosMJVfdCmTzFmOWp96MwnzzJwS2q%2Brohr5UZgOu3qpO6iacq7UchtDJM2GHw7i2%2F6cfTSzUVUwplJLtkqFynHlq%2F%2B%2BNO8lcqHtdt4PberIwi99PXaHfcwZ4rODtCnMqI2pcAetMGG7T0UPTHxZRYSHU8ZcK86jFYLWgXmma0LgJ%2FduMP6siMAGOqUB24Gv1kF3oaWOINmGCJM0VXcX8rlkfKI%2BiFQj2xLXIjGb0rdZ509ETJtIZZ5KXOW0MhcBhQEoEdKqN1eJD0vZdOzWG%2BnnskUkTGW3PgtuWyUPkk7vzMb7MRrPyw3IydIul%2Frsa2SpY39GyUWNwKVrjPt2hVYkwCsq8%2FGWRqnRxr7w%2FlssoKsxH18B3%2FvOSO9sMfc0JkRhPAV%2BeGHNBMak8x42XD%2Bl&X-Amz-Signature=383f330a3bdcb050c8a8fa32f96c67f2a732646824efd262b5999e0616bcb496&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4FCSIN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRG85LgvbaApcvFeA0Ncm8JQ%2BkDfLFRUEub6eeyRhYqAiEAgq5K36akiG2s2fxiRvipTA5G4VadzJQb4yLtNfcd%2F%2BYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDK7HAhhBNj2V5DkwsSrcA7KiJOfvoxyFzBT%2BJfgIqDn6buICAoWluFlNN4FdLtlDezSDzRunnJfSiX9XUYEr%2F4Zj7wOLQ4ZtmXBYpdAUoD5cAZnPj55uXBKEY2ypeJQNLK3aYCzbUsF9gPxv2nG175eYB9uTscqXiR8EauhK9Kpd5OXkSFLqNzImOUWYuOuBCN9gIu7Zymx5ZcY0s2ViT4PQ7JBuh6sNj%2BwQWGncX8ihNuBzAro8kWvHWlIv984xa2a6%2BPOPz4NmKGgYUrCZyiscKrhgo9ABW4o5pQF%2FBYB%2BXr3qPu8Gu3aYI%2BAfA82CHVw7lZU6CjhFLz%2FVGJ9rN8yjmypD9m7sXRFWMtr%2Bf86DSGIUMpBG1ShfvWOI1KA01j8GHucokiy3QF1roqXqy8LSMpgYX7%2FwfKx1IxdDdjTN7iciKhhNkxgztQy2poyX2dDvSn0UmB3oQI0XDUIzsalJt19j68J1wyosMJVfdCmTzFmOWp96MwnzzJwS2q%2Brohr5UZgOu3qpO6iacq7UchtDJM2GHw7i2%2F6cfTSzUVUwplJLtkqFynHlq%2F%2B%2BNO8lcqHtdt4PberIwi99PXaHfcwZ4rODtCnMqI2pcAetMGG7T0UPTHxZRYSHU8ZcK86jFYLWgXmma0LgJ%2FduMP6siMAGOqUB24Gv1kF3oaWOINmGCJM0VXcX8rlkfKI%2BiFQj2xLXIjGb0rdZ509ETJtIZZ5KXOW0MhcBhQEoEdKqN1eJD0vZdOzWG%2BnnskUkTGW3PgtuWyUPkk7vzMb7MRrPyw3IydIul%2Frsa2SpY39GyUWNwKVrjPt2hVYkwCsq8%2FGWRqnRxr7w%2FlssoKsxH18B3%2FvOSO9sMfc0JkRhPAV%2BeGHNBMak8x42XD%2Bl&X-Amz-Signature=64771dc16c368c271c69b3d03ef68dc08495157aa9024720e16dc485975b4d99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4FCSIN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRG85LgvbaApcvFeA0Ncm8JQ%2BkDfLFRUEub6eeyRhYqAiEAgq5K36akiG2s2fxiRvipTA5G4VadzJQb4yLtNfcd%2F%2BYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDK7HAhhBNj2V5DkwsSrcA7KiJOfvoxyFzBT%2BJfgIqDn6buICAoWluFlNN4FdLtlDezSDzRunnJfSiX9XUYEr%2F4Zj7wOLQ4ZtmXBYpdAUoD5cAZnPj55uXBKEY2ypeJQNLK3aYCzbUsF9gPxv2nG175eYB9uTscqXiR8EauhK9Kpd5OXkSFLqNzImOUWYuOuBCN9gIu7Zymx5ZcY0s2ViT4PQ7JBuh6sNj%2BwQWGncX8ihNuBzAro8kWvHWlIv984xa2a6%2BPOPz4NmKGgYUrCZyiscKrhgo9ABW4o5pQF%2FBYB%2BXr3qPu8Gu3aYI%2BAfA82CHVw7lZU6CjhFLz%2FVGJ9rN8yjmypD9m7sXRFWMtr%2Bf86DSGIUMpBG1ShfvWOI1KA01j8GHucokiy3QF1roqXqy8LSMpgYX7%2FwfKx1IxdDdjTN7iciKhhNkxgztQy2poyX2dDvSn0UmB3oQI0XDUIzsalJt19j68J1wyosMJVfdCmTzFmOWp96MwnzzJwS2q%2Brohr5UZgOu3qpO6iacq7UchtDJM2GHw7i2%2F6cfTSzUVUwplJLtkqFynHlq%2F%2B%2BNO8lcqHtdt4PberIwi99PXaHfcwZ4rODtCnMqI2pcAetMGG7T0UPTHxZRYSHU8ZcK86jFYLWgXmma0LgJ%2FduMP6siMAGOqUB24Gv1kF3oaWOINmGCJM0VXcX8rlkfKI%2BiFQj2xLXIjGb0rdZ509ETJtIZZ5KXOW0MhcBhQEoEdKqN1eJD0vZdOzWG%2BnnskUkTGW3PgtuWyUPkk7vzMb7MRrPyw3IydIul%2Frsa2SpY39GyUWNwKVrjPt2hVYkwCsq8%2FGWRqnRxr7w%2FlssoKsxH18B3%2FvOSO9sMfc0JkRhPAV%2BeGHNBMak8x42XD%2Bl&X-Amz-Signature=9649849458d8616e0db20ab5638ee690fd8d3c611046946664a36409ce6624bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
