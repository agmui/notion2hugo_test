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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TH63L6T%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDdyv1IJz6N7K82uI5MyL8Pu5JbCecA906MCweD77jAxAIhAMxAiv6Ta9oFu%2BGPLD28C7X7eL%2BQNo%2B8ujW5q34zba6pKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH30TFIAryGFR82FQq3ANGbQxA%2FaglTNcSDvBWq86v6OLhgWbL27fPYePqmCKibvq7%2B4k5iLeosWZxSdMBqiXlEbOgQ8FVoeOm9%2FMI6h6wfpSZW%2Be8WjP%2F4s2GIv3xKMI2KU1uoC6%2Fuw0VIzsdzgR%2FZaRb0mrKXFfXsZPWJ4iMzDTFWCcTIDnxq%2BrW4uHXnlNtoqj0p2Snvw16e3gjJY69EexqjvmrmPWTnN1i0665ZinXaCpRJIHSdr%2BLeSNg3VOn5jhLn6804AoPw3t230pO550tvT5%2BsJTJ%2FMQoduLdH12h2GEeK3bCWwM8K6lU%2BO2w24vWOkDN3x3jBGw6ohRZ8vlBcRfBmgnHywzgqx8RnYWqmg53cZjJce1G4jkKpBgSxkiRCPiBGK4ERkrVbnT7aZmvD3Y6BvmNwYppJEflaxC0%2FH%2BoaOgiK8OCD%2BsNS5Mc8On1FKEykwQQ8vRFCzrMrUv5oMFSDeYLsPkW0Cc0Ocaz2FF1ODwFy1kTKxbXi38DRk9d2jdhwKGb9vlZw%2F4ZNbfJb5i9KYSH9Fhv5rA%2B9cN2ANB%2FYSZ0Xt0wjMRYy0LtL9V%2FNxbtcvBNvqnTaOQ3BBspwiaTXnVKLrb9iZ%2BuxD9rXir4tiTQg%2BDKRr1OaLzYwR8h1kkm3bdIfjDXhqjCBjqkAbnJWI5rIGkPFckMX%2BbhmChvfaWR5j8JPnNwnUkKDrKQ28sJVos14KOHv6otZDoTAJq%2FrkOZ56ryowORBxkSkNqWpkglynAmZ3fKelZiQycGUJ310%2FrOz3EO0ifEZdsIXljE0oe9a0gSDsTtgOtS0f2yVejneU8NuSBr3e%2FFpv1%2FBKpM%2BNxRVexhGrNJOQnk9FwqKGVMOMwHGqvymdXIT83wkhT5&X-Amz-Signature=3fc683aff80deed2389f75ca2178dfb3a7162fac43fbf18bd95e1b4896c81aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TH63L6T%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDdyv1IJz6N7K82uI5MyL8Pu5JbCecA906MCweD77jAxAIhAMxAiv6Ta9oFu%2BGPLD28C7X7eL%2BQNo%2B8ujW5q34zba6pKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH30TFIAryGFR82FQq3ANGbQxA%2FaglTNcSDvBWq86v6OLhgWbL27fPYePqmCKibvq7%2B4k5iLeosWZxSdMBqiXlEbOgQ8FVoeOm9%2FMI6h6wfpSZW%2Be8WjP%2F4s2GIv3xKMI2KU1uoC6%2Fuw0VIzsdzgR%2FZaRb0mrKXFfXsZPWJ4iMzDTFWCcTIDnxq%2BrW4uHXnlNtoqj0p2Snvw16e3gjJY69EexqjvmrmPWTnN1i0665ZinXaCpRJIHSdr%2BLeSNg3VOn5jhLn6804AoPw3t230pO550tvT5%2BsJTJ%2FMQoduLdH12h2GEeK3bCWwM8K6lU%2BO2w24vWOkDN3x3jBGw6ohRZ8vlBcRfBmgnHywzgqx8RnYWqmg53cZjJce1G4jkKpBgSxkiRCPiBGK4ERkrVbnT7aZmvD3Y6BvmNwYppJEflaxC0%2FH%2BoaOgiK8OCD%2BsNS5Mc8On1FKEykwQQ8vRFCzrMrUv5oMFSDeYLsPkW0Cc0Ocaz2FF1ODwFy1kTKxbXi38DRk9d2jdhwKGb9vlZw%2F4ZNbfJb5i9KYSH9Fhv5rA%2B9cN2ANB%2FYSZ0Xt0wjMRYy0LtL9V%2FNxbtcvBNvqnTaOQ3BBspwiaTXnVKLrb9iZ%2BuxD9rXir4tiTQg%2BDKRr1OaLzYwR8h1kkm3bdIfjDXhqjCBjqkAbnJWI5rIGkPFckMX%2BbhmChvfaWR5j8JPnNwnUkKDrKQ28sJVos14KOHv6otZDoTAJq%2FrkOZ56ryowORBxkSkNqWpkglynAmZ3fKelZiQycGUJ310%2FrOz3EO0ifEZdsIXljE0oe9a0gSDsTtgOtS0f2yVejneU8NuSBr3e%2FFpv1%2FBKpM%2BNxRVexhGrNJOQnk9FwqKGVMOMwHGqvymdXIT83wkhT5&X-Amz-Signature=d807db0a0e294b51f340fc0bce1c81f76792b28fe4fbd979895f56f65d6d6643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TH63L6T%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDdyv1IJz6N7K82uI5MyL8Pu5JbCecA906MCweD77jAxAIhAMxAiv6Ta9oFu%2BGPLD28C7X7eL%2BQNo%2B8ujW5q34zba6pKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH30TFIAryGFR82FQq3ANGbQxA%2FaglTNcSDvBWq86v6OLhgWbL27fPYePqmCKibvq7%2B4k5iLeosWZxSdMBqiXlEbOgQ8FVoeOm9%2FMI6h6wfpSZW%2Be8WjP%2F4s2GIv3xKMI2KU1uoC6%2Fuw0VIzsdzgR%2FZaRb0mrKXFfXsZPWJ4iMzDTFWCcTIDnxq%2BrW4uHXnlNtoqj0p2Snvw16e3gjJY69EexqjvmrmPWTnN1i0665ZinXaCpRJIHSdr%2BLeSNg3VOn5jhLn6804AoPw3t230pO550tvT5%2BsJTJ%2FMQoduLdH12h2GEeK3bCWwM8K6lU%2BO2w24vWOkDN3x3jBGw6ohRZ8vlBcRfBmgnHywzgqx8RnYWqmg53cZjJce1G4jkKpBgSxkiRCPiBGK4ERkrVbnT7aZmvD3Y6BvmNwYppJEflaxC0%2FH%2BoaOgiK8OCD%2BsNS5Mc8On1FKEykwQQ8vRFCzrMrUv5oMFSDeYLsPkW0Cc0Ocaz2FF1ODwFy1kTKxbXi38DRk9d2jdhwKGb9vlZw%2F4ZNbfJb5i9KYSH9Fhv5rA%2B9cN2ANB%2FYSZ0Xt0wjMRYy0LtL9V%2FNxbtcvBNvqnTaOQ3BBspwiaTXnVKLrb9iZ%2BuxD9rXir4tiTQg%2BDKRr1OaLzYwR8h1kkm3bdIfjDXhqjCBjqkAbnJWI5rIGkPFckMX%2BbhmChvfaWR5j8JPnNwnUkKDrKQ28sJVos14KOHv6otZDoTAJq%2FrkOZ56ryowORBxkSkNqWpkglynAmZ3fKelZiQycGUJ310%2FrOz3EO0ifEZdsIXljE0oe9a0gSDsTtgOtS0f2yVejneU8NuSBr3e%2FFpv1%2FBKpM%2BNxRVexhGrNJOQnk9FwqKGVMOMwHGqvymdXIT83wkhT5&X-Amz-Signature=fbebf340775bfcd18040de7676a63dac68c4f0fe3e3a864e364c3144de391ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TH63L6T%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDdyv1IJz6N7K82uI5MyL8Pu5JbCecA906MCweD77jAxAIhAMxAiv6Ta9oFu%2BGPLD28C7X7eL%2BQNo%2B8ujW5q34zba6pKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH30TFIAryGFR82FQq3ANGbQxA%2FaglTNcSDvBWq86v6OLhgWbL27fPYePqmCKibvq7%2B4k5iLeosWZxSdMBqiXlEbOgQ8FVoeOm9%2FMI6h6wfpSZW%2Be8WjP%2F4s2GIv3xKMI2KU1uoC6%2Fuw0VIzsdzgR%2FZaRb0mrKXFfXsZPWJ4iMzDTFWCcTIDnxq%2BrW4uHXnlNtoqj0p2Snvw16e3gjJY69EexqjvmrmPWTnN1i0665ZinXaCpRJIHSdr%2BLeSNg3VOn5jhLn6804AoPw3t230pO550tvT5%2BsJTJ%2FMQoduLdH12h2GEeK3bCWwM8K6lU%2BO2w24vWOkDN3x3jBGw6ohRZ8vlBcRfBmgnHywzgqx8RnYWqmg53cZjJce1G4jkKpBgSxkiRCPiBGK4ERkrVbnT7aZmvD3Y6BvmNwYppJEflaxC0%2FH%2BoaOgiK8OCD%2BsNS5Mc8On1FKEykwQQ8vRFCzrMrUv5oMFSDeYLsPkW0Cc0Ocaz2FF1ODwFy1kTKxbXi38DRk9d2jdhwKGb9vlZw%2F4ZNbfJb5i9KYSH9Fhv5rA%2B9cN2ANB%2FYSZ0Xt0wjMRYy0LtL9V%2FNxbtcvBNvqnTaOQ3BBspwiaTXnVKLrb9iZ%2BuxD9rXir4tiTQg%2BDKRr1OaLzYwR8h1kkm3bdIfjDXhqjCBjqkAbnJWI5rIGkPFckMX%2BbhmChvfaWR5j8JPnNwnUkKDrKQ28sJVos14KOHv6otZDoTAJq%2FrkOZ56ryowORBxkSkNqWpkglynAmZ3fKelZiQycGUJ310%2FrOz3EO0ifEZdsIXljE0oe9a0gSDsTtgOtS0f2yVejneU8NuSBr3e%2FFpv1%2FBKpM%2BNxRVexhGrNJOQnk9FwqKGVMOMwHGqvymdXIT83wkhT5&X-Amz-Signature=2b308b9b8035cc4470204e5f9291ff0d4343a26eab73984c0ca600ed65c8f63c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TH63L6T%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDdyv1IJz6N7K82uI5MyL8Pu5JbCecA906MCweD77jAxAIhAMxAiv6Ta9oFu%2BGPLD28C7X7eL%2BQNo%2B8ujW5q34zba6pKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH30TFIAryGFR82FQq3ANGbQxA%2FaglTNcSDvBWq86v6OLhgWbL27fPYePqmCKibvq7%2B4k5iLeosWZxSdMBqiXlEbOgQ8FVoeOm9%2FMI6h6wfpSZW%2Be8WjP%2F4s2GIv3xKMI2KU1uoC6%2Fuw0VIzsdzgR%2FZaRb0mrKXFfXsZPWJ4iMzDTFWCcTIDnxq%2BrW4uHXnlNtoqj0p2Snvw16e3gjJY69EexqjvmrmPWTnN1i0665ZinXaCpRJIHSdr%2BLeSNg3VOn5jhLn6804AoPw3t230pO550tvT5%2BsJTJ%2FMQoduLdH12h2GEeK3bCWwM8K6lU%2BO2w24vWOkDN3x3jBGw6ohRZ8vlBcRfBmgnHywzgqx8RnYWqmg53cZjJce1G4jkKpBgSxkiRCPiBGK4ERkrVbnT7aZmvD3Y6BvmNwYppJEflaxC0%2FH%2BoaOgiK8OCD%2BsNS5Mc8On1FKEykwQQ8vRFCzrMrUv5oMFSDeYLsPkW0Cc0Ocaz2FF1ODwFy1kTKxbXi38DRk9d2jdhwKGb9vlZw%2F4ZNbfJb5i9KYSH9Fhv5rA%2B9cN2ANB%2FYSZ0Xt0wjMRYy0LtL9V%2FNxbtcvBNvqnTaOQ3BBspwiaTXnVKLrb9iZ%2BuxD9rXir4tiTQg%2BDKRr1OaLzYwR8h1kkm3bdIfjDXhqjCBjqkAbnJWI5rIGkPFckMX%2BbhmChvfaWR5j8JPnNwnUkKDrKQ28sJVos14KOHv6otZDoTAJq%2FrkOZ56ryowORBxkSkNqWpkglynAmZ3fKelZiQycGUJ310%2FrOz3EO0ifEZdsIXljE0oe9a0gSDsTtgOtS0f2yVejneU8NuSBr3e%2FFpv1%2FBKpM%2BNxRVexhGrNJOQnk9FwqKGVMOMwHGqvymdXIT83wkhT5&X-Amz-Signature=e4328f55dfe2b3f4111ca95559aef4a7ed03377615fcaa86f8543d4eb8d15ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TH63L6T%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDdyv1IJz6N7K82uI5MyL8Pu5JbCecA906MCweD77jAxAIhAMxAiv6Ta9oFu%2BGPLD28C7X7eL%2BQNo%2B8ujW5q34zba6pKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH30TFIAryGFR82FQq3ANGbQxA%2FaglTNcSDvBWq86v6OLhgWbL27fPYePqmCKibvq7%2B4k5iLeosWZxSdMBqiXlEbOgQ8FVoeOm9%2FMI6h6wfpSZW%2Be8WjP%2F4s2GIv3xKMI2KU1uoC6%2Fuw0VIzsdzgR%2FZaRb0mrKXFfXsZPWJ4iMzDTFWCcTIDnxq%2BrW4uHXnlNtoqj0p2Snvw16e3gjJY69EexqjvmrmPWTnN1i0665ZinXaCpRJIHSdr%2BLeSNg3VOn5jhLn6804AoPw3t230pO550tvT5%2BsJTJ%2FMQoduLdH12h2GEeK3bCWwM8K6lU%2BO2w24vWOkDN3x3jBGw6ohRZ8vlBcRfBmgnHywzgqx8RnYWqmg53cZjJce1G4jkKpBgSxkiRCPiBGK4ERkrVbnT7aZmvD3Y6BvmNwYppJEflaxC0%2FH%2BoaOgiK8OCD%2BsNS5Mc8On1FKEykwQQ8vRFCzrMrUv5oMFSDeYLsPkW0Cc0Ocaz2FF1ODwFy1kTKxbXi38DRk9d2jdhwKGb9vlZw%2F4ZNbfJb5i9KYSH9Fhv5rA%2B9cN2ANB%2FYSZ0Xt0wjMRYy0LtL9V%2FNxbtcvBNvqnTaOQ3BBspwiaTXnVKLrb9iZ%2BuxD9rXir4tiTQg%2BDKRr1OaLzYwR8h1kkm3bdIfjDXhqjCBjqkAbnJWI5rIGkPFckMX%2BbhmChvfaWR5j8JPnNwnUkKDrKQ28sJVos14KOHv6otZDoTAJq%2FrkOZ56ryowORBxkSkNqWpkglynAmZ3fKelZiQycGUJ310%2FrOz3EO0ifEZdsIXljE0oe9a0gSDsTtgOtS0f2yVejneU8NuSBr3e%2FFpv1%2FBKpM%2BNxRVexhGrNJOQnk9FwqKGVMOMwHGqvymdXIT83wkhT5&X-Amz-Signature=bba93341616b5b070469de2a9133b528f2692b31e358c8124a0302cf3416e2e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TH63L6T%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDdyv1IJz6N7K82uI5MyL8Pu5JbCecA906MCweD77jAxAIhAMxAiv6Ta9oFu%2BGPLD28C7X7eL%2BQNo%2B8ujW5q34zba6pKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH30TFIAryGFR82FQq3ANGbQxA%2FaglTNcSDvBWq86v6OLhgWbL27fPYePqmCKibvq7%2B4k5iLeosWZxSdMBqiXlEbOgQ8FVoeOm9%2FMI6h6wfpSZW%2Be8WjP%2F4s2GIv3xKMI2KU1uoC6%2Fuw0VIzsdzgR%2FZaRb0mrKXFfXsZPWJ4iMzDTFWCcTIDnxq%2BrW4uHXnlNtoqj0p2Snvw16e3gjJY69EexqjvmrmPWTnN1i0665ZinXaCpRJIHSdr%2BLeSNg3VOn5jhLn6804AoPw3t230pO550tvT5%2BsJTJ%2FMQoduLdH12h2GEeK3bCWwM8K6lU%2BO2w24vWOkDN3x3jBGw6ohRZ8vlBcRfBmgnHywzgqx8RnYWqmg53cZjJce1G4jkKpBgSxkiRCPiBGK4ERkrVbnT7aZmvD3Y6BvmNwYppJEflaxC0%2FH%2BoaOgiK8OCD%2BsNS5Mc8On1FKEykwQQ8vRFCzrMrUv5oMFSDeYLsPkW0Cc0Ocaz2FF1ODwFy1kTKxbXi38DRk9d2jdhwKGb9vlZw%2F4ZNbfJb5i9KYSH9Fhv5rA%2B9cN2ANB%2FYSZ0Xt0wjMRYy0LtL9V%2FNxbtcvBNvqnTaOQ3BBspwiaTXnVKLrb9iZ%2BuxD9rXir4tiTQg%2BDKRr1OaLzYwR8h1kkm3bdIfjDXhqjCBjqkAbnJWI5rIGkPFckMX%2BbhmChvfaWR5j8JPnNwnUkKDrKQ28sJVos14KOHv6otZDoTAJq%2FrkOZ56ryowORBxkSkNqWpkglynAmZ3fKelZiQycGUJ310%2FrOz3EO0ifEZdsIXljE0oe9a0gSDsTtgOtS0f2yVejneU8NuSBr3e%2FFpv1%2FBKpM%2BNxRVexhGrNJOQnk9FwqKGVMOMwHGqvymdXIT83wkhT5&X-Amz-Signature=cfe8531a78595693e59c42818959defc3478468312d6e39531b417d21fbffb5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TH63L6T%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDdyv1IJz6N7K82uI5MyL8Pu5JbCecA906MCweD77jAxAIhAMxAiv6Ta9oFu%2BGPLD28C7X7eL%2BQNo%2B8ujW5q34zba6pKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH30TFIAryGFR82FQq3ANGbQxA%2FaglTNcSDvBWq86v6OLhgWbL27fPYePqmCKibvq7%2B4k5iLeosWZxSdMBqiXlEbOgQ8FVoeOm9%2FMI6h6wfpSZW%2Be8WjP%2F4s2GIv3xKMI2KU1uoC6%2Fuw0VIzsdzgR%2FZaRb0mrKXFfXsZPWJ4iMzDTFWCcTIDnxq%2BrW4uHXnlNtoqj0p2Snvw16e3gjJY69EexqjvmrmPWTnN1i0665ZinXaCpRJIHSdr%2BLeSNg3VOn5jhLn6804AoPw3t230pO550tvT5%2BsJTJ%2FMQoduLdH12h2GEeK3bCWwM8K6lU%2BO2w24vWOkDN3x3jBGw6ohRZ8vlBcRfBmgnHywzgqx8RnYWqmg53cZjJce1G4jkKpBgSxkiRCPiBGK4ERkrVbnT7aZmvD3Y6BvmNwYppJEflaxC0%2FH%2BoaOgiK8OCD%2BsNS5Mc8On1FKEykwQQ8vRFCzrMrUv5oMFSDeYLsPkW0Cc0Ocaz2FF1ODwFy1kTKxbXi38DRk9d2jdhwKGb9vlZw%2F4ZNbfJb5i9KYSH9Fhv5rA%2B9cN2ANB%2FYSZ0Xt0wjMRYy0LtL9V%2FNxbtcvBNvqnTaOQ3BBspwiaTXnVKLrb9iZ%2BuxD9rXir4tiTQg%2BDKRr1OaLzYwR8h1kkm3bdIfjDXhqjCBjqkAbnJWI5rIGkPFckMX%2BbhmChvfaWR5j8JPnNwnUkKDrKQ28sJVos14KOHv6otZDoTAJq%2FrkOZ56ryowORBxkSkNqWpkglynAmZ3fKelZiQycGUJ310%2FrOz3EO0ifEZdsIXljE0oe9a0gSDsTtgOtS0f2yVejneU8NuSBr3e%2FFpv1%2FBKpM%2BNxRVexhGrNJOQnk9FwqKGVMOMwHGqvymdXIT83wkhT5&X-Amz-Signature=a52fcb6430e3573303198508e71db192869a40aa3ee7f7fe58acb8ddf35fc39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
