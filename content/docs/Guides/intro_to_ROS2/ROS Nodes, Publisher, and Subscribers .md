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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZYLSQF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP7%2B69Fj9Bj7n8kKvV%2BzEPjnHek1KTvzqsBViWyGzu4AiBnk4muEsOuep3PaIM4cLojJZRXGH3gbNzrWvvp3XGc6Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMqD%2F1%2FDMrFev0l4LkKtwDHEji7V%2B%2B5r3OBALB%2BR414MNHZLDovVx03449VRVTMqsAhPtQ3YyMLwHJ9hYhhU6nr1io20PEoNi8eIFQJVK96N3eoStolpYajIYCfSm5QhfiU7moUpd37QHFaxnfYpLEfIr8Xti%2B6uwx9fYWBfbDzmN4YNPOWXYTsBpwhUK4F9Ygqn5xEHylpv71UzormVnv62KP1cN2EBsXiH%2FS8S24bgSi9FAEKdUfOFg%2Fi2vTidJ34GA2dVf8umQZYfYolnlXL6wm4nt%2Fq0acOZxB4N91JTgGmUI%2BRjzq%2BCAsgqkjpvGaA%2BxtR68vFfoDFY1CP5QiwIjimtswUY2J5WnF6Z70Gjj3WbiJ6N103tmn72CkLICsvjF9Zz9mJGm2l%2Behxxy1IXIAvOKGJgJmNU4VMrxqSHBl%2FD4RLIgi1ojQaebm3EPTjRn%2FqPnCzPbSWtURl7k%2BmQIL%2FlyTX8Fgls9KI8SrV%2BohgPMjP4xu77okcfC6CkwUs5p4i03jaF1Pd5jXFrA%2BfzbJhS%2BldIFAHPQdlE1mkon3K%2FiAAtKqyX8NNS7RYVsj2TY0tMVlZKEuANE1bWcNBZQHao7cWBFu4j2I8Z%2Bnb9YCjVjofAwA9UqTxcXaKkOGEkBA5Ki%2FdJE1WXww7feHwAY6pgF30WbPPfI4djjNaf7%2FlLi1MViIAhcxhnSquKm9dG%2F91H2RCiHSYhTU0ItF5eBfHNEDn1ABfSlQpBMP4vrBsufqujoJJdU4b5yuxs1KUDGDhDmJQur0CnJsU1hCtJbqx5jVAptOdWDaIxWL0UUwUtmf70BtbohcG6tyu9AuV%2BDN4ajRsQyiNv2JNXsaXQMU4ozK7wVoQQt3rtK8ELfhysjGU5U8zXQ4&X-Amz-Signature=7aa7f95f431cc8b8073aca2f6c9bd76611e8966900c22ec515ee126ef3ff1293&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZYLSQF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP7%2B69Fj9Bj7n8kKvV%2BzEPjnHek1KTvzqsBViWyGzu4AiBnk4muEsOuep3PaIM4cLojJZRXGH3gbNzrWvvp3XGc6Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMqD%2F1%2FDMrFev0l4LkKtwDHEji7V%2B%2B5r3OBALB%2BR414MNHZLDovVx03449VRVTMqsAhPtQ3YyMLwHJ9hYhhU6nr1io20PEoNi8eIFQJVK96N3eoStolpYajIYCfSm5QhfiU7moUpd37QHFaxnfYpLEfIr8Xti%2B6uwx9fYWBfbDzmN4YNPOWXYTsBpwhUK4F9Ygqn5xEHylpv71UzormVnv62KP1cN2EBsXiH%2FS8S24bgSi9FAEKdUfOFg%2Fi2vTidJ34GA2dVf8umQZYfYolnlXL6wm4nt%2Fq0acOZxB4N91JTgGmUI%2BRjzq%2BCAsgqkjpvGaA%2BxtR68vFfoDFY1CP5QiwIjimtswUY2J5WnF6Z70Gjj3WbiJ6N103tmn72CkLICsvjF9Zz9mJGm2l%2Behxxy1IXIAvOKGJgJmNU4VMrxqSHBl%2FD4RLIgi1ojQaebm3EPTjRn%2FqPnCzPbSWtURl7k%2BmQIL%2FlyTX8Fgls9KI8SrV%2BohgPMjP4xu77okcfC6CkwUs5p4i03jaF1Pd5jXFrA%2BfzbJhS%2BldIFAHPQdlE1mkon3K%2FiAAtKqyX8NNS7RYVsj2TY0tMVlZKEuANE1bWcNBZQHao7cWBFu4j2I8Z%2Bnb9YCjVjofAwA9UqTxcXaKkOGEkBA5Ki%2FdJE1WXww7feHwAY6pgF30WbPPfI4djjNaf7%2FlLi1MViIAhcxhnSquKm9dG%2F91H2RCiHSYhTU0ItF5eBfHNEDn1ABfSlQpBMP4vrBsufqujoJJdU4b5yuxs1KUDGDhDmJQur0CnJsU1hCtJbqx5jVAptOdWDaIxWL0UUwUtmf70BtbohcG6tyu9AuV%2BDN4ajRsQyiNv2JNXsaXQMU4ozK7wVoQQt3rtK8ELfhysjGU5U8zXQ4&X-Amz-Signature=0244355af88735c93087d23d30480380afdb6ec72a66b35fb81e1f7a0c69bca5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZYLSQF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP7%2B69Fj9Bj7n8kKvV%2BzEPjnHek1KTvzqsBViWyGzu4AiBnk4muEsOuep3PaIM4cLojJZRXGH3gbNzrWvvp3XGc6Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMqD%2F1%2FDMrFev0l4LkKtwDHEji7V%2B%2B5r3OBALB%2BR414MNHZLDovVx03449VRVTMqsAhPtQ3YyMLwHJ9hYhhU6nr1io20PEoNi8eIFQJVK96N3eoStolpYajIYCfSm5QhfiU7moUpd37QHFaxnfYpLEfIr8Xti%2B6uwx9fYWBfbDzmN4YNPOWXYTsBpwhUK4F9Ygqn5xEHylpv71UzormVnv62KP1cN2EBsXiH%2FS8S24bgSi9FAEKdUfOFg%2Fi2vTidJ34GA2dVf8umQZYfYolnlXL6wm4nt%2Fq0acOZxB4N91JTgGmUI%2BRjzq%2BCAsgqkjpvGaA%2BxtR68vFfoDFY1CP5QiwIjimtswUY2J5WnF6Z70Gjj3WbiJ6N103tmn72CkLICsvjF9Zz9mJGm2l%2Behxxy1IXIAvOKGJgJmNU4VMrxqSHBl%2FD4RLIgi1ojQaebm3EPTjRn%2FqPnCzPbSWtURl7k%2BmQIL%2FlyTX8Fgls9KI8SrV%2BohgPMjP4xu77okcfC6CkwUs5p4i03jaF1Pd5jXFrA%2BfzbJhS%2BldIFAHPQdlE1mkon3K%2FiAAtKqyX8NNS7RYVsj2TY0tMVlZKEuANE1bWcNBZQHao7cWBFu4j2I8Z%2Bnb9YCjVjofAwA9UqTxcXaKkOGEkBA5Ki%2FdJE1WXww7feHwAY6pgF30WbPPfI4djjNaf7%2FlLi1MViIAhcxhnSquKm9dG%2F91H2RCiHSYhTU0ItF5eBfHNEDn1ABfSlQpBMP4vrBsufqujoJJdU4b5yuxs1KUDGDhDmJQur0CnJsU1hCtJbqx5jVAptOdWDaIxWL0UUwUtmf70BtbohcG6tyu9AuV%2BDN4ajRsQyiNv2JNXsaXQMU4ozK7wVoQQt3rtK8ELfhysjGU5U8zXQ4&X-Amz-Signature=0c511ec26750ebd3d9b9142b05ec0bf05233bb977d6ed2be9cde62b1292f5705&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZYLSQF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP7%2B69Fj9Bj7n8kKvV%2BzEPjnHek1KTvzqsBViWyGzu4AiBnk4muEsOuep3PaIM4cLojJZRXGH3gbNzrWvvp3XGc6Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMqD%2F1%2FDMrFev0l4LkKtwDHEji7V%2B%2B5r3OBALB%2BR414MNHZLDovVx03449VRVTMqsAhPtQ3YyMLwHJ9hYhhU6nr1io20PEoNi8eIFQJVK96N3eoStolpYajIYCfSm5QhfiU7moUpd37QHFaxnfYpLEfIr8Xti%2B6uwx9fYWBfbDzmN4YNPOWXYTsBpwhUK4F9Ygqn5xEHylpv71UzormVnv62KP1cN2EBsXiH%2FS8S24bgSi9FAEKdUfOFg%2Fi2vTidJ34GA2dVf8umQZYfYolnlXL6wm4nt%2Fq0acOZxB4N91JTgGmUI%2BRjzq%2BCAsgqkjpvGaA%2BxtR68vFfoDFY1CP5QiwIjimtswUY2J5WnF6Z70Gjj3WbiJ6N103tmn72CkLICsvjF9Zz9mJGm2l%2Behxxy1IXIAvOKGJgJmNU4VMrxqSHBl%2FD4RLIgi1ojQaebm3EPTjRn%2FqPnCzPbSWtURl7k%2BmQIL%2FlyTX8Fgls9KI8SrV%2BohgPMjP4xu77okcfC6CkwUs5p4i03jaF1Pd5jXFrA%2BfzbJhS%2BldIFAHPQdlE1mkon3K%2FiAAtKqyX8NNS7RYVsj2TY0tMVlZKEuANE1bWcNBZQHao7cWBFu4j2I8Z%2Bnb9YCjVjofAwA9UqTxcXaKkOGEkBA5Ki%2FdJE1WXww7feHwAY6pgF30WbPPfI4djjNaf7%2FlLi1MViIAhcxhnSquKm9dG%2F91H2RCiHSYhTU0ItF5eBfHNEDn1ABfSlQpBMP4vrBsufqujoJJdU4b5yuxs1KUDGDhDmJQur0CnJsU1hCtJbqx5jVAptOdWDaIxWL0UUwUtmf70BtbohcG6tyu9AuV%2BDN4ajRsQyiNv2JNXsaXQMU4ozK7wVoQQt3rtK8ELfhysjGU5U8zXQ4&X-Amz-Signature=38d134d31188b7d4ed6441438e4dbde3ce9b1a27ebc0b9a9ee9bffd749fa3167&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZYLSQF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP7%2B69Fj9Bj7n8kKvV%2BzEPjnHek1KTvzqsBViWyGzu4AiBnk4muEsOuep3PaIM4cLojJZRXGH3gbNzrWvvp3XGc6Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMqD%2F1%2FDMrFev0l4LkKtwDHEji7V%2B%2B5r3OBALB%2BR414MNHZLDovVx03449VRVTMqsAhPtQ3YyMLwHJ9hYhhU6nr1io20PEoNi8eIFQJVK96N3eoStolpYajIYCfSm5QhfiU7moUpd37QHFaxnfYpLEfIr8Xti%2B6uwx9fYWBfbDzmN4YNPOWXYTsBpwhUK4F9Ygqn5xEHylpv71UzormVnv62KP1cN2EBsXiH%2FS8S24bgSi9FAEKdUfOFg%2Fi2vTidJ34GA2dVf8umQZYfYolnlXL6wm4nt%2Fq0acOZxB4N91JTgGmUI%2BRjzq%2BCAsgqkjpvGaA%2BxtR68vFfoDFY1CP5QiwIjimtswUY2J5WnF6Z70Gjj3WbiJ6N103tmn72CkLICsvjF9Zz9mJGm2l%2Behxxy1IXIAvOKGJgJmNU4VMrxqSHBl%2FD4RLIgi1ojQaebm3EPTjRn%2FqPnCzPbSWtURl7k%2BmQIL%2FlyTX8Fgls9KI8SrV%2BohgPMjP4xu77okcfC6CkwUs5p4i03jaF1Pd5jXFrA%2BfzbJhS%2BldIFAHPQdlE1mkon3K%2FiAAtKqyX8NNS7RYVsj2TY0tMVlZKEuANE1bWcNBZQHao7cWBFu4j2I8Z%2Bnb9YCjVjofAwA9UqTxcXaKkOGEkBA5Ki%2FdJE1WXww7feHwAY6pgF30WbPPfI4djjNaf7%2FlLi1MViIAhcxhnSquKm9dG%2F91H2RCiHSYhTU0ItF5eBfHNEDn1ABfSlQpBMP4vrBsufqujoJJdU4b5yuxs1KUDGDhDmJQur0CnJsU1hCtJbqx5jVAptOdWDaIxWL0UUwUtmf70BtbohcG6tyu9AuV%2BDN4ajRsQyiNv2JNXsaXQMU4ozK7wVoQQt3rtK8ELfhysjGU5U8zXQ4&X-Amz-Signature=4b56fbecfa49277b195e477aa227c0649bbe592c3d8ff7f5e60b587356e18f46&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZYLSQF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP7%2B69Fj9Bj7n8kKvV%2BzEPjnHek1KTvzqsBViWyGzu4AiBnk4muEsOuep3PaIM4cLojJZRXGH3gbNzrWvvp3XGc6Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMqD%2F1%2FDMrFev0l4LkKtwDHEji7V%2B%2B5r3OBALB%2BR414MNHZLDovVx03449VRVTMqsAhPtQ3YyMLwHJ9hYhhU6nr1io20PEoNi8eIFQJVK96N3eoStolpYajIYCfSm5QhfiU7moUpd37QHFaxnfYpLEfIr8Xti%2B6uwx9fYWBfbDzmN4YNPOWXYTsBpwhUK4F9Ygqn5xEHylpv71UzormVnv62KP1cN2EBsXiH%2FS8S24bgSi9FAEKdUfOFg%2Fi2vTidJ34GA2dVf8umQZYfYolnlXL6wm4nt%2Fq0acOZxB4N91JTgGmUI%2BRjzq%2BCAsgqkjpvGaA%2BxtR68vFfoDFY1CP5QiwIjimtswUY2J5WnF6Z70Gjj3WbiJ6N103tmn72CkLICsvjF9Zz9mJGm2l%2Behxxy1IXIAvOKGJgJmNU4VMrxqSHBl%2FD4RLIgi1ojQaebm3EPTjRn%2FqPnCzPbSWtURl7k%2BmQIL%2FlyTX8Fgls9KI8SrV%2BohgPMjP4xu77okcfC6CkwUs5p4i03jaF1Pd5jXFrA%2BfzbJhS%2BldIFAHPQdlE1mkon3K%2FiAAtKqyX8NNS7RYVsj2TY0tMVlZKEuANE1bWcNBZQHao7cWBFu4j2I8Z%2Bnb9YCjVjofAwA9UqTxcXaKkOGEkBA5Ki%2FdJE1WXww7feHwAY6pgF30WbPPfI4djjNaf7%2FlLi1MViIAhcxhnSquKm9dG%2F91H2RCiHSYhTU0ItF5eBfHNEDn1ABfSlQpBMP4vrBsufqujoJJdU4b5yuxs1KUDGDhDmJQur0CnJsU1hCtJbqx5jVAptOdWDaIxWL0UUwUtmf70BtbohcG6tyu9AuV%2BDN4ajRsQyiNv2JNXsaXQMU4ozK7wVoQQt3rtK8ELfhysjGU5U8zXQ4&X-Amz-Signature=5adfda1512775ef13593bdd1b4c8a7a2478c634652a4f87fdf484758a77a5ce5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZYLSQF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP7%2B69Fj9Bj7n8kKvV%2BzEPjnHek1KTvzqsBViWyGzu4AiBnk4muEsOuep3PaIM4cLojJZRXGH3gbNzrWvvp3XGc6Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMqD%2F1%2FDMrFev0l4LkKtwDHEji7V%2B%2B5r3OBALB%2BR414MNHZLDovVx03449VRVTMqsAhPtQ3YyMLwHJ9hYhhU6nr1io20PEoNi8eIFQJVK96N3eoStolpYajIYCfSm5QhfiU7moUpd37QHFaxnfYpLEfIr8Xti%2B6uwx9fYWBfbDzmN4YNPOWXYTsBpwhUK4F9Ygqn5xEHylpv71UzormVnv62KP1cN2EBsXiH%2FS8S24bgSi9FAEKdUfOFg%2Fi2vTidJ34GA2dVf8umQZYfYolnlXL6wm4nt%2Fq0acOZxB4N91JTgGmUI%2BRjzq%2BCAsgqkjpvGaA%2BxtR68vFfoDFY1CP5QiwIjimtswUY2J5WnF6Z70Gjj3WbiJ6N103tmn72CkLICsvjF9Zz9mJGm2l%2Behxxy1IXIAvOKGJgJmNU4VMrxqSHBl%2FD4RLIgi1ojQaebm3EPTjRn%2FqPnCzPbSWtURl7k%2BmQIL%2FlyTX8Fgls9KI8SrV%2BohgPMjP4xu77okcfC6CkwUs5p4i03jaF1Pd5jXFrA%2BfzbJhS%2BldIFAHPQdlE1mkon3K%2FiAAtKqyX8NNS7RYVsj2TY0tMVlZKEuANE1bWcNBZQHao7cWBFu4j2I8Z%2Bnb9YCjVjofAwA9UqTxcXaKkOGEkBA5Ki%2FdJE1WXww7feHwAY6pgF30WbPPfI4djjNaf7%2FlLi1MViIAhcxhnSquKm9dG%2F91H2RCiHSYhTU0ItF5eBfHNEDn1ABfSlQpBMP4vrBsufqujoJJdU4b5yuxs1KUDGDhDmJQur0CnJsU1hCtJbqx5jVAptOdWDaIxWL0UUwUtmf70BtbohcG6tyu9AuV%2BDN4ajRsQyiNv2JNXsaXQMU4ozK7wVoQQt3rtK8ELfhysjGU5U8zXQ4&X-Amz-Signature=82ac394421e24917f50debe5ebd677ed1831f5773718bda614de25758ebafcca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZYLSQF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP7%2B69Fj9Bj7n8kKvV%2BzEPjnHek1KTvzqsBViWyGzu4AiBnk4muEsOuep3PaIM4cLojJZRXGH3gbNzrWvvp3XGc6Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMqD%2F1%2FDMrFev0l4LkKtwDHEji7V%2B%2B5r3OBALB%2BR414MNHZLDovVx03449VRVTMqsAhPtQ3YyMLwHJ9hYhhU6nr1io20PEoNi8eIFQJVK96N3eoStolpYajIYCfSm5QhfiU7moUpd37QHFaxnfYpLEfIr8Xti%2B6uwx9fYWBfbDzmN4YNPOWXYTsBpwhUK4F9Ygqn5xEHylpv71UzormVnv62KP1cN2EBsXiH%2FS8S24bgSi9FAEKdUfOFg%2Fi2vTidJ34GA2dVf8umQZYfYolnlXL6wm4nt%2Fq0acOZxB4N91JTgGmUI%2BRjzq%2BCAsgqkjpvGaA%2BxtR68vFfoDFY1CP5QiwIjimtswUY2J5WnF6Z70Gjj3WbiJ6N103tmn72CkLICsvjF9Zz9mJGm2l%2Behxxy1IXIAvOKGJgJmNU4VMrxqSHBl%2FD4RLIgi1ojQaebm3EPTjRn%2FqPnCzPbSWtURl7k%2BmQIL%2FlyTX8Fgls9KI8SrV%2BohgPMjP4xu77okcfC6CkwUs5p4i03jaF1Pd5jXFrA%2BfzbJhS%2BldIFAHPQdlE1mkon3K%2FiAAtKqyX8NNS7RYVsj2TY0tMVlZKEuANE1bWcNBZQHao7cWBFu4j2I8Z%2Bnb9YCjVjofAwA9UqTxcXaKkOGEkBA5Ki%2FdJE1WXww7feHwAY6pgF30WbPPfI4djjNaf7%2FlLi1MViIAhcxhnSquKm9dG%2F91H2RCiHSYhTU0ItF5eBfHNEDn1ABfSlQpBMP4vrBsufqujoJJdU4b5yuxs1KUDGDhDmJQur0CnJsU1hCtJbqx5jVAptOdWDaIxWL0UUwUtmf70BtbohcG6tyu9AuV%2BDN4ajRsQyiNv2JNXsaXQMU4ozK7wVoQQt3rtK8ELfhysjGU5U8zXQ4&X-Amz-Signature=25e6f1e5ff09c0a1ca557491bf6c13bea4dcdf16cc13e819178908b4352f8ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
