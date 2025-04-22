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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5ZNE2O%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCpGq1YjuOILXZh1N6XUfn7ftb91m6ajsLdc2%2FgY9mi2AIgXBpcJCWjI%2F8Q%2BQsdkS%2FHVruzeZaG15LnIgatqVzUheYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0BET6%2BN%2BR58xDavSrcA3Q%2FS6gAHpBuzvaoWQe%2FCjxSdVmRqZJGOlDwzwjVBrKzhWWqRPg48EG844FbavLWQdy893lCIEomdPjHaxPTXQK8haKcfFMqsUr9w5IXZN7sujLH3QzYBTYU%2BxVm%2BmErTVSlOIDDqC4MHD9yC%2F6tHCVKk9H5O2h2DFTa4ellux%2FnfOV0zWnsjBHpoC47dqEsdqHeCBymkOMEcVSKERU7%2Bvf%2BFdTQ%2BD2Kj8Mn3MgJOrxVXfHDf8%2F0vs3%2F%2F%2BH9xrfBYPeS%2FOw2Q1s6KxLuDSiD5NPprWkAOlEY1QUs4x7D%2BlouKRJqy%2BMNIsWOYinfzR7uuGuDLJcvTPOwJfzfQiC26Gjx1N4cps3AGI%2B0rLxdIjxxpgGWdO4f8C0QUoKqI6MgdQHxoFDhjWmemQfEl7l7XVICZqj1K3W93CY80t7C3tHBRT0fewtBNs8Cg4c3cJVqC4rWevKdX%2B%2B6hLehQvAW20BY28SraBDN0Zg3gtTIN4DLdnRd3tgn0ZiXVG1lFf42Y019pn%2BZbpEKOk9gbT6%2F4UI5vKdHYzxy87FLJifPVr1%2F87NvfR1gh8rXsvhCBV50w6x0%2BWTH3vmk9OF4QQULZ8WCUgCt6AvX%2BbKU6Gum9xBzWjPPGLlpzyKYo46eMO3fnsAGOqUBkHSONzuqKTC8aaiaMFui9SLu8KBzfG%2Fk%2F37ft%2FBVKRmTrTLoQD%2Fyahmz4hOOYb6Q6rRSj5USpgIVQwGs0S08vULcHzb7fqkzujJ2v3vbAqt6tHj9Dwc1yu%2FCb0i%2FpcCrOg7tOfaVVlth0FBh5uYHq9hKocVKjVs%2FCec2DGS%2BoptobLaHUiEBy0%2F3kxD%2FQ58NB0%2F50ty3McL5guOHjTGYMPRh4VTA&X-Amz-Signature=fe740a5a65a69c67553431f9e9e4644788b36e551551d7da06e4c49aad4b9875&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5ZNE2O%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCpGq1YjuOILXZh1N6XUfn7ftb91m6ajsLdc2%2FgY9mi2AIgXBpcJCWjI%2F8Q%2BQsdkS%2FHVruzeZaG15LnIgatqVzUheYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0BET6%2BN%2BR58xDavSrcA3Q%2FS6gAHpBuzvaoWQe%2FCjxSdVmRqZJGOlDwzwjVBrKzhWWqRPg48EG844FbavLWQdy893lCIEomdPjHaxPTXQK8haKcfFMqsUr9w5IXZN7sujLH3QzYBTYU%2BxVm%2BmErTVSlOIDDqC4MHD9yC%2F6tHCVKk9H5O2h2DFTa4ellux%2FnfOV0zWnsjBHpoC47dqEsdqHeCBymkOMEcVSKERU7%2Bvf%2BFdTQ%2BD2Kj8Mn3MgJOrxVXfHDf8%2F0vs3%2F%2F%2BH9xrfBYPeS%2FOw2Q1s6KxLuDSiD5NPprWkAOlEY1QUs4x7D%2BlouKRJqy%2BMNIsWOYinfzR7uuGuDLJcvTPOwJfzfQiC26Gjx1N4cps3AGI%2B0rLxdIjxxpgGWdO4f8C0QUoKqI6MgdQHxoFDhjWmemQfEl7l7XVICZqj1K3W93CY80t7C3tHBRT0fewtBNs8Cg4c3cJVqC4rWevKdX%2B%2B6hLehQvAW20BY28SraBDN0Zg3gtTIN4DLdnRd3tgn0ZiXVG1lFf42Y019pn%2BZbpEKOk9gbT6%2F4UI5vKdHYzxy87FLJifPVr1%2F87NvfR1gh8rXsvhCBV50w6x0%2BWTH3vmk9OF4QQULZ8WCUgCt6AvX%2BbKU6Gum9xBzWjPPGLlpzyKYo46eMO3fnsAGOqUBkHSONzuqKTC8aaiaMFui9SLu8KBzfG%2Fk%2F37ft%2FBVKRmTrTLoQD%2Fyahmz4hOOYb6Q6rRSj5USpgIVQwGs0S08vULcHzb7fqkzujJ2v3vbAqt6tHj9Dwc1yu%2FCb0i%2FpcCrOg7tOfaVVlth0FBh5uYHq9hKocVKjVs%2FCec2DGS%2BoptobLaHUiEBy0%2F3kxD%2FQ58NB0%2F50ty3McL5guOHjTGYMPRh4VTA&X-Amz-Signature=168389bdfdb6ba206989f4e8fc9d161de483f3eb3396b5f692a490dd26a72b1f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5ZNE2O%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCpGq1YjuOILXZh1N6XUfn7ftb91m6ajsLdc2%2FgY9mi2AIgXBpcJCWjI%2F8Q%2BQsdkS%2FHVruzeZaG15LnIgatqVzUheYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0BET6%2BN%2BR58xDavSrcA3Q%2FS6gAHpBuzvaoWQe%2FCjxSdVmRqZJGOlDwzwjVBrKzhWWqRPg48EG844FbavLWQdy893lCIEomdPjHaxPTXQK8haKcfFMqsUr9w5IXZN7sujLH3QzYBTYU%2BxVm%2BmErTVSlOIDDqC4MHD9yC%2F6tHCVKk9H5O2h2DFTa4ellux%2FnfOV0zWnsjBHpoC47dqEsdqHeCBymkOMEcVSKERU7%2Bvf%2BFdTQ%2BD2Kj8Mn3MgJOrxVXfHDf8%2F0vs3%2F%2F%2BH9xrfBYPeS%2FOw2Q1s6KxLuDSiD5NPprWkAOlEY1QUs4x7D%2BlouKRJqy%2BMNIsWOYinfzR7uuGuDLJcvTPOwJfzfQiC26Gjx1N4cps3AGI%2B0rLxdIjxxpgGWdO4f8C0QUoKqI6MgdQHxoFDhjWmemQfEl7l7XVICZqj1K3W93CY80t7C3tHBRT0fewtBNs8Cg4c3cJVqC4rWevKdX%2B%2B6hLehQvAW20BY28SraBDN0Zg3gtTIN4DLdnRd3tgn0ZiXVG1lFf42Y019pn%2BZbpEKOk9gbT6%2F4UI5vKdHYzxy87FLJifPVr1%2F87NvfR1gh8rXsvhCBV50w6x0%2BWTH3vmk9OF4QQULZ8WCUgCt6AvX%2BbKU6Gum9xBzWjPPGLlpzyKYo46eMO3fnsAGOqUBkHSONzuqKTC8aaiaMFui9SLu8KBzfG%2Fk%2F37ft%2FBVKRmTrTLoQD%2Fyahmz4hOOYb6Q6rRSj5USpgIVQwGs0S08vULcHzb7fqkzujJ2v3vbAqt6tHj9Dwc1yu%2FCb0i%2FpcCrOg7tOfaVVlth0FBh5uYHq9hKocVKjVs%2FCec2DGS%2BoptobLaHUiEBy0%2F3kxD%2FQ58NB0%2F50ty3McL5guOHjTGYMPRh4VTA&X-Amz-Signature=f8ea2b0215d16d9bfe1bb1501e391fdff608e5dcd9e1ad8f58ae6e8d6c4870cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5ZNE2O%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCpGq1YjuOILXZh1N6XUfn7ftb91m6ajsLdc2%2FgY9mi2AIgXBpcJCWjI%2F8Q%2BQsdkS%2FHVruzeZaG15LnIgatqVzUheYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0BET6%2BN%2BR58xDavSrcA3Q%2FS6gAHpBuzvaoWQe%2FCjxSdVmRqZJGOlDwzwjVBrKzhWWqRPg48EG844FbavLWQdy893lCIEomdPjHaxPTXQK8haKcfFMqsUr9w5IXZN7sujLH3QzYBTYU%2BxVm%2BmErTVSlOIDDqC4MHD9yC%2F6tHCVKk9H5O2h2DFTa4ellux%2FnfOV0zWnsjBHpoC47dqEsdqHeCBymkOMEcVSKERU7%2Bvf%2BFdTQ%2BD2Kj8Mn3MgJOrxVXfHDf8%2F0vs3%2F%2F%2BH9xrfBYPeS%2FOw2Q1s6KxLuDSiD5NPprWkAOlEY1QUs4x7D%2BlouKRJqy%2BMNIsWOYinfzR7uuGuDLJcvTPOwJfzfQiC26Gjx1N4cps3AGI%2B0rLxdIjxxpgGWdO4f8C0QUoKqI6MgdQHxoFDhjWmemQfEl7l7XVICZqj1K3W93CY80t7C3tHBRT0fewtBNs8Cg4c3cJVqC4rWevKdX%2B%2B6hLehQvAW20BY28SraBDN0Zg3gtTIN4DLdnRd3tgn0ZiXVG1lFf42Y019pn%2BZbpEKOk9gbT6%2F4UI5vKdHYzxy87FLJifPVr1%2F87NvfR1gh8rXsvhCBV50w6x0%2BWTH3vmk9OF4QQULZ8WCUgCt6AvX%2BbKU6Gum9xBzWjPPGLlpzyKYo46eMO3fnsAGOqUBkHSONzuqKTC8aaiaMFui9SLu8KBzfG%2Fk%2F37ft%2FBVKRmTrTLoQD%2Fyahmz4hOOYb6Q6rRSj5USpgIVQwGs0S08vULcHzb7fqkzujJ2v3vbAqt6tHj9Dwc1yu%2FCb0i%2FpcCrOg7tOfaVVlth0FBh5uYHq9hKocVKjVs%2FCec2DGS%2BoptobLaHUiEBy0%2F3kxD%2FQ58NB0%2F50ty3McL5guOHjTGYMPRh4VTA&X-Amz-Signature=2f477845b75e510f8c31931499b0b316604fea169f9c32d99f24a534b49a62a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5ZNE2O%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCpGq1YjuOILXZh1N6XUfn7ftb91m6ajsLdc2%2FgY9mi2AIgXBpcJCWjI%2F8Q%2BQsdkS%2FHVruzeZaG15LnIgatqVzUheYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0BET6%2BN%2BR58xDavSrcA3Q%2FS6gAHpBuzvaoWQe%2FCjxSdVmRqZJGOlDwzwjVBrKzhWWqRPg48EG844FbavLWQdy893lCIEomdPjHaxPTXQK8haKcfFMqsUr9w5IXZN7sujLH3QzYBTYU%2BxVm%2BmErTVSlOIDDqC4MHD9yC%2F6tHCVKk9H5O2h2DFTa4ellux%2FnfOV0zWnsjBHpoC47dqEsdqHeCBymkOMEcVSKERU7%2Bvf%2BFdTQ%2BD2Kj8Mn3MgJOrxVXfHDf8%2F0vs3%2F%2F%2BH9xrfBYPeS%2FOw2Q1s6KxLuDSiD5NPprWkAOlEY1QUs4x7D%2BlouKRJqy%2BMNIsWOYinfzR7uuGuDLJcvTPOwJfzfQiC26Gjx1N4cps3AGI%2B0rLxdIjxxpgGWdO4f8C0QUoKqI6MgdQHxoFDhjWmemQfEl7l7XVICZqj1K3W93CY80t7C3tHBRT0fewtBNs8Cg4c3cJVqC4rWevKdX%2B%2B6hLehQvAW20BY28SraBDN0Zg3gtTIN4DLdnRd3tgn0ZiXVG1lFf42Y019pn%2BZbpEKOk9gbT6%2F4UI5vKdHYzxy87FLJifPVr1%2F87NvfR1gh8rXsvhCBV50w6x0%2BWTH3vmk9OF4QQULZ8WCUgCt6AvX%2BbKU6Gum9xBzWjPPGLlpzyKYo46eMO3fnsAGOqUBkHSONzuqKTC8aaiaMFui9SLu8KBzfG%2Fk%2F37ft%2FBVKRmTrTLoQD%2Fyahmz4hOOYb6Q6rRSj5USpgIVQwGs0S08vULcHzb7fqkzujJ2v3vbAqt6tHj9Dwc1yu%2FCb0i%2FpcCrOg7tOfaVVlth0FBh5uYHq9hKocVKjVs%2FCec2DGS%2BoptobLaHUiEBy0%2F3kxD%2FQ58NB0%2F50ty3McL5guOHjTGYMPRh4VTA&X-Amz-Signature=4e9588ea8f7297968cf9467d34334ed6262b9c18e2a829b34c1e3554d69a3e42&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5ZNE2O%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCpGq1YjuOILXZh1N6XUfn7ftb91m6ajsLdc2%2FgY9mi2AIgXBpcJCWjI%2F8Q%2BQsdkS%2FHVruzeZaG15LnIgatqVzUheYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0BET6%2BN%2BR58xDavSrcA3Q%2FS6gAHpBuzvaoWQe%2FCjxSdVmRqZJGOlDwzwjVBrKzhWWqRPg48EG844FbavLWQdy893lCIEomdPjHaxPTXQK8haKcfFMqsUr9w5IXZN7sujLH3QzYBTYU%2BxVm%2BmErTVSlOIDDqC4MHD9yC%2F6tHCVKk9H5O2h2DFTa4ellux%2FnfOV0zWnsjBHpoC47dqEsdqHeCBymkOMEcVSKERU7%2Bvf%2BFdTQ%2BD2Kj8Mn3MgJOrxVXfHDf8%2F0vs3%2F%2F%2BH9xrfBYPeS%2FOw2Q1s6KxLuDSiD5NPprWkAOlEY1QUs4x7D%2BlouKRJqy%2BMNIsWOYinfzR7uuGuDLJcvTPOwJfzfQiC26Gjx1N4cps3AGI%2B0rLxdIjxxpgGWdO4f8C0QUoKqI6MgdQHxoFDhjWmemQfEl7l7XVICZqj1K3W93CY80t7C3tHBRT0fewtBNs8Cg4c3cJVqC4rWevKdX%2B%2B6hLehQvAW20BY28SraBDN0Zg3gtTIN4DLdnRd3tgn0ZiXVG1lFf42Y019pn%2BZbpEKOk9gbT6%2F4UI5vKdHYzxy87FLJifPVr1%2F87NvfR1gh8rXsvhCBV50w6x0%2BWTH3vmk9OF4QQULZ8WCUgCt6AvX%2BbKU6Gum9xBzWjPPGLlpzyKYo46eMO3fnsAGOqUBkHSONzuqKTC8aaiaMFui9SLu8KBzfG%2Fk%2F37ft%2FBVKRmTrTLoQD%2Fyahmz4hOOYb6Q6rRSj5USpgIVQwGs0S08vULcHzb7fqkzujJ2v3vbAqt6tHj9Dwc1yu%2FCb0i%2FpcCrOg7tOfaVVlth0FBh5uYHq9hKocVKjVs%2FCec2DGS%2BoptobLaHUiEBy0%2F3kxD%2FQ58NB0%2F50ty3McL5guOHjTGYMPRh4VTA&X-Amz-Signature=f99241c8ff30e0964b6a83527aa9ebc852b37060da6d19d0c1e585f2e7dbc207&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5ZNE2O%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCpGq1YjuOILXZh1N6XUfn7ftb91m6ajsLdc2%2FgY9mi2AIgXBpcJCWjI%2F8Q%2BQsdkS%2FHVruzeZaG15LnIgatqVzUheYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0BET6%2BN%2BR58xDavSrcA3Q%2FS6gAHpBuzvaoWQe%2FCjxSdVmRqZJGOlDwzwjVBrKzhWWqRPg48EG844FbavLWQdy893lCIEomdPjHaxPTXQK8haKcfFMqsUr9w5IXZN7sujLH3QzYBTYU%2BxVm%2BmErTVSlOIDDqC4MHD9yC%2F6tHCVKk9H5O2h2DFTa4ellux%2FnfOV0zWnsjBHpoC47dqEsdqHeCBymkOMEcVSKERU7%2Bvf%2BFdTQ%2BD2Kj8Mn3MgJOrxVXfHDf8%2F0vs3%2F%2F%2BH9xrfBYPeS%2FOw2Q1s6KxLuDSiD5NPprWkAOlEY1QUs4x7D%2BlouKRJqy%2BMNIsWOYinfzR7uuGuDLJcvTPOwJfzfQiC26Gjx1N4cps3AGI%2B0rLxdIjxxpgGWdO4f8C0QUoKqI6MgdQHxoFDhjWmemQfEl7l7XVICZqj1K3W93CY80t7C3tHBRT0fewtBNs8Cg4c3cJVqC4rWevKdX%2B%2B6hLehQvAW20BY28SraBDN0Zg3gtTIN4DLdnRd3tgn0ZiXVG1lFf42Y019pn%2BZbpEKOk9gbT6%2F4UI5vKdHYzxy87FLJifPVr1%2F87NvfR1gh8rXsvhCBV50w6x0%2BWTH3vmk9OF4QQULZ8WCUgCt6AvX%2BbKU6Gum9xBzWjPPGLlpzyKYo46eMO3fnsAGOqUBkHSONzuqKTC8aaiaMFui9SLu8KBzfG%2Fk%2F37ft%2FBVKRmTrTLoQD%2Fyahmz4hOOYb6Q6rRSj5USpgIVQwGs0S08vULcHzb7fqkzujJ2v3vbAqt6tHj9Dwc1yu%2FCb0i%2FpcCrOg7tOfaVVlth0FBh5uYHq9hKocVKjVs%2FCec2DGS%2BoptobLaHUiEBy0%2F3kxD%2FQ58NB0%2F50ty3McL5guOHjTGYMPRh4VTA&X-Amz-Signature=5f3656c64b6b5709e5e6ed23f627d5112f0ab71ab4d60840966379672f2e45b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5ZNE2O%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCpGq1YjuOILXZh1N6XUfn7ftb91m6ajsLdc2%2FgY9mi2AIgXBpcJCWjI%2F8Q%2BQsdkS%2FHVruzeZaG15LnIgatqVzUheYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0BET6%2BN%2BR58xDavSrcA3Q%2FS6gAHpBuzvaoWQe%2FCjxSdVmRqZJGOlDwzwjVBrKzhWWqRPg48EG844FbavLWQdy893lCIEomdPjHaxPTXQK8haKcfFMqsUr9w5IXZN7sujLH3QzYBTYU%2BxVm%2BmErTVSlOIDDqC4MHD9yC%2F6tHCVKk9H5O2h2DFTa4ellux%2FnfOV0zWnsjBHpoC47dqEsdqHeCBymkOMEcVSKERU7%2Bvf%2BFdTQ%2BD2Kj8Mn3MgJOrxVXfHDf8%2F0vs3%2F%2F%2BH9xrfBYPeS%2FOw2Q1s6KxLuDSiD5NPprWkAOlEY1QUs4x7D%2BlouKRJqy%2BMNIsWOYinfzR7uuGuDLJcvTPOwJfzfQiC26Gjx1N4cps3AGI%2B0rLxdIjxxpgGWdO4f8C0QUoKqI6MgdQHxoFDhjWmemQfEl7l7XVICZqj1K3W93CY80t7C3tHBRT0fewtBNs8Cg4c3cJVqC4rWevKdX%2B%2B6hLehQvAW20BY28SraBDN0Zg3gtTIN4DLdnRd3tgn0ZiXVG1lFf42Y019pn%2BZbpEKOk9gbT6%2F4UI5vKdHYzxy87FLJifPVr1%2F87NvfR1gh8rXsvhCBV50w6x0%2BWTH3vmk9OF4QQULZ8WCUgCt6AvX%2BbKU6Gum9xBzWjPPGLlpzyKYo46eMO3fnsAGOqUBkHSONzuqKTC8aaiaMFui9SLu8KBzfG%2Fk%2F37ft%2FBVKRmTrTLoQD%2Fyahmz4hOOYb6Q6rRSj5USpgIVQwGs0S08vULcHzb7fqkzujJ2v3vbAqt6tHj9Dwc1yu%2FCb0i%2FpcCrOg7tOfaVVlth0FBh5uYHq9hKocVKjVs%2FCec2DGS%2BoptobLaHUiEBy0%2F3kxD%2FQ58NB0%2F50ty3McL5guOHjTGYMPRh4VTA&X-Amz-Signature=f026a254678d81fe3d5a55e4e150b8e6bb6768f6f2ddadd03aae91ee28a93b40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
