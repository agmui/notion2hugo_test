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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFIPDCY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuJufcQUnmu8WRunUEIKCfAI1%2F%2BoWyQIScRkBFJX2yHAiEA9%2FRQ15PKmw3hLVRcA1Q%2BudI1a%2F3wgh27Nb9NEGCCgIEq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAbD71QXmzxOOAUucCrcA%2FF23fWZlqquydoxQcMirov2EDcuvvFAoWhumlfv9fhqB2Dn8j%2FLDCjuyY4uNcL3RSukNIcdqhyDB2Djc29Yy3kKJJGaoComr6jl7gzXt5WIYq0OvUNbtSFPCv7F8JlYFDmpAE%2Fk2GOXSIYdhUPCbyQ7tJRFRFiWyNQTfopEtdNheysoeFmKIMTmIVaVaQecvzlym4t%2BZPds2z6wjsN4a2JInyQDrTdM4BVpXaL0jWhnXW%2BdfShKjpuS%2FBhi8XvRWzaNN681JncBVK%2B%2FJO50xt742Cn%2F6TLVOcuOr6e96lSIsTmyRyBI49aBTqix6tHDG465ZLJsyc79RIKTDDuEyYDSIgBj4NEHpBpGUnzEThnqqYyubjwvsq010QmjEH6qtAid%2FNKDupNGLnK9GS0TaKNbkNAyJ7idpg%2FPFRZ3JrTtQuG7ciE%2BrK8K7M22nRmvnObDWvV7OshEyDu6oTYU4EXqjgGAyQX%2Ffk%2B4o5oiZPs0HRC%2Fvh4bOQHJSyQ%2FGjTHEPTanoAmZSloLrxvEt6%2FMn%2BXn6WX0QbSWnNgP2WQ8uwjxJR02M9wPqbCz0QiUFyQk0GIoKgjI9RkMTyE01ehAfFDJYpNzjk%2B%2BLeRuYnJPSdSztcOhAXJigJbhbbcMLyYjL8GOqUBwwCSWlwKf6pRi%2B3AZwkn2b%2BPoFOpbptPsJZ02llhwbEOm6RD5Be4iJ0gTvxAjBnS49%2FJ%2F2O%2FoHMQKFQSyjPWljC8VA%2BmIT4VC0CntqUltSSPjBLL9akPMSkytkI7PFErflug5EOPLIJiBU%2BugP8mQknjWxuEKbpm%2BZZnHPM2wEpHzqJwH%2BenRvmaeugsEg2AsIpKb8BFbu%2F%2Fo%2BKarTapvvYxCpLT&X-Amz-Signature=02ff17942a675868f9128711d85bb3d0cb66661a0fe318a1952bf47c4f6cafe7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFIPDCY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuJufcQUnmu8WRunUEIKCfAI1%2F%2BoWyQIScRkBFJX2yHAiEA9%2FRQ15PKmw3hLVRcA1Q%2BudI1a%2F3wgh27Nb9NEGCCgIEq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAbD71QXmzxOOAUucCrcA%2FF23fWZlqquydoxQcMirov2EDcuvvFAoWhumlfv9fhqB2Dn8j%2FLDCjuyY4uNcL3RSukNIcdqhyDB2Djc29Yy3kKJJGaoComr6jl7gzXt5WIYq0OvUNbtSFPCv7F8JlYFDmpAE%2Fk2GOXSIYdhUPCbyQ7tJRFRFiWyNQTfopEtdNheysoeFmKIMTmIVaVaQecvzlym4t%2BZPds2z6wjsN4a2JInyQDrTdM4BVpXaL0jWhnXW%2BdfShKjpuS%2FBhi8XvRWzaNN681JncBVK%2B%2FJO50xt742Cn%2F6TLVOcuOr6e96lSIsTmyRyBI49aBTqix6tHDG465ZLJsyc79RIKTDDuEyYDSIgBj4NEHpBpGUnzEThnqqYyubjwvsq010QmjEH6qtAid%2FNKDupNGLnK9GS0TaKNbkNAyJ7idpg%2FPFRZ3JrTtQuG7ciE%2BrK8K7M22nRmvnObDWvV7OshEyDu6oTYU4EXqjgGAyQX%2Ffk%2B4o5oiZPs0HRC%2Fvh4bOQHJSyQ%2FGjTHEPTanoAmZSloLrxvEt6%2FMn%2BXn6WX0QbSWnNgP2WQ8uwjxJR02M9wPqbCz0QiUFyQk0GIoKgjI9RkMTyE01ehAfFDJYpNzjk%2B%2BLeRuYnJPSdSztcOhAXJigJbhbbcMLyYjL8GOqUBwwCSWlwKf6pRi%2B3AZwkn2b%2BPoFOpbptPsJZ02llhwbEOm6RD5Be4iJ0gTvxAjBnS49%2FJ%2F2O%2FoHMQKFQSyjPWljC8VA%2BmIT4VC0CntqUltSSPjBLL9akPMSkytkI7PFErflug5EOPLIJiBU%2BugP8mQknjWxuEKbpm%2BZZnHPM2wEpHzqJwH%2BenRvmaeugsEg2AsIpKb8BFbu%2F%2Fo%2BKarTapvvYxCpLT&X-Amz-Signature=86f322bf5d06ad75c8abbea068d55176e451a55dbe63b251ca56b9cd76bd9c31&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFIPDCY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuJufcQUnmu8WRunUEIKCfAI1%2F%2BoWyQIScRkBFJX2yHAiEA9%2FRQ15PKmw3hLVRcA1Q%2BudI1a%2F3wgh27Nb9NEGCCgIEq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAbD71QXmzxOOAUucCrcA%2FF23fWZlqquydoxQcMirov2EDcuvvFAoWhumlfv9fhqB2Dn8j%2FLDCjuyY4uNcL3RSukNIcdqhyDB2Djc29Yy3kKJJGaoComr6jl7gzXt5WIYq0OvUNbtSFPCv7F8JlYFDmpAE%2Fk2GOXSIYdhUPCbyQ7tJRFRFiWyNQTfopEtdNheysoeFmKIMTmIVaVaQecvzlym4t%2BZPds2z6wjsN4a2JInyQDrTdM4BVpXaL0jWhnXW%2BdfShKjpuS%2FBhi8XvRWzaNN681JncBVK%2B%2FJO50xt742Cn%2F6TLVOcuOr6e96lSIsTmyRyBI49aBTqix6tHDG465ZLJsyc79RIKTDDuEyYDSIgBj4NEHpBpGUnzEThnqqYyubjwvsq010QmjEH6qtAid%2FNKDupNGLnK9GS0TaKNbkNAyJ7idpg%2FPFRZ3JrTtQuG7ciE%2BrK8K7M22nRmvnObDWvV7OshEyDu6oTYU4EXqjgGAyQX%2Ffk%2B4o5oiZPs0HRC%2Fvh4bOQHJSyQ%2FGjTHEPTanoAmZSloLrxvEt6%2FMn%2BXn6WX0QbSWnNgP2WQ8uwjxJR02M9wPqbCz0QiUFyQk0GIoKgjI9RkMTyE01ehAfFDJYpNzjk%2B%2BLeRuYnJPSdSztcOhAXJigJbhbbcMLyYjL8GOqUBwwCSWlwKf6pRi%2B3AZwkn2b%2BPoFOpbptPsJZ02llhwbEOm6RD5Be4iJ0gTvxAjBnS49%2FJ%2F2O%2FoHMQKFQSyjPWljC8VA%2BmIT4VC0CntqUltSSPjBLL9akPMSkytkI7PFErflug5EOPLIJiBU%2BugP8mQknjWxuEKbpm%2BZZnHPM2wEpHzqJwH%2BenRvmaeugsEg2AsIpKb8BFbu%2F%2Fo%2BKarTapvvYxCpLT&X-Amz-Signature=58d4ba43eb075c82226ec3d1fa9503670ad66e635f7ba44b0623ed783124fbfa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFIPDCY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuJufcQUnmu8WRunUEIKCfAI1%2F%2BoWyQIScRkBFJX2yHAiEA9%2FRQ15PKmw3hLVRcA1Q%2BudI1a%2F3wgh27Nb9NEGCCgIEq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAbD71QXmzxOOAUucCrcA%2FF23fWZlqquydoxQcMirov2EDcuvvFAoWhumlfv9fhqB2Dn8j%2FLDCjuyY4uNcL3RSukNIcdqhyDB2Djc29Yy3kKJJGaoComr6jl7gzXt5WIYq0OvUNbtSFPCv7F8JlYFDmpAE%2Fk2GOXSIYdhUPCbyQ7tJRFRFiWyNQTfopEtdNheysoeFmKIMTmIVaVaQecvzlym4t%2BZPds2z6wjsN4a2JInyQDrTdM4BVpXaL0jWhnXW%2BdfShKjpuS%2FBhi8XvRWzaNN681JncBVK%2B%2FJO50xt742Cn%2F6TLVOcuOr6e96lSIsTmyRyBI49aBTqix6tHDG465ZLJsyc79RIKTDDuEyYDSIgBj4NEHpBpGUnzEThnqqYyubjwvsq010QmjEH6qtAid%2FNKDupNGLnK9GS0TaKNbkNAyJ7idpg%2FPFRZ3JrTtQuG7ciE%2BrK8K7M22nRmvnObDWvV7OshEyDu6oTYU4EXqjgGAyQX%2Ffk%2B4o5oiZPs0HRC%2Fvh4bOQHJSyQ%2FGjTHEPTanoAmZSloLrxvEt6%2FMn%2BXn6WX0QbSWnNgP2WQ8uwjxJR02M9wPqbCz0QiUFyQk0GIoKgjI9RkMTyE01ehAfFDJYpNzjk%2B%2BLeRuYnJPSdSztcOhAXJigJbhbbcMLyYjL8GOqUBwwCSWlwKf6pRi%2B3AZwkn2b%2BPoFOpbptPsJZ02llhwbEOm6RD5Be4iJ0gTvxAjBnS49%2FJ%2F2O%2FoHMQKFQSyjPWljC8VA%2BmIT4VC0CntqUltSSPjBLL9akPMSkytkI7PFErflug5EOPLIJiBU%2BugP8mQknjWxuEKbpm%2BZZnHPM2wEpHzqJwH%2BenRvmaeugsEg2AsIpKb8BFbu%2F%2Fo%2BKarTapvvYxCpLT&X-Amz-Signature=807cce0d62042f3a2c42d77466346f6589d709a3768a6b462b0ff08753ccff65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFIPDCY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuJufcQUnmu8WRunUEIKCfAI1%2F%2BoWyQIScRkBFJX2yHAiEA9%2FRQ15PKmw3hLVRcA1Q%2BudI1a%2F3wgh27Nb9NEGCCgIEq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAbD71QXmzxOOAUucCrcA%2FF23fWZlqquydoxQcMirov2EDcuvvFAoWhumlfv9fhqB2Dn8j%2FLDCjuyY4uNcL3RSukNIcdqhyDB2Djc29Yy3kKJJGaoComr6jl7gzXt5WIYq0OvUNbtSFPCv7F8JlYFDmpAE%2Fk2GOXSIYdhUPCbyQ7tJRFRFiWyNQTfopEtdNheysoeFmKIMTmIVaVaQecvzlym4t%2BZPds2z6wjsN4a2JInyQDrTdM4BVpXaL0jWhnXW%2BdfShKjpuS%2FBhi8XvRWzaNN681JncBVK%2B%2FJO50xt742Cn%2F6TLVOcuOr6e96lSIsTmyRyBI49aBTqix6tHDG465ZLJsyc79RIKTDDuEyYDSIgBj4NEHpBpGUnzEThnqqYyubjwvsq010QmjEH6qtAid%2FNKDupNGLnK9GS0TaKNbkNAyJ7idpg%2FPFRZ3JrTtQuG7ciE%2BrK8K7M22nRmvnObDWvV7OshEyDu6oTYU4EXqjgGAyQX%2Ffk%2B4o5oiZPs0HRC%2Fvh4bOQHJSyQ%2FGjTHEPTanoAmZSloLrxvEt6%2FMn%2BXn6WX0QbSWnNgP2WQ8uwjxJR02M9wPqbCz0QiUFyQk0GIoKgjI9RkMTyE01ehAfFDJYpNzjk%2B%2BLeRuYnJPSdSztcOhAXJigJbhbbcMLyYjL8GOqUBwwCSWlwKf6pRi%2B3AZwkn2b%2BPoFOpbptPsJZ02llhwbEOm6RD5Be4iJ0gTvxAjBnS49%2FJ%2F2O%2FoHMQKFQSyjPWljC8VA%2BmIT4VC0CntqUltSSPjBLL9akPMSkytkI7PFErflug5EOPLIJiBU%2BugP8mQknjWxuEKbpm%2BZZnHPM2wEpHzqJwH%2BenRvmaeugsEg2AsIpKb8BFbu%2F%2Fo%2BKarTapvvYxCpLT&X-Amz-Signature=19a1ae2200e293005669ff68003e2d3ff45a2e94f99c11e5f5cac5ed17e1c4a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFIPDCY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuJufcQUnmu8WRunUEIKCfAI1%2F%2BoWyQIScRkBFJX2yHAiEA9%2FRQ15PKmw3hLVRcA1Q%2BudI1a%2F3wgh27Nb9NEGCCgIEq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAbD71QXmzxOOAUucCrcA%2FF23fWZlqquydoxQcMirov2EDcuvvFAoWhumlfv9fhqB2Dn8j%2FLDCjuyY4uNcL3RSukNIcdqhyDB2Djc29Yy3kKJJGaoComr6jl7gzXt5WIYq0OvUNbtSFPCv7F8JlYFDmpAE%2Fk2GOXSIYdhUPCbyQ7tJRFRFiWyNQTfopEtdNheysoeFmKIMTmIVaVaQecvzlym4t%2BZPds2z6wjsN4a2JInyQDrTdM4BVpXaL0jWhnXW%2BdfShKjpuS%2FBhi8XvRWzaNN681JncBVK%2B%2FJO50xt742Cn%2F6TLVOcuOr6e96lSIsTmyRyBI49aBTqix6tHDG465ZLJsyc79RIKTDDuEyYDSIgBj4NEHpBpGUnzEThnqqYyubjwvsq010QmjEH6qtAid%2FNKDupNGLnK9GS0TaKNbkNAyJ7idpg%2FPFRZ3JrTtQuG7ciE%2BrK8K7M22nRmvnObDWvV7OshEyDu6oTYU4EXqjgGAyQX%2Ffk%2B4o5oiZPs0HRC%2Fvh4bOQHJSyQ%2FGjTHEPTanoAmZSloLrxvEt6%2FMn%2BXn6WX0QbSWnNgP2WQ8uwjxJR02M9wPqbCz0QiUFyQk0GIoKgjI9RkMTyE01ehAfFDJYpNzjk%2B%2BLeRuYnJPSdSztcOhAXJigJbhbbcMLyYjL8GOqUBwwCSWlwKf6pRi%2B3AZwkn2b%2BPoFOpbptPsJZ02llhwbEOm6RD5Be4iJ0gTvxAjBnS49%2FJ%2F2O%2FoHMQKFQSyjPWljC8VA%2BmIT4VC0CntqUltSSPjBLL9akPMSkytkI7PFErflug5EOPLIJiBU%2BugP8mQknjWxuEKbpm%2BZZnHPM2wEpHzqJwH%2BenRvmaeugsEg2AsIpKb8BFbu%2F%2Fo%2BKarTapvvYxCpLT&X-Amz-Signature=f38e3ed6f823f85fd940115d77772b26bb302e4406569d05d256c80d3a3eb18f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFIPDCY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuJufcQUnmu8WRunUEIKCfAI1%2F%2BoWyQIScRkBFJX2yHAiEA9%2FRQ15PKmw3hLVRcA1Q%2BudI1a%2F3wgh27Nb9NEGCCgIEq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAbD71QXmzxOOAUucCrcA%2FF23fWZlqquydoxQcMirov2EDcuvvFAoWhumlfv9fhqB2Dn8j%2FLDCjuyY4uNcL3RSukNIcdqhyDB2Djc29Yy3kKJJGaoComr6jl7gzXt5WIYq0OvUNbtSFPCv7F8JlYFDmpAE%2Fk2GOXSIYdhUPCbyQ7tJRFRFiWyNQTfopEtdNheysoeFmKIMTmIVaVaQecvzlym4t%2BZPds2z6wjsN4a2JInyQDrTdM4BVpXaL0jWhnXW%2BdfShKjpuS%2FBhi8XvRWzaNN681JncBVK%2B%2FJO50xt742Cn%2F6TLVOcuOr6e96lSIsTmyRyBI49aBTqix6tHDG465ZLJsyc79RIKTDDuEyYDSIgBj4NEHpBpGUnzEThnqqYyubjwvsq010QmjEH6qtAid%2FNKDupNGLnK9GS0TaKNbkNAyJ7idpg%2FPFRZ3JrTtQuG7ciE%2BrK8K7M22nRmvnObDWvV7OshEyDu6oTYU4EXqjgGAyQX%2Ffk%2B4o5oiZPs0HRC%2Fvh4bOQHJSyQ%2FGjTHEPTanoAmZSloLrxvEt6%2FMn%2BXn6WX0QbSWnNgP2WQ8uwjxJR02M9wPqbCz0QiUFyQk0GIoKgjI9RkMTyE01ehAfFDJYpNzjk%2B%2BLeRuYnJPSdSztcOhAXJigJbhbbcMLyYjL8GOqUBwwCSWlwKf6pRi%2B3AZwkn2b%2BPoFOpbptPsJZ02llhwbEOm6RD5Be4iJ0gTvxAjBnS49%2FJ%2F2O%2FoHMQKFQSyjPWljC8VA%2BmIT4VC0CntqUltSSPjBLL9akPMSkytkI7PFErflug5EOPLIJiBU%2BugP8mQknjWxuEKbpm%2BZZnHPM2wEpHzqJwH%2BenRvmaeugsEg2AsIpKb8BFbu%2F%2Fo%2BKarTapvvYxCpLT&X-Amz-Signature=5a460a8d43f560e1ea1e300bca5338dec7266a91cf24288544f3812486b67513&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFIPDCY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuJufcQUnmu8WRunUEIKCfAI1%2F%2BoWyQIScRkBFJX2yHAiEA9%2FRQ15PKmw3hLVRcA1Q%2BudI1a%2F3wgh27Nb9NEGCCgIEq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAbD71QXmzxOOAUucCrcA%2FF23fWZlqquydoxQcMirov2EDcuvvFAoWhumlfv9fhqB2Dn8j%2FLDCjuyY4uNcL3RSukNIcdqhyDB2Djc29Yy3kKJJGaoComr6jl7gzXt5WIYq0OvUNbtSFPCv7F8JlYFDmpAE%2Fk2GOXSIYdhUPCbyQ7tJRFRFiWyNQTfopEtdNheysoeFmKIMTmIVaVaQecvzlym4t%2BZPds2z6wjsN4a2JInyQDrTdM4BVpXaL0jWhnXW%2BdfShKjpuS%2FBhi8XvRWzaNN681JncBVK%2B%2FJO50xt742Cn%2F6TLVOcuOr6e96lSIsTmyRyBI49aBTqix6tHDG465ZLJsyc79RIKTDDuEyYDSIgBj4NEHpBpGUnzEThnqqYyubjwvsq010QmjEH6qtAid%2FNKDupNGLnK9GS0TaKNbkNAyJ7idpg%2FPFRZ3JrTtQuG7ciE%2BrK8K7M22nRmvnObDWvV7OshEyDu6oTYU4EXqjgGAyQX%2Ffk%2B4o5oiZPs0HRC%2Fvh4bOQHJSyQ%2FGjTHEPTanoAmZSloLrxvEt6%2FMn%2BXn6WX0QbSWnNgP2WQ8uwjxJR02M9wPqbCz0QiUFyQk0GIoKgjI9RkMTyE01ehAfFDJYpNzjk%2B%2BLeRuYnJPSdSztcOhAXJigJbhbbcMLyYjL8GOqUBwwCSWlwKf6pRi%2B3AZwkn2b%2BPoFOpbptPsJZ02llhwbEOm6RD5Be4iJ0gTvxAjBnS49%2FJ%2F2O%2FoHMQKFQSyjPWljC8VA%2BmIT4VC0CntqUltSSPjBLL9akPMSkytkI7PFErflug5EOPLIJiBU%2BugP8mQknjWxuEKbpm%2BZZnHPM2wEpHzqJwH%2BenRvmaeugsEg2AsIpKb8BFbu%2F%2Fo%2BKarTapvvYxCpLT&X-Amz-Signature=8c089ff6ba2f0f30aca744af90fcbbd7783c3dd2fefec45cde318b03b6bf46e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
