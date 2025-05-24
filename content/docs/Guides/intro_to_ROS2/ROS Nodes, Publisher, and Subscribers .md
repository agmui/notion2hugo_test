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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VWV3GQT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIHNg6a86uh%2FIXUhnrQ2kFXotafT8gcvDjJqM6Men5j2CAiEAi30ErBQ7zD0AO7Lfx%2BBbrNmjXefmNfQe27P4nZPvVBYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJZFaDcmSeL%2F7O3iXCrcA5OPzT%2FTwuGXZmvt5bgZ9JyYEkiXwrntaWF%2BXJkGaZgAalTFpTATrO%2Bl4yo%2BNWF2Je6ALBdCI9VBHdXDufGTpge7mVfmzX2fEpTfOoulwa94b%2FSz9qrV5ZlCwzkzzSlc3m0f2WrAs8o5KlULF%2BbyV%2Fszg5CfDeYdDKqqEONSShusRytaKFyugxcbulav1A2x4f7tFhU1GAAHBo6jnfvHz8AcLvkZt57fwZO68C5FnqveMuNtVjS2E6o3UtTS7JD2VSVyRa6l%2FpH0tI%2B4fgn2j24ign2xTb47ktagS0B2RZ7u2VDbsg%2BxrPKH7XMOBRBvvKkCM6oDYKrEbL6flvPoNglBDvlUUHhUsR9kMG2YTV5IEuX%2BxuO1V47YdkVlpfq0e84PLu1eWA2zHWCAVIM38FwjtZkV%2BINif8N2v%2FrkpeV%2B0PDHskt68Nd0Suq8zcVqG6n7MCIfYZNsrKllNPuyftqrkIhuoJaRe7CGy0kRfSXCNh4Yw0usbxuTEsmr%2FsxNTPWzL7Mf0ol8%2F7h7GGYhKfYB9%2BydiQLZ4i4b2bUYLnCtkRTC7OSuJhEFmNDGIKFcP3cupHiqdfzAs%2BsCB1Lw2Y%2BQxWhCAVdHLaCOi2QJAJDalKXBjCOxgMs1%2F9pBMM%2FNx8EGOqUBWzSKNnmSDJ%2Fyh8KhzrpbcZKxOtAwm0VtFAmeC7MqX9QjWypPD9wKYn1Sb7W%2Bw330f9U5Y8zz1v9V3wULEl6Cu606zKQy4mbW3hpDz%2FXwbP4neg%2FLM3pnfyMSxygJUHrh591pMDmsdMnHBDwuF7z0c9Xw%2F0C%2B4WE%2BrVy3OmtFTI4E9RmwiWhe0J0rpSqtxd0ZeoUr8%2FSZSNiBI9J78x2kLr4AgrM4&X-Amz-Signature=f17eb4f6eac4e28ca2fefc88a26449535687c364b7d604e12d40f4414d6e0ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VWV3GQT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIHNg6a86uh%2FIXUhnrQ2kFXotafT8gcvDjJqM6Men5j2CAiEAi30ErBQ7zD0AO7Lfx%2BBbrNmjXefmNfQe27P4nZPvVBYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJZFaDcmSeL%2F7O3iXCrcA5OPzT%2FTwuGXZmvt5bgZ9JyYEkiXwrntaWF%2BXJkGaZgAalTFpTATrO%2Bl4yo%2BNWF2Je6ALBdCI9VBHdXDufGTpge7mVfmzX2fEpTfOoulwa94b%2FSz9qrV5ZlCwzkzzSlc3m0f2WrAs8o5KlULF%2BbyV%2Fszg5CfDeYdDKqqEONSShusRytaKFyugxcbulav1A2x4f7tFhU1GAAHBo6jnfvHz8AcLvkZt57fwZO68C5FnqveMuNtVjS2E6o3UtTS7JD2VSVyRa6l%2FpH0tI%2B4fgn2j24ign2xTb47ktagS0B2RZ7u2VDbsg%2BxrPKH7XMOBRBvvKkCM6oDYKrEbL6flvPoNglBDvlUUHhUsR9kMG2YTV5IEuX%2BxuO1V47YdkVlpfq0e84PLu1eWA2zHWCAVIM38FwjtZkV%2BINif8N2v%2FrkpeV%2B0PDHskt68Nd0Suq8zcVqG6n7MCIfYZNsrKllNPuyftqrkIhuoJaRe7CGy0kRfSXCNh4Yw0usbxuTEsmr%2FsxNTPWzL7Mf0ol8%2F7h7GGYhKfYB9%2BydiQLZ4i4b2bUYLnCtkRTC7OSuJhEFmNDGIKFcP3cupHiqdfzAs%2BsCB1Lw2Y%2BQxWhCAVdHLaCOi2QJAJDalKXBjCOxgMs1%2F9pBMM%2FNx8EGOqUBWzSKNnmSDJ%2Fyh8KhzrpbcZKxOtAwm0VtFAmeC7MqX9QjWypPD9wKYn1Sb7W%2Bw330f9U5Y8zz1v9V3wULEl6Cu606zKQy4mbW3hpDz%2FXwbP4neg%2FLM3pnfyMSxygJUHrh591pMDmsdMnHBDwuF7z0c9Xw%2F0C%2B4WE%2BrVy3OmtFTI4E9RmwiWhe0J0rpSqtxd0ZeoUr8%2FSZSNiBI9J78x2kLr4AgrM4&X-Amz-Signature=187b45e675e8a8c73741ba5110ca2a4739eddf5b8eb3bc82f94850cda7de2c65&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VWV3GQT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIHNg6a86uh%2FIXUhnrQ2kFXotafT8gcvDjJqM6Men5j2CAiEAi30ErBQ7zD0AO7Lfx%2BBbrNmjXefmNfQe27P4nZPvVBYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJZFaDcmSeL%2F7O3iXCrcA5OPzT%2FTwuGXZmvt5bgZ9JyYEkiXwrntaWF%2BXJkGaZgAalTFpTATrO%2Bl4yo%2BNWF2Je6ALBdCI9VBHdXDufGTpge7mVfmzX2fEpTfOoulwa94b%2FSz9qrV5ZlCwzkzzSlc3m0f2WrAs8o5KlULF%2BbyV%2Fszg5CfDeYdDKqqEONSShusRytaKFyugxcbulav1A2x4f7tFhU1GAAHBo6jnfvHz8AcLvkZt57fwZO68C5FnqveMuNtVjS2E6o3UtTS7JD2VSVyRa6l%2FpH0tI%2B4fgn2j24ign2xTb47ktagS0B2RZ7u2VDbsg%2BxrPKH7XMOBRBvvKkCM6oDYKrEbL6flvPoNglBDvlUUHhUsR9kMG2YTV5IEuX%2BxuO1V47YdkVlpfq0e84PLu1eWA2zHWCAVIM38FwjtZkV%2BINif8N2v%2FrkpeV%2B0PDHskt68Nd0Suq8zcVqG6n7MCIfYZNsrKllNPuyftqrkIhuoJaRe7CGy0kRfSXCNh4Yw0usbxuTEsmr%2FsxNTPWzL7Mf0ol8%2F7h7GGYhKfYB9%2BydiQLZ4i4b2bUYLnCtkRTC7OSuJhEFmNDGIKFcP3cupHiqdfzAs%2BsCB1Lw2Y%2BQxWhCAVdHLaCOi2QJAJDalKXBjCOxgMs1%2F9pBMM%2FNx8EGOqUBWzSKNnmSDJ%2Fyh8KhzrpbcZKxOtAwm0VtFAmeC7MqX9QjWypPD9wKYn1Sb7W%2Bw330f9U5Y8zz1v9V3wULEl6Cu606zKQy4mbW3hpDz%2FXwbP4neg%2FLM3pnfyMSxygJUHrh591pMDmsdMnHBDwuF7z0c9Xw%2F0C%2B4WE%2BrVy3OmtFTI4E9RmwiWhe0J0rpSqtxd0ZeoUr8%2FSZSNiBI9J78x2kLr4AgrM4&X-Amz-Signature=0493c7dd4f1afa567486f35308ed37478c58fba20ce44608e72720eb34277867&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VWV3GQT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIHNg6a86uh%2FIXUhnrQ2kFXotafT8gcvDjJqM6Men5j2CAiEAi30ErBQ7zD0AO7Lfx%2BBbrNmjXefmNfQe27P4nZPvVBYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJZFaDcmSeL%2F7O3iXCrcA5OPzT%2FTwuGXZmvt5bgZ9JyYEkiXwrntaWF%2BXJkGaZgAalTFpTATrO%2Bl4yo%2BNWF2Je6ALBdCI9VBHdXDufGTpge7mVfmzX2fEpTfOoulwa94b%2FSz9qrV5ZlCwzkzzSlc3m0f2WrAs8o5KlULF%2BbyV%2Fszg5CfDeYdDKqqEONSShusRytaKFyugxcbulav1A2x4f7tFhU1GAAHBo6jnfvHz8AcLvkZt57fwZO68C5FnqveMuNtVjS2E6o3UtTS7JD2VSVyRa6l%2FpH0tI%2B4fgn2j24ign2xTb47ktagS0B2RZ7u2VDbsg%2BxrPKH7XMOBRBvvKkCM6oDYKrEbL6flvPoNglBDvlUUHhUsR9kMG2YTV5IEuX%2BxuO1V47YdkVlpfq0e84PLu1eWA2zHWCAVIM38FwjtZkV%2BINif8N2v%2FrkpeV%2B0PDHskt68Nd0Suq8zcVqG6n7MCIfYZNsrKllNPuyftqrkIhuoJaRe7CGy0kRfSXCNh4Yw0usbxuTEsmr%2FsxNTPWzL7Mf0ol8%2F7h7GGYhKfYB9%2BydiQLZ4i4b2bUYLnCtkRTC7OSuJhEFmNDGIKFcP3cupHiqdfzAs%2BsCB1Lw2Y%2BQxWhCAVdHLaCOi2QJAJDalKXBjCOxgMs1%2F9pBMM%2FNx8EGOqUBWzSKNnmSDJ%2Fyh8KhzrpbcZKxOtAwm0VtFAmeC7MqX9QjWypPD9wKYn1Sb7W%2Bw330f9U5Y8zz1v9V3wULEl6Cu606zKQy4mbW3hpDz%2FXwbP4neg%2FLM3pnfyMSxygJUHrh591pMDmsdMnHBDwuF7z0c9Xw%2F0C%2B4WE%2BrVy3OmtFTI4E9RmwiWhe0J0rpSqtxd0ZeoUr8%2FSZSNiBI9J78x2kLr4AgrM4&X-Amz-Signature=3095c9182b80c401be28bd6cf567944b88f20d9688a8eb5197f346015ea04787&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VWV3GQT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIHNg6a86uh%2FIXUhnrQ2kFXotafT8gcvDjJqM6Men5j2CAiEAi30ErBQ7zD0AO7Lfx%2BBbrNmjXefmNfQe27P4nZPvVBYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJZFaDcmSeL%2F7O3iXCrcA5OPzT%2FTwuGXZmvt5bgZ9JyYEkiXwrntaWF%2BXJkGaZgAalTFpTATrO%2Bl4yo%2BNWF2Je6ALBdCI9VBHdXDufGTpge7mVfmzX2fEpTfOoulwa94b%2FSz9qrV5ZlCwzkzzSlc3m0f2WrAs8o5KlULF%2BbyV%2Fszg5CfDeYdDKqqEONSShusRytaKFyugxcbulav1A2x4f7tFhU1GAAHBo6jnfvHz8AcLvkZt57fwZO68C5FnqveMuNtVjS2E6o3UtTS7JD2VSVyRa6l%2FpH0tI%2B4fgn2j24ign2xTb47ktagS0B2RZ7u2VDbsg%2BxrPKH7XMOBRBvvKkCM6oDYKrEbL6flvPoNglBDvlUUHhUsR9kMG2YTV5IEuX%2BxuO1V47YdkVlpfq0e84PLu1eWA2zHWCAVIM38FwjtZkV%2BINif8N2v%2FrkpeV%2B0PDHskt68Nd0Suq8zcVqG6n7MCIfYZNsrKllNPuyftqrkIhuoJaRe7CGy0kRfSXCNh4Yw0usbxuTEsmr%2FsxNTPWzL7Mf0ol8%2F7h7GGYhKfYB9%2BydiQLZ4i4b2bUYLnCtkRTC7OSuJhEFmNDGIKFcP3cupHiqdfzAs%2BsCB1Lw2Y%2BQxWhCAVdHLaCOi2QJAJDalKXBjCOxgMs1%2F9pBMM%2FNx8EGOqUBWzSKNnmSDJ%2Fyh8KhzrpbcZKxOtAwm0VtFAmeC7MqX9QjWypPD9wKYn1Sb7W%2Bw330f9U5Y8zz1v9V3wULEl6Cu606zKQy4mbW3hpDz%2FXwbP4neg%2FLM3pnfyMSxygJUHrh591pMDmsdMnHBDwuF7z0c9Xw%2F0C%2B4WE%2BrVy3OmtFTI4E9RmwiWhe0J0rpSqtxd0ZeoUr8%2FSZSNiBI9J78x2kLr4AgrM4&X-Amz-Signature=4ed876af24eb851c5cb31aa74abad34627ecb62c37107ee64dec5f114d558fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VWV3GQT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIHNg6a86uh%2FIXUhnrQ2kFXotafT8gcvDjJqM6Men5j2CAiEAi30ErBQ7zD0AO7Lfx%2BBbrNmjXefmNfQe27P4nZPvVBYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJZFaDcmSeL%2F7O3iXCrcA5OPzT%2FTwuGXZmvt5bgZ9JyYEkiXwrntaWF%2BXJkGaZgAalTFpTATrO%2Bl4yo%2BNWF2Je6ALBdCI9VBHdXDufGTpge7mVfmzX2fEpTfOoulwa94b%2FSz9qrV5ZlCwzkzzSlc3m0f2WrAs8o5KlULF%2BbyV%2Fszg5CfDeYdDKqqEONSShusRytaKFyugxcbulav1A2x4f7tFhU1GAAHBo6jnfvHz8AcLvkZt57fwZO68C5FnqveMuNtVjS2E6o3UtTS7JD2VSVyRa6l%2FpH0tI%2B4fgn2j24ign2xTb47ktagS0B2RZ7u2VDbsg%2BxrPKH7XMOBRBvvKkCM6oDYKrEbL6flvPoNglBDvlUUHhUsR9kMG2YTV5IEuX%2BxuO1V47YdkVlpfq0e84PLu1eWA2zHWCAVIM38FwjtZkV%2BINif8N2v%2FrkpeV%2B0PDHskt68Nd0Suq8zcVqG6n7MCIfYZNsrKllNPuyftqrkIhuoJaRe7CGy0kRfSXCNh4Yw0usbxuTEsmr%2FsxNTPWzL7Mf0ol8%2F7h7GGYhKfYB9%2BydiQLZ4i4b2bUYLnCtkRTC7OSuJhEFmNDGIKFcP3cupHiqdfzAs%2BsCB1Lw2Y%2BQxWhCAVdHLaCOi2QJAJDalKXBjCOxgMs1%2F9pBMM%2FNx8EGOqUBWzSKNnmSDJ%2Fyh8KhzrpbcZKxOtAwm0VtFAmeC7MqX9QjWypPD9wKYn1Sb7W%2Bw330f9U5Y8zz1v9V3wULEl6Cu606zKQy4mbW3hpDz%2FXwbP4neg%2FLM3pnfyMSxygJUHrh591pMDmsdMnHBDwuF7z0c9Xw%2F0C%2B4WE%2BrVy3OmtFTI4E9RmwiWhe0J0rpSqtxd0ZeoUr8%2FSZSNiBI9J78x2kLr4AgrM4&X-Amz-Signature=b4a19b1067849a01d504f7f7449774b3b3d02a021df4701fc0db99cac04e7ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VWV3GQT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIHNg6a86uh%2FIXUhnrQ2kFXotafT8gcvDjJqM6Men5j2CAiEAi30ErBQ7zD0AO7Lfx%2BBbrNmjXefmNfQe27P4nZPvVBYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJZFaDcmSeL%2F7O3iXCrcA5OPzT%2FTwuGXZmvt5bgZ9JyYEkiXwrntaWF%2BXJkGaZgAalTFpTATrO%2Bl4yo%2BNWF2Je6ALBdCI9VBHdXDufGTpge7mVfmzX2fEpTfOoulwa94b%2FSz9qrV5ZlCwzkzzSlc3m0f2WrAs8o5KlULF%2BbyV%2Fszg5CfDeYdDKqqEONSShusRytaKFyugxcbulav1A2x4f7tFhU1GAAHBo6jnfvHz8AcLvkZt57fwZO68C5FnqveMuNtVjS2E6o3UtTS7JD2VSVyRa6l%2FpH0tI%2B4fgn2j24ign2xTb47ktagS0B2RZ7u2VDbsg%2BxrPKH7XMOBRBvvKkCM6oDYKrEbL6flvPoNglBDvlUUHhUsR9kMG2YTV5IEuX%2BxuO1V47YdkVlpfq0e84PLu1eWA2zHWCAVIM38FwjtZkV%2BINif8N2v%2FrkpeV%2B0PDHskt68Nd0Suq8zcVqG6n7MCIfYZNsrKllNPuyftqrkIhuoJaRe7CGy0kRfSXCNh4Yw0usbxuTEsmr%2FsxNTPWzL7Mf0ol8%2F7h7GGYhKfYB9%2BydiQLZ4i4b2bUYLnCtkRTC7OSuJhEFmNDGIKFcP3cupHiqdfzAs%2BsCB1Lw2Y%2BQxWhCAVdHLaCOi2QJAJDalKXBjCOxgMs1%2F9pBMM%2FNx8EGOqUBWzSKNnmSDJ%2Fyh8KhzrpbcZKxOtAwm0VtFAmeC7MqX9QjWypPD9wKYn1Sb7W%2Bw330f9U5Y8zz1v9V3wULEl6Cu606zKQy4mbW3hpDz%2FXwbP4neg%2FLM3pnfyMSxygJUHrh591pMDmsdMnHBDwuF7z0c9Xw%2F0C%2B4WE%2BrVy3OmtFTI4E9RmwiWhe0J0rpSqtxd0ZeoUr8%2FSZSNiBI9J78x2kLr4AgrM4&X-Amz-Signature=caff05d81bc2d193a4368e5af1bf17cbdd1161d9749825f0f0778c2f9a84edc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VWV3GQT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIHNg6a86uh%2FIXUhnrQ2kFXotafT8gcvDjJqM6Men5j2CAiEAi30ErBQ7zD0AO7Lfx%2BBbrNmjXefmNfQe27P4nZPvVBYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJZFaDcmSeL%2F7O3iXCrcA5OPzT%2FTwuGXZmvt5bgZ9JyYEkiXwrntaWF%2BXJkGaZgAalTFpTATrO%2Bl4yo%2BNWF2Je6ALBdCI9VBHdXDufGTpge7mVfmzX2fEpTfOoulwa94b%2FSz9qrV5ZlCwzkzzSlc3m0f2WrAs8o5KlULF%2BbyV%2Fszg5CfDeYdDKqqEONSShusRytaKFyugxcbulav1A2x4f7tFhU1GAAHBo6jnfvHz8AcLvkZt57fwZO68C5FnqveMuNtVjS2E6o3UtTS7JD2VSVyRa6l%2FpH0tI%2B4fgn2j24ign2xTb47ktagS0B2RZ7u2VDbsg%2BxrPKH7XMOBRBvvKkCM6oDYKrEbL6flvPoNglBDvlUUHhUsR9kMG2YTV5IEuX%2BxuO1V47YdkVlpfq0e84PLu1eWA2zHWCAVIM38FwjtZkV%2BINif8N2v%2FrkpeV%2B0PDHskt68Nd0Suq8zcVqG6n7MCIfYZNsrKllNPuyftqrkIhuoJaRe7CGy0kRfSXCNh4Yw0usbxuTEsmr%2FsxNTPWzL7Mf0ol8%2F7h7GGYhKfYB9%2BydiQLZ4i4b2bUYLnCtkRTC7OSuJhEFmNDGIKFcP3cupHiqdfzAs%2BsCB1Lw2Y%2BQxWhCAVdHLaCOi2QJAJDalKXBjCOxgMs1%2F9pBMM%2FNx8EGOqUBWzSKNnmSDJ%2Fyh8KhzrpbcZKxOtAwm0VtFAmeC7MqX9QjWypPD9wKYn1Sb7W%2Bw330f9U5Y8zz1v9V3wULEl6Cu606zKQy4mbW3hpDz%2FXwbP4neg%2FLM3pnfyMSxygJUHrh591pMDmsdMnHBDwuF7z0c9Xw%2F0C%2B4WE%2BrVy3OmtFTI4E9RmwiWhe0J0rpSqtxd0ZeoUr8%2FSZSNiBI9J78x2kLr4AgrM4&X-Amz-Signature=5202ce5d7c7a3ce5c32896e9fbbf04524620724e5bd7b98f6f2fa69503db3bac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
