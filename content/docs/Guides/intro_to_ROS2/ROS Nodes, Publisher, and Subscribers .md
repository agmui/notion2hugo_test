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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WRE2NL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC7zdMBIgl1BGrPHwX%2FIXVu9ZF92toHv%2Bta48JhYYthMAIhAMxoeyzFYGDwE7pMlbE1ulPbMJF1f7wu9CG6zuHqCX8qKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2FzRhI8R%2BtRHYJ6sq3AN05qS7GWYO9EJXi6m%2BDCm0x8lZp0%2FShrjAqKgVBixMGoihF%2BIfKJz%2FSCwZpnlr1n%2BuirQU3W3MR0EICPPZgiv6%2BXcZnmktrVtGLaVDGgIiJbKKM80W1rJ8CS1%2F1uuYGD8A9N59UbzlW194mo7EABNvze0jG%2F8LZpylQWtiThaBQe8yq7HNiAJZ4dfCZ2Qj2fCEd%2FBMDZv8HZiQHX5zy0i0ugMEzng6MbSNVI0fhDTGBdqp%2Fms3ZuovYX5fs4X0CcE28Mfbc7uQwS5kf7fiAe6lJfuzcuVfS9TX%2FCetUsjh%2B%2BlDTtUsSvGOcJG74lW%2Fh6A%2B3mWGEYcVyGGmpR%2FtgoYsjqi7pJZlQJz3gOLt9zp%2F%2FxLGCEx6k9TQERsqGhqL99dfNrVYHc%2Fl5WagbFjrVDozwu9psrbBHYKnw26IR1RwkP5UcgvIn%2FPhZQpcHqN%2FbVrYsUMtkXSf5fDOk%2FbzvUXLmes%2F6ER9ZEEoGia92RFy5dssA4FMIwnHTPT7g0NqP4lAbYh%2BGeRR0HwarTlOFYqj4CaMUeGT3J%2FFCJVEl9%2Fk8xU%2F4QAy4fAnHRXWqCARLVMmsoBpk53P0tz3frpo%2FuvbUwHjd6DFYLid%2F7MoM%2FFCcCCZS1w9z2kKOrjetjD73%2FDBBjqkAXAiCCezd0XEO4PYTIF6aQqv4M9dAQrvorQHEAwF6sEBSa1Pczy7%2FTUoAZoKZxTJsL6Ed%2BehvCgYuN3h%2Bad%2F1EeICsOMmAohBZV0JyItHaBQ2gzvuOrCUyI8xHs7Edk%2F6YPKHck6NbUvZK%2BsTHpmQvEuPMEUMcFswvh4G4B4k1tCu2yVERbZhlOc1ttStS9nAbOxZREQ3uCETacG9%2FzcPcf0S6e1&X-Amz-Signature=195822bdf53044c79a1a065e47f738836025238fc81d2a146d55d92d26adfbb4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WRE2NL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC7zdMBIgl1BGrPHwX%2FIXVu9ZF92toHv%2Bta48JhYYthMAIhAMxoeyzFYGDwE7pMlbE1ulPbMJF1f7wu9CG6zuHqCX8qKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2FzRhI8R%2BtRHYJ6sq3AN05qS7GWYO9EJXi6m%2BDCm0x8lZp0%2FShrjAqKgVBixMGoihF%2BIfKJz%2FSCwZpnlr1n%2BuirQU3W3MR0EICPPZgiv6%2BXcZnmktrVtGLaVDGgIiJbKKM80W1rJ8CS1%2F1uuYGD8A9N59UbzlW194mo7EABNvze0jG%2F8LZpylQWtiThaBQe8yq7HNiAJZ4dfCZ2Qj2fCEd%2FBMDZv8HZiQHX5zy0i0ugMEzng6MbSNVI0fhDTGBdqp%2Fms3ZuovYX5fs4X0CcE28Mfbc7uQwS5kf7fiAe6lJfuzcuVfS9TX%2FCetUsjh%2B%2BlDTtUsSvGOcJG74lW%2Fh6A%2B3mWGEYcVyGGmpR%2FtgoYsjqi7pJZlQJz3gOLt9zp%2F%2FxLGCEx6k9TQERsqGhqL99dfNrVYHc%2Fl5WagbFjrVDozwu9psrbBHYKnw26IR1RwkP5UcgvIn%2FPhZQpcHqN%2FbVrYsUMtkXSf5fDOk%2FbzvUXLmes%2F6ER9ZEEoGia92RFy5dssA4FMIwnHTPT7g0NqP4lAbYh%2BGeRR0HwarTlOFYqj4CaMUeGT3J%2FFCJVEl9%2Fk8xU%2F4QAy4fAnHRXWqCARLVMmsoBpk53P0tz3frpo%2FuvbUwHjd6DFYLid%2F7MoM%2FFCcCCZS1w9z2kKOrjetjD73%2FDBBjqkAXAiCCezd0XEO4PYTIF6aQqv4M9dAQrvorQHEAwF6sEBSa1Pczy7%2FTUoAZoKZxTJsL6Ed%2BehvCgYuN3h%2Bad%2F1EeICsOMmAohBZV0JyItHaBQ2gzvuOrCUyI8xHs7Edk%2F6YPKHck6NbUvZK%2BsTHpmQvEuPMEUMcFswvh4G4B4k1tCu2yVERbZhlOc1ttStS9nAbOxZREQ3uCETacG9%2FzcPcf0S6e1&X-Amz-Signature=589334faf1725da023570f97fc5105ac446344474290d425562b595ceac5b1b3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WRE2NL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC7zdMBIgl1BGrPHwX%2FIXVu9ZF92toHv%2Bta48JhYYthMAIhAMxoeyzFYGDwE7pMlbE1ulPbMJF1f7wu9CG6zuHqCX8qKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2FzRhI8R%2BtRHYJ6sq3AN05qS7GWYO9EJXi6m%2BDCm0x8lZp0%2FShrjAqKgVBixMGoihF%2BIfKJz%2FSCwZpnlr1n%2BuirQU3W3MR0EICPPZgiv6%2BXcZnmktrVtGLaVDGgIiJbKKM80W1rJ8CS1%2F1uuYGD8A9N59UbzlW194mo7EABNvze0jG%2F8LZpylQWtiThaBQe8yq7HNiAJZ4dfCZ2Qj2fCEd%2FBMDZv8HZiQHX5zy0i0ugMEzng6MbSNVI0fhDTGBdqp%2Fms3ZuovYX5fs4X0CcE28Mfbc7uQwS5kf7fiAe6lJfuzcuVfS9TX%2FCetUsjh%2B%2BlDTtUsSvGOcJG74lW%2Fh6A%2B3mWGEYcVyGGmpR%2FtgoYsjqi7pJZlQJz3gOLt9zp%2F%2FxLGCEx6k9TQERsqGhqL99dfNrVYHc%2Fl5WagbFjrVDozwu9psrbBHYKnw26IR1RwkP5UcgvIn%2FPhZQpcHqN%2FbVrYsUMtkXSf5fDOk%2FbzvUXLmes%2F6ER9ZEEoGia92RFy5dssA4FMIwnHTPT7g0NqP4lAbYh%2BGeRR0HwarTlOFYqj4CaMUeGT3J%2FFCJVEl9%2Fk8xU%2F4QAy4fAnHRXWqCARLVMmsoBpk53P0tz3frpo%2FuvbUwHjd6DFYLid%2F7MoM%2FFCcCCZS1w9z2kKOrjetjD73%2FDBBjqkAXAiCCezd0XEO4PYTIF6aQqv4M9dAQrvorQHEAwF6sEBSa1Pczy7%2FTUoAZoKZxTJsL6Ed%2BehvCgYuN3h%2Bad%2F1EeICsOMmAohBZV0JyItHaBQ2gzvuOrCUyI8xHs7Edk%2F6YPKHck6NbUvZK%2BsTHpmQvEuPMEUMcFswvh4G4B4k1tCu2yVERbZhlOc1ttStS9nAbOxZREQ3uCETacG9%2FzcPcf0S6e1&X-Amz-Signature=240f7a8c633d485b5e7ef7740f53f93e1c796926271f12108dde6c5ffa2ab80a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WRE2NL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC7zdMBIgl1BGrPHwX%2FIXVu9ZF92toHv%2Bta48JhYYthMAIhAMxoeyzFYGDwE7pMlbE1ulPbMJF1f7wu9CG6zuHqCX8qKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2FzRhI8R%2BtRHYJ6sq3AN05qS7GWYO9EJXi6m%2BDCm0x8lZp0%2FShrjAqKgVBixMGoihF%2BIfKJz%2FSCwZpnlr1n%2BuirQU3W3MR0EICPPZgiv6%2BXcZnmktrVtGLaVDGgIiJbKKM80W1rJ8CS1%2F1uuYGD8A9N59UbzlW194mo7EABNvze0jG%2F8LZpylQWtiThaBQe8yq7HNiAJZ4dfCZ2Qj2fCEd%2FBMDZv8HZiQHX5zy0i0ugMEzng6MbSNVI0fhDTGBdqp%2Fms3ZuovYX5fs4X0CcE28Mfbc7uQwS5kf7fiAe6lJfuzcuVfS9TX%2FCetUsjh%2B%2BlDTtUsSvGOcJG74lW%2Fh6A%2B3mWGEYcVyGGmpR%2FtgoYsjqi7pJZlQJz3gOLt9zp%2F%2FxLGCEx6k9TQERsqGhqL99dfNrVYHc%2Fl5WagbFjrVDozwu9psrbBHYKnw26IR1RwkP5UcgvIn%2FPhZQpcHqN%2FbVrYsUMtkXSf5fDOk%2FbzvUXLmes%2F6ER9ZEEoGia92RFy5dssA4FMIwnHTPT7g0NqP4lAbYh%2BGeRR0HwarTlOFYqj4CaMUeGT3J%2FFCJVEl9%2Fk8xU%2F4QAy4fAnHRXWqCARLVMmsoBpk53P0tz3frpo%2FuvbUwHjd6DFYLid%2F7MoM%2FFCcCCZS1w9z2kKOrjetjD73%2FDBBjqkAXAiCCezd0XEO4PYTIF6aQqv4M9dAQrvorQHEAwF6sEBSa1Pczy7%2FTUoAZoKZxTJsL6Ed%2BehvCgYuN3h%2Bad%2F1EeICsOMmAohBZV0JyItHaBQ2gzvuOrCUyI8xHs7Edk%2F6YPKHck6NbUvZK%2BsTHpmQvEuPMEUMcFswvh4G4B4k1tCu2yVERbZhlOc1ttStS9nAbOxZREQ3uCETacG9%2FzcPcf0S6e1&X-Amz-Signature=0a573f96b3b73924738c2af569217a8dd047929a0c30ed0e2f3faaa6736d7cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WRE2NL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC7zdMBIgl1BGrPHwX%2FIXVu9ZF92toHv%2Bta48JhYYthMAIhAMxoeyzFYGDwE7pMlbE1ulPbMJF1f7wu9CG6zuHqCX8qKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2FzRhI8R%2BtRHYJ6sq3AN05qS7GWYO9EJXi6m%2BDCm0x8lZp0%2FShrjAqKgVBixMGoihF%2BIfKJz%2FSCwZpnlr1n%2BuirQU3W3MR0EICPPZgiv6%2BXcZnmktrVtGLaVDGgIiJbKKM80W1rJ8CS1%2F1uuYGD8A9N59UbzlW194mo7EABNvze0jG%2F8LZpylQWtiThaBQe8yq7HNiAJZ4dfCZ2Qj2fCEd%2FBMDZv8HZiQHX5zy0i0ugMEzng6MbSNVI0fhDTGBdqp%2Fms3ZuovYX5fs4X0CcE28Mfbc7uQwS5kf7fiAe6lJfuzcuVfS9TX%2FCetUsjh%2B%2BlDTtUsSvGOcJG74lW%2Fh6A%2B3mWGEYcVyGGmpR%2FtgoYsjqi7pJZlQJz3gOLt9zp%2F%2FxLGCEx6k9TQERsqGhqL99dfNrVYHc%2Fl5WagbFjrVDozwu9psrbBHYKnw26IR1RwkP5UcgvIn%2FPhZQpcHqN%2FbVrYsUMtkXSf5fDOk%2FbzvUXLmes%2F6ER9ZEEoGia92RFy5dssA4FMIwnHTPT7g0NqP4lAbYh%2BGeRR0HwarTlOFYqj4CaMUeGT3J%2FFCJVEl9%2Fk8xU%2F4QAy4fAnHRXWqCARLVMmsoBpk53P0tz3frpo%2FuvbUwHjd6DFYLid%2F7MoM%2FFCcCCZS1w9z2kKOrjetjD73%2FDBBjqkAXAiCCezd0XEO4PYTIF6aQqv4M9dAQrvorQHEAwF6sEBSa1Pczy7%2FTUoAZoKZxTJsL6Ed%2BehvCgYuN3h%2Bad%2F1EeICsOMmAohBZV0JyItHaBQ2gzvuOrCUyI8xHs7Edk%2F6YPKHck6NbUvZK%2BsTHpmQvEuPMEUMcFswvh4G4B4k1tCu2yVERbZhlOc1ttStS9nAbOxZREQ3uCETacG9%2FzcPcf0S6e1&X-Amz-Signature=54b0197c9dd9833f23741ff2e5aa999dea76406ff8862ae1ac6e6bebc8b7f887&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WRE2NL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC7zdMBIgl1BGrPHwX%2FIXVu9ZF92toHv%2Bta48JhYYthMAIhAMxoeyzFYGDwE7pMlbE1ulPbMJF1f7wu9CG6zuHqCX8qKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2FzRhI8R%2BtRHYJ6sq3AN05qS7GWYO9EJXi6m%2BDCm0x8lZp0%2FShrjAqKgVBixMGoihF%2BIfKJz%2FSCwZpnlr1n%2BuirQU3W3MR0EICPPZgiv6%2BXcZnmktrVtGLaVDGgIiJbKKM80W1rJ8CS1%2F1uuYGD8A9N59UbzlW194mo7EABNvze0jG%2F8LZpylQWtiThaBQe8yq7HNiAJZ4dfCZ2Qj2fCEd%2FBMDZv8HZiQHX5zy0i0ugMEzng6MbSNVI0fhDTGBdqp%2Fms3ZuovYX5fs4X0CcE28Mfbc7uQwS5kf7fiAe6lJfuzcuVfS9TX%2FCetUsjh%2B%2BlDTtUsSvGOcJG74lW%2Fh6A%2B3mWGEYcVyGGmpR%2FtgoYsjqi7pJZlQJz3gOLt9zp%2F%2FxLGCEx6k9TQERsqGhqL99dfNrVYHc%2Fl5WagbFjrVDozwu9psrbBHYKnw26IR1RwkP5UcgvIn%2FPhZQpcHqN%2FbVrYsUMtkXSf5fDOk%2FbzvUXLmes%2F6ER9ZEEoGia92RFy5dssA4FMIwnHTPT7g0NqP4lAbYh%2BGeRR0HwarTlOFYqj4CaMUeGT3J%2FFCJVEl9%2Fk8xU%2F4QAy4fAnHRXWqCARLVMmsoBpk53P0tz3frpo%2FuvbUwHjd6DFYLid%2F7MoM%2FFCcCCZS1w9z2kKOrjetjD73%2FDBBjqkAXAiCCezd0XEO4PYTIF6aQqv4M9dAQrvorQHEAwF6sEBSa1Pczy7%2FTUoAZoKZxTJsL6Ed%2BehvCgYuN3h%2Bad%2F1EeICsOMmAohBZV0JyItHaBQ2gzvuOrCUyI8xHs7Edk%2F6YPKHck6NbUvZK%2BsTHpmQvEuPMEUMcFswvh4G4B4k1tCu2yVERbZhlOc1ttStS9nAbOxZREQ3uCETacG9%2FzcPcf0S6e1&X-Amz-Signature=40514849c019063f6d36d225033ae85602db67091dfc9674bfcc493192f91306&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WRE2NL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC7zdMBIgl1BGrPHwX%2FIXVu9ZF92toHv%2Bta48JhYYthMAIhAMxoeyzFYGDwE7pMlbE1ulPbMJF1f7wu9CG6zuHqCX8qKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2FzRhI8R%2BtRHYJ6sq3AN05qS7GWYO9EJXi6m%2BDCm0x8lZp0%2FShrjAqKgVBixMGoihF%2BIfKJz%2FSCwZpnlr1n%2BuirQU3W3MR0EICPPZgiv6%2BXcZnmktrVtGLaVDGgIiJbKKM80W1rJ8CS1%2F1uuYGD8A9N59UbzlW194mo7EABNvze0jG%2F8LZpylQWtiThaBQe8yq7HNiAJZ4dfCZ2Qj2fCEd%2FBMDZv8HZiQHX5zy0i0ugMEzng6MbSNVI0fhDTGBdqp%2Fms3ZuovYX5fs4X0CcE28Mfbc7uQwS5kf7fiAe6lJfuzcuVfS9TX%2FCetUsjh%2B%2BlDTtUsSvGOcJG74lW%2Fh6A%2B3mWGEYcVyGGmpR%2FtgoYsjqi7pJZlQJz3gOLt9zp%2F%2FxLGCEx6k9TQERsqGhqL99dfNrVYHc%2Fl5WagbFjrVDozwu9psrbBHYKnw26IR1RwkP5UcgvIn%2FPhZQpcHqN%2FbVrYsUMtkXSf5fDOk%2FbzvUXLmes%2F6ER9ZEEoGia92RFy5dssA4FMIwnHTPT7g0NqP4lAbYh%2BGeRR0HwarTlOFYqj4CaMUeGT3J%2FFCJVEl9%2Fk8xU%2F4QAy4fAnHRXWqCARLVMmsoBpk53P0tz3frpo%2FuvbUwHjd6DFYLid%2F7MoM%2FFCcCCZS1w9z2kKOrjetjD73%2FDBBjqkAXAiCCezd0XEO4PYTIF6aQqv4M9dAQrvorQHEAwF6sEBSa1Pczy7%2FTUoAZoKZxTJsL6Ed%2BehvCgYuN3h%2Bad%2F1EeICsOMmAohBZV0JyItHaBQ2gzvuOrCUyI8xHs7Edk%2F6YPKHck6NbUvZK%2BsTHpmQvEuPMEUMcFswvh4G4B4k1tCu2yVERbZhlOc1ttStS9nAbOxZREQ3uCETacG9%2FzcPcf0S6e1&X-Amz-Signature=52d50b142da52ebdef02594a118b99ad125584a5902fbca714d0ff74bc8a902e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WRE2NL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC7zdMBIgl1BGrPHwX%2FIXVu9ZF92toHv%2Bta48JhYYthMAIhAMxoeyzFYGDwE7pMlbE1ulPbMJF1f7wu9CG6zuHqCX8qKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2FzRhI8R%2BtRHYJ6sq3AN05qS7GWYO9EJXi6m%2BDCm0x8lZp0%2FShrjAqKgVBixMGoihF%2BIfKJz%2FSCwZpnlr1n%2BuirQU3W3MR0EICPPZgiv6%2BXcZnmktrVtGLaVDGgIiJbKKM80W1rJ8CS1%2F1uuYGD8A9N59UbzlW194mo7EABNvze0jG%2F8LZpylQWtiThaBQe8yq7HNiAJZ4dfCZ2Qj2fCEd%2FBMDZv8HZiQHX5zy0i0ugMEzng6MbSNVI0fhDTGBdqp%2Fms3ZuovYX5fs4X0CcE28Mfbc7uQwS5kf7fiAe6lJfuzcuVfS9TX%2FCetUsjh%2B%2BlDTtUsSvGOcJG74lW%2Fh6A%2B3mWGEYcVyGGmpR%2FtgoYsjqi7pJZlQJz3gOLt9zp%2F%2FxLGCEx6k9TQERsqGhqL99dfNrVYHc%2Fl5WagbFjrVDozwu9psrbBHYKnw26IR1RwkP5UcgvIn%2FPhZQpcHqN%2FbVrYsUMtkXSf5fDOk%2FbzvUXLmes%2F6ER9ZEEoGia92RFy5dssA4FMIwnHTPT7g0NqP4lAbYh%2BGeRR0HwarTlOFYqj4CaMUeGT3J%2FFCJVEl9%2Fk8xU%2F4QAy4fAnHRXWqCARLVMmsoBpk53P0tz3frpo%2FuvbUwHjd6DFYLid%2F7MoM%2FFCcCCZS1w9z2kKOrjetjD73%2FDBBjqkAXAiCCezd0XEO4PYTIF6aQqv4M9dAQrvorQHEAwF6sEBSa1Pczy7%2FTUoAZoKZxTJsL6Ed%2BehvCgYuN3h%2Bad%2F1EeICsOMmAohBZV0JyItHaBQ2gzvuOrCUyI8xHs7Edk%2F6YPKHck6NbUvZK%2BsTHpmQvEuPMEUMcFswvh4G4B4k1tCu2yVERbZhlOc1ttStS9nAbOxZREQ3uCETacG9%2FzcPcf0S6e1&X-Amz-Signature=d0dbcbcd056029e7acea3dd58f5439ef818e979aae067b1eaf6bc768ad415e7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
