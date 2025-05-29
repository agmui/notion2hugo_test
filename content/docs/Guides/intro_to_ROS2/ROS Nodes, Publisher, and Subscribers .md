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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVQ2YHX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt6WZCegSwSjLURn0F%2FBwlODip4kkazweEZMWETpSceQIhAIsS3ILDqamzxTOYOspkeIsYECgnwK2jTeves03sN4szKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3LXBY03UZI8k9NaUq3AMTmA9FN%2FjtSMAK%2BS8MCtnd7KlT25Go9FxTWMbt%2Fkd3PPgIigeobIyEfa%2BzJoIZBLuYlqIuWMPy%2FvVf6WBXcIz60CsA9%2Byy%2Fz6bJzL78joEs8nrk0UCrdKAO%2Fnbf4JRQwUat%2BSRQHHlMk6I%2BSWB4G%2FB8Ynm0dXGc1UqwnovxnnSRE0zAePKir5dv4U5r%2FJD%2BmPxqoZzU3uZIqOI6vkc3ahIJsiM4vpgowpaUtMvo7DDmL1EqaWvej%2B%2FzDc7Re9my4yHPWw9lZ7BXHMW%2FgPSp8X8IeVdeyEBH9%2FtSQdoRz7Y1i4W2buQ3mueIgRDg2n%2FSX8G%2FXYcq8nPz%2F61IT7L%2BtEvOUyEyX4bcvSzGu%2FpHUMVDV38Nho1mFBCcNHJ5NYSoAHbK8UT6cCg4hDmPUZEH1njt9EHSH5fnYA%2BPeVt1qajdugCX%2FglxdBco2gG5HgsFi%2FOCKF8MRkKLLp92eHulfGSa09eKPmtQgRPbUY4OLgV6%2Frzt8h%2B3wJm2PVzwHhuilGmiJjhjQG1FkABcvx6uaZeSanGspCi6xa6z8AFbT4oyGlyUrfG%2BQbIBcAlUhWY%2B6YOqFoBMRClVlI2tS9Y9r6xJD%2BEoO%2Ff%2By58rJVWJjx4qZvmDKn7Olme5prhhTC8reDBBjqkAVbWST2L2LLQLT4YWWdHBiyNkW4J3MZfdHnGmDuyDhLmM3CaBMGYQkaPeVfP3KaBMtbCEARVfPDB1YFiLHCRkoRH6X4FKLYrlApnEQFDmTNjbfyTGH6B%2BV3USEmk874HDUpG9yd%2BaudAOLrTXPtpYMz%2F1BIdqKqX9FRYsDGGNvo1xcCFso5DUcwwRel%2F76cAX2CzltWK5Dfl1rBG%2FTFMrSpDqrcl&X-Amz-Signature=3098b59b506c00c1b9cd38b3e996267dbe66f0a7db559d9a1625f021d1e78931&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVQ2YHX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt6WZCegSwSjLURn0F%2FBwlODip4kkazweEZMWETpSceQIhAIsS3ILDqamzxTOYOspkeIsYECgnwK2jTeves03sN4szKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3LXBY03UZI8k9NaUq3AMTmA9FN%2FjtSMAK%2BS8MCtnd7KlT25Go9FxTWMbt%2Fkd3PPgIigeobIyEfa%2BzJoIZBLuYlqIuWMPy%2FvVf6WBXcIz60CsA9%2Byy%2Fz6bJzL78joEs8nrk0UCrdKAO%2Fnbf4JRQwUat%2BSRQHHlMk6I%2BSWB4G%2FB8Ynm0dXGc1UqwnovxnnSRE0zAePKir5dv4U5r%2FJD%2BmPxqoZzU3uZIqOI6vkc3ahIJsiM4vpgowpaUtMvo7DDmL1EqaWvej%2B%2FzDc7Re9my4yHPWw9lZ7BXHMW%2FgPSp8X8IeVdeyEBH9%2FtSQdoRz7Y1i4W2buQ3mueIgRDg2n%2FSX8G%2FXYcq8nPz%2F61IT7L%2BtEvOUyEyX4bcvSzGu%2FpHUMVDV38Nho1mFBCcNHJ5NYSoAHbK8UT6cCg4hDmPUZEH1njt9EHSH5fnYA%2BPeVt1qajdugCX%2FglxdBco2gG5HgsFi%2FOCKF8MRkKLLp92eHulfGSa09eKPmtQgRPbUY4OLgV6%2Frzt8h%2B3wJm2PVzwHhuilGmiJjhjQG1FkABcvx6uaZeSanGspCi6xa6z8AFbT4oyGlyUrfG%2BQbIBcAlUhWY%2B6YOqFoBMRClVlI2tS9Y9r6xJD%2BEoO%2Ff%2By58rJVWJjx4qZvmDKn7Olme5prhhTC8reDBBjqkAVbWST2L2LLQLT4YWWdHBiyNkW4J3MZfdHnGmDuyDhLmM3CaBMGYQkaPeVfP3KaBMtbCEARVfPDB1YFiLHCRkoRH6X4FKLYrlApnEQFDmTNjbfyTGH6B%2BV3USEmk874HDUpG9yd%2BaudAOLrTXPtpYMz%2F1BIdqKqX9FRYsDGGNvo1xcCFso5DUcwwRel%2F76cAX2CzltWK5Dfl1rBG%2FTFMrSpDqrcl&X-Amz-Signature=c914a6bf8326f9c2bc6d67e6aff0370af61d4fc01abf1ce2a76f35886f646a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVQ2YHX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt6WZCegSwSjLURn0F%2FBwlODip4kkazweEZMWETpSceQIhAIsS3ILDqamzxTOYOspkeIsYECgnwK2jTeves03sN4szKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3LXBY03UZI8k9NaUq3AMTmA9FN%2FjtSMAK%2BS8MCtnd7KlT25Go9FxTWMbt%2Fkd3PPgIigeobIyEfa%2BzJoIZBLuYlqIuWMPy%2FvVf6WBXcIz60CsA9%2Byy%2Fz6bJzL78joEs8nrk0UCrdKAO%2Fnbf4JRQwUat%2BSRQHHlMk6I%2BSWB4G%2FB8Ynm0dXGc1UqwnovxnnSRE0zAePKir5dv4U5r%2FJD%2BmPxqoZzU3uZIqOI6vkc3ahIJsiM4vpgowpaUtMvo7DDmL1EqaWvej%2B%2FzDc7Re9my4yHPWw9lZ7BXHMW%2FgPSp8X8IeVdeyEBH9%2FtSQdoRz7Y1i4W2buQ3mueIgRDg2n%2FSX8G%2FXYcq8nPz%2F61IT7L%2BtEvOUyEyX4bcvSzGu%2FpHUMVDV38Nho1mFBCcNHJ5NYSoAHbK8UT6cCg4hDmPUZEH1njt9EHSH5fnYA%2BPeVt1qajdugCX%2FglxdBco2gG5HgsFi%2FOCKF8MRkKLLp92eHulfGSa09eKPmtQgRPbUY4OLgV6%2Frzt8h%2B3wJm2PVzwHhuilGmiJjhjQG1FkABcvx6uaZeSanGspCi6xa6z8AFbT4oyGlyUrfG%2BQbIBcAlUhWY%2B6YOqFoBMRClVlI2tS9Y9r6xJD%2BEoO%2Ff%2By58rJVWJjx4qZvmDKn7Olme5prhhTC8reDBBjqkAVbWST2L2LLQLT4YWWdHBiyNkW4J3MZfdHnGmDuyDhLmM3CaBMGYQkaPeVfP3KaBMtbCEARVfPDB1YFiLHCRkoRH6X4FKLYrlApnEQFDmTNjbfyTGH6B%2BV3USEmk874HDUpG9yd%2BaudAOLrTXPtpYMz%2F1BIdqKqX9FRYsDGGNvo1xcCFso5DUcwwRel%2F76cAX2CzltWK5Dfl1rBG%2FTFMrSpDqrcl&X-Amz-Signature=f932615f67e4b92cf44bfbd4e4ff5fa1f31757ffb08a5a63309ee09cc592aec7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVQ2YHX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt6WZCegSwSjLURn0F%2FBwlODip4kkazweEZMWETpSceQIhAIsS3ILDqamzxTOYOspkeIsYECgnwK2jTeves03sN4szKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3LXBY03UZI8k9NaUq3AMTmA9FN%2FjtSMAK%2BS8MCtnd7KlT25Go9FxTWMbt%2Fkd3PPgIigeobIyEfa%2BzJoIZBLuYlqIuWMPy%2FvVf6WBXcIz60CsA9%2Byy%2Fz6bJzL78joEs8nrk0UCrdKAO%2Fnbf4JRQwUat%2BSRQHHlMk6I%2BSWB4G%2FB8Ynm0dXGc1UqwnovxnnSRE0zAePKir5dv4U5r%2FJD%2BmPxqoZzU3uZIqOI6vkc3ahIJsiM4vpgowpaUtMvo7DDmL1EqaWvej%2B%2FzDc7Re9my4yHPWw9lZ7BXHMW%2FgPSp8X8IeVdeyEBH9%2FtSQdoRz7Y1i4W2buQ3mueIgRDg2n%2FSX8G%2FXYcq8nPz%2F61IT7L%2BtEvOUyEyX4bcvSzGu%2FpHUMVDV38Nho1mFBCcNHJ5NYSoAHbK8UT6cCg4hDmPUZEH1njt9EHSH5fnYA%2BPeVt1qajdugCX%2FglxdBco2gG5HgsFi%2FOCKF8MRkKLLp92eHulfGSa09eKPmtQgRPbUY4OLgV6%2Frzt8h%2B3wJm2PVzwHhuilGmiJjhjQG1FkABcvx6uaZeSanGspCi6xa6z8AFbT4oyGlyUrfG%2BQbIBcAlUhWY%2B6YOqFoBMRClVlI2tS9Y9r6xJD%2BEoO%2Ff%2By58rJVWJjx4qZvmDKn7Olme5prhhTC8reDBBjqkAVbWST2L2LLQLT4YWWdHBiyNkW4J3MZfdHnGmDuyDhLmM3CaBMGYQkaPeVfP3KaBMtbCEARVfPDB1YFiLHCRkoRH6X4FKLYrlApnEQFDmTNjbfyTGH6B%2BV3USEmk874HDUpG9yd%2BaudAOLrTXPtpYMz%2F1BIdqKqX9FRYsDGGNvo1xcCFso5DUcwwRel%2F76cAX2CzltWK5Dfl1rBG%2FTFMrSpDqrcl&X-Amz-Signature=e209bfde31d35b51b83265eb2e840847e64b78ec1c2b78f6512253dae15476ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVQ2YHX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt6WZCegSwSjLURn0F%2FBwlODip4kkazweEZMWETpSceQIhAIsS3ILDqamzxTOYOspkeIsYECgnwK2jTeves03sN4szKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3LXBY03UZI8k9NaUq3AMTmA9FN%2FjtSMAK%2BS8MCtnd7KlT25Go9FxTWMbt%2Fkd3PPgIigeobIyEfa%2BzJoIZBLuYlqIuWMPy%2FvVf6WBXcIz60CsA9%2Byy%2Fz6bJzL78joEs8nrk0UCrdKAO%2Fnbf4JRQwUat%2BSRQHHlMk6I%2BSWB4G%2FB8Ynm0dXGc1UqwnovxnnSRE0zAePKir5dv4U5r%2FJD%2BmPxqoZzU3uZIqOI6vkc3ahIJsiM4vpgowpaUtMvo7DDmL1EqaWvej%2B%2FzDc7Re9my4yHPWw9lZ7BXHMW%2FgPSp8X8IeVdeyEBH9%2FtSQdoRz7Y1i4W2buQ3mueIgRDg2n%2FSX8G%2FXYcq8nPz%2F61IT7L%2BtEvOUyEyX4bcvSzGu%2FpHUMVDV38Nho1mFBCcNHJ5NYSoAHbK8UT6cCg4hDmPUZEH1njt9EHSH5fnYA%2BPeVt1qajdugCX%2FglxdBco2gG5HgsFi%2FOCKF8MRkKLLp92eHulfGSa09eKPmtQgRPbUY4OLgV6%2Frzt8h%2B3wJm2PVzwHhuilGmiJjhjQG1FkABcvx6uaZeSanGspCi6xa6z8AFbT4oyGlyUrfG%2BQbIBcAlUhWY%2B6YOqFoBMRClVlI2tS9Y9r6xJD%2BEoO%2Ff%2By58rJVWJjx4qZvmDKn7Olme5prhhTC8reDBBjqkAVbWST2L2LLQLT4YWWdHBiyNkW4J3MZfdHnGmDuyDhLmM3CaBMGYQkaPeVfP3KaBMtbCEARVfPDB1YFiLHCRkoRH6X4FKLYrlApnEQFDmTNjbfyTGH6B%2BV3USEmk874HDUpG9yd%2BaudAOLrTXPtpYMz%2F1BIdqKqX9FRYsDGGNvo1xcCFso5DUcwwRel%2F76cAX2CzltWK5Dfl1rBG%2FTFMrSpDqrcl&X-Amz-Signature=41e979419fb0df8b6811431d639330700a2a1217f991df2866bf9aa853979cd1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVQ2YHX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt6WZCegSwSjLURn0F%2FBwlODip4kkazweEZMWETpSceQIhAIsS3ILDqamzxTOYOspkeIsYECgnwK2jTeves03sN4szKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3LXBY03UZI8k9NaUq3AMTmA9FN%2FjtSMAK%2BS8MCtnd7KlT25Go9FxTWMbt%2Fkd3PPgIigeobIyEfa%2BzJoIZBLuYlqIuWMPy%2FvVf6WBXcIz60CsA9%2Byy%2Fz6bJzL78joEs8nrk0UCrdKAO%2Fnbf4JRQwUat%2BSRQHHlMk6I%2BSWB4G%2FB8Ynm0dXGc1UqwnovxnnSRE0zAePKir5dv4U5r%2FJD%2BmPxqoZzU3uZIqOI6vkc3ahIJsiM4vpgowpaUtMvo7DDmL1EqaWvej%2B%2FzDc7Re9my4yHPWw9lZ7BXHMW%2FgPSp8X8IeVdeyEBH9%2FtSQdoRz7Y1i4W2buQ3mueIgRDg2n%2FSX8G%2FXYcq8nPz%2F61IT7L%2BtEvOUyEyX4bcvSzGu%2FpHUMVDV38Nho1mFBCcNHJ5NYSoAHbK8UT6cCg4hDmPUZEH1njt9EHSH5fnYA%2BPeVt1qajdugCX%2FglxdBco2gG5HgsFi%2FOCKF8MRkKLLp92eHulfGSa09eKPmtQgRPbUY4OLgV6%2Frzt8h%2B3wJm2PVzwHhuilGmiJjhjQG1FkABcvx6uaZeSanGspCi6xa6z8AFbT4oyGlyUrfG%2BQbIBcAlUhWY%2B6YOqFoBMRClVlI2tS9Y9r6xJD%2BEoO%2Ff%2By58rJVWJjx4qZvmDKn7Olme5prhhTC8reDBBjqkAVbWST2L2LLQLT4YWWdHBiyNkW4J3MZfdHnGmDuyDhLmM3CaBMGYQkaPeVfP3KaBMtbCEARVfPDB1YFiLHCRkoRH6X4FKLYrlApnEQFDmTNjbfyTGH6B%2BV3USEmk874HDUpG9yd%2BaudAOLrTXPtpYMz%2F1BIdqKqX9FRYsDGGNvo1xcCFso5DUcwwRel%2F76cAX2CzltWK5Dfl1rBG%2FTFMrSpDqrcl&X-Amz-Signature=85d24cdc53c5f05f743e08d6d548d6c086fabae34dc06286f41c4c5acdecc738&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVQ2YHX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt6WZCegSwSjLURn0F%2FBwlODip4kkazweEZMWETpSceQIhAIsS3ILDqamzxTOYOspkeIsYECgnwK2jTeves03sN4szKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3LXBY03UZI8k9NaUq3AMTmA9FN%2FjtSMAK%2BS8MCtnd7KlT25Go9FxTWMbt%2Fkd3PPgIigeobIyEfa%2BzJoIZBLuYlqIuWMPy%2FvVf6WBXcIz60CsA9%2Byy%2Fz6bJzL78joEs8nrk0UCrdKAO%2Fnbf4JRQwUat%2BSRQHHlMk6I%2BSWB4G%2FB8Ynm0dXGc1UqwnovxnnSRE0zAePKir5dv4U5r%2FJD%2BmPxqoZzU3uZIqOI6vkc3ahIJsiM4vpgowpaUtMvo7DDmL1EqaWvej%2B%2FzDc7Re9my4yHPWw9lZ7BXHMW%2FgPSp8X8IeVdeyEBH9%2FtSQdoRz7Y1i4W2buQ3mueIgRDg2n%2FSX8G%2FXYcq8nPz%2F61IT7L%2BtEvOUyEyX4bcvSzGu%2FpHUMVDV38Nho1mFBCcNHJ5NYSoAHbK8UT6cCg4hDmPUZEH1njt9EHSH5fnYA%2BPeVt1qajdugCX%2FglxdBco2gG5HgsFi%2FOCKF8MRkKLLp92eHulfGSa09eKPmtQgRPbUY4OLgV6%2Frzt8h%2B3wJm2PVzwHhuilGmiJjhjQG1FkABcvx6uaZeSanGspCi6xa6z8AFbT4oyGlyUrfG%2BQbIBcAlUhWY%2B6YOqFoBMRClVlI2tS9Y9r6xJD%2BEoO%2Ff%2By58rJVWJjx4qZvmDKn7Olme5prhhTC8reDBBjqkAVbWST2L2LLQLT4YWWdHBiyNkW4J3MZfdHnGmDuyDhLmM3CaBMGYQkaPeVfP3KaBMtbCEARVfPDB1YFiLHCRkoRH6X4FKLYrlApnEQFDmTNjbfyTGH6B%2BV3USEmk874HDUpG9yd%2BaudAOLrTXPtpYMz%2F1BIdqKqX9FRYsDGGNvo1xcCFso5DUcwwRel%2F76cAX2CzltWK5Dfl1rBG%2FTFMrSpDqrcl&X-Amz-Signature=78ad44a298c75053d8f203d345194753781c66eae2b78f3df54f21b67d8a3d38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVQ2YHX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt6WZCegSwSjLURn0F%2FBwlODip4kkazweEZMWETpSceQIhAIsS3ILDqamzxTOYOspkeIsYECgnwK2jTeves03sN4szKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3LXBY03UZI8k9NaUq3AMTmA9FN%2FjtSMAK%2BS8MCtnd7KlT25Go9FxTWMbt%2Fkd3PPgIigeobIyEfa%2BzJoIZBLuYlqIuWMPy%2FvVf6WBXcIz60CsA9%2Byy%2Fz6bJzL78joEs8nrk0UCrdKAO%2Fnbf4JRQwUat%2BSRQHHlMk6I%2BSWB4G%2FB8Ynm0dXGc1UqwnovxnnSRE0zAePKir5dv4U5r%2FJD%2BmPxqoZzU3uZIqOI6vkc3ahIJsiM4vpgowpaUtMvo7DDmL1EqaWvej%2B%2FzDc7Re9my4yHPWw9lZ7BXHMW%2FgPSp8X8IeVdeyEBH9%2FtSQdoRz7Y1i4W2buQ3mueIgRDg2n%2FSX8G%2FXYcq8nPz%2F61IT7L%2BtEvOUyEyX4bcvSzGu%2FpHUMVDV38Nho1mFBCcNHJ5NYSoAHbK8UT6cCg4hDmPUZEH1njt9EHSH5fnYA%2BPeVt1qajdugCX%2FglxdBco2gG5HgsFi%2FOCKF8MRkKLLp92eHulfGSa09eKPmtQgRPbUY4OLgV6%2Frzt8h%2B3wJm2PVzwHhuilGmiJjhjQG1FkABcvx6uaZeSanGspCi6xa6z8AFbT4oyGlyUrfG%2BQbIBcAlUhWY%2B6YOqFoBMRClVlI2tS9Y9r6xJD%2BEoO%2Ff%2By58rJVWJjx4qZvmDKn7Olme5prhhTC8reDBBjqkAVbWST2L2LLQLT4YWWdHBiyNkW4J3MZfdHnGmDuyDhLmM3CaBMGYQkaPeVfP3KaBMtbCEARVfPDB1YFiLHCRkoRH6X4FKLYrlApnEQFDmTNjbfyTGH6B%2BV3USEmk874HDUpG9yd%2BaudAOLrTXPtpYMz%2F1BIdqKqX9FRYsDGGNvo1xcCFso5DUcwwRel%2F76cAX2CzltWK5Dfl1rBG%2FTFMrSpDqrcl&X-Amz-Signature=6f8551996e447df30e0ffe407d875964c9afe44eea2c1d4a360ff5c2e339f1d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
