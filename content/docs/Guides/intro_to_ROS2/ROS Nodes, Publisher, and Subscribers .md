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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXAKWEWX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVmLwFahXrPrsNcndWHbmA8IHQnxeaGbVKsmDvz8qJ7gIgDr3XeifHEVBGx9ehSK4GvG9q8waAUqM9ZlafP3tPV9wq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJjqNQFfUA%2BfTZqDzircA0vAg8zpG898HoohdzozzUYVf1vXc5BQ43o279q8q3FY%2B%2FomoWgFYTKJrEYo1dhA9VE%2FrKx8S9qRsBs6dueD4twdlObRapTc7fu7zbbyRbx0JtutM8T9PVSEde7u29EYF9OxRBx%2FXkZsnP4fOTaOOv7blTPiH9cgO6alIVSoZL29NTydIx%2BA48aXZdCKLp7LxdnV%2F1ZBJEsNaTenZRuYmHo9ehVuIJmXomAjlUGvrVGAv2Qy%2F%2Bcpug5Yl3%2FS3bY8dpAUUVK54cp1UWxVImJDhgjnXusnwhDpFq%2FNNcG2M%2FDuf8YEAT%2B6NaQ62nKgLIRbzaXKrbe%2BxPnyE32sDm3eQrPmzG8UI44OH3eWecUy3EhrGSDfetW7HDB5Fh2RXMaO8seOE6yCWl7Skw6AAMz4UNcLncnWxKnw%2BHIQRjjrIIMlGeqVeReYA8QyU5JxlD%2FHsNtCOraCOnTIoSyHJQDbyrTJofPFB1hbxQjf25zDsIFRMWPUuwtGaGXYsGJERYWxdk6RVw6Dy3x8EQi7cdwNvdJAKJMtWFl6Zi08FtdvsZF%2FdRr2mra6Ev53ZzTHXjysX6yPKXoQaF1fDq%2FUJBzUZJbMDyqwxAdidUNbcAlNEpPpXtDXJLhAwRYzNwoNMNLdtMAGOqUBQR%2FmDRSVEOQP9roPt2GMi2KhUwN%2FMR5AhapgH5alVQfkYTIjbWMAkyt%2BDO4eqXXaMPqVuS1xbmUfElgse9U4wPMS5J%2BQIt4h9PzBCWPcoC1kAot63UWvql7yy%2BCPRNDm6uGDLNaHb%2BDvu2uEFkQnFnpHBM5ENeQFrvOOWRxc9KAhHRvk6EL9qRfv3kKtdTFNqUw8S5pU3%2Fhz0RinfETycJIvWKEv&X-Amz-Signature=525bd3366fc8b1073dd09f633031101ed58c25e23fa23c8f0d36b34d0089a23a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXAKWEWX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVmLwFahXrPrsNcndWHbmA8IHQnxeaGbVKsmDvz8qJ7gIgDr3XeifHEVBGx9ehSK4GvG9q8waAUqM9ZlafP3tPV9wq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJjqNQFfUA%2BfTZqDzircA0vAg8zpG898HoohdzozzUYVf1vXc5BQ43o279q8q3FY%2B%2FomoWgFYTKJrEYo1dhA9VE%2FrKx8S9qRsBs6dueD4twdlObRapTc7fu7zbbyRbx0JtutM8T9PVSEde7u29EYF9OxRBx%2FXkZsnP4fOTaOOv7blTPiH9cgO6alIVSoZL29NTydIx%2BA48aXZdCKLp7LxdnV%2F1ZBJEsNaTenZRuYmHo9ehVuIJmXomAjlUGvrVGAv2Qy%2F%2Bcpug5Yl3%2FS3bY8dpAUUVK54cp1UWxVImJDhgjnXusnwhDpFq%2FNNcG2M%2FDuf8YEAT%2B6NaQ62nKgLIRbzaXKrbe%2BxPnyE32sDm3eQrPmzG8UI44OH3eWecUy3EhrGSDfetW7HDB5Fh2RXMaO8seOE6yCWl7Skw6AAMz4UNcLncnWxKnw%2BHIQRjjrIIMlGeqVeReYA8QyU5JxlD%2FHsNtCOraCOnTIoSyHJQDbyrTJofPFB1hbxQjf25zDsIFRMWPUuwtGaGXYsGJERYWxdk6RVw6Dy3x8EQi7cdwNvdJAKJMtWFl6Zi08FtdvsZF%2FdRr2mra6Ev53ZzTHXjysX6yPKXoQaF1fDq%2FUJBzUZJbMDyqwxAdidUNbcAlNEpPpXtDXJLhAwRYzNwoNMNLdtMAGOqUBQR%2FmDRSVEOQP9roPt2GMi2KhUwN%2FMR5AhapgH5alVQfkYTIjbWMAkyt%2BDO4eqXXaMPqVuS1xbmUfElgse9U4wPMS5J%2BQIt4h9PzBCWPcoC1kAot63UWvql7yy%2BCPRNDm6uGDLNaHb%2BDvu2uEFkQnFnpHBM5ENeQFrvOOWRxc9KAhHRvk6EL9qRfv3kKtdTFNqUw8S5pU3%2Fhz0RinfETycJIvWKEv&X-Amz-Signature=993c86e8e30f7badfa7b2d512e1e2a457a9c99cc58118b0c426641f8aa065df9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXAKWEWX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVmLwFahXrPrsNcndWHbmA8IHQnxeaGbVKsmDvz8qJ7gIgDr3XeifHEVBGx9ehSK4GvG9q8waAUqM9ZlafP3tPV9wq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJjqNQFfUA%2BfTZqDzircA0vAg8zpG898HoohdzozzUYVf1vXc5BQ43o279q8q3FY%2B%2FomoWgFYTKJrEYo1dhA9VE%2FrKx8S9qRsBs6dueD4twdlObRapTc7fu7zbbyRbx0JtutM8T9PVSEde7u29EYF9OxRBx%2FXkZsnP4fOTaOOv7blTPiH9cgO6alIVSoZL29NTydIx%2BA48aXZdCKLp7LxdnV%2F1ZBJEsNaTenZRuYmHo9ehVuIJmXomAjlUGvrVGAv2Qy%2F%2Bcpug5Yl3%2FS3bY8dpAUUVK54cp1UWxVImJDhgjnXusnwhDpFq%2FNNcG2M%2FDuf8YEAT%2B6NaQ62nKgLIRbzaXKrbe%2BxPnyE32sDm3eQrPmzG8UI44OH3eWecUy3EhrGSDfetW7HDB5Fh2RXMaO8seOE6yCWl7Skw6AAMz4UNcLncnWxKnw%2BHIQRjjrIIMlGeqVeReYA8QyU5JxlD%2FHsNtCOraCOnTIoSyHJQDbyrTJofPFB1hbxQjf25zDsIFRMWPUuwtGaGXYsGJERYWxdk6RVw6Dy3x8EQi7cdwNvdJAKJMtWFl6Zi08FtdvsZF%2FdRr2mra6Ev53ZzTHXjysX6yPKXoQaF1fDq%2FUJBzUZJbMDyqwxAdidUNbcAlNEpPpXtDXJLhAwRYzNwoNMNLdtMAGOqUBQR%2FmDRSVEOQP9roPt2GMi2KhUwN%2FMR5AhapgH5alVQfkYTIjbWMAkyt%2BDO4eqXXaMPqVuS1xbmUfElgse9U4wPMS5J%2BQIt4h9PzBCWPcoC1kAot63UWvql7yy%2BCPRNDm6uGDLNaHb%2BDvu2uEFkQnFnpHBM5ENeQFrvOOWRxc9KAhHRvk6EL9qRfv3kKtdTFNqUw8S5pU3%2Fhz0RinfETycJIvWKEv&X-Amz-Signature=158064193774c3a1f1f0942e599457c68dfad6b84f70b42b4322aad1ff5e6d07&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXAKWEWX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVmLwFahXrPrsNcndWHbmA8IHQnxeaGbVKsmDvz8qJ7gIgDr3XeifHEVBGx9ehSK4GvG9q8waAUqM9ZlafP3tPV9wq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJjqNQFfUA%2BfTZqDzircA0vAg8zpG898HoohdzozzUYVf1vXc5BQ43o279q8q3FY%2B%2FomoWgFYTKJrEYo1dhA9VE%2FrKx8S9qRsBs6dueD4twdlObRapTc7fu7zbbyRbx0JtutM8T9PVSEde7u29EYF9OxRBx%2FXkZsnP4fOTaOOv7blTPiH9cgO6alIVSoZL29NTydIx%2BA48aXZdCKLp7LxdnV%2F1ZBJEsNaTenZRuYmHo9ehVuIJmXomAjlUGvrVGAv2Qy%2F%2Bcpug5Yl3%2FS3bY8dpAUUVK54cp1UWxVImJDhgjnXusnwhDpFq%2FNNcG2M%2FDuf8YEAT%2B6NaQ62nKgLIRbzaXKrbe%2BxPnyE32sDm3eQrPmzG8UI44OH3eWecUy3EhrGSDfetW7HDB5Fh2RXMaO8seOE6yCWl7Skw6AAMz4UNcLncnWxKnw%2BHIQRjjrIIMlGeqVeReYA8QyU5JxlD%2FHsNtCOraCOnTIoSyHJQDbyrTJofPFB1hbxQjf25zDsIFRMWPUuwtGaGXYsGJERYWxdk6RVw6Dy3x8EQi7cdwNvdJAKJMtWFl6Zi08FtdvsZF%2FdRr2mra6Ev53ZzTHXjysX6yPKXoQaF1fDq%2FUJBzUZJbMDyqwxAdidUNbcAlNEpPpXtDXJLhAwRYzNwoNMNLdtMAGOqUBQR%2FmDRSVEOQP9roPt2GMi2KhUwN%2FMR5AhapgH5alVQfkYTIjbWMAkyt%2BDO4eqXXaMPqVuS1xbmUfElgse9U4wPMS5J%2BQIt4h9PzBCWPcoC1kAot63UWvql7yy%2BCPRNDm6uGDLNaHb%2BDvu2uEFkQnFnpHBM5ENeQFrvOOWRxc9KAhHRvk6EL9qRfv3kKtdTFNqUw8S5pU3%2Fhz0RinfETycJIvWKEv&X-Amz-Signature=0238f53850e7e6a7d1efc1cb4640300530550bf044f521e1b945455c0423d9fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXAKWEWX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVmLwFahXrPrsNcndWHbmA8IHQnxeaGbVKsmDvz8qJ7gIgDr3XeifHEVBGx9ehSK4GvG9q8waAUqM9ZlafP3tPV9wq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJjqNQFfUA%2BfTZqDzircA0vAg8zpG898HoohdzozzUYVf1vXc5BQ43o279q8q3FY%2B%2FomoWgFYTKJrEYo1dhA9VE%2FrKx8S9qRsBs6dueD4twdlObRapTc7fu7zbbyRbx0JtutM8T9PVSEde7u29EYF9OxRBx%2FXkZsnP4fOTaOOv7blTPiH9cgO6alIVSoZL29NTydIx%2BA48aXZdCKLp7LxdnV%2F1ZBJEsNaTenZRuYmHo9ehVuIJmXomAjlUGvrVGAv2Qy%2F%2Bcpug5Yl3%2FS3bY8dpAUUVK54cp1UWxVImJDhgjnXusnwhDpFq%2FNNcG2M%2FDuf8YEAT%2B6NaQ62nKgLIRbzaXKrbe%2BxPnyE32sDm3eQrPmzG8UI44OH3eWecUy3EhrGSDfetW7HDB5Fh2RXMaO8seOE6yCWl7Skw6AAMz4UNcLncnWxKnw%2BHIQRjjrIIMlGeqVeReYA8QyU5JxlD%2FHsNtCOraCOnTIoSyHJQDbyrTJofPFB1hbxQjf25zDsIFRMWPUuwtGaGXYsGJERYWxdk6RVw6Dy3x8EQi7cdwNvdJAKJMtWFl6Zi08FtdvsZF%2FdRr2mra6Ev53ZzTHXjysX6yPKXoQaF1fDq%2FUJBzUZJbMDyqwxAdidUNbcAlNEpPpXtDXJLhAwRYzNwoNMNLdtMAGOqUBQR%2FmDRSVEOQP9roPt2GMi2KhUwN%2FMR5AhapgH5alVQfkYTIjbWMAkyt%2BDO4eqXXaMPqVuS1xbmUfElgse9U4wPMS5J%2BQIt4h9PzBCWPcoC1kAot63UWvql7yy%2BCPRNDm6uGDLNaHb%2BDvu2uEFkQnFnpHBM5ENeQFrvOOWRxc9KAhHRvk6EL9qRfv3kKtdTFNqUw8S5pU3%2Fhz0RinfETycJIvWKEv&X-Amz-Signature=02113a5db5b3abc5b1680f56d3c50eae871f52ab5dc750598e1600b9c8f90d70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXAKWEWX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVmLwFahXrPrsNcndWHbmA8IHQnxeaGbVKsmDvz8qJ7gIgDr3XeifHEVBGx9ehSK4GvG9q8waAUqM9ZlafP3tPV9wq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJjqNQFfUA%2BfTZqDzircA0vAg8zpG898HoohdzozzUYVf1vXc5BQ43o279q8q3FY%2B%2FomoWgFYTKJrEYo1dhA9VE%2FrKx8S9qRsBs6dueD4twdlObRapTc7fu7zbbyRbx0JtutM8T9PVSEde7u29EYF9OxRBx%2FXkZsnP4fOTaOOv7blTPiH9cgO6alIVSoZL29NTydIx%2BA48aXZdCKLp7LxdnV%2F1ZBJEsNaTenZRuYmHo9ehVuIJmXomAjlUGvrVGAv2Qy%2F%2Bcpug5Yl3%2FS3bY8dpAUUVK54cp1UWxVImJDhgjnXusnwhDpFq%2FNNcG2M%2FDuf8YEAT%2B6NaQ62nKgLIRbzaXKrbe%2BxPnyE32sDm3eQrPmzG8UI44OH3eWecUy3EhrGSDfetW7HDB5Fh2RXMaO8seOE6yCWl7Skw6AAMz4UNcLncnWxKnw%2BHIQRjjrIIMlGeqVeReYA8QyU5JxlD%2FHsNtCOraCOnTIoSyHJQDbyrTJofPFB1hbxQjf25zDsIFRMWPUuwtGaGXYsGJERYWxdk6RVw6Dy3x8EQi7cdwNvdJAKJMtWFl6Zi08FtdvsZF%2FdRr2mra6Ev53ZzTHXjysX6yPKXoQaF1fDq%2FUJBzUZJbMDyqwxAdidUNbcAlNEpPpXtDXJLhAwRYzNwoNMNLdtMAGOqUBQR%2FmDRSVEOQP9roPt2GMi2KhUwN%2FMR5AhapgH5alVQfkYTIjbWMAkyt%2BDO4eqXXaMPqVuS1xbmUfElgse9U4wPMS5J%2BQIt4h9PzBCWPcoC1kAot63UWvql7yy%2BCPRNDm6uGDLNaHb%2BDvu2uEFkQnFnpHBM5ENeQFrvOOWRxc9KAhHRvk6EL9qRfv3kKtdTFNqUw8S5pU3%2Fhz0RinfETycJIvWKEv&X-Amz-Signature=e40c3d728cf92de10829893e8fa6b70fa15445216bf09d7e1017c3b1ac23ef74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXAKWEWX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVmLwFahXrPrsNcndWHbmA8IHQnxeaGbVKsmDvz8qJ7gIgDr3XeifHEVBGx9ehSK4GvG9q8waAUqM9ZlafP3tPV9wq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJjqNQFfUA%2BfTZqDzircA0vAg8zpG898HoohdzozzUYVf1vXc5BQ43o279q8q3FY%2B%2FomoWgFYTKJrEYo1dhA9VE%2FrKx8S9qRsBs6dueD4twdlObRapTc7fu7zbbyRbx0JtutM8T9PVSEde7u29EYF9OxRBx%2FXkZsnP4fOTaOOv7blTPiH9cgO6alIVSoZL29NTydIx%2BA48aXZdCKLp7LxdnV%2F1ZBJEsNaTenZRuYmHo9ehVuIJmXomAjlUGvrVGAv2Qy%2F%2Bcpug5Yl3%2FS3bY8dpAUUVK54cp1UWxVImJDhgjnXusnwhDpFq%2FNNcG2M%2FDuf8YEAT%2B6NaQ62nKgLIRbzaXKrbe%2BxPnyE32sDm3eQrPmzG8UI44OH3eWecUy3EhrGSDfetW7HDB5Fh2RXMaO8seOE6yCWl7Skw6AAMz4UNcLncnWxKnw%2BHIQRjjrIIMlGeqVeReYA8QyU5JxlD%2FHsNtCOraCOnTIoSyHJQDbyrTJofPFB1hbxQjf25zDsIFRMWPUuwtGaGXYsGJERYWxdk6RVw6Dy3x8EQi7cdwNvdJAKJMtWFl6Zi08FtdvsZF%2FdRr2mra6Ev53ZzTHXjysX6yPKXoQaF1fDq%2FUJBzUZJbMDyqwxAdidUNbcAlNEpPpXtDXJLhAwRYzNwoNMNLdtMAGOqUBQR%2FmDRSVEOQP9roPt2GMi2KhUwN%2FMR5AhapgH5alVQfkYTIjbWMAkyt%2BDO4eqXXaMPqVuS1xbmUfElgse9U4wPMS5J%2BQIt4h9PzBCWPcoC1kAot63UWvql7yy%2BCPRNDm6uGDLNaHb%2BDvu2uEFkQnFnpHBM5ENeQFrvOOWRxc9KAhHRvk6EL9qRfv3kKtdTFNqUw8S5pU3%2Fhz0RinfETycJIvWKEv&X-Amz-Signature=ed581286a008eddce006c162973cb38a8be2bd34ac78679ffd23fc8e45e447ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXAKWEWX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVmLwFahXrPrsNcndWHbmA8IHQnxeaGbVKsmDvz8qJ7gIgDr3XeifHEVBGx9ehSK4GvG9q8waAUqM9ZlafP3tPV9wq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJjqNQFfUA%2BfTZqDzircA0vAg8zpG898HoohdzozzUYVf1vXc5BQ43o279q8q3FY%2B%2FomoWgFYTKJrEYo1dhA9VE%2FrKx8S9qRsBs6dueD4twdlObRapTc7fu7zbbyRbx0JtutM8T9PVSEde7u29EYF9OxRBx%2FXkZsnP4fOTaOOv7blTPiH9cgO6alIVSoZL29NTydIx%2BA48aXZdCKLp7LxdnV%2F1ZBJEsNaTenZRuYmHo9ehVuIJmXomAjlUGvrVGAv2Qy%2F%2Bcpug5Yl3%2FS3bY8dpAUUVK54cp1UWxVImJDhgjnXusnwhDpFq%2FNNcG2M%2FDuf8YEAT%2B6NaQ62nKgLIRbzaXKrbe%2BxPnyE32sDm3eQrPmzG8UI44OH3eWecUy3EhrGSDfetW7HDB5Fh2RXMaO8seOE6yCWl7Skw6AAMz4UNcLncnWxKnw%2BHIQRjjrIIMlGeqVeReYA8QyU5JxlD%2FHsNtCOraCOnTIoSyHJQDbyrTJofPFB1hbxQjf25zDsIFRMWPUuwtGaGXYsGJERYWxdk6RVw6Dy3x8EQi7cdwNvdJAKJMtWFl6Zi08FtdvsZF%2FdRr2mra6Ev53ZzTHXjysX6yPKXoQaF1fDq%2FUJBzUZJbMDyqwxAdidUNbcAlNEpPpXtDXJLhAwRYzNwoNMNLdtMAGOqUBQR%2FmDRSVEOQP9roPt2GMi2KhUwN%2FMR5AhapgH5alVQfkYTIjbWMAkyt%2BDO4eqXXaMPqVuS1xbmUfElgse9U4wPMS5J%2BQIt4h9PzBCWPcoC1kAot63UWvql7yy%2BCPRNDm6uGDLNaHb%2BDvu2uEFkQnFnpHBM5ENeQFrvOOWRxc9KAhHRvk6EL9qRfv3kKtdTFNqUw8S5pU3%2Fhz0RinfETycJIvWKEv&X-Amz-Signature=80896722c9a906a8bf61b2da0f9562cf633c9efcb149f96da902beaf2bff86f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
