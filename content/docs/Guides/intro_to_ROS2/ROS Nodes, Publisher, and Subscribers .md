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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DJ5PEB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEklcq1%2Blo%2BWykgOd7bMCSMlZ49XrkOj1%2BH4u%2FaobwIiAiEAh0fxY8IEUxKOxcWb97qmaUCXArNxLAhdDcZTS3Nfor0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiN8HV5QGYINb4PbCrcAyPh0IwDp3Ks5MTwIGHS8pvOwRINp33PHr33RZqckuVOVOhOXxJ2CROtSjJdYwdEmptYk7%2BJtIdiVHFMONP91wzERM05On1g36ASRUc%2BciWNy7xWDg0%2B1Sij4R%2FYShibKNpRTcebyF6bN46z2HRtfvnuMnaV63PPa1Cm5QUoFNCIz14RlXEdxGJnt8o6rO0XruPDvrjg71QQwzB6nMDhszaUp1vpwnM2gdHdk0J8B2Ld958CQjBS9yALjS0eIxJDdEsOYXxvlUPc74zFix1nZSl4xG3ex9ruTKs8Ad3KyAZW2TqAQSq9gWWeOH9KTlQ99YFuTyct5j13FDNauDnratngp%2Bwc68xwO354Ub4O28BdTt0AWyfqgEPvLio7J0a1hPXyN%2FYcfK9MJrtl7%2FIBF873dh9sHuEo2hl7EuHi%2FJAdHj9EFbTSdwzd97ziXQOONlT38fsQCO7vTup1aRGqRk86A2UImM4rEOm41PyK11%2BtAFppMBA8sS85nCP55neD19rYrFrrByve44f%2FIB3jQQgaVmp0Q8MOo2JWPP2P9wf133XH%2BVqp1szb4HoEahYaaIQ2tD31B9%2Fj320dH4p754TMTL7rpKJ3iJAxz%2FPzC%2Bdxp4cuRE9juBo%2FEYmTMIqv%2Br4GOqUBwBVHpjCo%2BA2FzTztpvrZiOL2oX3ZMtI1sQ8l3Qdvea%2BlO%2F4uRS9pau7navd3mTYDCn3g7nml7fsS%2BvG4opBATvYF6xVPVVTug5xLWihfsF9A%2FGRVRUj8Vn7gpu%2Fzoivab7ElnNRVvk2aHc8h6FjXPlXFXArutcl6weEtHnwb5lSsS1360zCHMYLwMwDj14vtuwT7Qsth5Uyj67ICH7KqNZ6RAF9B&X-Amz-Signature=3b9f39e7c8c5fc4336dc977f2431616320cc612ac5e1ff8819dc37e106b8b569&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DJ5PEB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEklcq1%2Blo%2BWykgOd7bMCSMlZ49XrkOj1%2BH4u%2FaobwIiAiEAh0fxY8IEUxKOxcWb97qmaUCXArNxLAhdDcZTS3Nfor0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiN8HV5QGYINb4PbCrcAyPh0IwDp3Ks5MTwIGHS8pvOwRINp33PHr33RZqckuVOVOhOXxJ2CROtSjJdYwdEmptYk7%2BJtIdiVHFMONP91wzERM05On1g36ASRUc%2BciWNy7xWDg0%2B1Sij4R%2FYShibKNpRTcebyF6bN46z2HRtfvnuMnaV63PPa1Cm5QUoFNCIz14RlXEdxGJnt8o6rO0XruPDvrjg71QQwzB6nMDhszaUp1vpwnM2gdHdk0J8B2Ld958CQjBS9yALjS0eIxJDdEsOYXxvlUPc74zFix1nZSl4xG3ex9ruTKs8Ad3KyAZW2TqAQSq9gWWeOH9KTlQ99YFuTyct5j13FDNauDnratngp%2Bwc68xwO354Ub4O28BdTt0AWyfqgEPvLio7J0a1hPXyN%2FYcfK9MJrtl7%2FIBF873dh9sHuEo2hl7EuHi%2FJAdHj9EFbTSdwzd97ziXQOONlT38fsQCO7vTup1aRGqRk86A2UImM4rEOm41PyK11%2BtAFppMBA8sS85nCP55neD19rYrFrrByve44f%2FIB3jQQgaVmp0Q8MOo2JWPP2P9wf133XH%2BVqp1szb4HoEahYaaIQ2tD31B9%2Fj320dH4p754TMTL7rpKJ3iJAxz%2FPzC%2Bdxp4cuRE9juBo%2FEYmTMIqv%2Br4GOqUBwBVHpjCo%2BA2FzTztpvrZiOL2oX3ZMtI1sQ8l3Qdvea%2BlO%2F4uRS9pau7navd3mTYDCn3g7nml7fsS%2BvG4opBATvYF6xVPVVTug5xLWihfsF9A%2FGRVRUj8Vn7gpu%2Fzoivab7ElnNRVvk2aHc8h6FjXPlXFXArutcl6weEtHnwb5lSsS1360zCHMYLwMwDj14vtuwT7Qsth5Uyj67ICH7KqNZ6RAF9B&X-Amz-Signature=52e4462312033c55fcae79ba79617565a23fe97eed0ba2cbfaabc73c0ab98f09&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DJ5PEB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEklcq1%2Blo%2BWykgOd7bMCSMlZ49XrkOj1%2BH4u%2FaobwIiAiEAh0fxY8IEUxKOxcWb97qmaUCXArNxLAhdDcZTS3Nfor0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiN8HV5QGYINb4PbCrcAyPh0IwDp3Ks5MTwIGHS8pvOwRINp33PHr33RZqckuVOVOhOXxJ2CROtSjJdYwdEmptYk7%2BJtIdiVHFMONP91wzERM05On1g36ASRUc%2BciWNy7xWDg0%2B1Sij4R%2FYShibKNpRTcebyF6bN46z2HRtfvnuMnaV63PPa1Cm5QUoFNCIz14RlXEdxGJnt8o6rO0XruPDvrjg71QQwzB6nMDhszaUp1vpwnM2gdHdk0J8B2Ld958CQjBS9yALjS0eIxJDdEsOYXxvlUPc74zFix1nZSl4xG3ex9ruTKs8Ad3KyAZW2TqAQSq9gWWeOH9KTlQ99YFuTyct5j13FDNauDnratngp%2Bwc68xwO354Ub4O28BdTt0AWyfqgEPvLio7J0a1hPXyN%2FYcfK9MJrtl7%2FIBF873dh9sHuEo2hl7EuHi%2FJAdHj9EFbTSdwzd97ziXQOONlT38fsQCO7vTup1aRGqRk86A2UImM4rEOm41PyK11%2BtAFppMBA8sS85nCP55neD19rYrFrrByve44f%2FIB3jQQgaVmp0Q8MOo2JWPP2P9wf133XH%2BVqp1szb4HoEahYaaIQ2tD31B9%2Fj320dH4p754TMTL7rpKJ3iJAxz%2FPzC%2Bdxp4cuRE9juBo%2FEYmTMIqv%2Br4GOqUBwBVHpjCo%2BA2FzTztpvrZiOL2oX3ZMtI1sQ8l3Qdvea%2BlO%2F4uRS9pau7navd3mTYDCn3g7nml7fsS%2BvG4opBATvYF6xVPVVTug5xLWihfsF9A%2FGRVRUj8Vn7gpu%2Fzoivab7ElnNRVvk2aHc8h6FjXPlXFXArutcl6weEtHnwb5lSsS1360zCHMYLwMwDj14vtuwT7Qsth5Uyj67ICH7KqNZ6RAF9B&X-Amz-Signature=722e9ef5cc676648c73efb7f876fb9a953750b193a042525b16c96805517b920&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DJ5PEB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEklcq1%2Blo%2BWykgOd7bMCSMlZ49XrkOj1%2BH4u%2FaobwIiAiEAh0fxY8IEUxKOxcWb97qmaUCXArNxLAhdDcZTS3Nfor0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiN8HV5QGYINb4PbCrcAyPh0IwDp3Ks5MTwIGHS8pvOwRINp33PHr33RZqckuVOVOhOXxJ2CROtSjJdYwdEmptYk7%2BJtIdiVHFMONP91wzERM05On1g36ASRUc%2BciWNy7xWDg0%2B1Sij4R%2FYShibKNpRTcebyF6bN46z2HRtfvnuMnaV63PPa1Cm5QUoFNCIz14RlXEdxGJnt8o6rO0XruPDvrjg71QQwzB6nMDhszaUp1vpwnM2gdHdk0J8B2Ld958CQjBS9yALjS0eIxJDdEsOYXxvlUPc74zFix1nZSl4xG3ex9ruTKs8Ad3KyAZW2TqAQSq9gWWeOH9KTlQ99YFuTyct5j13FDNauDnratngp%2Bwc68xwO354Ub4O28BdTt0AWyfqgEPvLio7J0a1hPXyN%2FYcfK9MJrtl7%2FIBF873dh9sHuEo2hl7EuHi%2FJAdHj9EFbTSdwzd97ziXQOONlT38fsQCO7vTup1aRGqRk86A2UImM4rEOm41PyK11%2BtAFppMBA8sS85nCP55neD19rYrFrrByve44f%2FIB3jQQgaVmp0Q8MOo2JWPP2P9wf133XH%2BVqp1szb4HoEahYaaIQ2tD31B9%2Fj320dH4p754TMTL7rpKJ3iJAxz%2FPzC%2Bdxp4cuRE9juBo%2FEYmTMIqv%2Br4GOqUBwBVHpjCo%2BA2FzTztpvrZiOL2oX3ZMtI1sQ8l3Qdvea%2BlO%2F4uRS9pau7navd3mTYDCn3g7nml7fsS%2BvG4opBATvYF6xVPVVTug5xLWihfsF9A%2FGRVRUj8Vn7gpu%2Fzoivab7ElnNRVvk2aHc8h6FjXPlXFXArutcl6weEtHnwb5lSsS1360zCHMYLwMwDj14vtuwT7Qsth5Uyj67ICH7KqNZ6RAF9B&X-Amz-Signature=005f308f184b71ac78f86300107a0e2f1b2fb368bfcaed0e40c54a2faaa29358&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DJ5PEB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEklcq1%2Blo%2BWykgOd7bMCSMlZ49XrkOj1%2BH4u%2FaobwIiAiEAh0fxY8IEUxKOxcWb97qmaUCXArNxLAhdDcZTS3Nfor0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiN8HV5QGYINb4PbCrcAyPh0IwDp3Ks5MTwIGHS8pvOwRINp33PHr33RZqckuVOVOhOXxJ2CROtSjJdYwdEmptYk7%2BJtIdiVHFMONP91wzERM05On1g36ASRUc%2BciWNy7xWDg0%2B1Sij4R%2FYShibKNpRTcebyF6bN46z2HRtfvnuMnaV63PPa1Cm5QUoFNCIz14RlXEdxGJnt8o6rO0XruPDvrjg71QQwzB6nMDhszaUp1vpwnM2gdHdk0J8B2Ld958CQjBS9yALjS0eIxJDdEsOYXxvlUPc74zFix1nZSl4xG3ex9ruTKs8Ad3KyAZW2TqAQSq9gWWeOH9KTlQ99YFuTyct5j13FDNauDnratngp%2Bwc68xwO354Ub4O28BdTt0AWyfqgEPvLio7J0a1hPXyN%2FYcfK9MJrtl7%2FIBF873dh9sHuEo2hl7EuHi%2FJAdHj9EFbTSdwzd97ziXQOONlT38fsQCO7vTup1aRGqRk86A2UImM4rEOm41PyK11%2BtAFppMBA8sS85nCP55neD19rYrFrrByve44f%2FIB3jQQgaVmp0Q8MOo2JWPP2P9wf133XH%2BVqp1szb4HoEahYaaIQ2tD31B9%2Fj320dH4p754TMTL7rpKJ3iJAxz%2FPzC%2Bdxp4cuRE9juBo%2FEYmTMIqv%2Br4GOqUBwBVHpjCo%2BA2FzTztpvrZiOL2oX3ZMtI1sQ8l3Qdvea%2BlO%2F4uRS9pau7navd3mTYDCn3g7nml7fsS%2BvG4opBATvYF6xVPVVTug5xLWihfsF9A%2FGRVRUj8Vn7gpu%2Fzoivab7ElnNRVvk2aHc8h6FjXPlXFXArutcl6weEtHnwb5lSsS1360zCHMYLwMwDj14vtuwT7Qsth5Uyj67ICH7KqNZ6RAF9B&X-Amz-Signature=41cd23ccb059d278a19b5d0619217263cc715e7e2da0f8c031e75af99979f9cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DJ5PEB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEklcq1%2Blo%2BWykgOd7bMCSMlZ49XrkOj1%2BH4u%2FaobwIiAiEAh0fxY8IEUxKOxcWb97qmaUCXArNxLAhdDcZTS3Nfor0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiN8HV5QGYINb4PbCrcAyPh0IwDp3Ks5MTwIGHS8pvOwRINp33PHr33RZqckuVOVOhOXxJ2CROtSjJdYwdEmptYk7%2BJtIdiVHFMONP91wzERM05On1g36ASRUc%2BciWNy7xWDg0%2B1Sij4R%2FYShibKNpRTcebyF6bN46z2HRtfvnuMnaV63PPa1Cm5QUoFNCIz14RlXEdxGJnt8o6rO0XruPDvrjg71QQwzB6nMDhszaUp1vpwnM2gdHdk0J8B2Ld958CQjBS9yALjS0eIxJDdEsOYXxvlUPc74zFix1nZSl4xG3ex9ruTKs8Ad3KyAZW2TqAQSq9gWWeOH9KTlQ99YFuTyct5j13FDNauDnratngp%2Bwc68xwO354Ub4O28BdTt0AWyfqgEPvLio7J0a1hPXyN%2FYcfK9MJrtl7%2FIBF873dh9sHuEo2hl7EuHi%2FJAdHj9EFbTSdwzd97ziXQOONlT38fsQCO7vTup1aRGqRk86A2UImM4rEOm41PyK11%2BtAFppMBA8sS85nCP55neD19rYrFrrByve44f%2FIB3jQQgaVmp0Q8MOo2JWPP2P9wf133XH%2BVqp1szb4HoEahYaaIQ2tD31B9%2Fj320dH4p754TMTL7rpKJ3iJAxz%2FPzC%2Bdxp4cuRE9juBo%2FEYmTMIqv%2Br4GOqUBwBVHpjCo%2BA2FzTztpvrZiOL2oX3ZMtI1sQ8l3Qdvea%2BlO%2F4uRS9pau7navd3mTYDCn3g7nml7fsS%2BvG4opBATvYF6xVPVVTug5xLWihfsF9A%2FGRVRUj8Vn7gpu%2Fzoivab7ElnNRVvk2aHc8h6FjXPlXFXArutcl6weEtHnwb5lSsS1360zCHMYLwMwDj14vtuwT7Qsth5Uyj67ICH7KqNZ6RAF9B&X-Amz-Signature=5c41a75e59d40e22ab18c5dd3017d25ed6c9c3be54c3a51f25d9e668d314d7b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DJ5PEB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEklcq1%2Blo%2BWykgOd7bMCSMlZ49XrkOj1%2BH4u%2FaobwIiAiEAh0fxY8IEUxKOxcWb97qmaUCXArNxLAhdDcZTS3Nfor0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiN8HV5QGYINb4PbCrcAyPh0IwDp3Ks5MTwIGHS8pvOwRINp33PHr33RZqckuVOVOhOXxJ2CROtSjJdYwdEmptYk7%2BJtIdiVHFMONP91wzERM05On1g36ASRUc%2BciWNy7xWDg0%2B1Sij4R%2FYShibKNpRTcebyF6bN46z2HRtfvnuMnaV63PPa1Cm5QUoFNCIz14RlXEdxGJnt8o6rO0XruPDvrjg71QQwzB6nMDhszaUp1vpwnM2gdHdk0J8B2Ld958CQjBS9yALjS0eIxJDdEsOYXxvlUPc74zFix1nZSl4xG3ex9ruTKs8Ad3KyAZW2TqAQSq9gWWeOH9KTlQ99YFuTyct5j13FDNauDnratngp%2Bwc68xwO354Ub4O28BdTt0AWyfqgEPvLio7J0a1hPXyN%2FYcfK9MJrtl7%2FIBF873dh9sHuEo2hl7EuHi%2FJAdHj9EFbTSdwzd97ziXQOONlT38fsQCO7vTup1aRGqRk86A2UImM4rEOm41PyK11%2BtAFppMBA8sS85nCP55neD19rYrFrrByve44f%2FIB3jQQgaVmp0Q8MOo2JWPP2P9wf133XH%2BVqp1szb4HoEahYaaIQ2tD31B9%2Fj320dH4p754TMTL7rpKJ3iJAxz%2FPzC%2Bdxp4cuRE9juBo%2FEYmTMIqv%2Br4GOqUBwBVHpjCo%2BA2FzTztpvrZiOL2oX3ZMtI1sQ8l3Qdvea%2BlO%2F4uRS9pau7navd3mTYDCn3g7nml7fsS%2BvG4opBATvYF6xVPVVTug5xLWihfsF9A%2FGRVRUj8Vn7gpu%2Fzoivab7ElnNRVvk2aHc8h6FjXPlXFXArutcl6weEtHnwb5lSsS1360zCHMYLwMwDj14vtuwT7Qsth5Uyj67ICH7KqNZ6RAF9B&X-Amz-Signature=3101736d409c09ad7cbc6f341712d9ced15825d546a599cb08bdb90b98221f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DJ5PEB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEklcq1%2Blo%2BWykgOd7bMCSMlZ49XrkOj1%2BH4u%2FaobwIiAiEAh0fxY8IEUxKOxcWb97qmaUCXArNxLAhdDcZTS3Nfor0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiN8HV5QGYINb4PbCrcAyPh0IwDp3Ks5MTwIGHS8pvOwRINp33PHr33RZqckuVOVOhOXxJ2CROtSjJdYwdEmptYk7%2BJtIdiVHFMONP91wzERM05On1g36ASRUc%2BciWNy7xWDg0%2B1Sij4R%2FYShibKNpRTcebyF6bN46z2HRtfvnuMnaV63PPa1Cm5QUoFNCIz14RlXEdxGJnt8o6rO0XruPDvrjg71QQwzB6nMDhszaUp1vpwnM2gdHdk0J8B2Ld958CQjBS9yALjS0eIxJDdEsOYXxvlUPc74zFix1nZSl4xG3ex9ruTKs8Ad3KyAZW2TqAQSq9gWWeOH9KTlQ99YFuTyct5j13FDNauDnratngp%2Bwc68xwO354Ub4O28BdTt0AWyfqgEPvLio7J0a1hPXyN%2FYcfK9MJrtl7%2FIBF873dh9sHuEo2hl7EuHi%2FJAdHj9EFbTSdwzd97ziXQOONlT38fsQCO7vTup1aRGqRk86A2UImM4rEOm41PyK11%2BtAFppMBA8sS85nCP55neD19rYrFrrByve44f%2FIB3jQQgaVmp0Q8MOo2JWPP2P9wf133XH%2BVqp1szb4HoEahYaaIQ2tD31B9%2Fj320dH4p754TMTL7rpKJ3iJAxz%2FPzC%2Bdxp4cuRE9juBo%2FEYmTMIqv%2Br4GOqUBwBVHpjCo%2BA2FzTztpvrZiOL2oX3ZMtI1sQ8l3Qdvea%2BlO%2F4uRS9pau7navd3mTYDCn3g7nml7fsS%2BvG4opBATvYF6xVPVVTug5xLWihfsF9A%2FGRVRUj8Vn7gpu%2Fzoivab7ElnNRVvk2aHc8h6FjXPlXFXArutcl6weEtHnwb5lSsS1360zCHMYLwMwDj14vtuwT7Qsth5Uyj67ICH7KqNZ6RAF9B&X-Amz-Signature=28b741d46965a1591015a34704fcd26d945c687adae9f38c6e01753a822dbaba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
