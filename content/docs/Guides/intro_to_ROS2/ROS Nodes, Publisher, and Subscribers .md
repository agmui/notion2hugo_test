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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQ5XZCG%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEgTw34c4xpMaJ32lArVtQeB87EJafnxwHtz0KqbV5NAiEA33Y2Jf3XOJ%2BPfktpm71rE07N3b6WK8NW%2BlaMqkKCUUIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOigRwM9JyvjPPzrSrcAzqLNQDwxj4sS6MiqStuE2SLe0G3Hcal7GVCJcOeT937AuyvVvBiO5ahNjjMX3ZlsyjKrsvpxbBxZgyTNMGXW8Up37Sq8fH3AKnMfI0TJhMf37ME96Mc8pX9OMlwmySgvp%2BpZuKZdN7EZtjPtEZJTSm%2Bs4LM9UgLnuKvqjVFB7bnES%2BJfUs9w%2BYQgtlE9ll9mDgGCvSwBAx646wFNdEyqAv08KChouokQXc3q7QIsbvz5WizLKoybzglRcR7KXyaghj%2FyJiJQOVO5FwtnLKDclrLGGu89sVIjgKQlRpGXolngKUfQuaOlzi3ZocO6p2myco6tyehpjuWs%2FnD8MBAb5GGn1%2FqcZsEZ%2FGHOFXitq80GkriTgNGAnkkjlIF7DI4eyi2KQsg%2BZdzYpLNDeQd17cg5Izby%2FxPANOksA4nCM4swq1547HSklCFkF%2FTJTvRvBgKltSabv62rY2gKpPg3EQ0DeeciUNmJsybayl1bucuq9AvSG1tWK2aGPHyUfO00KNX8A3mP9fnfIflcPeUBaWJeoIeRVtWME34ABXfmBzW%2BKs1dkQk19qlmLDbV3v9LXKUm1XcE1o%2BiInwkc8%2Fm17%2BTIoBacQQl9AdKnXKTgbE6prC5kmApyskEWCPMMDFz74GOqUBcGUPkBkPrizKNDFpyvSdnPm8HP%2BfHiYXRamUzA%2FXXWsnWSTnmriheiu3mzovzfVR%2FiXB8te54Bo90QJR9UTHtUHz9mGZpLbVinj9Nw8FPmvKmbvR4gQS55VQsNGHoozEyrjDdLU3GqChMXcA8VvzD1RzMggbnFS20lA5Punf8jLAJ2NMIJlrqVXEGROsv0pRfBNrEbNLUsdrz465d6nc8wqWyJ4g&X-Amz-Signature=c9d118d7dffd59ef2cdcaf6c5ebbec3fd40b8f6a7342aa0594ab3e11ad6f751e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQ5XZCG%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEgTw34c4xpMaJ32lArVtQeB87EJafnxwHtz0KqbV5NAiEA33Y2Jf3XOJ%2BPfktpm71rE07N3b6WK8NW%2BlaMqkKCUUIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOigRwM9JyvjPPzrSrcAzqLNQDwxj4sS6MiqStuE2SLe0G3Hcal7GVCJcOeT937AuyvVvBiO5ahNjjMX3ZlsyjKrsvpxbBxZgyTNMGXW8Up37Sq8fH3AKnMfI0TJhMf37ME96Mc8pX9OMlwmySgvp%2BpZuKZdN7EZtjPtEZJTSm%2Bs4LM9UgLnuKvqjVFB7bnES%2BJfUs9w%2BYQgtlE9ll9mDgGCvSwBAx646wFNdEyqAv08KChouokQXc3q7QIsbvz5WizLKoybzglRcR7KXyaghj%2FyJiJQOVO5FwtnLKDclrLGGu89sVIjgKQlRpGXolngKUfQuaOlzi3ZocO6p2myco6tyehpjuWs%2FnD8MBAb5GGn1%2FqcZsEZ%2FGHOFXitq80GkriTgNGAnkkjlIF7DI4eyi2KQsg%2BZdzYpLNDeQd17cg5Izby%2FxPANOksA4nCM4swq1547HSklCFkF%2FTJTvRvBgKltSabv62rY2gKpPg3EQ0DeeciUNmJsybayl1bucuq9AvSG1tWK2aGPHyUfO00KNX8A3mP9fnfIflcPeUBaWJeoIeRVtWME34ABXfmBzW%2BKs1dkQk19qlmLDbV3v9LXKUm1XcE1o%2BiInwkc8%2Fm17%2BTIoBacQQl9AdKnXKTgbE6prC5kmApyskEWCPMMDFz74GOqUBcGUPkBkPrizKNDFpyvSdnPm8HP%2BfHiYXRamUzA%2FXXWsnWSTnmriheiu3mzovzfVR%2FiXB8te54Bo90QJR9UTHtUHz9mGZpLbVinj9Nw8FPmvKmbvR4gQS55VQsNGHoozEyrjDdLU3GqChMXcA8VvzD1RzMggbnFS20lA5Punf8jLAJ2NMIJlrqVXEGROsv0pRfBNrEbNLUsdrz465d6nc8wqWyJ4g&X-Amz-Signature=3b7e5f5f0eb7a62cccb848c7033ec7128778a7a110f04d6c27bc550dd557bd14&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQ5XZCG%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEgTw34c4xpMaJ32lArVtQeB87EJafnxwHtz0KqbV5NAiEA33Y2Jf3XOJ%2BPfktpm71rE07N3b6WK8NW%2BlaMqkKCUUIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOigRwM9JyvjPPzrSrcAzqLNQDwxj4sS6MiqStuE2SLe0G3Hcal7GVCJcOeT937AuyvVvBiO5ahNjjMX3ZlsyjKrsvpxbBxZgyTNMGXW8Up37Sq8fH3AKnMfI0TJhMf37ME96Mc8pX9OMlwmySgvp%2BpZuKZdN7EZtjPtEZJTSm%2Bs4LM9UgLnuKvqjVFB7bnES%2BJfUs9w%2BYQgtlE9ll9mDgGCvSwBAx646wFNdEyqAv08KChouokQXc3q7QIsbvz5WizLKoybzglRcR7KXyaghj%2FyJiJQOVO5FwtnLKDclrLGGu89sVIjgKQlRpGXolngKUfQuaOlzi3ZocO6p2myco6tyehpjuWs%2FnD8MBAb5GGn1%2FqcZsEZ%2FGHOFXitq80GkriTgNGAnkkjlIF7DI4eyi2KQsg%2BZdzYpLNDeQd17cg5Izby%2FxPANOksA4nCM4swq1547HSklCFkF%2FTJTvRvBgKltSabv62rY2gKpPg3EQ0DeeciUNmJsybayl1bucuq9AvSG1tWK2aGPHyUfO00KNX8A3mP9fnfIflcPeUBaWJeoIeRVtWME34ABXfmBzW%2BKs1dkQk19qlmLDbV3v9LXKUm1XcE1o%2BiInwkc8%2Fm17%2BTIoBacQQl9AdKnXKTgbE6prC5kmApyskEWCPMMDFz74GOqUBcGUPkBkPrizKNDFpyvSdnPm8HP%2BfHiYXRamUzA%2FXXWsnWSTnmriheiu3mzovzfVR%2FiXB8te54Bo90QJR9UTHtUHz9mGZpLbVinj9Nw8FPmvKmbvR4gQS55VQsNGHoozEyrjDdLU3GqChMXcA8VvzD1RzMggbnFS20lA5Punf8jLAJ2NMIJlrqVXEGROsv0pRfBNrEbNLUsdrz465d6nc8wqWyJ4g&X-Amz-Signature=abc02fe80fb9af04cfa4ca7eced2d694601da5e84558dc1f8bc42d6cb344f8d6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQ5XZCG%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEgTw34c4xpMaJ32lArVtQeB87EJafnxwHtz0KqbV5NAiEA33Y2Jf3XOJ%2BPfktpm71rE07N3b6WK8NW%2BlaMqkKCUUIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOigRwM9JyvjPPzrSrcAzqLNQDwxj4sS6MiqStuE2SLe0G3Hcal7GVCJcOeT937AuyvVvBiO5ahNjjMX3ZlsyjKrsvpxbBxZgyTNMGXW8Up37Sq8fH3AKnMfI0TJhMf37ME96Mc8pX9OMlwmySgvp%2BpZuKZdN7EZtjPtEZJTSm%2Bs4LM9UgLnuKvqjVFB7bnES%2BJfUs9w%2BYQgtlE9ll9mDgGCvSwBAx646wFNdEyqAv08KChouokQXc3q7QIsbvz5WizLKoybzglRcR7KXyaghj%2FyJiJQOVO5FwtnLKDclrLGGu89sVIjgKQlRpGXolngKUfQuaOlzi3ZocO6p2myco6tyehpjuWs%2FnD8MBAb5GGn1%2FqcZsEZ%2FGHOFXitq80GkriTgNGAnkkjlIF7DI4eyi2KQsg%2BZdzYpLNDeQd17cg5Izby%2FxPANOksA4nCM4swq1547HSklCFkF%2FTJTvRvBgKltSabv62rY2gKpPg3EQ0DeeciUNmJsybayl1bucuq9AvSG1tWK2aGPHyUfO00KNX8A3mP9fnfIflcPeUBaWJeoIeRVtWME34ABXfmBzW%2BKs1dkQk19qlmLDbV3v9LXKUm1XcE1o%2BiInwkc8%2Fm17%2BTIoBacQQl9AdKnXKTgbE6prC5kmApyskEWCPMMDFz74GOqUBcGUPkBkPrizKNDFpyvSdnPm8HP%2BfHiYXRamUzA%2FXXWsnWSTnmriheiu3mzovzfVR%2FiXB8te54Bo90QJR9UTHtUHz9mGZpLbVinj9Nw8FPmvKmbvR4gQS55VQsNGHoozEyrjDdLU3GqChMXcA8VvzD1RzMggbnFS20lA5Punf8jLAJ2NMIJlrqVXEGROsv0pRfBNrEbNLUsdrz465d6nc8wqWyJ4g&X-Amz-Signature=5626f1b9ee19ec9d923d5d754b7a9c7dbdfa4439c50da1afb2eb4719194fd5b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQ5XZCG%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEgTw34c4xpMaJ32lArVtQeB87EJafnxwHtz0KqbV5NAiEA33Y2Jf3XOJ%2BPfktpm71rE07N3b6WK8NW%2BlaMqkKCUUIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOigRwM9JyvjPPzrSrcAzqLNQDwxj4sS6MiqStuE2SLe0G3Hcal7GVCJcOeT937AuyvVvBiO5ahNjjMX3ZlsyjKrsvpxbBxZgyTNMGXW8Up37Sq8fH3AKnMfI0TJhMf37ME96Mc8pX9OMlwmySgvp%2BpZuKZdN7EZtjPtEZJTSm%2Bs4LM9UgLnuKvqjVFB7bnES%2BJfUs9w%2BYQgtlE9ll9mDgGCvSwBAx646wFNdEyqAv08KChouokQXc3q7QIsbvz5WizLKoybzglRcR7KXyaghj%2FyJiJQOVO5FwtnLKDclrLGGu89sVIjgKQlRpGXolngKUfQuaOlzi3ZocO6p2myco6tyehpjuWs%2FnD8MBAb5GGn1%2FqcZsEZ%2FGHOFXitq80GkriTgNGAnkkjlIF7DI4eyi2KQsg%2BZdzYpLNDeQd17cg5Izby%2FxPANOksA4nCM4swq1547HSklCFkF%2FTJTvRvBgKltSabv62rY2gKpPg3EQ0DeeciUNmJsybayl1bucuq9AvSG1tWK2aGPHyUfO00KNX8A3mP9fnfIflcPeUBaWJeoIeRVtWME34ABXfmBzW%2BKs1dkQk19qlmLDbV3v9LXKUm1XcE1o%2BiInwkc8%2Fm17%2BTIoBacQQl9AdKnXKTgbE6prC5kmApyskEWCPMMDFz74GOqUBcGUPkBkPrizKNDFpyvSdnPm8HP%2BfHiYXRamUzA%2FXXWsnWSTnmriheiu3mzovzfVR%2FiXB8te54Bo90QJR9UTHtUHz9mGZpLbVinj9Nw8FPmvKmbvR4gQS55VQsNGHoozEyrjDdLU3GqChMXcA8VvzD1RzMggbnFS20lA5Punf8jLAJ2NMIJlrqVXEGROsv0pRfBNrEbNLUsdrz465d6nc8wqWyJ4g&X-Amz-Signature=1384bbf5ce9e4eed64300f9293c005d970771e2f26f75472c6637e706b8bfe70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQ5XZCG%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEgTw34c4xpMaJ32lArVtQeB87EJafnxwHtz0KqbV5NAiEA33Y2Jf3XOJ%2BPfktpm71rE07N3b6WK8NW%2BlaMqkKCUUIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOigRwM9JyvjPPzrSrcAzqLNQDwxj4sS6MiqStuE2SLe0G3Hcal7GVCJcOeT937AuyvVvBiO5ahNjjMX3ZlsyjKrsvpxbBxZgyTNMGXW8Up37Sq8fH3AKnMfI0TJhMf37ME96Mc8pX9OMlwmySgvp%2BpZuKZdN7EZtjPtEZJTSm%2Bs4LM9UgLnuKvqjVFB7bnES%2BJfUs9w%2BYQgtlE9ll9mDgGCvSwBAx646wFNdEyqAv08KChouokQXc3q7QIsbvz5WizLKoybzglRcR7KXyaghj%2FyJiJQOVO5FwtnLKDclrLGGu89sVIjgKQlRpGXolngKUfQuaOlzi3ZocO6p2myco6tyehpjuWs%2FnD8MBAb5GGn1%2FqcZsEZ%2FGHOFXitq80GkriTgNGAnkkjlIF7DI4eyi2KQsg%2BZdzYpLNDeQd17cg5Izby%2FxPANOksA4nCM4swq1547HSklCFkF%2FTJTvRvBgKltSabv62rY2gKpPg3EQ0DeeciUNmJsybayl1bucuq9AvSG1tWK2aGPHyUfO00KNX8A3mP9fnfIflcPeUBaWJeoIeRVtWME34ABXfmBzW%2BKs1dkQk19qlmLDbV3v9LXKUm1XcE1o%2BiInwkc8%2Fm17%2BTIoBacQQl9AdKnXKTgbE6prC5kmApyskEWCPMMDFz74GOqUBcGUPkBkPrizKNDFpyvSdnPm8HP%2BfHiYXRamUzA%2FXXWsnWSTnmriheiu3mzovzfVR%2FiXB8te54Bo90QJR9UTHtUHz9mGZpLbVinj9Nw8FPmvKmbvR4gQS55VQsNGHoozEyrjDdLU3GqChMXcA8VvzD1RzMggbnFS20lA5Punf8jLAJ2NMIJlrqVXEGROsv0pRfBNrEbNLUsdrz465d6nc8wqWyJ4g&X-Amz-Signature=f7b0a9fa9f1412094ad1eae7cbca937c842297ca84b2109abc8bb3dc049f0cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQ5XZCG%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEgTw34c4xpMaJ32lArVtQeB87EJafnxwHtz0KqbV5NAiEA33Y2Jf3XOJ%2BPfktpm71rE07N3b6WK8NW%2BlaMqkKCUUIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOigRwM9JyvjPPzrSrcAzqLNQDwxj4sS6MiqStuE2SLe0G3Hcal7GVCJcOeT937AuyvVvBiO5ahNjjMX3ZlsyjKrsvpxbBxZgyTNMGXW8Up37Sq8fH3AKnMfI0TJhMf37ME96Mc8pX9OMlwmySgvp%2BpZuKZdN7EZtjPtEZJTSm%2Bs4LM9UgLnuKvqjVFB7bnES%2BJfUs9w%2BYQgtlE9ll9mDgGCvSwBAx646wFNdEyqAv08KChouokQXc3q7QIsbvz5WizLKoybzglRcR7KXyaghj%2FyJiJQOVO5FwtnLKDclrLGGu89sVIjgKQlRpGXolngKUfQuaOlzi3ZocO6p2myco6tyehpjuWs%2FnD8MBAb5GGn1%2FqcZsEZ%2FGHOFXitq80GkriTgNGAnkkjlIF7DI4eyi2KQsg%2BZdzYpLNDeQd17cg5Izby%2FxPANOksA4nCM4swq1547HSklCFkF%2FTJTvRvBgKltSabv62rY2gKpPg3EQ0DeeciUNmJsybayl1bucuq9AvSG1tWK2aGPHyUfO00KNX8A3mP9fnfIflcPeUBaWJeoIeRVtWME34ABXfmBzW%2BKs1dkQk19qlmLDbV3v9LXKUm1XcE1o%2BiInwkc8%2Fm17%2BTIoBacQQl9AdKnXKTgbE6prC5kmApyskEWCPMMDFz74GOqUBcGUPkBkPrizKNDFpyvSdnPm8HP%2BfHiYXRamUzA%2FXXWsnWSTnmriheiu3mzovzfVR%2FiXB8te54Bo90QJR9UTHtUHz9mGZpLbVinj9Nw8FPmvKmbvR4gQS55VQsNGHoozEyrjDdLU3GqChMXcA8VvzD1RzMggbnFS20lA5Punf8jLAJ2NMIJlrqVXEGROsv0pRfBNrEbNLUsdrz465d6nc8wqWyJ4g&X-Amz-Signature=eee31b371f4697554438465a44131a350df0d14474f898f55208f806818c38f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BQ5XZCG%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEgTw34c4xpMaJ32lArVtQeB87EJafnxwHtz0KqbV5NAiEA33Y2Jf3XOJ%2BPfktpm71rE07N3b6WK8NW%2BlaMqkKCUUIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOigRwM9JyvjPPzrSrcAzqLNQDwxj4sS6MiqStuE2SLe0G3Hcal7GVCJcOeT937AuyvVvBiO5ahNjjMX3ZlsyjKrsvpxbBxZgyTNMGXW8Up37Sq8fH3AKnMfI0TJhMf37ME96Mc8pX9OMlwmySgvp%2BpZuKZdN7EZtjPtEZJTSm%2Bs4LM9UgLnuKvqjVFB7bnES%2BJfUs9w%2BYQgtlE9ll9mDgGCvSwBAx646wFNdEyqAv08KChouokQXc3q7QIsbvz5WizLKoybzglRcR7KXyaghj%2FyJiJQOVO5FwtnLKDclrLGGu89sVIjgKQlRpGXolngKUfQuaOlzi3ZocO6p2myco6tyehpjuWs%2FnD8MBAb5GGn1%2FqcZsEZ%2FGHOFXitq80GkriTgNGAnkkjlIF7DI4eyi2KQsg%2BZdzYpLNDeQd17cg5Izby%2FxPANOksA4nCM4swq1547HSklCFkF%2FTJTvRvBgKltSabv62rY2gKpPg3EQ0DeeciUNmJsybayl1bucuq9AvSG1tWK2aGPHyUfO00KNX8A3mP9fnfIflcPeUBaWJeoIeRVtWME34ABXfmBzW%2BKs1dkQk19qlmLDbV3v9LXKUm1XcE1o%2BiInwkc8%2Fm17%2BTIoBacQQl9AdKnXKTgbE6prC5kmApyskEWCPMMDFz74GOqUBcGUPkBkPrizKNDFpyvSdnPm8HP%2BfHiYXRamUzA%2FXXWsnWSTnmriheiu3mzovzfVR%2FiXB8te54Bo90QJR9UTHtUHz9mGZpLbVinj9Nw8FPmvKmbvR4gQS55VQsNGHoozEyrjDdLU3GqChMXcA8VvzD1RzMggbnFS20lA5Punf8jLAJ2NMIJlrqVXEGROsv0pRfBNrEbNLUsdrz465d6nc8wqWyJ4g&X-Amz-Signature=ba7931ea68545f18883fd67253ac6d69489f5d704c7e70262a5ce5fe8566d1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
