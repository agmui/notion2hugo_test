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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQF47Q5Y%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDAQO2pn7UbL1Cr5wJldS0DpiaQCxvMT0VwRHSFaSi8BwIhAJ0ZY7U3H9XsbYa8N0Fb0%2BZdcfgYVPSSe85deTnNEJQxKv8DCCcQABoMNjM3NDIzMTgzODA1IgxzpvB%2BX9xerjMFnsMq3AOuFfvEBF2F1Hdr9Bf3jVcWwT9Q4WFAvQL8Ckkt54a0U0P7g4X2LX1Kzs7fHmJPsgN6piXd4oX8v5pYMsEJPsuRzaSaiY4FAsYLuaFsfakfrRh9p5lzmeTxCKu0tiM5uTUL%2FhusQlGhGF7Z4bk2Y%2F%2FdDK1axyJGomz7XYJgZnXH%2Ffl3FnNRGrtDIENbz3hGeQ0fGY5LpV9VgOPzWWSORo%2F83LJHOI1sUG3F67KuE2EyQLwnD%2B8YFE1Tkb%2FcJ1P3AfwyadOwCsbc97%2BMkxfTPxJQcOYJtvpn1C621K66IX%2BAZbEmLyNEwZ5wYC%2BHRfiVKM8C8BzZjRPqD%2Fr7l11S9X7ms%2Boi38pM9EXUzdUEVnEDONQFyAbn9MsNbDcrDNkX6Gr3%2BGBqc5XkZRCb%2B9awzPwe%2B4dsWpdYkRNZzVutEelDCGk8qcaiKUyIvFD8hbx8M%2FW8Nlad7cZpX1UtLsouAbXRRQT1j8UKS4eEmWud8V714LNohNo8ooUv%2FDhh8eboJJUJ51IafQSN0JZXMer1xUW1ctS756v51Ag9geohhhdxC4HqfKan0CMpVj%2BUEs5w%2B8ZfY%2FZeudwp46DD4nQh7D1WZA4Kh9Qh2Emet94Hjv%2FhoJGxNzNUedsjCbMhnzDImuHABjqkAaqvrmmayTew6MXlthsYIMfz8rRMDRmbkvW1auOhV2UYq78Kyz648ZMceV4Phh6htbU1wQ13659CX3HRDlevTHjnSzxHZMkMK5ddh%2BUjRThY9ycZt%2FuUae8v9WBbdE4OQUB47em1j8stz%2Bpm%2FiP82NNN9ks752%2F1BxqjuUj%2Fc1V4zMqIR4apONpgJkRw9gwXwGggFVXzwsE79zfDRHXwsIecB9fc&X-Amz-Signature=cf15d510b4287ac8d31754b579b1f7f95a244443603a70cfc1197ce112cc3520&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQF47Q5Y%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDAQO2pn7UbL1Cr5wJldS0DpiaQCxvMT0VwRHSFaSi8BwIhAJ0ZY7U3H9XsbYa8N0Fb0%2BZdcfgYVPSSe85deTnNEJQxKv8DCCcQABoMNjM3NDIzMTgzODA1IgxzpvB%2BX9xerjMFnsMq3AOuFfvEBF2F1Hdr9Bf3jVcWwT9Q4WFAvQL8Ckkt54a0U0P7g4X2LX1Kzs7fHmJPsgN6piXd4oX8v5pYMsEJPsuRzaSaiY4FAsYLuaFsfakfrRh9p5lzmeTxCKu0tiM5uTUL%2FhusQlGhGF7Z4bk2Y%2F%2FdDK1axyJGomz7XYJgZnXH%2Ffl3FnNRGrtDIENbz3hGeQ0fGY5LpV9VgOPzWWSORo%2F83LJHOI1sUG3F67KuE2EyQLwnD%2B8YFE1Tkb%2FcJ1P3AfwyadOwCsbc97%2BMkxfTPxJQcOYJtvpn1C621K66IX%2BAZbEmLyNEwZ5wYC%2BHRfiVKM8C8BzZjRPqD%2Fr7l11S9X7ms%2Boi38pM9EXUzdUEVnEDONQFyAbn9MsNbDcrDNkX6Gr3%2BGBqc5XkZRCb%2B9awzPwe%2B4dsWpdYkRNZzVutEelDCGk8qcaiKUyIvFD8hbx8M%2FW8Nlad7cZpX1UtLsouAbXRRQT1j8UKS4eEmWud8V714LNohNo8ooUv%2FDhh8eboJJUJ51IafQSN0JZXMer1xUW1ctS756v51Ag9geohhhdxC4HqfKan0CMpVj%2BUEs5w%2B8ZfY%2FZeudwp46DD4nQh7D1WZA4Kh9Qh2Emet94Hjv%2FhoJGxNzNUedsjCbMhnzDImuHABjqkAaqvrmmayTew6MXlthsYIMfz8rRMDRmbkvW1auOhV2UYq78Kyz648ZMceV4Phh6htbU1wQ13659CX3HRDlevTHjnSzxHZMkMK5ddh%2BUjRThY9ycZt%2FuUae8v9WBbdE4OQUB47em1j8stz%2Bpm%2FiP82NNN9ks752%2F1BxqjuUj%2Fc1V4zMqIR4apONpgJkRw9gwXwGggFVXzwsE79zfDRHXwsIecB9fc&X-Amz-Signature=2fbac5befdc4a5d984e677c4291f6fb1f510147a2914463ff30e1d22e94266b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQF47Q5Y%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDAQO2pn7UbL1Cr5wJldS0DpiaQCxvMT0VwRHSFaSi8BwIhAJ0ZY7U3H9XsbYa8N0Fb0%2BZdcfgYVPSSe85deTnNEJQxKv8DCCcQABoMNjM3NDIzMTgzODA1IgxzpvB%2BX9xerjMFnsMq3AOuFfvEBF2F1Hdr9Bf3jVcWwT9Q4WFAvQL8Ckkt54a0U0P7g4X2LX1Kzs7fHmJPsgN6piXd4oX8v5pYMsEJPsuRzaSaiY4FAsYLuaFsfakfrRh9p5lzmeTxCKu0tiM5uTUL%2FhusQlGhGF7Z4bk2Y%2F%2FdDK1axyJGomz7XYJgZnXH%2Ffl3FnNRGrtDIENbz3hGeQ0fGY5LpV9VgOPzWWSORo%2F83LJHOI1sUG3F67KuE2EyQLwnD%2B8YFE1Tkb%2FcJ1P3AfwyadOwCsbc97%2BMkxfTPxJQcOYJtvpn1C621K66IX%2BAZbEmLyNEwZ5wYC%2BHRfiVKM8C8BzZjRPqD%2Fr7l11S9X7ms%2Boi38pM9EXUzdUEVnEDONQFyAbn9MsNbDcrDNkX6Gr3%2BGBqc5XkZRCb%2B9awzPwe%2B4dsWpdYkRNZzVutEelDCGk8qcaiKUyIvFD8hbx8M%2FW8Nlad7cZpX1UtLsouAbXRRQT1j8UKS4eEmWud8V714LNohNo8ooUv%2FDhh8eboJJUJ51IafQSN0JZXMer1xUW1ctS756v51Ag9geohhhdxC4HqfKan0CMpVj%2BUEs5w%2B8ZfY%2FZeudwp46DD4nQh7D1WZA4Kh9Qh2Emet94Hjv%2FhoJGxNzNUedsjCbMhnzDImuHABjqkAaqvrmmayTew6MXlthsYIMfz8rRMDRmbkvW1auOhV2UYq78Kyz648ZMceV4Phh6htbU1wQ13659CX3HRDlevTHjnSzxHZMkMK5ddh%2BUjRThY9ycZt%2FuUae8v9WBbdE4OQUB47em1j8stz%2Bpm%2FiP82NNN9ks752%2F1BxqjuUj%2Fc1V4zMqIR4apONpgJkRw9gwXwGggFVXzwsE79zfDRHXwsIecB9fc&X-Amz-Signature=b1273d49b010341de9a9737e8b0d931ef9a08ca02637737a73850606d64d028c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQF47Q5Y%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDAQO2pn7UbL1Cr5wJldS0DpiaQCxvMT0VwRHSFaSi8BwIhAJ0ZY7U3H9XsbYa8N0Fb0%2BZdcfgYVPSSe85deTnNEJQxKv8DCCcQABoMNjM3NDIzMTgzODA1IgxzpvB%2BX9xerjMFnsMq3AOuFfvEBF2F1Hdr9Bf3jVcWwT9Q4WFAvQL8Ckkt54a0U0P7g4X2LX1Kzs7fHmJPsgN6piXd4oX8v5pYMsEJPsuRzaSaiY4FAsYLuaFsfakfrRh9p5lzmeTxCKu0tiM5uTUL%2FhusQlGhGF7Z4bk2Y%2F%2FdDK1axyJGomz7XYJgZnXH%2Ffl3FnNRGrtDIENbz3hGeQ0fGY5LpV9VgOPzWWSORo%2F83LJHOI1sUG3F67KuE2EyQLwnD%2B8YFE1Tkb%2FcJ1P3AfwyadOwCsbc97%2BMkxfTPxJQcOYJtvpn1C621K66IX%2BAZbEmLyNEwZ5wYC%2BHRfiVKM8C8BzZjRPqD%2Fr7l11S9X7ms%2Boi38pM9EXUzdUEVnEDONQFyAbn9MsNbDcrDNkX6Gr3%2BGBqc5XkZRCb%2B9awzPwe%2B4dsWpdYkRNZzVutEelDCGk8qcaiKUyIvFD8hbx8M%2FW8Nlad7cZpX1UtLsouAbXRRQT1j8UKS4eEmWud8V714LNohNo8ooUv%2FDhh8eboJJUJ51IafQSN0JZXMer1xUW1ctS756v51Ag9geohhhdxC4HqfKan0CMpVj%2BUEs5w%2B8ZfY%2FZeudwp46DD4nQh7D1WZA4Kh9Qh2Emet94Hjv%2FhoJGxNzNUedsjCbMhnzDImuHABjqkAaqvrmmayTew6MXlthsYIMfz8rRMDRmbkvW1auOhV2UYq78Kyz648ZMceV4Phh6htbU1wQ13659CX3HRDlevTHjnSzxHZMkMK5ddh%2BUjRThY9ycZt%2FuUae8v9WBbdE4OQUB47em1j8stz%2Bpm%2FiP82NNN9ks752%2F1BxqjuUj%2Fc1V4zMqIR4apONpgJkRw9gwXwGggFVXzwsE79zfDRHXwsIecB9fc&X-Amz-Signature=41cff85df33e62e727406f5decc8a3b0b15a5547250d8cde014a3cbb67b8411c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQF47Q5Y%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDAQO2pn7UbL1Cr5wJldS0DpiaQCxvMT0VwRHSFaSi8BwIhAJ0ZY7U3H9XsbYa8N0Fb0%2BZdcfgYVPSSe85deTnNEJQxKv8DCCcQABoMNjM3NDIzMTgzODA1IgxzpvB%2BX9xerjMFnsMq3AOuFfvEBF2F1Hdr9Bf3jVcWwT9Q4WFAvQL8Ckkt54a0U0P7g4X2LX1Kzs7fHmJPsgN6piXd4oX8v5pYMsEJPsuRzaSaiY4FAsYLuaFsfakfrRh9p5lzmeTxCKu0tiM5uTUL%2FhusQlGhGF7Z4bk2Y%2F%2FdDK1axyJGomz7XYJgZnXH%2Ffl3FnNRGrtDIENbz3hGeQ0fGY5LpV9VgOPzWWSORo%2F83LJHOI1sUG3F67KuE2EyQLwnD%2B8YFE1Tkb%2FcJ1P3AfwyadOwCsbc97%2BMkxfTPxJQcOYJtvpn1C621K66IX%2BAZbEmLyNEwZ5wYC%2BHRfiVKM8C8BzZjRPqD%2Fr7l11S9X7ms%2Boi38pM9EXUzdUEVnEDONQFyAbn9MsNbDcrDNkX6Gr3%2BGBqc5XkZRCb%2B9awzPwe%2B4dsWpdYkRNZzVutEelDCGk8qcaiKUyIvFD8hbx8M%2FW8Nlad7cZpX1UtLsouAbXRRQT1j8UKS4eEmWud8V714LNohNo8ooUv%2FDhh8eboJJUJ51IafQSN0JZXMer1xUW1ctS756v51Ag9geohhhdxC4HqfKan0CMpVj%2BUEs5w%2B8ZfY%2FZeudwp46DD4nQh7D1WZA4Kh9Qh2Emet94Hjv%2FhoJGxNzNUedsjCbMhnzDImuHABjqkAaqvrmmayTew6MXlthsYIMfz8rRMDRmbkvW1auOhV2UYq78Kyz648ZMceV4Phh6htbU1wQ13659CX3HRDlevTHjnSzxHZMkMK5ddh%2BUjRThY9ycZt%2FuUae8v9WBbdE4OQUB47em1j8stz%2Bpm%2FiP82NNN9ks752%2F1BxqjuUj%2Fc1V4zMqIR4apONpgJkRw9gwXwGggFVXzwsE79zfDRHXwsIecB9fc&X-Amz-Signature=e6069efa44a3be4ba184bd38f65f1dd621991bb516634925f26179788ca50c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQF47Q5Y%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDAQO2pn7UbL1Cr5wJldS0DpiaQCxvMT0VwRHSFaSi8BwIhAJ0ZY7U3H9XsbYa8N0Fb0%2BZdcfgYVPSSe85deTnNEJQxKv8DCCcQABoMNjM3NDIzMTgzODA1IgxzpvB%2BX9xerjMFnsMq3AOuFfvEBF2F1Hdr9Bf3jVcWwT9Q4WFAvQL8Ckkt54a0U0P7g4X2LX1Kzs7fHmJPsgN6piXd4oX8v5pYMsEJPsuRzaSaiY4FAsYLuaFsfakfrRh9p5lzmeTxCKu0tiM5uTUL%2FhusQlGhGF7Z4bk2Y%2F%2FdDK1axyJGomz7XYJgZnXH%2Ffl3FnNRGrtDIENbz3hGeQ0fGY5LpV9VgOPzWWSORo%2F83LJHOI1sUG3F67KuE2EyQLwnD%2B8YFE1Tkb%2FcJ1P3AfwyadOwCsbc97%2BMkxfTPxJQcOYJtvpn1C621K66IX%2BAZbEmLyNEwZ5wYC%2BHRfiVKM8C8BzZjRPqD%2Fr7l11S9X7ms%2Boi38pM9EXUzdUEVnEDONQFyAbn9MsNbDcrDNkX6Gr3%2BGBqc5XkZRCb%2B9awzPwe%2B4dsWpdYkRNZzVutEelDCGk8qcaiKUyIvFD8hbx8M%2FW8Nlad7cZpX1UtLsouAbXRRQT1j8UKS4eEmWud8V714LNohNo8ooUv%2FDhh8eboJJUJ51IafQSN0JZXMer1xUW1ctS756v51Ag9geohhhdxC4HqfKan0CMpVj%2BUEs5w%2B8ZfY%2FZeudwp46DD4nQh7D1WZA4Kh9Qh2Emet94Hjv%2FhoJGxNzNUedsjCbMhnzDImuHABjqkAaqvrmmayTew6MXlthsYIMfz8rRMDRmbkvW1auOhV2UYq78Kyz648ZMceV4Phh6htbU1wQ13659CX3HRDlevTHjnSzxHZMkMK5ddh%2BUjRThY9ycZt%2FuUae8v9WBbdE4OQUB47em1j8stz%2Bpm%2FiP82NNN9ks752%2F1BxqjuUj%2Fc1V4zMqIR4apONpgJkRw9gwXwGggFVXzwsE79zfDRHXwsIecB9fc&X-Amz-Signature=498309af5702252dc6b9a4ff6cc8b98b4a97c2ee31078484505a07989e97462a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQF47Q5Y%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDAQO2pn7UbL1Cr5wJldS0DpiaQCxvMT0VwRHSFaSi8BwIhAJ0ZY7U3H9XsbYa8N0Fb0%2BZdcfgYVPSSe85deTnNEJQxKv8DCCcQABoMNjM3NDIzMTgzODA1IgxzpvB%2BX9xerjMFnsMq3AOuFfvEBF2F1Hdr9Bf3jVcWwT9Q4WFAvQL8Ckkt54a0U0P7g4X2LX1Kzs7fHmJPsgN6piXd4oX8v5pYMsEJPsuRzaSaiY4FAsYLuaFsfakfrRh9p5lzmeTxCKu0tiM5uTUL%2FhusQlGhGF7Z4bk2Y%2F%2FdDK1axyJGomz7XYJgZnXH%2Ffl3FnNRGrtDIENbz3hGeQ0fGY5LpV9VgOPzWWSORo%2F83LJHOI1sUG3F67KuE2EyQLwnD%2B8YFE1Tkb%2FcJ1P3AfwyadOwCsbc97%2BMkxfTPxJQcOYJtvpn1C621K66IX%2BAZbEmLyNEwZ5wYC%2BHRfiVKM8C8BzZjRPqD%2Fr7l11S9X7ms%2Boi38pM9EXUzdUEVnEDONQFyAbn9MsNbDcrDNkX6Gr3%2BGBqc5XkZRCb%2B9awzPwe%2B4dsWpdYkRNZzVutEelDCGk8qcaiKUyIvFD8hbx8M%2FW8Nlad7cZpX1UtLsouAbXRRQT1j8UKS4eEmWud8V714LNohNo8ooUv%2FDhh8eboJJUJ51IafQSN0JZXMer1xUW1ctS756v51Ag9geohhhdxC4HqfKan0CMpVj%2BUEs5w%2B8ZfY%2FZeudwp46DD4nQh7D1WZA4Kh9Qh2Emet94Hjv%2FhoJGxNzNUedsjCbMhnzDImuHABjqkAaqvrmmayTew6MXlthsYIMfz8rRMDRmbkvW1auOhV2UYq78Kyz648ZMceV4Phh6htbU1wQ13659CX3HRDlevTHjnSzxHZMkMK5ddh%2BUjRThY9ycZt%2FuUae8v9WBbdE4OQUB47em1j8stz%2Bpm%2FiP82NNN9ks752%2F1BxqjuUj%2Fc1V4zMqIR4apONpgJkRw9gwXwGggFVXzwsE79zfDRHXwsIecB9fc&X-Amz-Signature=e9f6275bdd1547d8c5b59d98cc825fa5abd9a33cf98a478978dd7bdced7b62d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQF47Q5Y%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDAQO2pn7UbL1Cr5wJldS0DpiaQCxvMT0VwRHSFaSi8BwIhAJ0ZY7U3H9XsbYa8N0Fb0%2BZdcfgYVPSSe85deTnNEJQxKv8DCCcQABoMNjM3NDIzMTgzODA1IgxzpvB%2BX9xerjMFnsMq3AOuFfvEBF2F1Hdr9Bf3jVcWwT9Q4WFAvQL8Ckkt54a0U0P7g4X2LX1Kzs7fHmJPsgN6piXd4oX8v5pYMsEJPsuRzaSaiY4FAsYLuaFsfakfrRh9p5lzmeTxCKu0tiM5uTUL%2FhusQlGhGF7Z4bk2Y%2F%2FdDK1axyJGomz7XYJgZnXH%2Ffl3FnNRGrtDIENbz3hGeQ0fGY5LpV9VgOPzWWSORo%2F83LJHOI1sUG3F67KuE2EyQLwnD%2B8YFE1Tkb%2FcJ1P3AfwyadOwCsbc97%2BMkxfTPxJQcOYJtvpn1C621K66IX%2BAZbEmLyNEwZ5wYC%2BHRfiVKM8C8BzZjRPqD%2Fr7l11S9X7ms%2Boi38pM9EXUzdUEVnEDONQFyAbn9MsNbDcrDNkX6Gr3%2BGBqc5XkZRCb%2B9awzPwe%2B4dsWpdYkRNZzVutEelDCGk8qcaiKUyIvFD8hbx8M%2FW8Nlad7cZpX1UtLsouAbXRRQT1j8UKS4eEmWud8V714LNohNo8ooUv%2FDhh8eboJJUJ51IafQSN0JZXMer1xUW1ctS756v51Ag9geohhhdxC4HqfKan0CMpVj%2BUEs5w%2B8ZfY%2FZeudwp46DD4nQh7D1WZA4Kh9Qh2Emet94Hjv%2FhoJGxNzNUedsjCbMhnzDImuHABjqkAaqvrmmayTew6MXlthsYIMfz8rRMDRmbkvW1auOhV2UYq78Kyz648ZMceV4Phh6htbU1wQ13659CX3HRDlevTHjnSzxHZMkMK5ddh%2BUjRThY9ycZt%2FuUae8v9WBbdE4OQUB47em1j8stz%2Bpm%2FiP82NNN9ks752%2F1BxqjuUj%2Fc1V4zMqIR4apONpgJkRw9gwXwGggFVXzwsE79zfDRHXwsIecB9fc&X-Amz-Signature=ee3601173ca1c774a4e7523feff984ba6a8644b8443a549a8bb9c4b8c59d384e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
