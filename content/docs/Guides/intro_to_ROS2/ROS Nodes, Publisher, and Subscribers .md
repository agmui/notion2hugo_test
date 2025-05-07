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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAS4HPR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzoJKeE8FKiWq2nr456sth4aJ9o6wYGYCK7TYksVsLbgIgf6O4O%2BDZJDJ%2BMVs5xoLJdrhFwuVtYCC58lzZy6JzrHIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJzZhTS3Ua9ZO%2Ba6dyrcA%2BpMU02AuGVFz1Us09LcqNrvPlka8nQ2tdzh5lj89ML%2BbOfYdwC5JdXOT33b1WdV3IPWSQNc0zRrbQ7dEa5Iu8Mc6cG7UxznWYFXTF6zREKchS8f5IA5ln239UyQVFWD%2B%2BomwHH%2BmiYdmBg%2Fd0LONMfHjjKFoeSKji1SHuvC8ZuI6MbAnbyp9hkZoI997TGAiUE0nWhH%2F83FVzXCnQCEhRcx3dy7%2B6j4wAkHLZN7kpmYVYxBNnt4OSVUYxFWKkX2lHOXFxzSaeDaPwgHSCSp4BEjxBFdcqrVUlh9eB5wAwBHXfdbGEgh5oVwfrtxZb5WOrN4mjBa9dQUg%2FdWERRHkkpwnoxGoCtGY6jOzwuOlh7OHVhIfzmTtZoCftGDndLxPYkzHbuEkhaZ6yb%2BVCsD4Yn%2FHk4eNgaGKgolRgAvWzCcHeScYUx4PzSoJSoQLC0LC1M3t3PEickqBFDDvVrifh8zIrWRNqZ3NY2DDczpmn8Bu%2BxZGeBLkeZGanBn0h4CUMiQREQUj2tLIkhSW45HbFsrRdmL4Ky4ZU4802Oq%2FF%2F2F9uMEzDdQKJj%2BgSuZOSzvD%2BqzoDIdfLfOhyL964VHEhe%2BskiulGMzYJw3wk76x0fMH4EkmG%2F9SjkSxByML%2Bw7MAGOqUBIGS00p6x5wsXscl31q6RN2CrrPUfztHf1JcX%2BP2dXOrMEvTgIE2MaG7DJESYaGhyBUAw5lqQEJoQG4HZDsytSaWtKTCuoGJIn4vtpUiObaycrUJOiOq2h%2F6lG5ydc69ttCqaw0Q5mdS76TVRhBViHWOUOFFNQLLLF3iT4obbYdNsEYu%2FQyMk0iUGTFLJw6tOXPowH4GPsT1xBGtaUXha8xii1aDV&X-Amz-Signature=0fd0784193b344249d8454706956ecca0a2ade3220e835b71a547fd413999504&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAS4HPR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzoJKeE8FKiWq2nr456sth4aJ9o6wYGYCK7TYksVsLbgIgf6O4O%2BDZJDJ%2BMVs5xoLJdrhFwuVtYCC58lzZy6JzrHIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJzZhTS3Ua9ZO%2Ba6dyrcA%2BpMU02AuGVFz1Us09LcqNrvPlka8nQ2tdzh5lj89ML%2BbOfYdwC5JdXOT33b1WdV3IPWSQNc0zRrbQ7dEa5Iu8Mc6cG7UxznWYFXTF6zREKchS8f5IA5ln239UyQVFWD%2B%2BomwHH%2BmiYdmBg%2Fd0LONMfHjjKFoeSKji1SHuvC8ZuI6MbAnbyp9hkZoI997TGAiUE0nWhH%2F83FVzXCnQCEhRcx3dy7%2B6j4wAkHLZN7kpmYVYxBNnt4OSVUYxFWKkX2lHOXFxzSaeDaPwgHSCSp4BEjxBFdcqrVUlh9eB5wAwBHXfdbGEgh5oVwfrtxZb5WOrN4mjBa9dQUg%2FdWERRHkkpwnoxGoCtGY6jOzwuOlh7OHVhIfzmTtZoCftGDndLxPYkzHbuEkhaZ6yb%2BVCsD4Yn%2FHk4eNgaGKgolRgAvWzCcHeScYUx4PzSoJSoQLC0LC1M3t3PEickqBFDDvVrifh8zIrWRNqZ3NY2DDczpmn8Bu%2BxZGeBLkeZGanBn0h4CUMiQREQUj2tLIkhSW45HbFsrRdmL4Ky4ZU4802Oq%2FF%2F2F9uMEzDdQKJj%2BgSuZOSzvD%2BqzoDIdfLfOhyL964VHEhe%2BskiulGMzYJw3wk76x0fMH4EkmG%2F9SjkSxByML%2Bw7MAGOqUBIGS00p6x5wsXscl31q6RN2CrrPUfztHf1JcX%2BP2dXOrMEvTgIE2MaG7DJESYaGhyBUAw5lqQEJoQG4HZDsytSaWtKTCuoGJIn4vtpUiObaycrUJOiOq2h%2F6lG5ydc69ttCqaw0Q5mdS76TVRhBViHWOUOFFNQLLLF3iT4obbYdNsEYu%2FQyMk0iUGTFLJw6tOXPowH4GPsT1xBGtaUXha8xii1aDV&X-Amz-Signature=136bf349bb7bb0c8a4555c618c192ede1800a90151bc4515c4b676aa45e7d741&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAS4HPR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzoJKeE8FKiWq2nr456sth4aJ9o6wYGYCK7TYksVsLbgIgf6O4O%2BDZJDJ%2BMVs5xoLJdrhFwuVtYCC58lzZy6JzrHIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJzZhTS3Ua9ZO%2Ba6dyrcA%2BpMU02AuGVFz1Us09LcqNrvPlka8nQ2tdzh5lj89ML%2BbOfYdwC5JdXOT33b1WdV3IPWSQNc0zRrbQ7dEa5Iu8Mc6cG7UxznWYFXTF6zREKchS8f5IA5ln239UyQVFWD%2B%2BomwHH%2BmiYdmBg%2Fd0LONMfHjjKFoeSKji1SHuvC8ZuI6MbAnbyp9hkZoI997TGAiUE0nWhH%2F83FVzXCnQCEhRcx3dy7%2B6j4wAkHLZN7kpmYVYxBNnt4OSVUYxFWKkX2lHOXFxzSaeDaPwgHSCSp4BEjxBFdcqrVUlh9eB5wAwBHXfdbGEgh5oVwfrtxZb5WOrN4mjBa9dQUg%2FdWERRHkkpwnoxGoCtGY6jOzwuOlh7OHVhIfzmTtZoCftGDndLxPYkzHbuEkhaZ6yb%2BVCsD4Yn%2FHk4eNgaGKgolRgAvWzCcHeScYUx4PzSoJSoQLC0LC1M3t3PEickqBFDDvVrifh8zIrWRNqZ3NY2DDczpmn8Bu%2BxZGeBLkeZGanBn0h4CUMiQREQUj2tLIkhSW45HbFsrRdmL4Ky4ZU4802Oq%2FF%2F2F9uMEzDdQKJj%2BgSuZOSzvD%2BqzoDIdfLfOhyL964VHEhe%2BskiulGMzYJw3wk76x0fMH4EkmG%2F9SjkSxByML%2Bw7MAGOqUBIGS00p6x5wsXscl31q6RN2CrrPUfztHf1JcX%2BP2dXOrMEvTgIE2MaG7DJESYaGhyBUAw5lqQEJoQG4HZDsytSaWtKTCuoGJIn4vtpUiObaycrUJOiOq2h%2F6lG5ydc69ttCqaw0Q5mdS76TVRhBViHWOUOFFNQLLLF3iT4obbYdNsEYu%2FQyMk0iUGTFLJw6tOXPowH4GPsT1xBGtaUXha8xii1aDV&X-Amz-Signature=31963027765b79fbd9182974058ce2f35d03a93de74991fc3a0b9c789ceee1c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAS4HPR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzoJKeE8FKiWq2nr456sth4aJ9o6wYGYCK7TYksVsLbgIgf6O4O%2BDZJDJ%2BMVs5xoLJdrhFwuVtYCC58lzZy6JzrHIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJzZhTS3Ua9ZO%2Ba6dyrcA%2BpMU02AuGVFz1Us09LcqNrvPlka8nQ2tdzh5lj89ML%2BbOfYdwC5JdXOT33b1WdV3IPWSQNc0zRrbQ7dEa5Iu8Mc6cG7UxznWYFXTF6zREKchS8f5IA5ln239UyQVFWD%2B%2BomwHH%2BmiYdmBg%2Fd0LONMfHjjKFoeSKji1SHuvC8ZuI6MbAnbyp9hkZoI997TGAiUE0nWhH%2F83FVzXCnQCEhRcx3dy7%2B6j4wAkHLZN7kpmYVYxBNnt4OSVUYxFWKkX2lHOXFxzSaeDaPwgHSCSp4BEjxBFdcqrVUlh9eB5wAwBHXfdbGEgh5oVwfrtxZb5WOrN4mjBa9dQUg%2FdWERRHkkpwnoxGoCtGY6jOzwuOlh7OHVhIfzmTtZoCftGDndLxPYkzHbuEkhaZ6yb%2BVCsD4Yn%2FHk4eNgaGKgolRgAvWzCcHeScYUx4PzSoJSoQLC0LC1M3t3PEickqBFDDvVrifh8zIrWRNqZ3NY2DDczpmn8Bu%2BxZGeBLkeZGanBn0h4CUMiQREQUj2tLIkhSW45HbFsrRdmL4Ky4ZU4802Oq%2FF%2F2F9uMEzDdQKJj%2BgSuZOSzvD%2BqzoDIdfLfOhyL964VHEhe%2BskiulGMzYJw3wk76x0fMH4EkmG%2F9SjkSxByML%2Bw7MAGOqUBIGS00p6x5wsXscl31q6RN2CrrPUfztHf1JcX%2BP2dXOrMEvTgIE2MaG7DJESYaGhyBUAw5lqQEJoQG4HZDsytSaWtKTCuoGJIn4vtpUiObaycrUJOiOq2h%2F6lG5ydc69ttCqaw0Q5mdS76TVRhBViHWOUOFFNQLLLF3iT4obbYdNsEYu%2FQyMk0iUGTFLJw6tOXPowH4GPsT1xBGtaUXha8xii1aDV&X-Amz-Signature=b0e367e17205544520fa70fbf2363f593cd8b7067a0c4853bc13417d2e224851&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAS4HPR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzoJKeE8FKiWq2nr456sth4aJ9o6wYGYCK7TYksVsLbgIgf6O4O%2BDZJDJ%2BMVs5xoLJdrhFwuVtYCC58lzZy6JzrHIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJzZhTS3Ua9ZO%2Ba6dyrcA%2BpMU02AuGVFz1Us09LcqNrvPlka8nQ2tdzh5lj89ML%2BbOfYdwC5JdXOT33b1WdV3IPWSQNc0zRrbQ7dEa5Iu8Mc6cG7UxznWYFXTF6zREKchS8f5IA5ln239UyQVFWD%2B%2BomwHH%2BmiYdmBg%2Fd0LONMfHjjKFoeSKji1SHuvC8ZuI6MbAnbyp9hkZoI997TGAiUE0nWhH%2F83FVzXCnQCEhRcx3dy7%2B6j4wAkHLZN7kpmYVYxBNnt4OSVUYxFWKkX2lHOXFxzSaeDaPwgHSCSp4BEjxBFdcqrVUlh9eB5wAwBHXfdbGEgh5oVwfrtxZb5WOrN4mjBa9dQUg%2FdWERRHkkpwnoxGoCtGY6jOzwuOlh7OHVhIfzmTtZoCftGDndLxPYkzHbuEkhaZ6yb%2BVCsD4Yn%2FHk4eNgaGKgolRgAvWzCcHeScYUx4PzSoJSoQLC0LC1M3t3PEickqBFDDvVrifh8zIrWRNqZ3NY2DDczpmn8Bu%2BxZGeBLkeZGanBn0h4CUMiQREQUj2tLIkhSW45HbFsrRdmL4Ky4ZU4802Oq%2FF%2F2F9uMEzDdQKJj%2BgSuZOSzvD%2BqzoDIdfLfOhyL964VHEhe%2BskiulGMzYJw3wk76x0fMH4EkmG%2F9SjkSxByML%2Bw7MAGOqUBIGS00p6x5wsXscl31q6RN2CrrPUfztHf1JcX%2BP2dXOrMEvTgIE2MaG7DJESYaGhyBUAw5lqQEJoQG4HZDsytSaWtKTCuoGJIn4vtpUiObaycrUJOiOq2h%2F6lG5ydc69ttCqaw0Q5mdS76TVRhBViHWOUOFFNQLLLF3iT4obbYdNsEYu%2FQyMk0iUGTFLJw6tOXPowH4GPsT1xBGtaUXha8xii1aDV&X-Amz-Signature=3a6f1b6ae7b4617aa54384f8bf94d20921f36feff0e67820e2285f747a70b710&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAS4HPR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzoJKeE8FKiWq2nr456sth4aJ9o6wYGYCK7TYksVsLbgIgf6O4O%2BDZJDJ%2BMVs5xoLJdrhFwuVtYCC58lzZy6JzrHIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJzZhTS3Ua9ZO%2Ba6dyrcA%2BpMU02AuGVFz1Us09LcqNrvPlka8nQ2tdzh5lj89ML%2BbOfYdwC5JdXOT33b1WdV3IPWSQNc0zRrbQ7dEa5Iu8Mc6cG7UxznWYFXTF6zREKchS8f5IA5ln239UyQVFWD%2B%2BomwHH%2BmiYdmBg%2Fd0LONMfHjjKFoeSKji1SHuvC8ZuI6MbAnbyp9hkZoI997TGAiUE0nWhH%2F83FVzXCnQCEhRcx3dy7%2B6j4wAkHLZN7kpmYVYxBNnt4OSVUYxFWKkX2lHOXFxzSaeDaPwgHSCSp4BEjxBFdcqrVUlh9eB5wAwBHXfdbGEgh5oVwfrtxZb5WOrN4mjBa9dQUg%2FdWERRHkkpwnoxGoCtGY6jOzwuOlh7OHVhIfzmTtZoCftGDndLxPYkzHbuEkhaZ6yb%2BVCsD4Yn%2FHk4eNgaGKgolRgAvWzCcHeScYUx4PzSoJSoQLC0LC1M3t3PEickqBFDDvVrifh8zIrWRNqZ3NY2DDczpmn8Bu%2BxZGeBLkeZGanBn0h4CUMiQREQUj2tLIkhSW45HbFsrRdmL4Ky4ZU4802Oq%2FF%2F2F9uMEzDdQKJj%2BgSuZOSzvD%2BqzoDIdfLfOhyL964VHEhe%2BskiulGMzYJw3wk76x0fMH4EkmG%2F9SjkSxByML%2Bw7MAGOqUBIGS00p6x5wsXscl31q6RN2CrrPUfztHf1JcX%2BP2dXOrMEvTgIE2MaG7DJESYaGhyBUAw5lqQEJoQG4HZDsytSaWtKTCuoGJIn4vtpUiObaycrUJOiOq2h%2F6lG5ydc69ttCqaw0Q5mdS76TVRhBViHWOUOFFNQLLLF3iT4obbYdNsEYu%2FQyMk0iUGTFLJw6tOXPowH4GPsT1xBGtaUXha8xii1aDV&X-Amz-Signature=f8083efbfeef241cc7980667c9f8674e26fe17ee70d61f64c918418ee2ac6a00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAS4HPR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzoJKeE8FKiWq2nr456sth4aJ9o6wYGYCK7TYksVsLbgIgf6O4O%2BDZJDJ%2BMVs5xoLJdrhFwuVtYCC58lzZy6JzrHIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJzZhTS3Ua9ZO%2Ba6dyrcA%2BpMU02AuGVFz1Us09LcqNrvPlka8nQ2tdzh5lj89ML%2BbOfYdwC5JdXOT33b1WdV3IPWSQNc0zRrbQ7dEa5Iu8Mc6cG7UxznWYFXTF6zREKchS8f5IA5ln239UyQVFWD%2B%2BomwHH%2BmiYdmBg%2Fd0LONMfHjjKFoeSKji1SHuvC8ZuI6MbAnbyp9hkZoI997TGAiUE0nWhH%2F83FVzXCnQCEhRcx3dy7%2B6j4wAkHLZN7kpmYVYxBNnt4OSVUYxFWKkX2lHOXFxzSaeDaPwgHSCSp4BEjxBFdcqrVUlh9eB5wAwBHXfdbGEgh5oVwfrtxZb5WOrN4mjBa9dQUg%2FdWERRHkkpwnoxGoCtGY6jOzwuOlh7OHVhIfzmTtZoCftGDndLxPYkzHbuEkhaZ6yb%2BVCsD4Yn%2FHk4eNgaGKgolRgAvWzCcHeScYUx4PzSoJSoQLC0LC1M3t3PEickqBFDDvVrifh8zIrWRNqZ3NY2DDczpmn8Bu%2BxZGeBLkeZGanBn0h4CUMiQREQUj2tLIkhSW45HbFsrRdmL4Ky4ZU4802Oq%2FF%2F2F9uMEzDdQKJj%2BgSuZOSzvD%2BqzoDIdfLfOhyL964VHEhe%2BskiulGMzYJw3wk76x0fMH4EkmG%2F9SjkSxByML%2Bw7MAGOqUBIGS00p6x5wsXscl31q6RN2CrrPUfztHf1JcX%2BP2dXOrMEvTgIE2MaG7DJESYaGhyBUAw5lqQEJoQG4HZDsytSaWtKTCuoGJIn4vtpUiObaycrUJOiOq2h%2F6lG5ydc69ttCqaw0Q5mdS76TVRhBViHWOUOFFNQLLLF3iT4obbYdNsEYu%2FQyMk0iUGTFLJw6tOXPowH4GPsT1xBGtaUXha8xii1aDV&X-Amz-Signature=d76d66264e6115fb777f505d108f8b9841a0eb51e4e71f0b1425f7a074a92821&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAS4HPR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzoJKeE8FKiWq2nr456sth4aJ9o6wYGYCK7TYksVsLbgIgf6O4O%2BDZJDJ%2BMVs5xoLJdrhFwuVtYCC58lzZy6JzrHIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJzZhTS3Ua9ZO%2Ba6dyrcA%2BpMU02AuGVFz1Us09LcqNrvPlka8nQ2tdzh5lj89ML%2BbOfYdwC5JdXOT33b1WdV3IPWSQNc0zRrbQ7dEa5Iu8Mc6cG7UxznWYFXTF6zREKchS8f5IA5ln239UyQVFWD%2B%2BomwHH%2BmiYdmBg%2Fd0LONMfHjjKFoeSKji1SHuvC8ZuI6MbAnbyp9hkZoI997TGAiUE0nWhH%2F83FVzXCnQCEhRcx3dy7%2B6j4wAkHLZN7kpmYVYxBNnt4OSVUYxFWKkX2lHOXFxzSaeDaPwgHSCSp4BEjxBFdcqrVUlh9eB5wAwBHXfdbGEgh5oVwfrtxZb5WOrN4mjBa9dQUg%2FdWERRHkkpwnoxGoCtGY6jOzwuOlh7OHVhIfzmTtZoCftGDndLxPYkzHbuEkhaZ6yb%2BVCsD4Yn%2FHk4eNgaGKgolRgAvWzCcHeScYUx4PzSoJSoQLC0LC1M3t3PEickqBFDDvVrifh8zIrWRNqZ3NY2DDczpmn8Bu%2BxZGeBLkeZGanBn0h4CUMiQREQUj2tLIkhSW45HbFsrRdmL4Ky4ZU4802Oq%2FF%2F2F9uMEzDdQKJj%2BgSuZOSzvD%2BqzoDIdfLfOhyL964VHEhe%2BskiulGMzYJw3wk76x0fMH4EkmG%2F9SjkSxByML%2Bw7MAGOqUBIGS00p6x5wsXscl31q6RN2CrrPUfztHf1JcX%2BP2dXOrMEvTgIE2MaG7DJESYaGhyBUAw5lqQEJoQG4HZDsytSaWtKTCuoGJIn4vtpUiObaycrUJOiOq2h%2F6lG5ydc69ttCqaw0Q5mdS76TVRhBViHWOUOFFNQLLLF3iT4obbYdNsEYu%2FQyMk0iUGTFLJw6tOXPowH4GPsT1xBGtaUXha8xii1aDV&X-Amz-Signature=74e18fb637b5169bf0660ac8a1ad5ecfbb255a38b5793ef0c9ddf986f2326547&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
