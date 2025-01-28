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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2SQG2X%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCplGBB%2FQxXpBpzBZRQdBK9Da9UyN0Bssf0wfzuNIBL%2BAIgOn9pn6GBDbO21S5YhD4hN3F7lrFleTGv%2BKnNjSjM%2BUoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMH9lUWC%2FYNB7flKGircAwr25jbbG0QIPzmgjWbKfDjm3k4VtI06WMjMWljdXrPKoO%2BbxwisezbHo89qzItT2zI26vHd8H9jp2D5i2a%2FYmw7llckro0VYLwtfnoR2Uax6YWed%2FCI5DgW8n8IKya8DHv2lAZ9zhA56LCvefQK5HvCR9aGYMkwm2hCaO%2BYYyMcDUxQnznbuG%2Bpoqsrk1i%2B1tcTpYSjgx8AZM%2Bbo%2F4lZAnAG0QdgDzDghq%2BJCNOjupJS%2BsiyVq7LUXf%2FICxSCz4Qv848BLeAU6VOSFzLyCMEnVle1EPKLhmQAlF6UC0RzUegMEd3lstVGlGLsoDhl5nZdith%2Fs2JQTaZ912CLHwg3wYcSciDaH1aw5OJ%2B9Qq%2F6bKpS00lLMqYWbgEq41gFdLlg23cZFcXlZOWZq3lR2ttTLLqwYtRg9WCMrV2ag7hrM8AjdHQ6ZYxwaczBTro9xJ8lDoYD9NVvz6on0wq5fzhFrDSZOns6rOu7gEFX9IQf7PFHoocHIuoQuh6fTUdds5d1cixofTknKuJBmpoUrzV9500HEeLZHhSCArmihS2HmKYmZbrJF28w6qWFVRaSLmJ1PwBpyvkR8A6jy0fvDeHZRJ7We44WrRfPpY6uogpRVR5wEcJNSipJUChJyMMyV5bwGOqUBaQoxaPnW9sZUHPtIkajpljXNzBgDDa8kDjP6oTGWu4c%2Bzj3IbiU0nH%2FTKTD%2B1BuJmX9BNa2ee20fslHTZaVpR2YHAGIXppt1KePXbV0tEZX0vS5z9AZZQmgaoXz3LTsDP2v%2FyVIOoEntUYiBjiY%2FQ8i2vUH3Wp7Us6jIosv7GxZtSdcGdwrkEBCVs3KemDqy3wyLirSy%2F%2B3RB1UvJi2FY%2B1bVkZB&X-Amz-Signature=54e6e81fe57289631930ea32e9080c63f8022b58b1b25f8f84d8f553a6df7736&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2SQG2X%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCplGBB%2FQxXpBpzBZRQdBK9Da9UyN0Bssf0wfzuNIBL%2BAIgOn9pn6GBDbO21S5YhD4hN3F7lrFleTGv%2BKnNjSjM%2BUoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMH9lUWC%2FYNB7flKGircAwr25jbbG0QIPzmgjWbKfDjm3k4VtI06WMjMWljdXrPKoO%2BbxwisezbHo89qzItT2zI26vHd8H9jp2D5i2a%2FYmw7llckro0VYLwtfnoR2Uax6YWed%2FCI5DgW8n8IKya8DHv2lAZ9zhA56LCvefQK5HvCR9aGYMkwm2hCaO%2BYYyMcDUxQnznbuG%2Bpoqsrk1i%2B1tcTpYSjgx8AZM%2Bbo%2F4lZAnAG0QdgDzDghq%2BJCNOjupJS%2BsiyVq7LUXf%2FICxSCz4Qv848BLeAU6VOSFzLyCMEnVle1EPKLhmQAlF6UC0RzUegMEd3lstVGlGLsoDhl5nZdith%2Fs2JQTaZ912CLHwg3wYcSciDaH1aw5OJ%2B9Qq%2F6bKpS00lLMqYWbgEq41gFdLlg23cZFcXlZOWZq3lR2ttTLLqwYtRg9WCMrV2ag7hrM8AjdHQ6ZYxwaczBTro9xJ8lDoYD9NVvz6on0wq5fzhFrDSZOns6rOu7gEFX9IQf7PFHoocHIuoQuh6fTUdds5d1cixofTknKuJBmpoUrzV9500HEeLZHhSCArmihS2HmKYmZbrJF28w6qWFVRaSLmJ1PwBpyvkR8A6jy0fvDeHZRJ7We44WrRfPpY6uogpRVR5wEcJNSipJUChJyMMyV5bwGOqUBaQoxaPnW9sZUHPtIkajpljXNzBgDDa8kDjP6oTGWu4c%2Bzj3IbiU0nH%2FTKTD%2B1BuJmX9BNa2ee20fslHTZaVpR2YHAGIXppt1KePXbV0tEZX0vS5z9AZZQmgaoXz3LTsDP2v%2FyVIOoEntUYiBjiY%2FQ8i2vUH3Wp7Us6jIosv7GxZtSdcGdwrkEBCVs3KemDqy3wyLirSy%2F%2B3RB1UvJi2FY%2B1bVkZB&X-Amz-Signature=b578a6a56df612613822cac57fe7f01222d4ac84b904c4732a1c95dd4c112bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2SQG2X%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCplGBB%2FQxXpBpzBZRQdBK9Da9UyN0Bssf0wfzuNIBL%2BAIgOn9pn6GBDbO21S5YhD4hN3F7lrFleTGv%2BKnNjSjM%2BUoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMH9lUWC%2FYNB7flKGircAwr25jbbG0QIPzmgjWbKfDjm3k4VtI06WMjMWljdXrPKoO%2BbxwisezbHo89qzItT2zI26vHd8H9jp2D5i2a%2FYmw7llckro0VYLwtfnoR2Uax6YWed%2FCI5DgW8n8IKya8DHv2lAZ9zhA56LCvefQK5HvCR9aGYMkwm2hCaO%2BYYyMcDUxQnznbuG%2Bpoqsrk1i%2B1tcTpYSjgx8AZM%2Bbo%2F4lZAnAG0QdgDzDghq%2BJCNOjupJS%2BsiyVq7LUXf%2FICxSCz4Qv848BLeAU6VOSFzLyCMEnVle1EPKLhmQAlF6UC0RzUegMEd3lstVGlGLsoDhl5nZdith%2Fs2JQTaZ912CLHwg3wYcSciDaH1aw5OJ%2B9Qq%2F6bKpS00lLMqYWbgEq41gFdLlg23cZFcXlZOWZq3lR2ttTLLqwYtRg9WCMrV2ag7hrM8AjdHQ6ZYxwaczBTro9xJ8lDoYD9NVvz6on0wq5fzhFrDSZOns6rOu7gEFX9IQf7PFHoocHIuoQuh6fTUdds5d1cixofTknKuJBmpoUrzV9500HEeLZHhSCArmihS2HmKYmZbrJF28w6qWFVRaSLmJ1PwBpyvkR8A6jy0fvDeHZRJ7We44WrRfPpY6uogpRVR5wEcJNSipJUChJyMMyV5bwGOqUBaQoxaPnW9sZUHPtIkajpljXNzBgDDa8kDjP6oTGWu4c%2Bzj3IbiU0nH%2FTKTD%2B1BuJmX9BNa2ee20fslHTZaVpR2YHAGIXppt1KePXbV0tEZX0vS5z9AZZQmgaoXz3LTsDP2v%2FyVIOoEntUYiBjiY%2FQ8i2vUH3Wp7Us6jIosv7GxZtSdcGdwrkEBCVs3KemDqy3wyLirSy%2F%2B3RB1UvJi2FY%2B1bVkZB&X-Amz-Signature=346460568fdf140b509cefc7ece53c8d73d35202a926e666054a2e2ffe58127c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2SQG2X%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCplGBB%2FQxXpBpzBZRQdBK9Da9UyN0Bssf0wfzuNIBL%2BAIgOn9pn6GBDbO21S5YhD4hN3F7lrFleTGv%2BKnNjSjM%2BUoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMH9lUWC%2FYNB7flKGircAwr25jbbG0QIPzmgjWbKfDjm3k4VtI06WMjMWljdXrPKoO%2BbxwisezbHo89qzItT2zI26vHd8H9jp2D5i2a%2FYmw7llckro0VYLwtfnoR2Uax6YWed%2FCI5DgW8n8IKya8DHv2lAZ9zhA56LCvefQK5HvCR9aGYMkwm2hCaO%2BYYyMcDUxQnznbuG%2Bpoqsrk1i%2B1tcTpYSjgx8AZM%2Bbo%2F4lZAnAG0QdgDzDghq%2BJCNOjupJS%2BsiyVq7LUXf%2FICxSCz4Qv848BLeAU6VOSFzLyCMEnVle1EPKLhmQAlF6UC0RzUegMEd3lstVGlGLsoDhl5nZdith%2Fs2JQTaZ912CLHwg3wYcSciDaH1aw5OJ%2B9Qq%2F6bKpS00lLMqYWbgEq41gFdLlg23cZFcXlZOWZq3lR2ttTLLqwYtRg9WCMrV2ag7hrM8AjdHQ6ZYxwaczBTro9xJ8lDoYD9NVvz6on0wq5fzhFrDSZOns6rOu7gEFX9IQf7PFHoocHIuoQuh6fTUdds5d1cixofTknKuJBmpoUrzV9500HEeLZHhSCArmihS2HmKYmZbrJF28w6qWFVRaSLmJ1PwBpyvkR8A6jy0fvDeHZRJ7We44WrRfPpY6uogpRVR5wEcJNSipJUChJyMMyV5bwGOqUBaQoxaPnW9sZUHPtIkajpljXNzBgDDa8kDjP6oTGWu4c%2Bzj3IbiU0nH%2FTKTD%2B1BuJmX9BNa2ee20fslHTZaVpR2YHAGIXppt1KePXbV0tEZX0vS5z9AZZQmgaoXz3LTsDP2v%2FyVIOoEntUYiBjiY%2FQ8i2vUH3Wp7Us6jIosv7GxZtSdcGdwrkEBCVs3KemDqy3wyLirSy%2F%2B3RB1UvJi2FY%2B1bVkZB&X-Amz-Signature=e108c941dece8c918664ad0458de26c269c50290bc4b509959a150c86ecf09df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2SQG2X%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCplGBB%2FQxXpBpzBZRQdBK9Da9UyN0Bssf0wfzuNIBL%2BAIgOn9pn6GBDbO21S5YhD4hN3F7lrFleTGv%2BKnNjSjM%2BUoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMH9lUWC%2FYNB7flKGircAwr25jbbG0QIPzmgjWbKfDjm3k4VtI06WMjMWljdXrPKoO%2BbxwisezbHo89qzItT2zI26vHd8H9jp2D5i2a%2FYmw7llckro0VYLwtfnoR2Uax6YWed%2FCI5DgW8n8IKya8DHv2lAZ9zhA56LCvefQK5HvCR9aGYMkwm2hCaO%2BYYyMcDUxQnznbuG%2Bpoqsrk1i%2B1tcTpYSjgx8AZM%2Bbo%2F4lZAnAG0QdgDzDghq%2BJCNOjupJS%2BsiyVq7LUXf%2FICxSCz4Qv848BLeAU6VOSFzLyCMEnVle1EPKLhmQAlF6UC0RzUegMEd3lstVGlGLsoDhl5nZdith%2Fs2JQTaZ912CLHwg3wYcSciDaH1aw5OJ%2B9Qq%2F6bKpS00lLMqYWbgEq41gFdLlg23cZFcXlZOWZq3lR2ttTLLqwYtRg9WCMrV2ag7hrM8AjdHQ6ZYxwaczBTro9xJ8lDoYD9NVvz6on0wq5fzhFrDSZOns6rOu7gEFX9IQf7PFHoocHIuoQuh6fTUdds5d1cixofTknKuJBmpoUrzV9500HEeLZHhSCArmihS2HmKYmZbrJF28w6qWFVRaSLmJ1PwBpyvkR8A6jy0fvDeHZRJ7We44WrRfPpY6uogpRVR5wEcJNSipJUChJyMMyV5bwGOqUBaQoxaPnW9sZUHPtIkajpljXNzBgDDa8kDjP6oTGWu4c%2Bzj3IbiU0nH%2FTKTD%2B1BuJmX9BNa2ee20fslHTZaVpR2YHAGIXppt1KePXbV0tEZX0vS5z9AZZQmgaoXz3LTsDP2v%2FyVIOoEntUYiBjiY%2FQ8i2vUH3Wp7Us6jIosv7GxZtSdcGdwrkEBCVs3KemDqy3wyLirSy%2F%2B3RB1UvJi2FY%2B1bVkZB&X-Amz-Signature=86036495e79eac784d8b0461e179ffbf39549c4c61abc2d99c32f5ebcc7c9014&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2SQG2X%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCplGBB%2FQxXpBpzBZRQdBK9Da9UyN0Bssf0wfzuNIBL%2BAIgOn9pn6GBDbO21S5YhD4hN3F7lrFleTGv%2BKnNjSjM%2BUoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMH9lUWC%2FYNB7flKGircAwr25jbbG0QIPzmgjWbKfDjm3k4VtI06WMjMWljdXrPKoO%2BbxwisezbHo89qzItT2zI26vHd8H9jp2D5i2a%2FYmw7llckro0VYLwtfnoR2Uax6YWed%2FCI5DgW8n8IKya8DHv2lAZ9zhA56LCvefQK5HvCR9aGYMkwm2hCaO%2BYYyMcDUxQnznbuG%2Bpoqsrk1i%2B1tcTpYSjgx8AZM%2Bbo%2F4lZAnAG0QdgDzDghq%2BJCNOjupJS%2BsiyVq7LUXf%2FICxSCz4Qv848BLeAU6VOSFzLyCMEnVle1EPKLhmQAlF6UC0RzUegMEd3lstVGlGLsoDhl5nZdith%2Fs2JQTaZ912CLHwg3wYcSciDaH1aw5OJ%2B9Qq%2F6bKpS00lLMqYWbgEq41gFdLlg23cZFcXlZOWZq3lR2ttTLLqwYtRg9WCMrV2ag7hrM8AjdHQ6ZYxwaczBTro9xJ8lDoYD9NVvz6on0wq5fzhFrDSZOns6rOu7gEFX9IQf7PFHoocHIuoQuh6fTUdds5d1cixofTknKuJBmpoUrzV9500HEeLZHhSCArmihS2HmKYmZbrJF28w6qWFVRaSLmJ1PwBpyvkR8A6jy0fvDeHZRJ7We44WrRfPpY6uogpRVR5wEcJNSipJUChJyMMyV5bwGOqUBaQoxaPnW9sZUHPtIkajpljXNzBgDDa8kDjP6oTGWu4c%2Bzj3IbiU0nH%2FTKTD%2B1BuJmX9BNa2ee20fslHTZaVpR2YHAGIXppt1KePXbV0tEZX0vS5z9AZZQmgaoXz3LTsDP2v%2FyVIOoEntUYiBjiY%2FQ8i2vUH3Wp7Us6jIosv7GxZtSdcGdwrkEBCVs3KemDqy3wyLirSy%2F%2B3RB1UvJi2FY%2B1bVkZB&X-Amz-Signature=6f65e1b3b34d836edc20843111f960ef05eebf2d6ee3f8b77edea9191f038067&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2SQG2X%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCplGBB%2FQxXpBpzBZRQdBK9Da9UyN0Bssf0wfzuNIBL%2BAIgOn9pn6GBDbO21S5YhD4hN3F7lrFleTGv%2BKnNjSjM%2BUoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMH9lUWC%2FYNB7flKGircAwr25jbbG0QIPzmgjWbKfDjm3k4VtI06WMjMWljdXrPKoO%2BbxwisezbHo89qzItT2zI26vHd8H9jp2D5i2a%2FYmw7llckro0VYLwtfnoR2Uax6YWed%2FCI5DgW8n8IKya8DHv2lAZ9zhA56LCvefQK5HvCR9aGYMkwm2hCaO%2BYYyMcDUxQnznbuG%2Bpoqsrk1i%2B1tcTpYSjgx8AZM%2Bbo%2F4lZAnAG0QdgDzDghq%2BJCNOjupJS%2BsiyVq7LUXf%2FICxSCz4Qv848BLeAU6VOSFzLyCMEnVle1EPKLhmQAlF6UC0RzUegMEd3lstVGlGLsoDhl5nZdith%2Fs2JQTaZ912CLHwg3wYcSciDaH1aw5OJ%2B9Qq%2F6bKpS00lLMqYWbgEq41gFdLlg23cZFcXlZOWZq3lR2ttTLLqwYtRg9WCMrV2ag7hrM8AjdHQ6ZYxwaczBTro9xJ8lDoYD9NVvz6on0wq5fzhFrDSZOns6rOu7gEFX9IQf7PFHoocHIuoQuh6fTUdds5d1cixofTknKuJBmpoUrzV9500HEeLZHhSCArmihS2HmKYmZbrJF28w6qWFVRaSLmJ1PwBpyvkR8A6jy0fvDeHZRJ7We44WrRfPpY6uogpRVR5wEcJNSipJUChJyMMyV5bwGOqUBaQoxaPnW9sZUHPtIkajpljXNzBgDDa8kDjP6oTGWu4c%2Bzj3IbiU0nH%2FTKTD%2B1BuJmX9BNa2ee20fslHTZaVpR2YHAGIXppt1KePXbV0tEZX0vS5z9AZZQmgaoXz3LTsDP2v%2FyVIOoEntUYiBjiY%2FQ8i2vUH3Wp7Us6jIosv7GxZtSdcGdwrkEBCVs3KemDqy3wyLirSy%2F%2B3RB1UvJi2FY%2B1bVkZB&X-Amz-Signature=5e4c0579895500c7b6988f3725f6382553060a916d4d6e1745b3b61abb969e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2SQG2X%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCplGBB%2FQxXpBpzBZRQdBK9Da9UyN0Bssf0wfzuNIBL%2BAIgOn9pn6GBDbO21S5YhD4hN3F7lrFleTGv%2BKnNjSjM%2BUoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMH9lUWC%2FYNB7flKGircAwr25jbbG0QIPzmgjWbKfDjm3k4VtI06WMjMWljdXrPKoO%2BbxwisezbHo89qzItT2zI26vHd8H9jp2D5i2a%2FYmw7llckro0VYLwtfnoR2Uax6YWed%2FCI5DgW8n8IKya8DHv2lAZ9zhA56LCvefQK5HvCR9aGYMkwm2hCaO%2BYYyMcDUxQnznbuG%2Bpoqsrk1i%2B1tcTpYSjgx8AZM%2Bbo%2F4lZAnAG0QdgDzDghq%2BJCNOjupJS%2BsiyVq7LUXf%2FICxSCz4Qv848BLeAU6VOSFzLyCMEnVle1EPKLhmQAlF6UC0RzUegMEd3lstVGlGLsoDhl5nZdith%2Fs2JQTaZ912CLHwg3wYcSciDaH1aw5OJ%2B9Qq%2F6bKpS00lLMqYWbgEq41gFdLlg23cZFcXlZOWZq3lR2ttTLLqwYtRg9WCMrV2ag7hrM8AjdHQ6ZYxwaczBTro9xJ8lDoYD9NVvz6on0wq5fzhFrDSZOns6rOu7gEFX9IQf7PFHoocHIuoQuh6fTUdds5d1cixofTknKuJBmpoUrzV9500HEeLZHhSCArmihS2HmKYmZbrJF28w6qWFVRaSLmJ1PwBpyvkR8A6jy0fvDeHZRJ7We44WrRfPpY6uogpRVR5wEcJNSipJUChJyMMyV5bwGOqUBaQoxaPnW9sZUHPtIkajpljXNzBgDDa8kDjP6oTGWu4c%2Bzj3IbiU0nH%2FTKTD%2B1BuJmX9BNa2ee20fslHTZaVpR2YHAGIXppt1KePXbV0tEZX0vS5z9AZZQmgaoXz3LTsDP2v%2FyVIOoEntUYiBjiY%2FQ8i2vUH3Wp7Us6jIosv7GxZtSdcGdwrkEBCVs3KemDqy3wyLirSy%2F%2B3RB1UvJi2FY%2B1bVkZB&X-Amz-Signature=5705c2ceb2324921060a33ad4ce57f5277fff68b7ab2bfd2129ce18886924e6d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
