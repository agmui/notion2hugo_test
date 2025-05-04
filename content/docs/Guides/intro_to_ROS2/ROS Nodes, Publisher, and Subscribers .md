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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I55EM5H%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDi6PYKVdI8Rf8fM2FEZMhKglhh9iCc141aRGcCeCd%2BcAiBR1rZjUxLUd6yebuetqFUCRyylC2Kiizl9PsO02sw7EiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMalMYecqVQYy4nlciKtwDMozH4xiPjXnJ0BQWIerYmMmfJnzCen%2BE%2Bl73oO%2BxgFUtvMPREJvfDwbZVlOQC97%2Fk%2BiO4ohb5rZbOUZ5qoduBEw%2BFgY9VWdlFekyH1ObsPgdtLOFbmXLgzzsYaJdbrEClQKqaTrrmyen1qMjHDjOL0XH6igPBZlVxQXwOymIG95o147M1RU%2BNq1iLYDtCmIGG2TOgwPqivuHgJNJcd62lS6NuSptbpe2XllBTQHowcTI50O%2BE0H9WP5pdrltAd66NuTv8ZklWZgFeOGTkCRBcpkzf9z5saVBpXj0eP70u4Y0wRodpCMTR7HxTSD65I44em0ayvQpfY%2Bqi4bMTs%2BTzvDWkbxzasPtVXIEyGbz4VfdfpDK0N5j97Y4nGGCto1ZyrM4QX7ycLUWi3eMZML4z0DvPssvQ6FN5LZkNYyjBlarSBGbsple5Sh7TBnN9%2BQpVaU%2BSp5geV12X7Hr4eMRgI%2BxjbBa7WXf2exDWOYdXCRGubCK605YJeVWRRpTEx%2BHQrQTALmrr3Wlt5MLLb5QEgJdHwbWsqxtWEx%2FEJ08Mt5l8fyIGqq6ZI0RwVqMdHZepWKB4gp%2BjASfJKWaqLUfnV18yn0K4pWrhmIsk9N9CGcFilonaXhzMmzBD1EwzdjawAY6pgGv90wDq65iupMd3lU1q7ltPZqf%2BbrKk0UlPhxEHrGMn7QfwJMI2vSQXEtEnF3FHsgKVRDxqQQIacbd00RG0ElNJkKLtl%2FYYQoDnEC6%2FU7soY9XQ8rwW02bx%2B7VvO1jjqeClY5V%2F78Cym9yrf8oCIU0JQkJ8UOEvXDrp8pNeb1zQtiVYH00geF4uPgsWIHzJzlyZFhd6Y27cuBp48J6eu21mdS7r10c&X-Amz-Signature=8d86b1fac478905de0c4b10a06279a98d741439f4d28d93b5c4b7bd9b143f3ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I55EM5H%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDi6PYKVdI8Rf8fM2FEZMhKglhh9iCc141aRGcCeCd%2BcAiBR1rZjUxLUd6yebuetqFUCRyylC2Kiizl9PsO02sw7EiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMalMYecqVQYy4nlciKtwDMozH4xiPjXnJ0BQWIerYmMmfJnzCen%2BE%2Bl73oO%2BxgFUtvMPREJvfDwbZVlOQC97%2Fk%2BiO4ohb5rZbOUZ5qoduBEw%2BFgY9VWdlFekyH1ObsPgdtLOFbmXLgzzsYaJdbrEClQKqaTrrmyen1qMjHDjOL0XH6igPBZlVxQXwOymIG95o147M1RU%2BNq1iLYDtCmIGG2TOgwPqivuHgJNJcd62lS6NuSptbpe2XllBTQHowcTI50O%2BE0H9WP5pdrltAd66NuTv8ZklWZgFeOGTkCRBcpkzf9z5saVBpXj0eP70u4Y0wRodpCMTR7HxTSD65I44em0ayvQpfY%2Bqi4bMTs%2BTzvDWkbxzasPtVXIEyGbz4VfdfpDK0N5j97Y4nGGCto1ZyrM4QX7ycLUWi3eMZML4z0DvPssvQ6FN5LZkNYyjBlarSBGbsple5Sh7TBnN9%2BQpVaU%2BSp5geV12X7Hr4eMRgI%2BxjbBa7WXf2exDWOYdXCRGubCK605YJeVWRRpTEx%2BHQrQTALmrr3Wlt5MLLb5QEgJdHwbWsqxtWEx%2FEJ08Mt5l8fyIGqq6ZI0RwVqMdHZepWKB4gp%2BjASfJKWaqLUfnV18yn0K4pWrhmIsk9N9CGcFilonaXhzMmzBD1EwzdjawAY6pgGv90wDq65iupMd3lU1q7ltPZqf%2BbrKk0UlPhxEHrGMn7QfwJMI2vSQXEtEnF3FHsgKVRDxqQQIacbd00RG0ElNJkKLtl%2FYYQoDnEC6%2FU7soY9XQ8rwW02bx%2B7VvO1jjqeClY5V%2F78Cym9yrf8oCIU0JQkJ8UOEvXDrp8pNeb1zQtiVYH00geF4uPgsWIHzJzlyZFhd6Y27cuBp48J6eu21mdS7r10c&X-Amz-Signature=29be56ade10c2de7bb952e51521a310fc6a79ff77d5c962f01d7b0d330d860ae&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I55EM5H%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDi6PYKVdI8Rf8fM2FEZMhKglhh9iCc141aRGcCeCd%2BcAiBR1rZjUxLUd6yebuetqFUCRyylC2Kiizl9PsO02sw7EiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMalMYecqVQYy4nlciKtwDMozH4xiPjXnJ0BQWIerYmMmfJnzCen%2BE%2Bl73oO%2BxgFUtvMPREJvfDwbZVlOQC97%2Fk%2BiO4ohb5rZbOUZ5qoduBEw%2BFgY9VWdlFekyH1ObsPgdtLOFbmXLgzzsYaJdbrEClQKqaTrrmyen1qMjHDjOL0XH6igPBZlVxQXwOymIG95o147M1RU%2BNq1iLYDtCmIGG2TOgwPqivuHgJNJcd62lS6NuSptbpe2XllBTQHowcTI50O%2BE0H9WP5pdrltAd66NuTv8ZklWZgFeOGTkCRBcpkzf9z5saVBpXj0eP70u4Y0wRodpCMTR7HxTSD65I44em0ayvQpfY%2Bqi4bMTs%2BTzvDWkbxzasPtVXIEyGbz4VfdfpDK0N5j97Y4nGGCto1ZyrM4QX7ycLUWi3eMZML4z0DvPssvQ6FN5LZkNYyjBlarSBGbsple5Sh7TBnN9%2BQpVaU%2BSp5geV12X7Hr4eMRgI%2BxjbBa7WXf2exDWOYdXCRGubCK605YJeVWRRpTEx%2BHQrQTALmrr3Wlt5MLLb5QEgJdHwbWsqxtWEx%2FEJ08Mt5l8fyIGqq6ZI0RwVqMdHZepWKB4gp%2BjASfJKWaqLUfnV18yn0K4pWrhmIsk9N9CGcFilonaXhzMmzBD1EwzdjawAY6pgGv90wDq65iupMd3lU1q7ltPZqf%2BbrKk0UlPhxEHrGMn7QfwJMI2vSQXEtEnF3FHsgKVRDxqQQIacbd00RG0ElNJkKLtl%2FYYQoDnEC6%2FU7soY9XQ8rwW02bx%2B7VvO1jjqeClY5V%2F78Cym9yrf8oCIU0JQkJ8UOEvXDrp8pNeb1zQtiVYH00geF4uPgsWIHzJzlyZFhd6Y27cuBp48J6eu21mdS7r10c&X-Amz-Signature=db74cae1be5c81b24321f471e5632d6d83d3ecee769860bc9bd5dd544fa23e75&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I55EM5H%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDi6PYKVdI8Rf8fM2FEZMhKglhh9iCc141aRGcCeCd%2BcAiBR1rZjUxLUd6yebuetqFUCRyylC2Kiizl9PsO02sw7EiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMalMYecqVQYy4nlciKtwDMozH4xiPjXnJ0BQWIerYmMmfJnzCen%2BE%2Bl73oO%2BxgFUtvMPREJvfDwbZVlOQC97%2Fk%2BiO4ohb5rZbOUZ5qoduBEw%2BFgY9VWdlFekyH1ObsPgdtLOFbmXLgzzsYaJdbrEClQKqaTrrmyen1qMjHDjOL0XH6igPBZlVxQXwOymIG95o147M1RU%2BNq1iLYDtCmIGG2TOgwPqivuHgJNJcd62lS6NuSptbpe2XllBTQHowcTI50O%2BE0H9WP5pdrltAd66NuTv8ZklWZgFeOGTkCRBcpkzf9z5saVBpXj0eP70u4Y0wRodpCMTR7HxTSD65I44em0ayvQpfY%2Bqi4bMTs%2BTzvDWkbxzasPtVXIEyGbz4VfdfpDK0N5j97Y4nGGCto1ZyrM4QX7ycLUWi3eMZML4z0DvPssvQ6FN5LZkNYyjBlarSBGbsple5Sh7TBnN9%2BQpVaU%2BSp5geV12X7Hr4eMRgI%2BxjbBa7WXf2exDWOYdXCRGubCK605YJeVWRRpTEx%2BHQrQTALmrr3Wlt5MLLb5QEgJdHwbWsqxtWEx%2FEJ08Mt5l8fyIGqq6ZI0RwVqMdHZepWKB4gp%2BjASfJKWaqLUfnV18yn0K4pWrhmIsk9N9CGcFilonaXhzMmzBD1EwzdjawAY6pgGv90wDq65iupMd3lU1q7ltPZqf%2BbrKk0UlPhxEHrGMn7QfwJMI2vSQXEtEnF3FHsgKVRDxqQQIacbd00RG0ElNJkKLtl%2FYYQoDnEC6%2FU7soY9XQ8rwW02bx%2B7VvO1jjqeClY5V%2F78Cym9yrf8oCIU0JQkJ8UOEvXDrp8pNeb1zQtiVYH00geF4uPgsWIHzJzlyZFhd6Y27cuBp48J6eu21mdS7r10c&X-Amz-Signature=78c13e07ec5807811281bbe810c198d0b1e80918cac9eae393aa289203911e00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I55EM5H%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDi6PYKVdI8Rf8fM2FEZMhKglhh9iCc141aRGcCeCd%2BcAiBR1rZjUxLUd6yebuetqFUCRyylC2Kiizl9PsO02sw7EiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMalMYecqVQYy4nlciKtwDMozH4xiPjXnJ0BQWIerYmMmfJnzCen%2BE%2Bl73oO%2BxgFUtvMPREJvfDwbZVlOQC97%2Fk%2BiO4ohb5rZbOUZ5qoduBEw%2BFgY9VWdlFekyH1ObsPgdtLOFbmXLgzzsYaJdbrEClQKqaTrrmyen1qMjHDjOL0XH6igPBZlVxQXwOymIG95o147M1RU%2BNq1iLYDtCmIGG2TOgwPqivuHgJNJcd62lS6NuSptbpe2XllBTQHowcTI50O%2BE0H9WP5pdrltAd66NuTv8ZklWZgFeOGTkCRBcpkzf9z5saVBpXj0eP70u4Y0wRodpCMTR7HxTSD65I44em0ayvQpfY%2Bqi4bMTs%2BTzvDWkbxzasPtVXIEyGbz4VfdfpDK0N5j97Y4nGGCto1ZyrM4QX7ycLUWi3eMZML4z0DvPssvQ6FN5LZkNYyjBlarSBGbsple5Sh7TBnN9%2BQpVaU%2BSp5geV12X7Hr4eMRgI%2BxjbBa7WXf2exDWOYdXCRGubCK605YJeVWRRpTEx%2BHQrQTALmrr3Wlt5MLLb5QEgJdHwbWsqxtWEx%2FEJ08Mt5l8fyIGqq6ZI0RwVqMdHZepWKB4gp%2BjASfJKWaqLUfnV18yn0K4pWrhmIsk9N9CGcFilonaXhzMmzBD1EwzdjawAY6pgGv90wDq65iupMd3lU1q7ltPZqf%2BbrKk0UlPhxEHrGMn7QfwJMI2vSQXEtEnF3FHsgKVRDxqQQIacbd00RG0ElNJkKLtl%2FYYQoDnEC6%2FU7soY9XQ8rwW02bx%2B7VvO1jjqeClY5V%2F78Cym9yrf8oCIU0JQkJ8UOEvXDrp8pNeb1zQtiVYH00geF4uPgsWIHzJzlyZFhd6Y27cuBp48J6eu21mdS7r10c&X-Amz-Signature=10ac947a2bf3927e62537df134ec6e1adb4f892beb3ee0e2948ac5b27eae2406&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I55EM5H%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDi6PYKVdI8Rf8fM2FEZMhKglhh9iCc141aRGcCeCd%2BcAiBR1rZjUxLUd6yebuetqFUCRyylC2Kiizl9PsO02sw7EiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMalMYecqVQYy4nlciKtwDMozH4xiPjXnJ0BQWIerYmMmfJnzCen%2BE%2Bl73oO%2BxgFUtvMPREJvfDwbZVlOQC97%2Fk%2BiO4ohb5rZbOUZ5qoduBEw%2BFgY9VWdlFekyH1ObsPgdtLOFbmXLgzzsYaJdbrEClQKqaTrrmyen1qMjHDjOL0XH6igPBZlVxQXwOymIG95o147M1RU%2BNq1iLYDtCmIGG2TOgwPqivuHgJNJcd62lS6NuSptbpe2XllBTQHowcTI50O%2BE0H9WP5pdrltAd66NuTv8ZklWZgFeOGTkCRBcpkzf9z5saVBpXj0eP70u4Y0wRodpCMTR7HxTSD65I44em0ayvQpfY%2Bqi4bMTs%2BTzvDWkbxzasPtVXIEyGbz4VfdfpDK0N5j97Y4nGGCto1ZyrM4QX7ycLUWi3eMZML4z0DvPssvQ6FN5LZkNYyjBlarSBGbsple5Sh7TBnN9%2BQpVaU%2BSp5geV12X7Hr4eMRgI%2BxjbBa7WXf2exDWOYdXCRGubCK605YJeVWRRpTEx%2BHQrQTALmrr3Wlt5MLLb5QEgJdHwbWsqxtWEx%2FEJ08Mt5l8fyIGqq6ZI0RwVqMdHZepWKB4gp%2BjASfJKWaqLUfnV18yn0K4pWrhmIsk9N9CGcFilonaXhzMmzBD1EwzdjawAY6pgGv90wDq65iupMd3lU1q7ltPZqf%2BbrKk0UlPhxEHrGMn7QfwJMI2vSQXEtEnF3FHsgKVRDxqQQIacbd00RG0ElNJkKLtl%2FYYQoDnEC6%2FU7soY9XQ8rwW02bx%2B7VvO1jjqeClY5V%2F78Cym9yrf8oCIU0JQkJ8UOEvXDrp8pNeb1zQtiVYH00geF4uPgsWIHzJzlyZFhd6Y27cuBp48J6eu21mdS7r10c&X-Amz-Signature=0d1fc2b2e4e01a04c935275c392ad067f15eb85f0f8fe68c212cddcea4b146d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I55EM5H%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDi6PYKVdI8Rf8fM2FEZMhKglhh9iCc141aRGcCeCd%2BcAiBR1rZjUxLUd6yebuetqFUCRyylC2Kiizl9PsO02sw7EiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMalMYecqVQYy4nlciKtwDMozH4xiPjXnJ0BQWIerYmMmfJnzCen%2BE%2Bl73oO%2BxgFUtvMPREJvfDwbZVlOQC97%2Fk%2BiO4ohb5rZbOUZ5qoduBEw%2BFgY9VWdlFekyH1ObsPgdtLOFbmXLgzzsYaJdbrEClQKqaTrrmyen1qMjHDjOL0XH6igPBZlVxQXwOymIG95o147M1RU%2BNq1iLYDtCmIGG2TOgwPqivuHgJNJcd62lS6NuSptbpe2XllBTQHowcTI50O%2BE0H9WP5pdrltAd66NuTv8ZklWZgFeOGTkCRBcpkzf9z5saVBpXj0eP70u4Y0wRodpCMTR7HxTSD65I44em0ayvQpfY%2Bqi4bMTs%2BTzvDWkbxzasPtVXIEyGbz4VfdfpDK0N5j97Y4nGGCto1ZyrM4QX7ycLUWi3eMZML4z0DvPssvQ6FN5LZkNYyjBlarSBGbsple5Sh7TBnN9%2BQpVaU%2BSp5geV12X7Hr4eMRgI%2BxjbBa7WXf2exDWOYdXCRGubCK605YJeVWRRpTEx%2BHQrQTALmrr3Wlt5MLLb5QEgJdHwbWsqxtWEx%2FEJ08Mt5l8fyIGqq6ZI0RwVqMdHZepWKB4gp%2BjASfJKWaqLUfnV18yn0K4pWrhmIsk9N9CGcFilonaXhzMmzBD1EwzdjawAY6pgGv90wDq65iupMd3lU1q7ltPZqf%2BbrKk0UlPhxEHrGMn7QfwJMI2vSQXEtEnF3FHsgKVRDxqQQIacbd00RG0ElNJkKLtl%2FYYQoDnEC6%2FU7soY9XQ8rwW02bx%2B7VvO1jjqeClY5V%2F78Cym9yrf8oCIU0JQkJ8UOEvXDrp8pNeb1zQtiVYH00geF4uPgsWIHzJzlyZFhd6Y27cuBp48J6eu21mdS7r10c&X-Amz-Signature=a71ddf462a240dd8d82ae18846706d402ac433b6e134b9366f09397151bfbce4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I55EM5H%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDi6PYKVdI8Rf8fM2FEZMhKglhh9iCc141aRGcCeCd%2BcAiBR1rZjUxLUd6yebuetqFUCRyylC2Kiizl9PsO02sw7EiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMalMYecqVQYy4nlciKtwDMozH4xiPjXnJ0BQWIerYmMmfJnzCen%2BE%2Bl73oO%2BxgFUtvMPREJvfDwbZVlOQC97%2Fk%2BiO4ohb5rZbOUZ5qoduBEw%2BFgY9VWdlFekyH1ObsPgdtLOFbmXLgzzsYaJdbrEClQKqaTrrmyen1qMjHDjOL0XH6igPBZlVxQXwOymIG95o147M1RU%2BNq1iLYDtCmIGG2TOgwPqivuHgJNJcd62lS6NuSptbpe2XllBTQHowcTI50O%2BE0H9WP5pdrltAd66NuTv8ZklWZgFeOGTkCRBcpkzf9z5saVBpXj0eP70u4Y0wRodpCMTR7HxTSD65I44em0ayvQpfY%2Bqi4bMTs%2BTzvDWkbxzasPtVXIEyGbz4VfdfpDK0N5j97Y4nGGCto1ZyrM4QX7ycLUWi3eMZML4z0DvPssvQ6FN5LZkNYyjBlarSBGbsple5Sh7TBnN9%2BQpVaU%2BSp5geV12X7Hr4eMRgI%2BxjbBa7WXf2exDWOYdXCRGubCK605YJeVWRRpTEx%2BHQrQTALmrr3Wlt5MLLb5QEgJdHwbWsqxtWEx%2FEJ08Mt5l8fyIGqq6ZI0RwVqMdHZepWKB4gp%2BjASfJKWaqLUfnV18yn0K4pWrhmIsk9N9CGcFilonaXhzMmzBD1EwzdjawAY6pgGv90wDq65iupMd3lU1q7ltPZqf%2BbrKk0UlPhxEHrGMn7QfwJMI2vSQXEtEnF3FHsgKVRDxqQQIacbd00RG0ElNJkKLtl%2FYYQoDnEC6%2FU7soY9XQ8rwW02bx%2B7VvO1jjqeClY5V%2F78Cym9yrf8oCIU0JQkJ8UOEvXDrp8pNeb1zQtiVYH00geF4uPgsWIHzJzlyZFhd6Y27cuBp48J6eu21mdS7r10c&X-Amz-Signature=1de7a3312c2d00a32d06d44d3e4dc36e90c37e4814977e341639b25bc88bc41a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
