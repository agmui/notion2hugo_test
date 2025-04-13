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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMZCP6H%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDZSKXtGJ2ICXg0JDO0YyYepuKwhveevilXe7zWzZ5PIwIgBUdCE1aYVcbXNCR50S9LvmRGS2hS7mnC2xJy%2B7JYfpcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMmDiCf%2B3sCbeWYASrcAxinfBSLGOIjRbYR82ntEfVyHjNBvL0eK8wkXkfliNUwtWYvNwRd5%2BUY7vcZ2SJqnIcSA2wWXQI%2Fq8ZTJ7qwj3QBtzbfWM77JaqNTUwwh%2B4kiSlSxWPTW1uNRzsk7LhFhfhUv1J3NJIwi7trR9ZEnhX1mohbQAHj82qvoG3AGwy9NkI46%2BILxNyqpIfwqQy8sK6FeYPjtAGnPlpnpc7XaIsPURZ9NgPh1iqno2GvbLxbH%2BJEb4Rr%2F0JQaH%2FncOAw0KeIB4UEBvhiF4S%2FeO3YHBXSpD4kAHE8igtGkOndcpf5lG4AMGFLACltTW5e3T5ERixv%2Fh0G0%2BWPf7Sp%2B9NX7KO5koyw6asoZqUFVTiTMDQ%2BzGynXN%2FIQXE%2FF4i0rJQSL%2FEjyD%2BZSIJSaM8A4eOQZpOYxg6x0q83ve1bTH8XsyfQe27nJduopx95cGBRMEHg1knmdISIj0FhBtA03dVUyUpMmFCUM4skmha2%2FFIZWVhIBo5Yhsvrb5ozBF3TjSWJeanEmDjQSMRvkrpLulOPMKw6089%2BX9XlCyhJIn%2FvMRoyF%2BrGSCrNf3Sv6sSiLZtEmEx4ekQaErvg5ZES6ipIZ57Y0gBIgFE5S7xww4llMJ7JwFcxPXLYtwQFut6pMJ6C8b8GOqUBLUGzYoQSKTjTK14W7ekQIiYjav3luBcpSXTLolcaP%2BbO2iFfALNtisVSwqrErKKqiuc0lC9RmrxLe4HqAlY3en0cjY43fN%2FqSzvpqXRNvmk%2FLR7EO%2F9zbGBXS92%2FNgjtcEDu1SZrL5Ca%2FPXZVTBtbTzERv0yiDbIz3W0XqWEp12RuBGbqjdR3lkbZjhbR5c5EnjJ0OLVOXn5T5cOUqUyXxkAvIqz&X-Amz-Signature=939a0b0c72c1a680f4356a6771def43bc82c35463d25b65fe5af514c2aba6054&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMZCP6H%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDZSKXtGJ2ICXg0JDO0YyYepuKwhveevilXe7zWzZ5PIwIgBUdCE1aYVcbXNCR50S9LvmRGS2hS7mnC2xJy%2B7JYfpcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMmDiCf%2B3sCbeWYASrcAxinfBSLGOIjRbYR82ntEfVyHjNBvL0eK8wkXkfliNUwtWYvNwRd5%2BUY7vcZ2SJqnIcSA2wWXQI%2Fq8ZTJ7qwj3QBtzbfWM77JaqNTUwwh%2B4kiSlSxWPTW1uNRzsk7LhFhfhUv1J3NJIwi7trR9ZEnhX1mohbQAHj82qvoG3AGwy9NkI46%2BILxNyqpIfwqQy8sK6FeYPjtAGnPlpnpc7XaIsPURZ9NgPh1iqno2GvbLxbH%2BJEb4Rr%2F0JQaH%2FncOAw0KeIB4UEBvhiF4S%2FeO3YHBXSpD4kAHE8igtGkOndcpf5lG4AMGFLACltTW5e3T5ERixv%2Fh0G0%2BWPf7Sp%2B9NX7KO5koyw6asoZqUFVTiTMDQ%2BzGynXN%2FIQXE%2FF4i0rJQSL%2FEjyD%2BZSIJSaM8A4eOQZpOYxg6x0q83ve1bTH8XsyfQe27nJduopx95cGBRMEHg1knmdISIj0FhBtA03dVUyUpMmFCUM4skmha2%2FFIZWVhIBo5Yhsvrb5ozBF3TjSWJeanEmDjQSMRvkrpLulOPMKw6089%2BX9XlCyhJIn%2FvMRoyF%2BrGSCrNf3Sv6sSiLZtEmEx4ekQaErvg5ZES6ipIZ57Y0gBIgFE5S7xww4llMJ7JwFcxPXLYtwQFut6pMJ6C8b8GOqUBLUGzYoQSKTjTK14W7ekQIiYjav3luBcpSXTLolcaP%2BbO2iFfALNtisVSwqrErKKqiuc0lC9RmrxLe4HqAlY3en0cjY43fN%2FqSzvpqXRNvmk%2FLR7EO%2F9zbGBXS92%2FNgjtcEDu1SZrL5Ca%2FPXZVTBtbTzERv0yiDbIz3W0XqWEp12RuBGbqjdR3lkbZjhbR5c5EnjJ0OLVOXn5T5cOUqUyXxkAvIqz&X-Amz-Signature=aaa26378c5bcd6963941a1a80c7af26336aeb4cfccae7b3d55bcba87c074a083&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMZCP6H%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDZSKXtGJ2ICXg0JDO0YyYepuKwhveevilXe7zWzZ5PIwIgBUdCE1aYVcbXNCR50S9LvmRGS2hS7mnC2xJy%2B7JYfpcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMmDiCf%2B3sCbeWYASrcAxinfBSLGOIjRbYR82ntEfVyHjNBvL0eK8wkXkfliNUwtWYvNwRd5%2BUY7vcZ2SJqnIcSA2wWXQI%2Fq8ZTJ7qwj3QBtzbfWM77JaqNTUwwh%2B4kiSlSxWPTW1uNRzsk7LhFhfhUv1J3NJIwi7trR9ZEnhX1mohbQAHj82qvoG3AGwy9NkI46%2BILxNyqpIfwqQy8sK6FeYPjtAGnPlpnpc7XaIsPURZ9NgPh1iqno2GvbLxbH%2BJEb4Rr%2F0JQaH%2FncOAw0KeIB4UEBvhiF4S%2FeO3YHBXSpD4kAHE8igtGkOndcpf5lG4AMGFLACltTW5e3T5ERixv%2Fh0G0%2BWPf7Sp%2B9NX7KO5koyw6asoZqUFVTiTMDQ%2BzGynXN%2FIQXE%2FF4i0rJQSL%2FEjyD%2BZSIJSaM8A4eOQZpOYxg6x0q83ve1bTH8XsyfQe27nJduopx95cGBRMEHg1knmdISIj0FhBtA03dVUyUpMmFCUM4skmha2%2FFIZWVhIBo5Yhsvrb5ozBF3TjSWJeanEmDjQSMRvkrpLulOPMKw6089%2BX9XlCyhJIn%2FvMRoyF%2BrGSCrNf3Sv6sSiLZtEmEx4ekQaErvg5ZES6ipIZ57Y0gBIgFE5S7xww4llMJ7JwFcxPXLYtwQFut6pMJ6C8b8GOqUBLUGzYoQSKTjTK14W7ekQIiYjav3luBcpSXTLolcaP%2BbO2iFfALNtisVSwqrErKKqiuc0lC9RmrxLe4HqAlY3en0cjY43fN%2FqSzvpqXRNvmk%2FLR7EO%2F9zbGBXS92%2FNgjtcEDu1SZrL5Ca%2FPXZVTBtbTzERv0yiDbIz3W0XqWEp12RuBGbqjdR3lkbZjhbR5c5EnjJ0OLVOXn5T5cOUqUyXxkAvIqz&X-Amz-Signature=e41a36c121bb1bc862d77dddc1716522593572ae3f287dbb4f21b85137ca6586&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMZCP6H%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDZSKXtGJ2ICXg0JDO0YyYepuKwhveevilXe7zWzZ5PIwIgBUdCE1aYVcbXNCR50S9LvmRGS2hS7mnC2xJy%2B7JYfpcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMmDiCf%2B3sCbeWYASrcAxinfBSLGOIjRbYR82ntEfVyHjNBvL0eK8wkXkfliNUwtWYvNwRd5%2BUY7vcZ2SJqnIcSA2wWXQI%2Fq8ZTJ7qwj3QBtzbfWM77JaqNTUwwh%2B4kiSlSxWPTW1uNRzsk7LhFhfhUv1J3NJIwi7trR9ZEnhX1mohbQAHj82qvoG3AGwy9NkI46%2BILxNyqpIfwqQy8sK6FeYPjtAGnPlpnpc7XaIsPURZ9NgPh1iqno2GvbLxbH%2BJEb4Rr%2F0JQaH%2FncOAw0KeIB4UEBvhiF4S%2FeO3YHBXSpD4kAHE8igtGkOndcpf5lG4AMGFLACltTW5e3T5ERixv%2Fh0G0%2BWPf7Sp%2B9NX7KO5koyw6asoZqUFVTiTMDQ%2BzGynXN%2FIQXE%2FF4i0rJQSL%2FEjyD%2BZSIJSaM8A4eOQZpOYxg6x0q83ve1bTH8XsyfQe27nJduopx95cGBRMEHg1knmdISIj0FhBtA03dVUyUpMmFCUM4skmha2%2FFIZWVhIBo5Yhsvrb5ozBF3TjSWJeanEmDjQSMRvkrpLulOPMKw6089%2BX9XlCyhJIn%2FvMRoyF%2BrGSCrNf3Sv6sSiLZtEmEx4ekQaErvg5ZES6ipIZ57Y0gBIgFE5S7xww4llMJ7JwFcxPXLYtwQFut6pMJ6C8b8GOqUBLUGzYoQSKTjTK14W7ekQIiYjav3luBcpSXTLolcaP%2BbO2iFfALNtisVSwqrErKKqiuc0lC9RmrxLe4HqAlY3en0cjY43fN%2FqSzvpqXRNvmk%2FLR7EO%2F9zbGBXS92%2FNgjtcEDu1SZrL5Ca%2FPXZVTBtbTzERv0yiDbIz3W0XqWEp12RuBGbqjdR3lkbZjhbR5c5EnjJ0OLVOXn5T5cOUqUyXxkAvIqz&X-Amz-Signature=270fc4f654231312542a671bef70aaf7415df2aa6b941bc8c66a3714eafe2328&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMZCP6H%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDZSKXtGJ2ICXg0JDO0YyYepuKwhveevilXe7zWzZ5PIwIgBUdCE1aYVcbXNCR50S9LvmRGS2hS7mnC2xJy%2B7JYfpcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMmDiCf%2B3sCbeWYASrcAxinfBSLGOIjRbYR82ntEfVyHjNBvL0eK8wkXkfliNUwtWYvNwRd5%2BUY7vcZ2SJqnIcSA2wWXQI%2Fq8ZTJ7qwj3QBtzbfWM77JaqNTUwwh%2B4kiSlSxWPTW1uNRzsk7LhFhfhUv1J3NJIwi7trR9ZEnhX1mohbQAHj82qvoG3AGwy9NkI46%2BILxNyqpIfwqQy8sK6FeYPjtAGnPlpnpc7XaIsPURZ9NgPh1iqno2GvbLxbH%2BJEb4Rr%2F0JQaH%2FncOAw0KeIB4UEBvhiF4S%2FeO3YHBXSpD4kAHE8igtGkOndcpf5lG4AMGFLACltTW5e3T5ERixv%2Fh0G0%2BWPf7Sp%2B9NX7KO5koyw6asoZqUFVTiTMDQ%2BzGynXN%2FIQXE%2FF4i0rJQSL%2FEjyD%2BZSIJSaM8A4eOQZpOYxg6x0q83ve1bTH8XsyfQe27nJduopx95cGBRMEHg1knmdISIj0FhBtA03dVUyUpMmFCUM4skmha2%2FFIZWVhIBo5Yhsvrb5ozBF3TjSWJeanEmDjQSMRvkrpLulOPMKw6089%2BX9XlCyhJIn%2FvMRoyF%2BrGSCrNf3Sv6sSiLZtEmEx4ekQaErvg5ZES6ipIZ57Y0gBIgFE5S7xww4llMJ7JwFcxPXLYtwQFut6pMJ6C8b8GOqUBLUGzYoQSKTjTK14W7ekQIiYjav3luBcpSXTLolcaP%2BbO2iFfALNtisVSwqrErKKqiuc0lC9RmrxLe4HqAlY3en0cjY43fN%2FqSzvpqXRNvmk%2FLR7EO%2F9zbGBXS92%2FNgjtcEDu1SZrL5Ca%2FPXZVTBtbTzERv0yiDbIz3W0XqWEp12RuBGbqjdR3lkbZjhbR5c5EnjJ0OLVOXn5T5cOUqUyXxkAvIqz&X-Amz-Signature=bdc3175707e46b1b6e4092af54a2636136afcb8322387f80157d19adf29b4eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMZCP6H%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDZSKXtGJ2ICXg0JDO0YyYepuKwhveevilXe7zWzZ5PIwIgBUdCE1aYVcbXNCR50S9LvmRGS2hS7mnC2xJy%2B7JYfpcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMmDiCf%2B3sCbeWYASrcAxinfBSLGOIjRbYR82ntEfVyHjNBvL0eK8wkXkfliNUwtWYvNwRd5%2BUY7vcZ2SJqnIcSA2wWXQI%2Fq8ZTJ7qwj3QBtzbfWM77JaqNTUwwh%2B4kiSlSxWPTW1uNRzsk7LhFhfhUv1J3NJIwi7trR9ZEnhX1mohbQAHj82qvoG3AGwy9NkI46%2BILxNyqpIfwqQy8sK6FeYPjtAGnPlpnpc7XaIsPURZ9NgPh1iqno2GvbLxbH%2BJEb4Rr%2F0JQaH%2FncOAw0KeIB4UEBvhiF4S%2FeO3YHBXSpD4kAHE8igtGkOndcpf5lG4AMGFLACltTW5e3T5ERixv%2Fh0G0%2BWPf7Sp%2B9NX7KO5koyw6asoZqUFVTiTMDQ%2BzGynXN%2FIQXE%2FF4i0rJQSL%2FEjyD%2BZSIJSaM8A4eOQZpOYxg6x0q83ve1bTH8XsyfQe27nJduopx95cGBRMEHg1knmdISIj0FhBtA03dVUyUpMmFCUM4skmha2%2FFIZWVhIBo5Yhsvrb5ozBF3TjSWJeanEmDjQSMRvkrpLulOPMKw6089%2BX9XlCyhJIn%2FvMRoyF%2BrGSCrNf3Sv6sSiLZtEmEx4ekQaErvg5ZES6ipIZ57Y0gBIgFE5S7xww4llMJ7JwFcxPXLYtwQFut6pMJ6C8b8GOqUBLUGzYoQSKTjTK14W7ekQIiYjav3luBcpSXTLolcaP%2BbO2iFfALNtisVSwqrErKKqiuc0lC9RmrxLe4HqAlY3en0cjY43fN%2FqSzvpqXRNvmk%2FLR7EO%2F9zbGBXS92%2FNgjtcEDu1SZrL5Ca%2FPXZVTBtbTzERv0yiDbIz3W0XqWEp12RuBGbqjdR3lkbZjhbR5c5EnjJ0OLVOXn5T5cOUqUyXxkAvIqz&X-Amz-Signature=8fe19af61503f4a8edd297ea4fed46761a572a761df8999daaf8271a10ce95a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMZCP6H%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDZSKXtGJ2ICXg0JDO0YyYepuKwhveevilXe7zWzZ5PIwIgBUdCE1aYVcbXNCR50S9LvmRGS2hS7mnC2xJy%2B7JYfpcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMmDiCf%2B3sCbeWYASrcAxinfBSLGOIjRbYR82ntEfVyHjNBvL0eK8wkXkfliNUwtWYvNwRd5%2BUY7vcZ2SJqnIcSA2wWXQI%2Fq8ZTJ7qwj3QBtzbfWM77JaqNTUwwh%2B4kiSlSxWPTW1uNRzsk7LhFhfhUv1J3NJIwi7trR9ZEnhX1mohbQAHj82qvoG3AGwy9NkI46%2BILxNyqpIfwqQy8sK6FeYPjtAGnPlpnpc7XaIsPURZ9NgPh1iqno2GvbLxbH%2BJEb4Rr%2F0JQaH%2FncOAw0KeIB4UEBvhiF4S%2FeO3YHBXSpD4kAHE8igtGkOndcpf5lG4AMGFLACltTW5e3T5ERixv%2Fh0G0%2BWPf7Sp%2B9NX7KO5koyw6asoZqUFVTiTMDQ%2BzGynXN%2FIQXE%2FF4i0rJQSL%2FEjyD%2BZSIJSaM8A4eOQZpOYxg6x0q83ve1bTH8XsyfQe27nJduopx95cGBRMEHg1knmdISIj0FhBtA03dVUyUpMmFCUM4skmha2%2FFIZWVhIBo5Yhsvrb5ozBF3TjSWJeanEmDjQSMRvkrpLulOPMKw6089%2BX9XlCyhJIn%2FvMRoyF%2BrGSCrNf3Sv6sSiLZtEmEx4ekQaErvg5ZES6ipIZ57Y0gBIgFE5S7xww4llMJ7JwFcxPXLYtwQFut6pMJ6C8b8GOqUBLUGzYoQSKTjTK14W7ekQIiYjav3luBcpSXTLolcaP%2BbO2iFfALNtisVSwqrErKKqiuc0lC9RmrxLe4HqAlY3en0cjY43fN%2FqSzvpqXRNvmk%2FLR7EO%2F9zbGBXS92%2FNgjtcEDu1SZrL5Ca%2FPXZVTBtbTzERv0yiDbIz3W0XqWEp12RuBGbqjdR3lkbZjhbR5c5EnjJ0OLVOXn5T5cOUqUyXxkAvIqz&X-Amz-Signature=3d7faff62f772c0db29201b5c43f0cd919bddfdfa4c4010e3b23ffaf29d1ad20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMZCP6H%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDZSKXtGJ2ICXg0JDO0YyYepuKwhveevilXe7zWzZ5PIwIgBUdCE1aYVcbXNCR50S9LvmRGS2hS7mnC2xJy%2B7JYfpcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMmDiCf%2B3sCbeWYASrcAxinfBSLGOIjRbYR82ntEfVyHjNBvL0eK8wkXkfliNUwtWYvNwRd5%2BUY7vcZ2SJqnIcSA2wWXQI%2Fq8ZTJ7qwj3QBtzbfWM77JaqNTUwwh%2B4kiSlSxWPTW1uNRzsk7LhFhfhUv1J3NJIwi7trR9ZEnhX1mohbQAHj82qvoG3AGwy9NkI46%2BILxNyqpIfwqQy8sK6FeYPjtAGnPlpnpc7XaIsPURZ9NgPh1iqno2GvbLxbH%2BJEb4Rr%2F0JQaH%2FncOAw0KeIB4UEBvhiF4S%2FeO3YHBXSpD4kAHE8igtGkOndcpf5lG4AMGFLACltTW5e3T5ERixv%2Fh0G0%2BWPf7Sp%2B9NX7KO5koyw6asoZqUFVTiTMDQ%2BzGynXN%2FIQXE%2FF4i0rJQSL%2FEjyD%2BZSIJSaM8A4eOQZpOYxg6x0q83ve1bTH8XsyfQe27nJduopx95cGBRMEHg1knmdISIj0FhBtA03dVUyUpMmFCUM4skmha2%2FFIZWVhIBo5Yhsvrb5ozBF3TjSWJeanEmDjQSMRvkrpLulOPMKw6089%2BX9XlCyhJIn%2FvMRoyF%2BrGSCrNf3Sv6sSiLZtEmEx4ekQaErvg5ZES6ipIZ57Y0gBIgFE5S7xww4llMJ7JwFcxPXLYtwQFut6pMJ6C8b8GOqUBLUGzYoQSKTjTK14W7ekQIiYjav3luBcpSXTLolcaP%2BbO2iFfALNtisVSwqrErKKqiuc0lC9RmrxLe4HqAlY3en0cjY43fN%2FqSzvpqXRNvmk%2FLR7EO%2F9zbGBXS92%2FNgjtcEDu1SZrL5Ca%2FPXZVTBtbTzERv0yiDbIz3W0XqWEp12RuBGbqjdR3lkbZjhbR5c5EnjJ0OLVOXn5T5cOUqUyXxkAvIqz&X-Amz-Signature=053399fa2faa5d22ad133152db9f127f2e36d5710887f635b6cf31bb8535876f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
