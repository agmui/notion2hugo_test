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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BGWGJ6Y%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDyVSgjYhIK0EHI5mbWhdyvBWzOR956odrOUT%2B9DvW7jwIhAKMg0yGZ0zjPmL%2F9pRkTzjApZZNgnewxs3Xs2n1SH9%2FsKv8DCDkQABoMNjM3NDIzMTgzODA1IgzcnOI8InFVEJR%2BcIsq3AMV7e%2BpIx%2Bo2tPb3N9u0%2Bjt4qs9eWKMDojT4wePMKFQwnQUOZU%2FAFf4%2Bqd%2B6uz8qgrB4PgSKQypYkm4MjkgPdGvHlG3iImPQEORFf107srpAhzRJoNTdnb5JLh7F%2FZzask0uoeX49QkooJ2Cdzw5yNHU%2BfxoSQGT9FS7rOPWHzoHAEpaIUnROj296lKipdZq35mF%2B8hKziXgXW%2Fd%2BX6Hl3q01hwGBBx69csMcoCG17oV0QhOXx5triR59%2FLyOjqcsy8meF935HGRoB6luhqm6f1DPz571KYxsPCy9E14DbaXDZN07DQp4VJ2BN6DoDCexxsjOr1SscF9c5omQ9NgbPk4tWIhN%2FtmN4yQw2UMe6UIJr5VvHhUJyBtOnqVE071R7BTOjurYCeaiQQM0cOL5C21MnoCZ0%2F%2BpBS%2F9BDrZePdC5guZv07ytbhJAe9CExTjt3J3yaqePzcDapHrPo0zz8R8QEVnZMjKltC%2BTisHKDmMymR6XLxYd7XXX%2BFlInDHk73QMyVlzsS%2BnRLp4tTUHTXOx9U7mL78FPBlujlCvGnXfX1xHWxyIYQFF%2Fwewg8iiVzmXc%2FVVzf4C98mSpW4mUpn%2FbLWQXxACDB%2FBOFO2DcuRJAiySrsLVU0DImDCptL%2B9BjqkAf4CTODiqIGZ%2BHvRpFnQa1IP%2BGZ1ZcCKVy7JBleXLvJT3KwMy2FTmB3d5haQDvEWr%2BMSo9z1LJyV5WvX%2B%2FB%2FebAgBc6hkOw3bREbGGmNDbBMMwqqikPOd6ZSSrRQ1ZjyIrQ8Qc3e0bAarfZ5CLNxkTYbjEtX0gu71MBSOPKLoMNj6broiW8qRE8ygX8fUBljhNGi4ek5bD4kAcTWKqbBb70BeoB%2B&X-Amz-Signature=0f19000572f8c6a5b984f9bee1742666a76d7a30fb9c071d8eabccd931a4fe5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BGWGJ6Y%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDyVSgjYhIK0EHI5mbWhdyvBWzOR956odrOUT%2B9DvW7jwIhAKMg0yGZ0zjPmL%2F9pRkTzjApZZNgnewxs3Xs2n1SH9%2FsKv8DCDkQABoMNjM3NDIzMTgzODA1IgzcnOI8InFVEJR%2BcIsq3AMV7e%2BpIx%2Bo2tPb3N9u0%2Bjt4qs9eWKMDojT4wePMKFQwnQUOZU%2FAFf4%2Bqd%2B6uz8qgrB4PgSKQypYkm4MjkgPdGvHlG3iImPQEORFf107srpAhzRJoNTdnb5JLh7F%2FZzask0uoeX49QkooJ2Cdzw5yNHU%2BfxoSQGT9FS7rOPWHzoHAEpaIUnROj296lKipdZq35mF%2B8hKziXgXW%2Fd%2BX6Hl3q01hwGBBx69csMcoCG17oV0QhOXx5triR59%2FLyOjqcsy8meF935HGRoB6luhqm6f1DPz571KYxsPCy9E14DbaXDZN07DQp4VJ2BN6DoDCexxsjOr1SscF9c5omQ9NgbPk4tWIhN%2FtmN4yQw2UMe6UIJr5VvHhUJyBtOnqVE071R7BTOjurYCeaiQQM0cOL5C21MnoCZ0%2F%2BpBS%2F9BDrZePdC5guZv07ytbhJAe9CExTjt3J3yaqePzcDapHrPo0zz8R8QEVnZMjKltC%2BTisHKDmMymR6XLxYd7XXX%2BFlInDHk73QMyVlzsS%2BnRLp4tTUHTXOx9U7mL78FPBlujlCvGnXfX1xHWxyIYQFF%2Fwewg8iiVzmXc%2FVVzf4C98mSpW4mUpn%2FbLWQXxACDB%2FBOFO2DcuRJAiySrsLVU0DImDCptL%2B9BjqkAf4CTODiqIGZ%2BHvRpFnQa1IP%2BGZ1ZcCKVy7JBleXLvJT3KwMy2FTmB3d5haQDvEWr%2BMSo9z1LJyV5WvX%2B%2FB%2FebAgBc6hkOw3bREbGGmNDbBMMwqqikPOd6ZSSrRQ1ZjyIrQ8Qc3e0bAarfZ5CLNxkTYbjEtX0gu71MBSOPKLoMNj6broiW8qRE8ygX8fUBljhNGi4ek5bD4kAcTWKqbBb70BeoB%2B&X-Amz-Signature=64b023341b58d635523f6e3a7ad0ea67c9a2fbde4f780b23375749e2444b9821&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BGWGJ6Y%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDyVSgjYhIK0EHI5mbWhdyvBWzOR956odrOUT%2B9DvW7jwIhAKMg0yGZ0zjPmL%2F9pRkTzjApZZNgnewxs3Xs2n1SH9%2FsKv8DCDkQABoMNjM3NDIzMTgzODA1IgzcnOI8InFVEJR%2BcIsq3AMV7e%2BpIx%2Bo2tPb3N9u0%2Bjt4qs9eWKMDojT4wePMKFQwnQUOZU%2FAFf4%2Bqd%2B6uz8qgrB4PgSKQypYkm4MjkgPdGvHlG3iImPQEORFf107srpAhzRJoNTdnb5JLh7F%2FZzask0uoeX49QkooJ2Cdzw5yNHU%2BfxoSQGT9FS7rOPWHzoHAEpaIUnROj296lKipdZq35mF%2B8hKziXgXW%2Fd%2BX6Hl3q01hwGBBx69csMcoCG17oV0QhOXx5triR59%2FLyOjqcsy8meF935HGRoB6luhqm6f1DPz571KYxsPCy9E14DbaXDZN07DQp4VJ2BN6DoDCexxsjOr1SscF9c5omQ9NgbPk4tWIhN%2FtmN4yQw2UMe6UIJr5VvHhUJyBtOnqVE071R7BTOjurYCeaiQQM0cOL5C21MnoCZ0%2F%2BpBS%2F9BDrZePdC5guZv07ytbhJAe9CExTjt3J3yaqePzcDapHrPo0zz8R8QEVnZMjKltC%2BTisHKDmMymR6XLxYd7XXX%2BFlInDHk73QMyVlzsS%2BnRLp4tTUHTXOx9U7mL78FPBlujlCvGnXfX1xHWxyIYQFF%2Fwewg8iiVzmXc%2FVVzf4C98mSpW4mUpn%2FbLWQXxACDB%2FBOFO2DcuRJAiySrsLVU0DImDCptL%2B9BjqkAf4CTODiqIGZ%2BHvRpFnQa1IP%2BGZ1ZcCKVy7JBleXLvJT3KwMy2FTmB3d5haQDvEWr%2BMSo9z1LJyV5WvX%2B%2FB%2FebAgBc6hkOw3bREbGGmNDbBMMwqqikPOd6ZSSrRQ1ZjyIrQ8Qc3e0bAarfZ5CLNxkTYbjEtX0gu71MBSOPKLoMNj6broiW8qRE8ygX8fUBljhNGi4ek5bD4kAcTWKqbBb70BeoB%2B&X-Amz-Signature=dd9f43e728f3f286fff79683eace3633b2ae303fb48aeab0d639c11f268807dd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BGWGJ6Y%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDyVSgjYhIK0EHI5mbWhdyvBWzOR956odrOUT%2B9DvW7jwIhAKMg0yGZ0zjPmL%2F9pRkTzjApZZNgnewxs3Xs2n1SH9%2FsKv8DCDkQABoMNjM3NDIzMTgzODA1IgzcnOI8InFVEJR%2BcIsq3AMV7e%2BpIx%2Bo2tPb3N9u0%2Bjt4qs9eWKMDojT4wePMKFQwnQUOZU%2FAFf4%2Bqd%2B6uz8qgrB4PgSKQypYkm4MjkgPdGvHlG3iImPQEORFf107srpAhzRJoNTdnb5JLh7F%2FZzask0uoeX49QkooJ2Cdzw5yNHU%2BfxoSQGT9FS7rOPWHzoHAEpaIUnROj296lKipdZq35mF%2B8hKziXgXW%2Fd%2BX6Hl3q01hwGBBx69csMcoCG17oV0QhOXx5triR59%2FLyOjqcsy8meF935HGRoB6luhqm6f1DPz571KYxsPCy9E14DbaXDZN07DQp4VJ2BN6DoDCexxsjOr1SscF9c5omQ9NgbPk4tWIhN%2FtmN4yQw2UMe6UIJr5VvHhUJyBtOnqVE071R7BTOjurYCeaiQQM0cOL5C21MnoCZ0%2F%2BpBS%2F9BDrZePdC5guZv07ytbhJAe9CExTjt3J3yaqePzcDapHrPo0zz8R8QEVnZMjKltC%2BTisHKDmMymR6XLxYd7XXX%2BFlInDHk73QMyVlzsS%2BnRLp4tTUHTXOx9U7mL78FPBlujlCvGnXfX1xHWxyIYQFF%2Fwewg8iiVzmXc%2FVVzf4C98mSpW4mUpn%2FbLWQXxACDB%2FBOFO2DcuRJAiySrsLVU0DImDCptL%2B9BjqkAf4CTODiqIGZ%2BHvRpFnQa1IP%2BGZ1ZcCKVy7JBleXLvJT3KwMy2FTmB3d5haQDvEWr%2BMSo9z1LJyV5WvX%2B%2FB%2FebAgBc6hkOw3bREbGGmNDbBMMwqqikPOd6ZSSrRQ1ZjyIrQ8Qc3e0bAarfZ5CLNxkTYbjEtX0gu71MBSOPKLoMNj6broiW8qRE8ygX8fUBljhNGi4ek5bD4kAcTWKqbBb70BeoB%2B&X-Amz-Signature=be86a315468c876dacf19516a6c130fcaf7f35b2f1cee56c9d36e89b49871798&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BGWGJ6Y%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDyVSgjYhIK0EHI5mbWhdyvBWzOR956odrOUT%2B9DvW7jwIhAKMg0yGZ0zjPmL%2F9pRkTzjApZZNgnewxs3Xs2n1SH9%2FsKv8DCDkQABoMNjM3NDIzMTgzODA1IgzcnOI8InFVEJR%2BcIsq3AMV7e%2BpIx%2Bo2tPb3N9u0%2Bjt4qs9eWKMDojT4wePMKFQwnQUOZU%2FAFf4%2Bqd%2B6uz8qgrB4PgSKQypYkm4MjkgPdGvHlG3iImPQEORFf107srpAhzRJoNTdnb5JLh7F%2FZzask0uoeX49QkooJ2Cdzw5yNHU%2BfxoSQGT9FS7rOPWHzoHAEpaIUnROj296lKipdZq35mF%2B8hKziXgXW%2Fd%2BX6Hl3q01hwGBBx69csMcoCG17oV0QhOXx5triR59%2FLyOjqcsy8meF935HGRoB6luhqm6f1DPz571KYxsPCy9E14DbaXDZN07DQp4VJ2BN6DoDCexxsjOr1SscF9c5omQ9NgbPk4tWIhN%2FtmN4yQw2UMe6UIJr5VvHhUJyBtOnqVE071R7BTOjurYCeaiQQM0cOL5C21MnoCZ0%2F%2BpBS%2F9BDrZePdC5guZv07ytbhJAe9CExTjt3J3yaqePzcDapHrPo0zz8R8QEVnZMjKltC%2BTisHKDmMymR6XLxYd7XXX%2BFlInDHk73QMyVlzsS%2BnRLp4tTUHTXOx9U7mL78FPBlujlCvGnXfX1xHWxyIYQFF%2Fwewg8iiVzmXc%2FVVzf4C98mSpW4mUpn%2FbLWQXxACDB%2FBOFO2DcuRJAiySrsLVU0DImDCptL%2B9BjqkAf4CTODiqIGZ%2BHvRpFnQa1IP%2BGZ1ZcCKVy7JBleXLvJT3KwMy2FTmB3d5haQDvEWr%2BMSo9z1LJyV5WvX%2B%2FB%2FebAgBc6hkOw3bREbGGmNDbBMMwqqikPOd6ZSSrRQ1ZjyIrQ8Qc3e0bAarfZ5CLNxkTYbjEtX0gu71MBSOPKLoMNj6broiW8qRE8ygX8fUBljhNGi4ek5bD4kAcTWKqbBb70BeoB%2B&X-Amz-Signature=9dd478668363bbba85e692753b2eaa4b5dc1662612b34b8668d80cbb97ace7f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BGWGJ6Y%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDyVSgjYhIK0EHI5mbWhdyvBWzOR956odrOUT%2B9DvW7jwIhAKMg0yGZ0zjPmL%2F9pRkTzjApZZNgnewxs3Xs2n1SH9%2FsKv8DCDkQABoMNjM3NDIzMTgzODA1IgzcnOI8InFVEJR%2BcIsq3AMV7e%2BpIx%2Bo2tPb3N9u0%2Bjt4qs9eWKMDojT4wePMKFQwnQUOZU%2FAFf4%2Bqd%2B6uz8qgrB4PgSKQypYkm4MjkgPdGvHlG3iImPQEORFf107srpAhzRJoNTdnb5JLh7F%2FZzask0uoeX49QkooJ2Cdzw5yNHU%2BfxoSQGT9FS7rOPWHzoHAEpaIUnROj296lKipdZq35mF%2B8hKziXgXW%2Fd%2BX6Hl3q01hwGBBx69csMcoCG17oV0QhOXx5triR59%2FLyOjqcsy8meF935HGRoB6luhqm6f1DPz571KYxsPCy9E14DbaXDZN07DQp4VJ2BN6DoDCexxsjOr1SscF9c5omQ9NgbPk4tWIhN%2FtmN4yQw2UMe6UIJr5VvHhUJyBtOnqVE071R7BTOjurYCeaiQQM0cOL5C21MnoCZ0%2F%2BpBS%2F9BDrZePdC5guZv07ytbhJAe9CExTjt3J3yaqePzcDapHrPo0zz8R8QEVnZMjKltC%2BTisHKDmMymR6XLxYd7XXX%2BFlInDHk73QMyVlzsS%2BnRLp4tTUHTXOx9U7mL78FPBlujlCvGnXfX1xHWxyIYQFF%2Fwewg8iiVzmXc%2FVVzf4C98mSpW4mUpn%2FbLWQXxACDB%2FBOFO2DcuRJAiySrsLVU0DImDCptL%2B9BjqkAf4CTODiqIGZ%2BHvRpFnQa1IP%2BGZ1ZcCKVy7JBleXLvJT3KwMy2FTmB3d5haQDvEWr%2BMSo9z1LJyV5WvX%2B%2FB%2FebAgBc6hkOw3bREbGGmNDbBMMwqqikPOd6ZSSrRQ1ZjyIrQ8Qc3e0bAarfZ5CLNxkTYbjEtX0gu71MBSOPKLoMNj6broiW8qRE8ygX8fUBljhNGi4ek5bD4kAcTWKqbBb70BeoB%2B&X-Amz-Signature=488fc2b2f87997d99a29ed998d670f3479a418d1eb15e4f1eba90e739f58e2da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BGWGJ6Y%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDyVSgjYhIK0EHI5mbWhdyvBWzOR956odrOUT%2B9DvW7jwIhAKMg0yGZ0zjPmL%2F9pRkTzjApZZNgnewxs3Xs2n1SH9%2FsKv8DCDkQABoMNjM3NDIzMTgzODA1IgzcnOI8InFVEJR%2BcIsq3AMV7e%2BpIx%2Bo2tPb3N9u0%2Bjt4qs9eWKMDojT4wePMKFQwnQUOZU%2FAFf4%2Bqd%2B6uz8qgrB4PgSKQypYkm4MjkgPdGvHlG3iImPQEORFf107srpAhzRJoNTdnb5JLh7F%2FZzask0uoeX49QkooJ2Cdzw5yNHU%2BfxoSQGT9FS7rOPWHzoHAEpaIUnROj296lKipdZq35mF%2B8hKziXgXW%2Fd%2BX6Hl3q01hwGBBx69csMcoCG17oV0QhOXx5triR59%2FLyOjqcsy8meF935HGRoB6luhqm6f1DPz571KYxsPCy9E14DbaXDZN07DQp4VJ2BN6DoDCexxsjOr1SscF9c5omQ9NgbPk4tWIhN%2FtmN4yQw2UMe6UIJr5VvHhUJyBtOnqVE071R7BTOjurYCeaiQQM0cOL5C21MnoCZ0%2F%2BpBS%2F9BDrZePdC5guZv07ytbhJAe9CExTjt3J3yaqePzcDapHrPo0zz8R8QEVnZMjKltC%2BTisHKDmMymR6XLxYd7XXX%2BFlInDHk73QMyVlzsS%2BnRLp4tTUHTXOx9U7mL78FPBlujlCvGnXfX1xHWxyIYQFF%2Fwewg8iiVzmXc%2FVVzf4C98mSpW4mUpn%2FbLWQXxACDB%2FBOFO2DcuRJAiySrsLVU0DImDCptL%2B9BjqkAf4CTODiqIGZ%2BHvRpFnQa1IP%2BGZ1ZcCKVy7JBleXLvJT3KwMy2FTmB3d5haQDvEWr%2BMSo9z1LJyV5WvX%2B%2FB%2FebAgBc6hkOw3bREbGGmNDbBMMwqqikPOd6ZSSrRQ1ZjyIrQ8Qc3e0bAarfZ5CLNxkTYbjEtX0gu71MBSOPKLoMNj6broiW8qRE8ygX8fUBljhNGi4ek5bD4kAcTWKqbBb70BeoB%2B&X-Amz-Signature=8c8629be1a1a2cc8685a420a69989280063fb5b42fa3abac604fa4bca9b27c52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BGWGJ6Y%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDyVSgjYhIK0EHI5mbWhdyvBWzOR956odrOUT%2B9DvW7jwIhAKMg0yGZ0zjPmL%2F9pRkTzjApZZNgnewxs3Xs2n1SH9%2FsKv8DCDkQABoMNjM3NDIzMTgzODA1IgzcnOI8InFVEJR%2BcIsq3AMV7e%2BpIx%2Bo2tPb3N9u0%2Bjt4qs9eWKMDojT4wePMKFQwnQUOZU%2FAFf4%2Bqd%2B6uz8qgrB4PgSKQypYkm4MjkgPdGvHlG3iImPQEORFf107srpAhzRJoNTdnb5JLh7F%2FZzask0uoeX49QkooJ2Cdzw5yNHU%2BfxoSQGT9FS7rOPWHzoHAEpaIUnROj296lKipdZq35mF%2B8hKziXgXW%2Fd%2BX6Hl3q01hwGBBx69csMcoCG17oV0QhOXx5triR59%2FLyOjqcsy8meF935HGRoB6luhqm6f1DPz571KYxsPCy9E14DbaXDZN07DQp4VJ2BN6DoDCexxsjOr1SscF9c5omQ9NgbPk4tWIhN%2FtmN4yQw2UMe6UIJr5VvHhUJyBtOnqVE071R7BTOjurYCeaiQQM0cOL5C21MnoCZ0%2F%2BpBS%2F9BDrZePdC5guZv07ytbhJAe9CExTjt3J3yaqePzcDapHrPo0zz8R8QEVnZMjKltC%2BTisHKDmMymR6XLxYd7XXX%2BFlInDHk73QMyVlzsS%2BnRLp4tTUHTXOx9U7mL78FPBlujlCvGnXfX1xHWxyIYQFF%2Fwewg8iiVzmXc%2FVVzf4C98mSpW4mUpn%2FbLWQXxACDB%2FBOFO2DcuRJAiySrsLVU0DImDCptL%2B9BjqkAf4CTODiqIGZ%2BHvRpFnQa1IP%2BGZ1ZcCKVy7JBleXLvJT3KwMy2FTmB3d5haQDvEWr%2BMSo9z1LJyV5WvX%2B%2FB%2FebAgBc6hkOw3bREbGGmNDbBMMwqqikPOd6ZSSrRQ1ZjyIrQ8Qc3e0bAarfZ5CLNxkTYbjEtX0gu71MBSOPKLoMNj6broiW8qRE8ygX8fUBljhNGi4ek5bD4kAcTWKqbBb70BeoB%2B&X-Amz-Signature=6a683812071397a51811b958a76926e92e28167e7972ab21c7182ec046cca499&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
