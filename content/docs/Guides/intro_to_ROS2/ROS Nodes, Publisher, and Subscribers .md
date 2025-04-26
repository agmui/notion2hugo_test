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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2RGCOM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKEmae%2FiiKxA7%2F1Mnpxje05nMwmxx6sxhVjd47Eu6jmQIgZ8Ep%2FPkrLh%2FCknV9qoDs1QqJlhDUGA6wGdvIsp68jz0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPBClsuDo7FgVqW7rircA%2BZv56v8E1zdTxYIx09CI%2F3HePDyK4IkWk%2F4pzwdUcPxKdQOSsdF9VCBwX9DU3DXShaIGtnvmizC00xYENrdGsIbQlCqn80mlf6FdEPoKSzKrS5D3qb3Pu7v%2B3QNzaMBwbI3BcGYJq0hf1JFWbxh7VWIsQtI8hLTQuFzYvqbP4UKDrPHFSfys0VlOQ3wa2e%2F0ro%2FtgMjFGzsDV%2FVHK4qJHYS%2FrTHVi7JVu1RH38IrTydUq4O3PEPnzBRlMPXaPzuz8P5ZEMxRvsjzo4omKaRfibl%2F0qt3zvfLxi0B0Xt51JlZtlW4Ce3L60ooo4jR%2Bd6nnA%2BIn9h09fwFXaL06DlmjC8ekBvRVnCQPu4uJrz9jXbR72EiIQRJonYmwNcQvQwYmEBWxnCPa4NPITbtPFa4FYaQCtZMulHSHP%2BpV%2BVcQ8zm3UzmYtM8kk4dZwwt8Y0oZjYc6QQEwvOHrpsQc9OkFxao0SoHgZv58toaAG7E5%2BZyTYo3bWSZ%2F8%2F8OM%2F0XdnXtnG0BAxtFlnRy6VsElWIr%2BGUa%2BYC7xgNQ3Zt5%2BLcCzZLyz1l%2Fo5f%2B0QY1F%2BqbiDWEHMhurw0hGWGfPbtkng3i%2BJZn8OYhcMMZk0MsCS0KyJ1iCjhXrzeDSaSGf2MKCitcAGOqUB7UelKNNJ85yEhE%2FQX%2BaMEM6mxWDUPikq2VSjXDOnYX2xRcR4bEEnzmZWuDQeINofy9tMe66ITqEe6HBQUlXcLKfd5yqKlJ%2BiVuuFRQp%2Bo3SD86A%2F3xVTjd9N2n7bKpFdyofucpcyOpu4hZbh2CC2kKCV6jbDwWRj%2Bcut9zuaFwaMl4LTqqJqoK9kXkOYql2tXkh9KaIbrZF8BA6csOr0W6ydaA%2FU&X-Amz-Signature=4d4e88b47ad6935b00244bfd7b9aad37e32c7f45bef7d616198b2bebfc551e60&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2RGCOM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKEmae%2FiiKxA7%2F1Mnpxje05nMwmxx6sxhVjd47Eu6jmQIgZ8Ep%2FPkrLh%2FCknV9qoDs1QqJlhDUGA6wGdvIsp68jz0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPBClsuDo7FgVqW7rircA%2BZv56v8E1zdTxYIx09CI%2F3HePDyK4IkWk%2F4pzwdUcPxKdQOSsdF9VCBwX9DU3DXShaIGtnvmizC00xYENrdGsIbQlCqn80mlf6FdEPoKSzKrS5D3qb3Pu7v%2B3QNzaMBwbI3BcGYJq0hf1JFWbxh7VWIsQtI8hLTQuFzYvqbP4UKDrPHFSfys0VlOQ3wa2e%2F0ro%2FtgMjFGzsDV%2FVHK4qJHYS%2FrTHVi7JVu1RH38IrTydUq4O3PEPnzBRlMPXaPzuz8P5ZEMxRvsjzo4omKaRfibl%2F0qt3zvfLxi0B0Xt51JlZtlW4Ce3L60ooo4jR%2Bd6nnA%2BIn9h09fwFXaL06DlmjC8ekBvRVnCQPu4uJrz9jXbR72EiIQRJonYmwNcQvQwYmEBWxnCPa4NPITbtPFa4FYaQCtZMulHSHP%2BpV%2BVcQ8zm3UzmYtM8kk4dZwwt8Y0oZjYc6QQEwvOHrpsQc9OkFxao0SoHgZv58toaAG7E5%2BZyTYo3bWSZ%2F8%2F8OM%2F0XdnXtnG0BAxtFlnRy6VsElWIr%2BGUa%2BYC7xgNQ3Zt5%2BLcCzZLyz1l%2Fo5f%2B0QY1F%2BqbiDWEHMhurw0hGWGfPbtkng3i%2BJZn8OYhcMMZk0MsCS0KyJ1iCjhXrzeDSaSGf2MKCitcAGOqUB7UelKNNJ85yEhE%2FQX%2BaMEM6mxWDUPikq2VSjXDOnYX2xRcR4bEEnzmZWuDQeINofy9tMe66ITqEe6HBQUlXcLKfd5yqKlJ%2BiVuuFRQp%2Bo3SD86A%2F3xVTjd9N2n7bKpFdyofucpcyOpu4hZbh2CC2kKCV6jbDwWRj%2Bcut9zuaFwaMl4LTqqJqoK9kXkOYql2tXkh9KaIbrZF8BA6csOr0W6ydaA%2FU&X-Amz-Signature=7b5d396c45b9d978200397a8623b0c105b20243b0bb274abdde8dc6b177e0b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2RGCOM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKEmae%2FiiKxA7%2F1Mnpxje05nMwmxx6sxhVjd47Eu6jmQIgZ8Ep%2FPkrLh%2FCknV9qoDs1QqJlhDUGA6wGdvIsp68jz0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPBClsuDo7FgVqW7rircA%2BZv56v8E1zdTxYIx09CI%2F3HePDyK4IkWk%2F4pzwdUcPxKdQOSsdF9VCBwX9DU3DXShaIGtnvmizC00xYENrdGsIbQlCqn80mlf6FdEPoKSzKrS5D3qb3Pu7v%2B3QNzaMBwbI3BcGYJq0hf1JFWbxh7VWIsQtI8hLTQuFzYvqbP4UKDrPHFSfys0VlOQ3wa2e%2F0ro%2FtgMjFGzsDV%2FVHK4qJHYS%2FrTHVi7JVu1RH38IrTydUq4O3PEPnzBRlMPXaPzuz8P5ZEMxRvsjzo4omKaRfibl%2F0qt3zvfLxi0B0Xt51JlZtlW4Ce3L60ooo4jR%2Bd6nnA%2BIn9h09fwFXaL06DlmjC8ekBvRVnCQPu4uJrz9jXbR72EiIQRJonYmwNcQvQwYmEBWxnCPa4NPITbtPFa4FYaQCtZMulHSHP%2BpV%2BVcQ8zm3UzmYtM8kk4dZwwt8Y0oZjYc6QQEwvOHrpsQc9OkFxao0SoHgZv58toaAG7E5%2BZyTYo3bWSZ%2F8%2F8OM%2F0XdnXtnG0BAxtFlnRy6VsElWIr%2BGUa%2BYC7xgNQ3Zt5%2BLcCzZLyz1l%2Fo5f%2B0QY1F%2BqbiDWEHMhurw0hGWGfPbtkng3i%2BJZn8OYhcMMZk0MsCS0KyJ1iCjhXrzeDSaSGf2MKCitcAGOqUB7UelKNNJ85yEhE%2FQX%2BaMEM6mxWDUPikq2VSjXDOnYX2xRcR4bEEnzmZWuDQeINofy9tMe66ITqEe6HBQUlXcLKfd5yqKlJ%2BiVuuFRQp%2Bo3SD86A%2F3xVTjd9N2n7bKpFdyofucpcyOpu4hZbh2CC2kKCV6jbDwWRj%2Bcut9zuaFwaMl4LTqqJqoK9kXkOYql2tXkh9KaIbrZF8BA6csOr0W6ydaA%2FU&X-Amz-Signature=c78c1d037eaa5dbdb9ad48f05b43fb25aefe28f5b03131cdc1b483a81d4923ea&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2RGCOM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKEmae%2FiiKxA7%2F1Mnpxje05nMwmxx6sxhVjd47Eu6jmQIgZ8Ep%2FPkrLh%2FCknV9qoDs1QqJlhDUGA6wGdvIsp68jz0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPBClsuDo7FgVqW7rircA%2BZv56v8E1zdTxYIx09CI%2F3HePDyK4IkWk%2F4pzwdUcPxKdQOSsdF9VCBwX9DU3DXShaIGtnvmizC00xYENrdGsIbQlCqn80mlf6FdEPoKSzKrS5D3qb3Pu7v%2B3QNzaMBwbI3BcGYJq0hf1JFWbxh7VWIsQtI8hLTQuFzYvqbP4UKDrPHFSfys0VlOQ3wa2e%2F0ro%2FtgMjFGzsDV%2FVHK4qJHYS%2FrTHVi7JVu1RH38IrTydUq4O3PEPnzBRlMPXaPzuz8P5ZEMxRvsjzo4omKaRfibl%2F0qt3zvfLxi0B0Xt51JlZtlW4Ce3L60ooo4jR%2Bd6nnA%2BIn9h09fwFXaL06DlmjC8ekBvRVnCQPu4uJrz9jXbR72EiIQRJonYmwNcQvQwYmEBWxnCPa4NPITbtPFa4FYaQCtZMulHSHP%2BpV%2BVcQ8zm3UzmYtM8kk4dZwwt8Y0oZjYc6QQEwvOHrpsQc9OkFxao0SoHgZv58toaAG7E5%2BZyTYo3bWSZ%2F8%2F8OM%2F0XdnXtnG0BAxtFlnRy6VsElWIr%2BGUa%2BYC7xgNQ3Zt5%2BLcCzZLyz1l%2Fo5f%2B0QY1F%2BqbiDWEHMhurw0hGWGfPbtkng3i%2BJZn8OYhcMMZk0MsCS0KyJ1iCjhXrzeDSaSGf2MKCitcAGOqUB7UelKNNJ85yEhE%2FQX%2BaMEM6mxWDUPikq2VSjXDOnYX2xRcR4bEEnzmZWuDQeINofy9tMe66ITqEe6HBQUlXcLKfd5yqKlJ%2BiVuuFRQp%2Bo3SD86A%2F3xVTjd9N2n7bKpFdyofucpcyOpu4hZbh2CC2kKCV6jbDwWRj%2Bcut9zuaFwaMl4LTqqJqoK9kXkOYql2tXkh9KaIbrZF8BA6csOr0W6ydaA%2FU&X-Amz-Signature=ad9a5e735ce24fe0b424b1d5f5671e87dd013957cfb0daf8c5bf0de6fc9b3b53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2RGCOM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKEmae%2FiiKxA7%2F1Mnpxje05nMwmxx6sxhVjd47Eu6jmQIgZ8Ep%2FPkrLh%2FCknV9qoDs1QqJlhDUGA6wGdvIsp68jz0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPBClsuDo7FgVqW7rircA%2BZv56v8E1zdTxYIx09CI%2F3HePDyK4IkWk%2F4pzwdUcPxKdQOSsdF9VCBwX9DU3DXShaIGtnvmizC00xYENrdGsIbQlCqn80mlf6FdEPoKSzKrS5D3qb3Pu7v%2B3QNzaMBwbI3BcGYJq0hf1JFWbxh7VWIsQtI8hLTQuFzYvqbP4UKDrPHFSfys0VlOQ3wa2e%2F0ro%2FtgMjFGzsDV%2FVHK4qJHYS%2FrTHVi7JVu1RH38IrTydUq4O3PEPnzBRlMPXaPzuz8P5ZEMxRvsjzo4omKaRfibl%2F0qt3zvfLxi0B0Xt51JlZtlW4Ce3L60ooo4jR%2Bd6nnA%2BIn9h09fwFXaL06DlmjC8ekBvRVnCQPu4uJrz9jXbR72EiIQRJonYmwNcQvQwYmEBWxnCPa4NPITbtPFa4FYaQCtZMulHSHP%2BpV%2BVcQ8zm3UzmYtM8kk4dZwwt8Y0oZjYc6QQEwvOHrpsQc9OkFxao0SoHgZv58toaAG7E5%2BZyTYo3bWSZ%2F8%2F8OM%2F0XdnXtnG0BAxtFlnRy6VsElWIr%2BGUa%2BYC7xgNQ3Zt5%2BLcCzZLyz1l%2Fo5f%2B0QY1F%2BqbiDWEHMhurw0hGWGfPbtkng3i%2BJZn8OYhcMMZk0MsCS0KyJ1iCjhXrzeDSaSGf2MKCitcAGOqUB7UelKNNJ85yEhE%2FQX%2BaMEM6mxWDUPikq2VSjXDOnYX2xRcR4bEEnzmZWuDQeINofy9tMe66ITqEe6HBQUlXcLKfd5yqKlJ%2BiVuuFRQp%2Bo3SD86A%2F3xVTjd9N2n7bKpFdyofucpcyOpu4hZbh2CC2kKCV6jbDwWRj%2Bcut9zuaFwaMl4LTqqJqoK9kXkOYql2tXkh9KaIbrZF8BA6csOr0W6ydaA%2FU&X-Amz-Signature=b4e4488eca02f932442afe11de8f28ab676a68b1021cc1bb0d831b4cac318fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2RGCOM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKEmae%2FiiKxA7%2F1Mnpxje05nMwmxx6sxhVjd47Eu6jmQIgZ8Ep%2FPkrLh%2FCknV9qoDs1QqJlhDUGA6wGdvIsp68jz0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPBClsuDo7FgVqW7rircA%2BZv56v8E1zdTxYIx09CI%2F3HePDyK4IkWk%2F4pzwdUcPxKdQOSsdF9VCBwX9DU3DXShaIGtnvmizC00xYENrdGsIbQlCqn80mlf6FdEPoKSzKrS5D3qb3Pu7v%2B3QNzaMBwbI3BcGYJq0hf1JFWbxh7VWIsQtI8hLTQuFzYvqbP4UKDrPHFSfys0VlOQ3wa2e%2F0ro%2FtgMjFGzsDV%2FVHK4qJHYS%2FrTHVi7JVu1RH38IrTydUq4O3PEPnzBRlMPXaPzuz8P5ZEMxRvsjzo4omKaRfibl%2F0qt3zvfLxi0B0Xt51JlZtlW4Ce3L60ooo4jR%2Bd6nnA%2BIn9h09fwFXaL06DlmjC8ekBvRVnCQPu4uJrz9jXbR72EiIQRJonYmwNcQvQwYmEBWxnCPa4NPITbtPFa4FYaQCtZMulHSHP%2BpV%2BVcQ8zm3UzmYtM8kk4dZwwt8Y0oZjYc6QQEwvOHrpsQc9OkFxao0SoHgZv58toaAG7E5%2BZyTYo3bWSZ%2F8%2F8OM%2F0XdnXtnG0BAxtFlnRy6VsElWIr%2BGUa%2BYC7xgNQ3Zt5%2BLcCzZLyz1l%2Fo5f%2B0QY1F%2BqbiDWEHMhurw0hGWGfPbtkng3i%2BJZn8OYhcMMZk0MsCS0KyJ1iCjhXrzeDSaSGf2MKCitcAGOqUB7UelKNNJ85yEhE%2FQX%2BaMEM6mxWDUPikq2VSjXDOnYX2xRcR4bEEnzmZWuDQeINofy9tMe66ITqEe6HBQUlXcLKfd5yqKlJ%2BiVuuFRQp%2Bo3SD86A%2F3xVTjd9N2n7bKpFdyofucpcyOpu4hZbh2CC2kKCV6jbDwWRj%2Bcut9zuaFwaMl4LTqqJqoK9kXkOYql2tXkh9KaIbrZF8BA6csOr0W6ydaA%2FU&X-Amz-Signature=7dda2bd9a50c2ded7ca1ea4f98773dbaf4bc42a0f77a35d575d1a1f0c1a3925f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2RGCOM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKEmae%2FiiKxA7%2F1Mnpxje05nMwmxx6sxhVjd47Eu6jmQIgZ8Ep%2FPkrLh%2FCknV9qoDs1QqJlhDUGA6wGdvIsp68jz0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPBClsuDo7FgVqW7rircA%2BZv56v8E1zdTxYIx09CI%2F3HePDyK4IkWk%2F4pzwdUcPxKdQOSsdF9VCBwX9DU3DXShaIGtnvmizC00xYENrdGsIbQlCqn80mlf6FdEPoKSzKrS5D3qb3Pu7v%2B3QNzaMBwbI3BcGYJq0hf1JFWbxh7VWIsQtI8hLTQuFzYvqbP4UKDrPHFSfys0VlOQ3wa2e%2F0ro%2FtgMjFGzsDV%2FVHK4qJHYS%2FrTHVi7JVu1RH38IrTydUq4O3PEPnzBRlMPXaPzuz8P5ZEMxRvsjzo4omKaRfibl%2F0qt3zvfLxi0B0Xt51JlZtlW4Ce3L60ooo4jR%2Bd6nnA%2BIn9h09fwFXaL06DlmjC8ekBvRVnCQPu4uJrz9jXbR72EiIQRJonYmwNcQvQwYmEBWxnCPa4NPITbtPFa4FYaQCtZMulHSHP%2BpV%2BVcQ8zm3UzmYtM8kk4dZwwt8Y0oZjYc6QQEwvOHrpsQc9OkFxao0SoHgZv58toaAG7E5%2BZyTYo3bWSZ%2F8%2F8OM%2F0XdnXtnG0BAxtFlnRy6VsElWIr%2BGUa%2BYC7xgNQ3Zt5%2BLcCzZLyz1l%2Fo5f%2B0QY1F%2BqbiDWEHMhurw0hGWGfPbtkng3i%2BJZn8OYhcMMZk0MsCS0KyJ1iCjhXrzeDSaSGf2MKCitcAGOqUB7UelKNNJ85yEhE%2FQX%2BaMEM6mxWDUPikq2VSjXDOnYX2xRcR4bEEnzmZWuDQeINofy9tMe66ITqEe6HBQUlXcLKfd5yqKlJ%2BiVuuFRQp%2Bo3SD86A%2F3xVTjd9N2n7bKpFdyofucpcyOpu4hZbh2CC2kKCV6jbDwWRj%2Bcut9zuaFwaMl4LTqqJqoK9kXkOYql2tXkh9KaIbrZF8BA6csOr0W6ydaA%2FU&X-Amz-Signature=ade0c089a87d7aaaba7ef3bf764af4efa3c996af75515ffb96ac0203e6859277&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2RGCOM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKEmae%2FiiKxA7%2F1Mnpxje05nMwmxx6sxhVjd47Eu6jmQIgZ8Ep%2FPkrLh%2FCknV9qoDs1QqJlhDUGA6wGdvIsp68jz0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPBClsuDo7FgVqW7rircA%2BZv56v8E1zdTxYIx09CI%2F3HePDyK4IkWk%2F4pzwdUcPxKdQOSsdF9VCBwX9DU3DXShaIGtnvmizC00xYENrdGsIbQlCqn80mlf6FdEPoKSzKrS5D3qb3Pu7v%2B3QNzaMBwbI3BcGYJq0hf1JFWbxh7VWIsQtI8hLTQuFzYvqbP4UKDrPHFSfys0VlOQ3wa2e%2F0ro%2FtgMjFGzsDV%2FVHK4qJHYS%2FrTHVi7JVu1RH38IrTydUq4O3PEPnzBRlMPXaPzuz8P5ZEMxRvsjzo4omKaRfibl%2F0qt3zvfLxi0B0Xt51JlZtlW4Ce3L60ooo4jR%2Bd6nnA%2BIn9h09fwFXaL06DlmjC8ekBvRVnCQPu4uJrz9jXbR72EiIQRJonYmwNcQvQwYmEBWxnCPa4NPITbtPFa4FYaQCtZMulHSHP%2BpV%2BVcQ8zm3UzmYtM8kk4dZwwt8Y0oZjYc6QQEwvOHrpsQc9OkFxao0SoHgZv58toaAG7E5%2BZyTYo3bWSZ%2F8%2F8OM%2F0XdnXtnG0BAxtFlnRy6VsElWIr%2BGUa%2BYC7xgNQ3Zt5%2BLcCzZLyz1l%2Fo5f%2B0QY1F%2BqbiDWEHMhurw0hGWGfPbtkng3i%2BJZn8OYhcMMZk0MsCS0KyJ1iCjhXrzeDSaSGf2MKCitcAGOqUB7UelKNNJ85yEhE%2FQX%2BaMEM6mxWDUPikq2VSjXDOnYX2xRcR4bEEnzmZWuDQeINofy9tMe66ITqEe6HBQUlXcLKfd5yqKlJ%2BiVuuFRQp%2Bo3SD86A%2F3xVTjd9N2n7bKpFdyofucpcyOpu4hZbh2CC2kKCV6jbDwWRj%2Bcut9zuaFwaMl4LTqqJqoK9kXkOYql2tXkh9KaIbrZF8BA6csOr0W6ydaA%2FU&X-Amz-Signature=f9cb71604f0499fe25499fd4c983a68e42bfe78ac46a52b52d7932732543d5b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
