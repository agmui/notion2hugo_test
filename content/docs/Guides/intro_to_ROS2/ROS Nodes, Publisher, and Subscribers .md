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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLK2BNGN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc7VOu4O2vMhUnfHfeumO70v1dEjGlsAP%2Bn5TKbldmFAiEA9q3u4WifXzEC34cKypiFvoYJPZ7T4bJsOH9kVuYkIy8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPz%2B4KWwOajMnlzsircA56HByzgIJn52x8Pnyq1jGhLEE3Lzn0FiYxyyett3%2FOBnBLMhZllIuOtP7%2BweqEj075Uk8pKLUTF4HlVptSh3KLDXNmWOA4a8cOWC1XxzN7tlsJnSM2X3y7pek55jrGWvjvSASu2wqqt5TvcwwbfRF1VEOJ9crKTtZlUA72BnBPPtGvvHBbe7988cxnPb2H9QdZgZfCyYai%2FNnkfTb0M9V5%2F2%2FbddFbnAgXisIQVbjVBqPYbenmJwBbghE0U%2FDLA9qP%2B8S4bHIj%2FdpmtL5bIYbhSpKijRunHpsMeX5V2WWi%2BtFPoeIDzUBMDbIs7Xk8VbjEwWbbkgQNW5%2BtIidMLCZ%2FwHWrmoJL%2BWKzTuHX4rUCwVpolynsvJY5AkH9fYi0gP7TmDrA9YiFca2EOI2aCnPOaVaSLPdlnXms%2B6nJLNiO6m83dC3n2wq1IRQ0QcW1qmR0cpMqVTTJAGv6lilmb0O%2Bjml6zw%2FepRwW24jIQ%2F8e4S7i57kh97tiDH6lSmrEG%2BMjMHo7VLKz5hvIKuqkXDa556XX55bmLvOFHJkYuZE51rncoOZtWfNHt21OaUc4iWovJ191UUcC%2Fi3qNLIzPpxQyhhsyV2VUCqRetsl9WgHSLGmv2WurxRANC1%2FfMMrAgL0GOqUBKNH113oMK7Cd1DEZ9LCHgJ%2BSfnRXfXPWGWt7tS1%2BltXNM3Ec%2Bc6P2qvcI%2FQ%2FC0aNfQcOtupbyiumsgjX5pqoSOkHfb4%2FmDxFytZZvT3Bw0JjfXMmruokkMsQ%2BCVzvyQNN9DmN2Os%2F%2FgVdPkt9JIMJubMMFbf%2FBJdtLw%2B8n3XjhzGNVLnj8xc%2FTQw3IC%2F600qZ27NlDVn5ONNqdkdqU3hZnrw%2BUx%2F&X-Amz-Signature=597c9e7a9df9a0d0c241eedd591ddc4a41cd3a3c7837489e93e4254fcf9b43f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLK2BNGN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc7VOu4O2vMhUnfHfeumO70v1dEjGlsAP%2Bn5TKbldmFAiEA9q3u4WifXzEC34cKypiFvoYJPZ7T4bJsOH9kVuYkIy8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPz%2B4KWwOajMnlzsircA56HByzgIJn52x8Pnyq1jGhLEE3Lzn0FiYxyyett3%2FOBnBLMhZllIuOtP7%2BweqEj075Uk8pKLUTF4HlVptSh3KLDXNmWOA4a8cOWC1XxzN7tlsJnSM2X3y7pek55jrGWvjvSASu2wqqt5TvcwwbfRF1VEOJ9crKTtZlUA72BnBPPtGvvHBbe7988cxnPb2H9QdZgZfCyYai%2FNnkfTb0M9V5%2F2%2FbddFbnAgXisIQVbjVBqPYbenmJwBbghE0U%2FDLA9qP%2B8S4bHIj%2FdpmtL5bIYbhSpKijRunHpsMeX5V2WWi%2BtFPoeIDzUBMDbIs7Xk8VbjEwWbbkgQNW5%2BtIidMLCZ%2FwHWrmoJL%2BWKzTuHX4rUCwVpolynsvJY5AkH9fYi0gP7TmDrA9YiFca2EOI2aCnPOaVaSLPdlnXms%2B6nJLNiO6m83dC3n2wq1IRQ0QcW1qmR0cpMqVTTJAGv6lilmb0O%2Bjml6zw%2FepRwW24jIQ%2F8e4S7i57kh97tiDH6lSmrEG%2BMjMHo7VLKz5hvIKuqkXDa556XX55bmLvOFHJkYuZE51rncoOZtWfNHt21OaUc4iWovJ191UUcC%2Fi3qNLIzPpxQyhhsyV2VUCqRetsl9WgHSLGmv2WurxRANC1%2FfMMrAgL0GOqUBKNH113oMK7Cd1DEZ9LCHgJ%2BSfnRXfXPWGWt7tS1%2BltXNM3Ec%2Bc6P2qvcI%2FQ%2FC0aNfQcOtupbyiumsgjX5pqoSOkHfb4%2FmDxFytZZvT3Bw0JjfXMmruokkMsQ%2BCVzvyQNN9DmN2Os%2F%2FgVdPkt9JIMJubMMFbf%2FBJdtLw%2B8n3XjhzGNVLnj8xc%2FTQw3IC%2F600qZ27NlDVn5ONNqdkdqU3hZnrw%2BUx%2F&X-Amz-Signature=009a62692524afbb5a2177cea18e55659170e35131f0620c556c736b45d9711c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLK2BNGN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc7VOu4O2vMhUnfHfeumO70v1dEjGlsAP%2Bn5TKbldmFAiEA9q3u4WifXzEC34cKypiFvoYJPZ7T4bJsOH9kVuYkIy8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPz%2B4KWwOajMnlzsircA56HByzgIJn52x8Pnyq1jGhLEE3Lzn0FiYxyyett3%2FOBnBLMhZllIuOtP7%2BweqEj075Uk8pKLUTF4HlVptSh3KLDXNmWOA4a8cOWC1XxzN7tlsJnSM2X3y7pek55jrGWvjvSASu2wqqt5TvcwwbfRF1VEOJ9crKTtZlUA72BnBPPtGvvHBbe7988cxnPb2H9QdZgZfCyYai%2FNnkfTb0M9V5%2F2%2FbddFbnAgXisIQVbjVBqPYbenmJwBbghE0U%2FDLA9qP%2B8S4bHIj%2FdpmtL5bIYbhSpKijRunHpsMeX5V2WWi%2BtFPoeIDzUBMDbIs7Xk8VbjEwWbbkgQNW5%2BtIidMLCZ%2FwHWrmoJL%2BWKzTuHX4rUCwVpolynsvJY5AkH9fYi0gP7TmDrA9YiFca2EOI2aCnPOaVaSLPdlnXms%2B6nJLNiO6m83dC3n2wq1IRQ0QcW1qmR0cpMqVTTJAGv6lilmb0O%2Bjml6zw%2FepRwW24jIQ%2F8e4S7i57kh97tiDH6lSmrEG%2BMjMHo7VLKz5hvIKuqkXDa556XX55bmLvOFHJkYuZE51rncoOZtWfNHt21OaUc4iWovJ191UUcC%2Fi3qNLIzPpxQyhhsyV2VUCqRetsl9WgHSLGmv2WurxRANC1%2FfMMrAgL0GOqUBKNH113oMK7Cd1DEZ9LCHgJ%2BSfnRXfXPWGWt7tS1%2BltXNM3Ec%2Bc6P2qvcI%2FQ%2FC0aNfQcOtupbyiumsgjX5pqoSOkHfb4%2FmDxFytZZvT3Bw0JjfXMmruokkMsQ%2BCVzvyQNN9DmN2Os%2F%2FgVdPkt9JIMJubMMFbf%2FBJdtLw%2B8n3XjhzGNVLnj8xc%2FTQw3IC%2F600qZ27NlDVn5ONNqdkdqU3hZnrw%2BUx%2F&X-Amz-Signature=25262abda31d67dca7980ab607e122544e7e10cd4eab31234edc457264293d52&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLK2BNGN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc7VOu4O2vMhUnfHfeumO70v1dEjGlsAP%2Bn5TKbldmFAiEA9q3u4WifXzEC34cKypiFvoYJPZ7T4bJsOH9kVuYkIy8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPz%2B4KWwOajMnlzsircA56HByzgIJn52x8Pnyq1jGhLEE3Lzn0FiYxyyett3%2FOBnBLMhZllIuOtP7%2BweqEj075Uk8pKLUTF4HlVptSh3KLDXNmWOA4a8cOWC1XxzN7tlsJnSM2X3y7pek55jrGWvjvSASu2wqqt5TvcwwbfRF1VEOJ9crKTtZlUA72BnBPPtGvvHBbe7988cxnPb2H9QdZgZfCyYai%2FNnkfTb0M9V5%2F2%2FbddFbnAgXisIQVbjVBqPYbenmJwBbghE0U%2FDLA9qP%2B8S4bHIj%2FdpmtL5bIYbhSpKijRunHpsMeX5V2WWi%2BtFPoeIDzUBMDbIs7Xk8VbjEwWbbkgQNW5%2BtIidMLCZ%2FwHWrmoJL%2BWKzTuHX4rUCwVpolynsvJY5AkH9fYi0gP7TmDrA9YiFca2EOI2aCnPOaVaSLPdlnXms%2B6nJLNiO6m83dC3n2wq1IRQ0QcW1qmR0cpMqVTTJAGv6lilmb0O%2Bjml6zw%2FepRwW24jIQ%2F8e4S7i57kh97tiDH6lSmrEG%2BMjMHo7VLKz5hvIKuqkXDa556XX55bmLvOFHJkYuZE51rncoOZtWfNHt21OaUc4iWovJ191UUcC%2Fi3qNLIzPpxQyhhsyV2VUCqRetsl9WgHSLGmv2WurxRANC1%2FfMMrAgL0GOqUBKNH113oMK7Cd1DEZ9LCHgJ%2BSfnRXfXPWGWt7tS1%2BltXNM3Ec%2Bc6P2qvcI%2FQ%2FC0aNfQcOtupbyiumsgjX5pqoSOkHfb4%2FmDxFytZZvT3Bw0JjfXMmruokkMsQ%2BCVzvyQNN9DmN2Os%2F%2FgVdPkt9JIMJubMMFbf%2FBJdtLw%2B8n3XjhzGNVLnj8xc%2FTQw3IC%2F600qZ27NlDVn5ONNqdkdqU3hZnrw%2BUx%2F&X-Amz-Signature=8716c49297b2a4b7bdc69a0746a2f710ce665dc6dabbd7108d012096056c415c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLK2BNGN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc7VOu4O2vMhUnfHfeumO70v1dEjGlsAP%2Bn5TKbldmFAiEA9q3u4WifXzEC34cKypiFvoYJPZ7T4bJsOH9kVuYkIy8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPz%2B4KWwOajMnlzsircA56HByzgIJn52x8Pnyq1jGhLEE3Lzn0FiYxyyett3%2FOBnBLMhZllIuOtP7%2BweqEj075Uk8pKLUTF4HlVptSh3KLDXNmWOA4a8cOWC1XxzN7tlsJnSM2X3y7pek55jrGWvjvSASu2wqqt5TvcwwbfRF1VEOJ9crKTtZlUA72BnBPPtGvvHBbe7988cxnPb2H9QdZgZfCyYai%2FNnkfTb0M9V5%2F2%2FbddFbnAgXisIQVbjVBqPYbenmJwBbghE0U%2FDLA9qP%2B8S4bHIj%2FdpmtL5bIYbhSpKijRunHpsMeX5V2WWi%2BtFPoeIDzUBMDbIs7Xk8VbjEwWbbkgQNW5%2BtIidMLCZ%2FwHWrmoJL%2BWKzTuHX4rUCwVpolynsvJY5AkH9fYi0gP7TmDrA9YiFca2EOI2aCnPOaVaSLPdlnXms%2B6nJLNiO6m83dC3n2wq1IRQ0QcW1qmR0cpMqVTTJAGv6lilmb0O%2Bjml6zw%2FepRwW24jIQ%2F8e4S7i57kh97tiDH6lSmrEG%2BMjMHo7VLKz5hvIKuqkXDa556XX55bmLvOFHJkYuZE51rncoOZtWfNHt21OaUc4iWovJ191UUcC%2Fi3qNLIzPpxQyhhsyV2VUCqRetsl9WgHSLGmv2WurxRANC1%2FfMMrAgL0GOqUBKNH113oMK7Cd1DEZ9LCHgJ%2BSfnRXfXPWGWt7tS1%2BltXNM3Ec%2Bc6P2qvcI%2FQ%2FC0aNfQcOtupbyiumsgjX5pqoSOkHfb4%2FmDxFytZZvT3Bw0JjfXMmruokkMsQ%2BCVzvyQNN9DmN2Os%2F%2FgVdPkt9JIMJubMMFbf%2FBJdtLw%2B8n3XjhzGNVLnj8xc%2FTQw3IC%2F600qZ27NlDVn5ONNqdkdqU3hZnrw%2BUx%2F&X-Amz-Signature=31136e90983c0c8d12598f93e484150ca74c22f8b0951c24a7cc028b9ea5c9be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLK2BNGN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc7VOu4O2vMhUnfHfeumO70v1dEjGlsAP%2Bn5TKbldmFAiEA9q3u4WifXzEC34cKypiFvoYJPZ7T4bJsOH9kVuYkIy8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPz%2B4KWwOajMnlzsircA56HByzgIJn52x8Pnyq1jGhLEE3Lzn0FiYxyyett3%2FOBnBLMhZllIuOtP7%2BweqEj075Uk8pKLUTF4HlVptSh3KLDXNmWOA4a8cOWC1XxzN7tlsJnSM2X3y7pek55jrGWvjvSASu2wqqt5TvcwwbfRF1VEOJ9crKTtZlUA72BnBPPtGvvHBbe7988cxnPb2H9QdZgZfCyYai%2FNnkfTb0M9V5%2F2%2FbddFbnAgXisIQVbjVBqPYbenmJwBbghE0U%2FDLA9qP%2B8S4bHIj%2FdpmtL5bIYbhSpKijRunHpsMeX5V2WWi%2BtFPoeIDzUBMDbIs7Xk8VbjEwWbbkgQNW5%2BtIidMLCZ%2FwHWrmoJL%2BWKzTuHX4rUCwVpolynsvJY5AkH9fYi0gP7TmDrA9YiFca2EOI2aCnPOaVaSLPdlnXms%2B6nJLNiO6m83dC3n2wq1IRQ0QcW1qmR0cpMqVTTJAGv6lilmb0O%2Bjml6zw%2FepRwW24jIQ%2F8e4S7i57kh97tiDH6lSmrEG%2BMjMHo7VLKz5hvIKuqkXDa556XX55bmLvOFHJkYuZE51rncoOZtWfNHt21OaUc4iWovJ191UUcC%2Fi3qNLIzPpxQyhhsyV2VUCqRetsl9WgHSLGmv2WurxRANC1%2FfMMrAgL0GOqUBKNH113oMK7Cd1DEZ9LCHgJ%2BSfnRXfXPWGWt7tS1%2BltXNM3Ec%2Bc6P2qvcI%2FQ%2FC0aNfQcOtupbyiumsgjX5pqoSOkHfb4%2FmDxFytZZvT3Bw0JjfXMmruokkMsQ%2BCVzvyQNN9DmN2Os%2F%2FgVdPkt9JIMJubMMFbf%2FBJdtLw%2B8n3XjhzGNVLnj8xc%2FTQw3IC%2F600qZ27NlDVn5ONNqdkdqU3hZnrw%2BUx%2F&X-Amz-Signature=03e993513a7e3115b3a296c3a4863cea0fc5b7fd9d21cc7cd548c4fae7de9658&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLK2BNGN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc7VOu4O2vMhUnfHfeumO70v1dEjGlsAP%2Bn5TKbldmFAiEA9q3u4WifXzEC34cKypiFvoYJPZ7T4bJsOH9kVuYkIy8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPz%2B4KWwOajMnlzsircA56HByzgIJn52x8Pnyq1jGhLEE3Lzn0FiYxyyett3%2FOBnBLMhZllIuOtP7%2BweqEj075Uk8pKLUTF4HlVptSh3KLDXNmWOA4a8cOWC1XxzN7tlsJnSM2X3y7pek55jrGWvjvSASu2wqqt5TvcwwbfRF1VEOJ9crKTtZlUA72BnBPPtGvvHBbe7988cxnPb2H9QdZgZfCyYai%2FNnkfTb0M9V5%2F2%2FbddFbnAgXisIQVbjVBqPYbenmJwBbghE0U%2FDLA9qP%2B8S4bHIj%2FdpmtL5bIYbhSpKijRunHpsMeX5V2WWi%2BtFPoeIDzUBMDbIs7Xk8VbjEwWbbkgQNW5%2BtIidMLCZ%2FwHWrmoJL%2BWKzTuHX4rUCwVpolynsvJY5AkH9fYi0gP7TmDrA9YiFca2EOI2aCnPOaVaSLPdlnXms%2B6nJLNiO6m83dC3n2wq1IRQ0QcW1qmR0cpMqVTTJAGv6lilmb0O%2Bjml6zw%2FepRwW24jIQ%2F8e4S7i57kh97tiDH6lSmrEG%2BMjMHo7VLKz5hvIKuqkXDa556XX55bmLvOFHJkYuZE51rncoOZtWfNHt21OaUc4iWovJ191UUcC%2Fi3qNLIzPpxQyhhsyV2VUCqRetsl9WgHSLGmv2WurxRANC1%2FfMMrAgL0GOqUBKNH113oMK7Cd1DEZ9LCHgJ%2BSfnRXfXPWGWt7tS1%2BltXNM3Ec%2Bc6P2qvcI%2FQ%2FC0aNfQcOtupbyiumsgjX5pqoSOkHfb4%2FmDxFytZZvT3Bw0JjfXMmruokkMsQ%2BCVzvyQNN9DmN2Os%2F%2FgVdPkt9JIMJubMMFbf%2FBJdtLw%2B8n3XjhzGNVLnj8xc%2FTQw3IC%2F600qZ27NlDVn5ONNqdkdqU3hZnrw%2BUx%2F&X-Amz-Signature=96d6acc6a0316d393e4b3e312f19e190fc820d092cb2e6a39b83c770263860a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLK2BNGN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc7VOu4O2vMhUnfHfeumO70v1dEjGlsAP%2Bn5TKbldmFAiEA9q3u4WifXzEC34cKypiFvoYJPZ7T4bJsOH9kVuYkIy8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPz%2B4KWwOajMnlzsircA56HByzgIJn52x8Pnyq1jGhLEE3Lzn0FiYxyyett3%2FOBnBLMhZllIuOtP7%2BweqEj075Uk8pKLUTF4HlVptSh3KLDXNmWOA4a8cOWC1XxzN7tlsJnSM2X3y7pek55jrGWvjvSASu2wqqt5TvcwwbfRF1VEOJ9crKTtZlUA72BnBPPtGvvHBbe7988cxnPb2H9QdZgZfCyYai%2FNnkfTb0M9V5%2F2%2FbddFbnAgXisIQVbjVBqPYbenmJwBbghE0U%2FDLA9qP%2B8S4bHIj%2FdpmtL5bIYbhSpKijRunHpsMeX5V2WWi%2BtFPoeIDzUBMDbIs7Xk8VbjEwWbbkgQNW5%2BtIidMLCZ%2FwHWrmoJL%2BWKzTuHX4rUCwVpolynsvJY5AkH9fYi0gP7TmDrA9YiFca2EOI2aCnPOaVaSLPdlnXms%2B6nJLNiO6m83dC3n2wq1IRQ0QcW1qmR0cpMqVTTJAGv6lilmb0O%2Bjml6zw%2FepRwW24jIQ%2F8e4S7i57kh97tiDH6lSmrEG%2BMjMHo7VLKz5hvIKuqkXDa556XX55bmLvOFHJkYuZE51rncoOZtWfNHt21OaUc4iWovJ191UUcC%2Fi3qNLIzPpxQyhhsyV2VUCqRetsl9WgHSLGmv2WurxRANC1%2FfMMrAgL0GOqUBKNH113oMK7Cd1DEZ9LCHgJ%2BSfnRXfXPWGWt7tS1%2BltXNM3Ec%2Bc6P2qvcI%2FQ%2FC0aNfQcOtupbyiumsgjX5pqoSOkHfb4%2FmDxFytZZvT3Bw0JjfXMmruokkMsQ%2BCVzvyQNN9DmN2Os%2F%2FgVdPkt9JIMJubMMFbf%2FBJdtLw%2B8n3XjhzGNVLnj8xc%2FTQw3IC%2F600qZ27NlDVn5ONNqdkdqU3hZnrw%2BUx%2F&X-Amz-Signature=177eb3ae5178bcd0e708e56eed9c92b24af1cf2bde8a231fb5f2555fed555c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
