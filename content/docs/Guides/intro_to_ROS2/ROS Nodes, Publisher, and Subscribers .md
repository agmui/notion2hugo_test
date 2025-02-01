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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644F2PO6H%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbt75RASCTsxUo8w1Q91pS8OuM72R5kqSyFM2H1nhsUAIgXgnOyOea1UNNjo%2BwnBwJ1YDPVWYI0qOWf%2BqII%2FBT54YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjNxmOMkFdlM6LsMyrcA4h9aADnOHcoDcBYasFk1%2FHAdc3mnR%2Fpd8Nmr04jSUFgcl%2F%2FN0YcR%2BjWvg35b2Kfcy6eCSETW99l4GH6LUoZGUYx4PntNvgNR9Bgl%2B1KySmYEasfAo%2FXtad09FT2yFju5daAv44%2BB4r8Mrb1ZvRGkNK0ZMM0Kt5AATSrUNHVKyijeuZ1K3emcuGVTcYw0q9%2FzflGQDdUcsokz7%2B6CocxFceNdbQIC51T0AZc2gpmoF%2BfZqNb7UzWBP46Eiadt%2FBXVa8PlzAOXkrrSiy1gIuW%2Fjx2h3aXGxHdndDlehsfqKHCyuLx2Ysiml9AmIdPMPzksOrToiWB%2FcAN0dCKpa5y28DACerhRsDkcecjidGi%2FNkIGa4DXAyp3taBJ%2B7OUoCZA%2BSQTC2qWqV5jqxsw3ZbcNX1VCDWfTscLpblVqNDk%2Bmosso4WDzbmv1QOsZBgvrwu57izqkoJTCmiqFRckYh8Z5I9Dtix9n491EsNkkk4RtxEESpC%2BdQf%2FekY0lQGQTfSufWMJFD8QaJ7cdIBaHzEqeSNIN0Doj0jm8Ic0mVpiKaT9v2F%2BqHCYZ6zlhkalLHLSs6E3fyGawAAb%2FGIID9ixvgo42wK71ZBk6M8gspAgrZ8G0dWJyF8%2Bvi3hjQMMSy%2BrwGOqUB8pAn8zr4EfaaDi0MnHoptcuYsxr269CKzjPZIWVBrWDZ4AkSbFozOSZn9x2mTOFVBgHeCspJ3aQVfjNKTTjAIpz%2FefgPz1u4Zgkg5tWpfEzodM%2B5wbBcdk2G9temcA3htylZI%2FuApZYGVhqvcQ5fC6BRcVEFA4v8n4iXvPAg7J2HW%2BI2Uy8q5GsPQLp2B7QarSV4V54BiU6qhqXEdgAnWRnLrW7%2B&X-Amz-Signature=56f234423e9c1cfaa1deb31c9665f2566264dfcd04ea2fad992d20819099a707&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644F2PO6H%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbt75RASCTsxUo8w1Q91pS8OuM72R5kqSyFM2H1nhsUAIgXgnOyOea1UNNjo%2BwnBwJ1YDPVWYI0qOWf%2BqII%2FBT54YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjNxmOMkFdlM6LsMyrcA4h9aADnOHcoDcBYasFk1%2FHAdc3mnR%2Fpd8Nmr04jSUFgcl%2F%2FN0YcR%2BjWvg35b2Kfcy6eCSETW99l4GH6LUoZGUYx4PntNvgNR9Bgl%2B1KySmYEasfAo%2FXtad09FT2yFju5daAv44%2BB4r8Mrb1ZvRGkNK0ZMM0Kt5AATSrUNHVKyijeuZ1K3emcuGVTcYw0q9%2FzflGQDdUcsokz7%2B6CocxFceNdbQIC51T0AZc2gpmoF%2BfZqNb7UzWBP46Eiadt%2FBXVa8PlzAOXkrrSiy1gIuW%2Fjx2h3aXGxHdndDlehsfqKHCyuLx2Ysiml9AmIdPMPzksOrToiWB%2FcAN0dCKpa5y28DACerhRsDkcecjidGi%2FNkIGa4DXAyp3taBJ%2B7OUoCZA%2BSQTC2qWqV5jqxsw3ZbcNX1VCDWfTscLpblVqNDk%2Bmosso4WDzbmv1QOsZBgvrwu57izqkoJTCmiqFRckYh8Z5I9Dtix9n491EsNkkk4RtxEESpC%2BdQf%2FekY0lQGQTfSufWMJFD8QaJ7cdIBaHzEqeSNIN0Doj0jm8Ic0mVpiKaT9v2F%2BqHCYZ6zlhkalLHLSs6E3fyGawAAb%2FGIID9ixvgo42wK71ZBk6M8gspAgrZ8G0dWJyF8%2Bvi3hjQMMSy%2BrwGOqUB8pAn8zr4EfaaDi0MnHoptcuYsxr269CKzjPZIWVBrWDZ4AkSbFozOSZn9x2mTOFVBgHeCspJ3aQVfjNKTTjAIpz%2FefgPz1u4Zgkg5tWpfEzodM%2B5wbBcdk2G9temcA3htylZI%2FuApZYGVhqvcQ5fC6BRcVEFA4v8n4iXvPAg7J2HW%2BI2Uy8q5GsPQLp2B7QarSV4V54BiU6qhqXEdgAnWRnLrW7%2B&X-Amz-Signature=928d81fb29e0191a1dfa3dee963b85a87884d48ce4181b763fb41ddc1b84d0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644F2PO6H%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbt75RASCTsxUo8w1Q91pS8OuM72R5kqSyFM2H1nhsUAIgXgnOyOea1UNNjo%2BwnBwJ1YDPVWYI0qOWf%2BqII%2FBT54YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjNxmOMkFdlM6LsMyrcA4h9aADnOHcoDcBYasFk1%2FHAdc3mnR%2Fpd8Nmr04jSUFgcl%2F%2FN0YcR%2BjWvg35b2Kfcy6eCSETW99l4GH6LUoZGUYx4PntNvgNR9Bgl%2B1KySmYEasfAo%2FXtad09FT2yFju5daAv44%2BB4r8Mrb1ZvRGkNK0ZMM0Kt5AATSrUNHVKyijeuZ1K3emcuGVTcYw0q9%2FzflGQDdUcsokz7%2B6CocxFceNdbQIC51T0AZc2gpmoF%2BfZqNb7UzWBP46Eiadt%2FBXVa8PlzAOXkrrSiy1gIuW%2Fjx2h3aXGxHdndDlehsfqKHCyuLx2Ysiml9AmIdPMPzksOrToiWB%2FcAN0dCKpa5y28DACerhRsDkcecjidGi%2FNkIGa4DXAyp3taBJ%2B7OUoCZA%2BSQTC2qWqV5jqxsw3ZbcNX1VCDWfTscLpblVqNDk%2Bmosso4WDzbmv1QOsZBgvrwu57izqkoJTCmiqFRckYh8Z5I9Dtix9n491EsNkkk4RtxEESpC%2BdQf%2FekY0lQGQTfSufWMJFD8QaJ7cdIBaHzEqeSNIN0Doj0jm8Ic0mVpiKaT9v2F%2BqHCYZ6zlhkalLHLSs6E3fyGawAAb%2FGIID9ixvgo42wK71ZBk6M8gspAgrZ8G0dWJyF8%2Bvi3hjQMMSy%2BrwGOqUB8pAn8zr4EfaaDi0MnHoptcuYsxr269CKzjPZIWVBrWDZ4AkSbFozOSZn9x2mTOFVBgHeCspJ3aQVfjNKTTjAIpz%2FefgPz1u4Zgkg5tWpfEzodM%2B5wbBcdk2G9temcA3htylZI%2FuApZYGVhqvcQ5fC6BRcVEFA4v8n4iXvPAg7J2HW%2BI2Uy8q5GsPQLp2B7QarSV4V54BiU6qhqXEdgAnWRnLrW7%2B&X-Amz-Signature=763ad5686ba1a46faa84c9a9d0f930538923baa25dda62af3b7b6a87d8577f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644F2PO6H%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbt75RASCTsxUo8w1Q91pS8OuM72R5kqSyFM2H1nhsUAIgXgnOyOea1UNNjo%2BwnBwJ1YDPVWYI0qOWf%2BqII%2FBT54YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjNxmOMkFdlM6LsMyrcA4h9aADnOHcoDcBYasFk1%2FHAdc3mnR%2Fpd8Nmr04jSUFgcl%2F%2FN0YcR%2BjWvg35b2Kfcy6eCSETW99l4GH6LUoZGUYx4PntNvgNR9Bgl%2B1KySmYEasfAo%2FXtad09FT2yFju5daAv44%2BB4r8Mrb1ZvRGkNK0ZMM0Kt5AATSrUNHVKyijeuZ1K3emcuGVTcYw0q9%2FzflGQDdUcsokz7%2B6CocxFceNdbQIC51T0AZc2gpmoF%2BfZqNb7UzWBP46Eiadt%2FBXVa8PlzAOXkrrSiy1gIuW%2Fjx2h3aXGxHdndDlehsfqKHCyuLx2Ysiml9AmIdPMPzksOrToiWB%2FcAN0dCKpa5y28DACerhRsDkcecjidGi%2FNkIGa4DXAyp3taBJ%2B7OUoCZA%2BSQTC2qWqV5jqxsw3ZbcNX1VCDWfTscLpblVqNDk%2Bmosso4WDzbmv1QOsZBgvrwu57izqkoJTCmiqFRckYh8Z5I9Dtix9n491EsNkkk4RtxEESpC%2BdQf%2FekY0lQGQTfSufWMJFD8QaJ7cdIBaHzEqeSNIN0Doj0jm8Ic0mVpiKaT9v2F%2BqHCYZ6zlhkalLHLSs6E3fyGawAAb%2FGIID9ixvgo42wK71ZBk6M8gspAgrZ8G0dWJyF8%2Bvi3hjQMMSy%2BrwGOqUB8pAn8zr4EfaaDi0MnHoptcuYsxr269CKzjPZIWVBrWDZ4AkSbFozOSZn9x2mTOFVBgHeCspJ3aQVfjNKTTjAIpz%2FefgPz1u4Zgkg5tWpfEzodM%2B5wbBcdk2G9temcA3htylZI%2FuApZYGVhqvcQ5fC6BRcVEFA4v8n4iXvPAg7J2HW%2BI2Uy8q5GsPQLp2B7QarSV4V54BiU6qhqXEdgAnWRnLrW7%2B&X-Amz-Signature=c9420dacea44cbc1c359beee6ef0352df54e46ddaa1dd50973ad753790baa683&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644F2PO6H%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbt75RASCTsxUo8w1Q91pS8OuM72R5kqSyFM2H1nhsUAIgXgnOyOea1UNNjo%2BwnBwJ1YDPVWYI0qOWf%2BqII%2FBT54YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjNxmOMkFdlM6LsMyrcA4h9aADnOHcoDcBYasFk1%2FHAdc3mnR%2Fpd8Nmr04jSUFgcl%2F%2FN0YcR%2BjWvg35b2Kfcy6eCSETW99l4GH6LUoZGUYx4PntNvgNR9Bgl%2B1KySmYEasfAo%2FXtad09FT2yFju5daAv44%2BB4r8Mrb1ZvRGkNK0ZMM0Kt5AATSrUNHVKyijeuZ1K3emcuGVTcYw0q9%2FzflGQDdUcsokz7%2B6CocxFceNdbQIC51T0AZc2gpmoF%2BfZqNb7UzWBP46Eiadt%2FBXVa8PlzAOXkrrSiy1gIuW%2Fjx2h3aXGxHdndDlehsfqKHCyuLx2Ysiml9AmIdPMPzksOrToiWB%2FcAN0dCKpa5y28DACerhRsDkcecjidGi%2FNkIGa4DXAyp3taBJ%2B7OUoCZA%2BSQTC2qWqV5jqxsw3ZbcNX1VCDWfTscLpblVqNDk%2Bmosso4WDzbmv1QOsZBgvrwu57izqkoJTCmiqFRckYh8Z5I9Dtix9n491EsNkkk4RtxEESpC%2BdQf%2FekY0lQGQTfSufWMJFD8QaJ7cdIBaHzEqeSNIN0Doj0jm8Ic0mVpiKaT9v2F%2BqHCYZ6zlhkalLHLSs6E3fyGawAAb%2FGIID9ixvgo42wK71ZBk6M8gspAgrZ8G0dWJyF8%2Bvi3hjQMMSy%2BrwGOqUB8pAn8zr4EfaaDi0MnHoptcuYsxr269CKzjPZIWVBrWDZ4AkSbFozOSZn9x2mTOFVBgHeCspJ3aQVfjNKTTjAIpz%2FefgPz1u4Zgkg5tWpfEzodM%2B5wbBcdk2G9temcA3htylZI%2FuApZYGVhqvcQ5fC6BRcVEFA4v8n4iXvPAg7J2HW%2BI2Uy8q5GsPQLp2B7QarSV4V54BiU6qhqXEdgAnWRnLrW7%2B&X-Amz-Signature=1281cb823d49f27e75415816eef3a127add855db71ca32362b7bfc8cb7543dea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644F2PO6H%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbt75RASCTsxUo8w1Q91pS8OuM72R5kqSyFM2H1nhsUAIgXgnOyOea1UNNjo%2BwnBwJ1YDPVWYI0qOWf%2BqII%2FBT54YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjNxmOMkFdlM6LsMyrcA4h9aADnOHcoDcBYasFk1%2FHAdc3mnR%2Fpd8Nmr04jSUFgcl%2F%2FN0YcR%2BjWvg35b2Kfcy6eCSETW99l4GH6LUoZGUYx4PntNvgNR9Bgl%2B1KySmYEasfAo%2FXtad09FT2yFju5daAv44%2BB4r8Mrb1ZvRGkNK0ZMM0Kt5AATSrUNHVKyijeuZ1K3emcuGVTcYw0q9%2FzflGQDdUcsokz7%2B6CocxFceNdbQIC51T0AZc2gpmoF%2BfZqNb7UzWBP46Eiadt%2FBXVa8PlzAOXkrrSiy1gIuW%2Fjx2h3aXGxHdndDlehsfqKHCyuLx2Ysiml9AmIdPMPzksOrToiWB%2FcAN0dCKpa5y28DACerhRsDkcecjidGi%2FNkIGa4DXAyp3taBJ%2B7OUoCZA%2BSQTC2qWqV5jqxsw3ZbcNX1VCDWfTscLpblVqNDk%2Bmosso4WDzbmv1QOsZBgvrwu57izqkoJTCmiqFRckYh8Z5I9Dtix9n491EsNkkk4RtxEESpC%2BdQf%2FekY0lQGQTfSufWMJFD8QaJ7cdIBaHzEqeSNIN0Doj0jm8Ic0mVpiKaT9v2F%2BqHCYZ6zlhkalLHLSs6E3fyGawAAb%2FGIID9ixvgo42wK71ZBk6M8gspAgrZ8G0dWJyF8%2Bvi3hjQMMSy%2BrwGOqUB8pAn8zr4EfaaDi0MnHoptcuYsxr269CKzjPZIWVBrWDZ4AkSbFozOSZn9x2mTOFVBgHeCspJ3aQVfjNKTTjAIpz%2FefgPz1u4Zgkg5tWpfEzodM%2B5wbBcdk2G9temcA3htylZI%2FuApZYGVhqvcQ5fC6BRcVEFA4v8n4iXvPAg7J2HW%2BI2Uy8q5GsPQLp2B7QarSV4V54BiU6qhqXEdgAnWRnLrW7%2B&X-Amz-Signature=ba9bb43aee479e9d6b1537f4340b9c36a09ff8e06f581f33a8ec299fc6dcef22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644F2PO6H%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbt75RASCTsxUo8w1Q91pS8OuM72R5kqSyFM2H1nhsUAIgXgnOyOea1UNNjo%2BwnBwJ1YDPVWYI0qOWf%2BqII%2FBT54YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjNxmOMkFdlM6LsMyrcA4h9aADnOHcoDcBYasFk1%2FHAdc3mnR%2Fpd8Nmr04jSUFgcl%2F%2FN0YcR%2BjWvg35b2Kfcy6eCSETW99l4GH6LUoZGUYx4PntNvgNR9Bgl%2B1KySmYEasfAo%2FXtad09FT2yFju5daAv44%2BB4r8Mrb1ZvRGkNK0ZMM0Kt5AATSrUNHVKyijeuZ1K3emcuGVTcYw0q9%2FzflGQDdUcsokz7%2B6CocxFceNdbQIC51T0AZc2gpmoF%2BfZqNb7UzWBP46Eiadt%2FBXVa8PlzAOXkrrSiy1gIuW%2Fjx2h3aXGxHdndDlehsfqKHCyuLx2Ysiml9AmIdPMPzksOrToiWB%2FcAN0dCKpa5y28DACerhRsDkcecjidGi%2FNkIGa4DXAyp3taBJ%2B7OUoCZA%2BSQTC2qWqV5jqxsw3ZbcNX1VCDWfTscLpblVqNDk%2Bmosso4WDzbmv1QOsZBgvrwu57izqkoJTCmiqFRckYh8Z5I9Dtix9n491EsNkkk4RtxEESpC%2BdQf%2FekY0lQGQTfSufWMJFD8QaJ7cdIBaHzEqeSNIN0Doj0jm8Ic0mVpiKaT9v2F%2BqHCYZ6zlhkalLHLSs6E3fyGawAAb%2FGIID9ixvgo42wK71ZBk6M8gspAgrZ8G0dWJyF8%2Bvi3hjQMMSy%2BrwGOqUB8pAn8zr4EfaaDi0MnHoptcuYsxr269CKzjPZIWVBrWDZ4AkSbFozOSZn9x2mTOFVBgHeCspJ3aQVfjNKTTjAIpz%2FefgPz1u4Zgkg5tWpfEzodM%2B5wbBcdk2G9temcA3htylZI%2FuApZYGVhqvcQ5fC6BRcVEFA4v8n4iXvPAg7J2HW%2BI2Uy8q5GsPQLp2B7QarSV4V54BiU6qhqXEdgAnWRnLrW7%2B&X-Amz-Signature=4977932256919b2c4a8ebfc5372dc56283248ab5c1a529620127b230dd32e4cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644F2PO6H%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbt75RASCTsxUo8w1Q91pS8OuM72R5kqSyFM2H1nhsUAIgXgnOyOea1UNNjo%2BwnBwJ1YDPVWYI0qOWf%2BqII%2FBT54YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjNxmOMkFdlM6LsMyrcA4h9aADnOHcoDcBYasFk1%2FHAdc3mnR%2Fpd8Nmr04jSUFgcl%2F%2FN0YcR%2BjWvg35b2Kfcy6eCSETW99l4GH6LUoZGUYx4PntNvgNR9Bgl%2B1KySmYEasfAo%2FXtad09FT2yFju5daAv44%2BB4r8Mrb1ZvRGkNK0ZMM0Kt5AATSrUNHVKyijeuZ1K3emcuGVTcYw0q9%2FzflGQDdUcsokz7%2B6CocxFceNdbQIC51T0AZc2gpmoF%2BfZqNb7UzWBP46Eiadt%2FBXVa8PlzAOXkrrSiy1gIuW%2Fjx2h3aXGxHdndDlehsfqKHCyuLx2Ysiml9AmIdPMPzksOrToiWB%2FcAN0dCKpa5y28DACerhRsDkcecjidGi%2FNkIGa4DXAyp3taBJ%2B7OUoCZA%2BSQTC2qWqV5jqxsw3ZbcNX1VCDWfTscLpblVqNDk%2Bmosso4WDzbmv1QOsZBgvrwu57izqkoJTCmiqFRckYh8Z5I9Dtix9n491EsNkkk4RtxEESpC%2BdQf%2FekY0lQGQTfSufWMJFD8QaJ7cdIBaHzEqeSNIN0Doj0jm8Ic0mVpiKaT9v2F%2BqHCYZ6zlhkalLHLSs6E3fyGawAAb%2FGIID9ixvgo42wK71ZBk6M8gspAgrZ8G0dWJyF8%2Bvi3hjQMMSy%2BrwGOqUB8pAn8zr4EfaaDi0MnHoptcuYsxr269CKzjPZIWVBrWDZ4AkSbFozOSZn9x2mTOFVBgHeCspJ3aQVfjNKTTjAIpz%2FefgPz1u4Zgkg5tWpfEzodM%2B5wbBcdk2G9temcA3htylZI%2FuApZYGVhqvcQ5fC6BRcVEFA4v8n4iXvPAg7J2HW%2BI2Uy8q5GsPQLp2B7QarSV4V54BiU6qhqXEdgAnWRnLrW7%2B&X-Amz-Signature=05e840e183b3c5ef4f50e48f250bff1ad7e6dfaaaad88077beb76656dc944fc2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
