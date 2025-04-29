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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEXDXUO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCmTGecz3NySI6xA42NulAgoCFc2Amq9%2FmKyy77X4aEAIhANPaoS2dlrCHQ8dseXfPftci%2BW1ORbOv1u%2BfqZs5ipNFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxLmeZW%2F1xzIfLiAMq3AMoUWm%2BYBPOq9FT6jF3SZ%2BZZGNxhmKmKtlimPeOXzNzUU7lQFAQ8Suz0iXmiqZbTsp9EU1kGsvDl%2B9LV5zPtlZ3cnIkabNz6qisBGCltbQYKr2tn7WlIUKP04ABUngemTqMP%2FQx%2F04Pg9yrqOmxUP4AVYJVdjjMTlVoZRlBGRj%2FJf68Vak1pJrjNEDD8lKQOVWpR7xgj1Mo41XQBnFi%2FN7%2F0eVefXp%2B8mARejEHQIBnUacMIqdB7bRj%2BjhSoJZZ5mLfiBsWWnKRWyZwM0sPHvP5poqBLvDntocIQY00rKrUE2Z05HjKcByZ75xMwt%2FJQxv0s%2F%2BJZnjgCFv8I2QvJzXKL%2FCdrpnjMwwFLMZ40LaSAJn8CH0J3dCNZ0L1nhWd9f7nd%2FCPGKwjZFI2DGs22PnoFFbsFHMNjyqVOyEu7tGylmlvITkOtqRTBmj4zLwAhIUTk5AbAzLRNhST%2F2W89iSqO9xZOJUCQ15QvG37yXZx8j9kNyvYfXjRiOkCFT2YowUEwyzuaFsxFmv6IGdv0LjfgsKzWMX%2BpSliAOaGD4ejBNw0ZbXcBj4y2D9KHNxfuVI8FCSO76PFnxWkXsmaw1xEgMbk%2FjnpDbU%2BS9NP3XbwsanfndYFP3G7JkzAATDzo8PABjqkAWJaJ4K8XJZ9mHiBQfeVXWKss0EVdxBXRJDbrylEl4GSU8jgNXnx2yQbYfGgvbw9Rfv5E8%2BYUnbzAuwBTltLhoDCMxtmUn%2BRt5t5WIgD%2Bw3vPogpMVbHNSKmT8UHVr9CNpTcVEDxmKNmelHVH41p8zhvtq8VmkBva4Gew4OoFj7U8LGl8H4F11MXnpwel9AVYgs6Pa4VK9fOim1VZytBlGZDqk9p&X-Amz-Signature=77502686439de81d74bf03a8acb1a8b9f36263a7b64eafb4e9b56f2871afab2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEXDXUO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCmTGecz3NySI6xA42NulAgoCFc2Amq9%2FmKyy77X4aEAIhANPaoS2dlrCHQ8dseXfPftci%2BW1ORbOv1u%2BfqZs5ipNFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxLmeZW%2F1xzIfLiAMq3AMoUWm%2BYBPOq9FT6jF3SZ%2BZZGNxhmKmKtlimPeOXzNzUU7lQFAQ8Suz0iXmiqZbTsp9EU1kGsvDl%2B9LV5zPtlZ3cnIkabNz6qisBGCltbQYKr2tn7WlIUKP04ABUngemTqMP%2FQx%2F04Pg9yrqOmxUP4AVYJVdjjMTlVoZRlBGRj%2FJf68Vak1pJrjNEDD8lKQOVWpR7xgj1Mo41XQBnFi%2FN7%2F0eVefXp%2B8mARejEHQIBnUacMIqdB7bRj%2BjhSoJZZ5mLfiBsWWnKRWyZwM0sPHvP5poqBLvDntocIQY00rKrUE2Z05HjKcByZ75xMwt%2FJQxv0s%2F%2BJZnjgCFv8I2QvJzXKL%2FCdrpnjMwwFLMZ40LaSAJn8CH0J3dCNZ0L1nhWd9f7nd%2FCPGKwjZFI2DGs22PnoFFbsFHMNjyqVOyEu7tGylmlvITkOtqRTBmj4zLwAhIUTk5AbAzLRNhST%2F2W89iSqO9xZOJUCQ15QvG37yXZx8j9kNyvYfXjRiOkCFT2YowUEwyzuaFsxFmv6IGdv0LjfgsKzWMX%2BpSliAOaGD4ejBNw0ZbXcBj4y2D9KHNxfuVI8FCSO76PFnxWkXsmaw1xEgMbk%2FjnpDbU%2BS9NP3XbwsanfndYFP3G7JkzAATDzo8PABjqkAWJaJ4K8XJZ9mHiBQfeVXWKss0EVdxBXRJDbrylEl4GSU8jgNXnx2yQbYfGgvbw9Rfv5E8%2BYUnbzAuwBTltLhoDCMxtmUn%2BRt5t5WIgD%2Bw3vPogpMVbHNSKmT8UHVr9CNpTcVEDxmKNmelHVH41p8zhvtq8VmkBva4Gew4OoFj7U8LGl8H4F11MXnpwel9AVYgs6Pa4VK9fOim1VZytBlGZDqk9p&X-Amz-Signature=6bcc8ff4c00e4271256d19820fd757500c9ee8f8c91d24cf2463b09b7bd8a3d4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEXDXUO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCmTGecz3NySI6xA42NulAgoCFc2Amq9%2FmKyy77X4aEAIhANPaoS2dlrCHQ8dseXfPftci%2BW1ORbOv1u%2BfqZs5ipNFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxLmeZW%2F1xzIfLiAMq3AMoUWm%2BYBPOq9FT6jF3SZ%2BZZGNxhmKmKtlimPeOXzNzUU7lQFAQ8Suz0iXmiqZbTsp9EU1kGsvDl%2B9LV5zPtlZ3cnIkabNz6qisBGCltbQYKr2tn7WlIUKP04ABUngemTqMP%2FQx%2F04Pg9yrqOmxUP4AVYJVdjjMTlVoZRlBGRj%2FJf68Vak1pJrjNEDD8lKQOVWpR7xgj1Mo41XQBnFi%2FN7%2F0eVefXp%2B8mARejEHQIBnUacMIqdB7bRj%2BjhSoJZZ5mLfiBsWWnKRWyZwM0sPHvP5poqBLvDntocIQY00rKrUE2Z05HjKcByZ75xMwt%2FJQxv0s%2F%2BJZnjgCFv8I2QvJzXKL%2FCdrpnjMwwFLMZ40LaSAJn8CH0J3dCNZ0L1nhWd9f7nd%2FCPGKwjZFI2DGs22PnoFFbsFHMNjyqVOyEu7tGylmlvITkOtqRTBmj4zLwAhIUTk5AbAzLRNhST%2F2W89iSqO9xZOJUCQ15QvG37yXZx8j9kNyvYfXjRiOkCFT2YowUEwyzuaFsxFmv6IGdv0LjfgsKzWMX%2BpSliAOaGD4ejBNw0ZbXcBj4y2D9KHNxfuVI8FCSO76PFnxWkXsmaw1xEgMbk%2FjnpDbU%2BS9NP3XbwsanfndYFP3G7JkzAATDzo8PABjqkAWJaJ4K8XJZ9mHiBQfeVXWKss0EVdxBXRJDbrylEl4GSU8jgNXnx2yQbYfGgvbw9Rfv5E8%2BYUnbzAuwBTltLhoDCMxtmUn%2BRt5t5WIgD%2Bw3vPogpMVbHNSKmT8UHVr9CNpTcVEDxmKNmelHVH41p8zhvtq8VmkBva4Gew4OoFj7U8LGl8H4F11MXnpwel9AVYgs6Pa4VK9fOim1VZytBlGZDqk9p&X-Amz-Signature=9b8efa44e33185e4404cc48b71e345b833e78c4cd4e7b5a18003643daf634196&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEXDXUO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCmTGecz3NySI6xA42NulAgoCFc2Amq9%2FmKyy77X4aEAIhANPaoS2dlrCHQ8dseXfPftci%2BW1ORbOv1u%2BfqZs5ipNFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxLmeZW%2F1xzIfLiAMq3AMoUWm%2BYBPOq9FT6jF3SZ%2BZZGNxhmKmKtlimPeOXzNzUU7lQFAQ8Suz0iXmiqZbTsp9EU1kGsvDl%2B9LV5zPtlZ3cnIkabNz6qisBGCltbQYKr2tn7WlIUKP04ABUngemTqMP%2FQx%2F04Pg9yrqOmxUP4AVYJVdjjMTlVoZRlBGRj%2FJf68Vak1pJrjNEDD8lKQOVWpR7xgj1Mo41XQBnFi%2FN7%2F0eVefXp%2B8mARejEHQIBnUacMIqdB7bRj%2BjhSoJZZ5mLfiBsWWnKRWyZwM0sPHvP5poqBLvDntocIQY00rKrUE2Z05HjKcByZ75xMwt%2FJQxv0s%2F%2BJZnjgCFv8I2QvJzXKL%2FCdrpnjMwwFLMZ40LaSAJn8CH0J3dCNZ0L1nhWd9f7nd%2FCPGKwjZFI2DGs22PnoFFbsFHMNjyqVOyEu7tGylmlvITkOtqRTBmj4zLwAhIUTk5AbAzLRNhST%2F2W89iSqO9xZOJUCQ15QvG37yXZx8j9kNyvYfXjRiOkCFT2YowUEwyzuaFsxFmv6IGdv0LjfgsKzWMX%2BpSliAOaGD4ejBNw0ZbXcBj4y2D9KHNxfuVI8FCSO76PFnxWkXsmaw1xEgMbk%2FjnpDbU%2BS9NP3XbwsanfndYFP3G7JkzAATDzo8PABjqkAWJaJ4K8XJZ9mHiBQfeVXWKss0EVdxBXRJDbrylEl4GSU8jgNXnx2yQbYfGgvbw9Rfv5E8%2BYUnbzAuwBTltLhoDCMxtmUn%2BRt5t5WIgD%2Bw3vPogpMVbHNSKmT8UHVr9CNpTcVEDxmKNmelHVH41p8zhvtq8VmkBva4Gew4OoFj7U8LGl8H4F11MXnpwel9AVYgs6Pa4VK9fOim1VZytBlGZDqk9p&X-Amz-Signature=75d42c5d7d247d9e4043f8200d71dc816cd78b7f80f4a5dcd1d638ff2299ebcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEXDXUO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCmTGecz3NySI6xA42NulAgoCFc2Amq9%2FmKyy77X4aEAIhANPaoS2dlrCHQ8dseXfPftci%2BW1ORbOv1u%2BfqZs5ipNFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxLmeZW%2F1xzIfLiAMq3AMoUWm%2BYBPOq9FT6jF3SZ%2BZZGNxhmKmKtlimPeOXzNzUU7lQFAQ8Suz0iXmiqZbTsp9EU1kGsvDl%2B9LV5zPtlZ3cnIkabNz6qisBGCltbQYKr2tn7WlIUKP04ABUngemTqMP%2FQx%2F04Pg9yrqOmxUP4AVYJVdjjMTlVoZRlBGRj%2FJf68Vak1pJrjNEDD8lKQOVWpR7xgj1Mo41XQBnFi%2FN7%2F0eVefXp%2B8mARejEHQIBnUacMIqdB7bRj%2BjhSoJZZ5mLfiBsWWnKRWyZwM0sPHvP5poqBLvDntocIQY00rKrUE2Z05HjKcByZ75xMwt%2FJQxv0s%2F%2BJZnjgCFv8I2QvJzXKL%2FCdrpnjMwwFLMZ40LaSAJn8CH0J3dCNZ0L1nhWd9f7nd%2FCPGKwjZFI2DGs22PnoFFbsFHMNjyqVOyEu7tGylmlvITkOtqRTBmj4zLwAhIUTk5AbAzLRNhST%2F2W89iSqO9xZOJUCQ15QvG37yXZx8j9kNyvYfXjRiOkCFT2YowUEwyzuaFsxFmv6IGdv0LjfgsKzWMX%2BpSliAOaGD4ejBNw0ZbXcBj4y2D9KHNxfuVI8FCSO76PFnxWkXsmaw1xEgMbk%2FjnpDbU%2BS9NP3XbwsanfndYFP3G7JkzAATDzo8PABjqkAWJaJ4K8XJZ9mHiBQfeVXWKss0EVdxBXRJDbrylEl4GSU8jgNXnx2yQbYfGgvbw9Rfv5E8%2BYUnbzAuwBTltLhoDCMxtmUn%2BRt5t5WIgD%2Bw3vPogpMVbHNSKmT8UHVr9CNpTcVEDxmKNmelHVH41p8zhvtq8VmkBva4Gew4OoFj7U8LGl8H4F11MXnpwel9AVYgs6Pa4VK9fOim1VZytBlGZDqk9p&X-Amz-Signature=5455cda88391aaffc09f5e456d8ba83901f52153a5135c0ddc80f5d5a5fa9096&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEXDXUO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCmTGecz3NySI6xA42NulAgoCFc2Amq9%2FmKyy77X4aEAIhANPaoS2dlrCHQ8dseXfPftci%2BW1ORbOv1u%2BfqZs5ipNFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxLmeZW%2F1xzIfLiAMq3AMoUWm%2BYBPOq9FT6jF3SZ%2BZZGNxhmKmKtlimPeOXzNzUU7lQFAQ8Suz0iXmiqZbTsp9EU1kGsvDl%2B9LV5zPtlZ3cnIkabNz6qisBGCltbQYKr2tn7WlIUKP04ABUngemTqMP%2FQx%2F04Pg9yrqOmxUP4AVYJVdjjMTlVoZRlBGRj%2FJf68Vak1pJrjNEDD8lKQOVWpR7xgj1Mo41XQBnFi%2FN7%2F0eVefXp%2B8mARejEHQIBnUacMIqdB7bRj%2BjhSoJZZ5mLfiBsWWnKRWyZwM0sPHvP5poqBLvDntocIQY00rKrUE2Z05HjKcByZ75xMwt%2FJQxv0s%2F%2BJZnjgCFv8I2QvJzXKL%2FCdrpnjMwwFLMZ40LaSAJn8CH0J3dCNZ0L1nhWd9f7nd%2FCPGKwjZFI2DGs22PnoFFbsFHMNjyqVOyEu7tGylmlvITkOtqRTBmj4zLwAhIUTk5AbAzLRNhST%2F2W89iSqO9xZOJUCQ15QvG37yXZx8j9kNyvYfXjRiOkCFT2YowUEwyzuaFsxFmv6IGdv0LjfgsKzWMX%2BpSliAOaGD4ejBNw0ZbXcBj4y2D9KHNxfuVI8FCSO76PFnxWkXsmaw1xEgMbk%2FjnpDbU%2BS9NP3XbwsanfndYFP3G7JkzAATDzo8PABjqkAWJaJ4K8XJZ9mHiBQfeVXWKss0EVdxBXRJDbrylEl4GSU8jgNXnx2yQbYfGgvbw9Rfv5E8%2BYUnbzAuwBTltLhoDCMxtmUn%2BRt5t5WIgD%2Bw3vPogpMVbHNSKmT8UHVr9CNpTcVEDxmKNmelHVH41p8zhvtq8VmkBva4Gew4OoFj7U8LGl8H4F11MXnpwel9AVYgs6Pa4VK9fOim1VZytBlGZDqk9p&X-Amz-Signature=82137f8714aea5eb4df6a10e60e464275cd81e212b24ed296baf9a5be11aca26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEXDXUO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCmTGecz3NySI6xA42NulAgoCFc2Amq9%2FmKyy77X4aEAIhANPaoS2dlrCHQ8dseXfPftci%2BW1ORbOv1u%2BfqZs5ipNFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxLmeZW%2F1xzIfLiAMq3AMoUWm%2BYBPOq9FT6jF3SZ%2BZZGNxhmKmKtlimPeOXzNzUU7lQFAQ8Suz0iXmiqZbTsp9EU1kGsvDl%2B9LV5zPtlZ3cnIkabNz6qisBGCltbQYKr2tn7WlIUKP04ABUngemTqMP%2FQx%2F04Pg9yrqOmxUP4AVYJVdjjMTlVoZRlBGRj%2FJf68Vak1pJrjNEDD8lKQOVWpR7xgj1Mo41XQBnFi%2FN7%2F0eVefXp%2B8mARejEHQIBnUacMIqdB7bRj%2BjhSoJZZ5mLfiBsWWnKRWyZwM0sPHvP5poqBLvDntocIQY00rKrUE2Z05HjKcByZ75xMwt%2FJQxv0s%2F%2BJZnjgCFv8I2QvJzXKL%2FCdrpnjMwwFLMZ40LaSAJn8CH0J3dCNZ0L1nhWd9f7nd%2FCPGKwjZFI2DGs22PnoFFbsFHMNjyqVOyEu7tGylmlvITkOtqRTBmj4zLwAhIUTk5AbAzLRNhST%2F2W89iSqO9xZOJUCQ15QvG37yXZx8j9kNyvYfXjRiOkCFT2YowUEwyzuaFsxFmv6IGdv0LjfgsKzWMX%2BpSliAOaGD4ejBNw0ZbXcBj4y2D9KHNxfuVI8FCSO76PFnxWkXsmaw1xEgMbk%2FjnpDbU%2BS9NP3XbwsanfndYFP3G7JkzAATDzo8PABjqkAWJaJ4K8XJZ9mHiBQfeVXWKss0EVdxBXRJDbrylEl4GSU8jgNXnx2yQbYfGgvbw9Rfv5E8%2BYUnbzAuwBTltLhoDCMxtmUn%2BRt5t5WIgD%2Bw3vPogpMVbHNSKmT8UHVr9CNpTcVEDxmKNmelHVH41p8zhvtq8VmkBva4Gew4OoFj7U8LGl8H4F11MXnpwel9AVYgs6Pa4VK9fOim1VZytBlGZDqk9p&X-Amz-Signature=a3605429d606c01e1cf385dadfd071f39b8ef299b20ebb51a162e9dc1cc61b66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEXDXUO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCmTGecz3NySI6xA42NulAgoCFc2Amq9%2FmKyy77X4aEAIhANPaoS2dlrCHQ8dseXfPftci%2BW1ORbOv1u%2BfqZs5ipNFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxLmeZW%2F1xzIfLiAMq3AMoUWm%2BYBPOq9FT6jF3SZ%2BZZGNxhmKmKtlimPeOXzNzUU7lQFAQ8Suz0iXmiqZbTsp9EU1kGsvDl%2B9LV5zPtlZ3cnIkabNz6qisBGCltbQYKr2tn7WlIUKP04ABUngemTqMP%2FQx%2F04Pg9yrqOmxUP4AVYJVdjjMTlVoZRlBGRj%2FJf68Vak1pJrjNEDD8lKQOVWpR7xgj1Mo41XQBnFi%2FN7%2F0eVefXp%2B8mARejEHQIBnUacMIqdB7bRj%2BjhSoJZZ5mLfiBsWWnKRWyZwM0sPHvP5poqBLvDntocIQY00rKrUE2Z05HjKcByZ75xMwt%2FJQxv0s%2F%2BJZnjgCFv8I2QvJzXKL%2FCdrpnjMwwFLMZ40LaSAJn8CH0J3dCNZ0L1nhWd9f7nd%2FCPGKwjZFI2DGs22PnoFFbsFHMNjyqVOyEu7tGylmlvITkOtqRTBmj4zLwAhIUTk5AbAzLRNhST%2F2W89iSqO9xZOJUCQ15QvG37yXZx8j9kNyvYfXjRiOkCFT2YowUEwyzuaFsxFmv6IGdv0LjfgsKzWMX%2BpSliAOaGD4ejBNw0ZbXcBj4y2D9KHNxfuVI8FCSO76PFnxWkXsmaw1xEgMbk%2FjnpDbU%2BS9NP3XbwsanfndYFP3G7JkzAATDzo8PABjqkAWJaJ4K8XJZ9mHiBQfeVXWKss0EVdxBXRJDbrylEl4GSU8jgNXnx2yQbYfGgvbw9Rfv5E8%2BYUnbzAuwBTltLhoDCMxtmUn%2BRt5t5WIgD%2Bw3vPogpMVbHNSKmT8UHVr9CNpTcVEDxmKNmelHVH41p8zhvtq8VmkBva4Gew4OoFj7U8LGl8H4F11MXnpwel9AVYgs6Pa4VK9fOim1VZytBlGZDqk9p&X-Amz-Signature=b6d35c7bd4b0f8ee7962b9431ea71f42559e58b83d0ccdd5a4091c967f7f6300&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
