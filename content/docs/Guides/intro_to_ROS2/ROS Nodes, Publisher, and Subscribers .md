---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNK25YTW%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCI5KiVE48%2BMInQoVwu6Eqs4M7pGEtJNkFHDPUHYWeh0gIhAKHcGYhbGTcklkn5Ft%2FHSvOQ14%2B4yG3YXOz%2FRCMt%2ByRcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEQOOjrWDFVdH%2F5I4q3AOz79hiA7c%2BOwAEKnQB4ou67kSO60taf9KVY5qJdOk5gC31fh7hfMmtz7EK8n3liJG9bFU77mtdO13RTHIv5GtAgxhAPXc%2BI6n0ktCMnLjI4sq4ewnk50TSMR5wdL%2B%2FiLuWhhryrMITdT8DCpKKT%2B8R%2BEhyiPTq5597dYpEl0EsMOWeg7W51MIKZ5pFzZBLNKaynonDqp%2Btpn7iaWBLAWHk8T0EbQl2FzdFuIc9FFnxw2oyPhFfbES1sCMR1BDyG6foroFoFQabobgpCVKUlMA0Zpx1cM6AjJ5erkH3kNJk7Fb3GIh2ceOdV7YufiW%2FxV5wM87W7QGVZCoIJY9%2BvA4kx1YSCh7OUXgPAFPTzlDRPX8xuH04J0XO9rGS0GoiTvWVaY6XVFNoigLmWCIYVaNwheHe1L7K9GQuvw7172pc1kok0qy0iB9bTglCS1nxij0cCFKrIVtLMwVZOqC3TCWmCc14wCFpNNlbYQ2ICUip%2BzUAS5Zn5ot2TUqSwOpXg388pVZKE6HsCcmv8hnuh7EQHdLLj2TCyJeyZoSSNQLbdj3w0f%2FdJtBmJyrU%2FsH1o%2BQ1NfG8%2FM30BYvfHrqvJcNRZJUJaBcHCyF4ky6sqLNSpVuOxIYfCdUdHLPc5DDguMTIBjqkAa28aNaEURCq%2FXZ9heNqkjqlGHc%2FgRUiubHVQq7xOn3lzBcc95ESlOmznbHBux9WfbaM4VyNvxuLsqy00Fu2t%2F7GgJWUmBsbnJILVIpzMB9Fo9pN%2FYDKfyxYj3AzLMIRliTXf1LotiCj%2Brp4X%2FIADVw6nznKBBzbtpOLKejU3tqKMk1j6BParCCipJ7K6n2l216%2FlIPduBePki54s8fM86fBSP0e&X-Amz-Signature=989059d68a21d1fb17fb0ebadfc3a77ffc2c7c08a26584b768f58b651486af9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNK25YTW%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCI5KiVE48%2BMInQoVwu6Eqs4M7pGEtJNkFHDPUHYWeh0gIhAKHcGYhbGTcklkn5Ft%2FHSvOQ14%2B4yG3YXOz%2FRCMt%2ByRcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEQOOjrWDFVdH%2F5I4q3AOz79hiA7c%2BOwAEKnQB4ou67kSO60taf9KVY5qJdOk5gC31fh7hfMmtz7EK8n3liJG9bFU77mtdO13RTHIv5GtAgxhAPXc%2BI6n0ktCMnLjI4sq4ewnk50TSMR5wdL%2B%2FiLuWhhryrMITdT8DCpKKT%2B8R%2BEhyiPTq5597dYpEl0EsMOWeg7W51MIKZ5pFzZBLNKaynonDqp%2Btpn7iaWBLAWHk8T0EbQl2FzdFuIc9FFnxw2oyPhFfbES1sCMR1BDyG6foroFoFQabobgpCVKUlMA0Zpx1cM6AjJ5erkH3kNJk7Fb3GIh2ceOdV7YufiW%2FxV5wM87W7QGVZCoIJY9%2BvA4kx1YSCh7OUXgPAFPTzlDRPX8xuH04J0XO9rGS0GoiTvWVaY6XVFNoigLmWCIYVaNwheHe1L7K9GQuvw7172pc1kok0qy0iB9bTglCS1nxij0cCFKrIVtLMwVZOqC3TCWmCc14wCFpNNlbYQ2ICUip%2BzUAS5Zn5ot2TUqSwOpXg388pVZKE6HsCcmv8hnuh7EQHdLLj2TCyJeyZoSSNQLbdj3w0f%2FdJtBmJyrU%2FsH1o%2BQ1NfG8%2FM30BYvfHrqvJcNRZJUJaBcHCyF4ky6sqLNSpVuOxIYfCdUdHLPc5DDguMTIBjqkAa28aNaEURCq%2FXZ9heNqkjqlGHc%2FgRUiubHVQq7xOn3lzBcc95ESlOmznbHBux9WfbaM4VyNvxuLsqy00Fu2t%2F7GgJWUmBsbnJILVIpzMB9Fo9pN%2FYDKfyxYj3AzLMIRliTXf1LotiCj%2Brp4X%2FIADVw6nznKBBzbtpOLKejU3tqKMk1j6BParCCipJ7K6n2l216%2FlIPduBePki54s8fM86fBSP0e&X-Amz-Signature=3e4bdbc21780207906505a48a434e87efdc07ecdc90f11ebd8cee08bf4afc165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNK25YTW%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCI5KiVE48%2BMInQoVwu6Eqs4M7pGEtJNkFHDPUHYWeh0gIhAKHcGYhbGTcklkn5Ft%2FHSvOQ14%2B4yG3YXOz%2FRCMt%2ByRcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEQOOjrWDFVdH%2F5I4q3AOz79hiA7c%2BOwAEKnQB4ou67kSO60taf9KVY5qJdOk5gC31fh7hfMmtz7EK8n3liJG9bFU77mtdO13RTHIv5GtAgxhAPXc%2BI6n0ktCMnLjI4sq4ewnk50TSMR5wdL%2B%2FiLuWhhryrMITdT8DCpKKT%2B8R%2BEhyiPTq5597dYpEl0EsMOWeg7W51MIKZ5pFzZBLNKaynonDqp%2Btpn7iaWBLAWHk8T0EbQl2FzdFuIc9FFnxw2oyPhFfbES1sCMR1BDyG6foroFoFQabobgpCVKUlMA0Zpx1cM6AjJ5erkH3kNJk7Fb3GIh2ceOdV7YufiW%2FxV5wM87W7QGVZCoIJY9%2BvA4kx1YSCh7OUXgPAFPTzlDRPX8xuH04J0XO9rGS0GoiTvWVaY6XVFNoigLmWCIYVaNwheHe1L7K9GQuvw7172pc1kok0qy0iB9bTglCS1nxij0cCFKrIVtLMwVZOqC3TCWmCc14wCFpNNlbYQ2ICUip%2BzUAS5Zn5ot2TUqSwOpXg388pVZKE6HsCcmv8hnuh7EQHdLLj2TCyJeyZoSSNQLbdj3w0f%2FdJtBmJyrU%2FsH1o%2BQ1NfG8%2FM30BYvfHrqvJcNRZJUJaBcHCyF4ky6sqLNSpVuOxIYfCdUdHLPc5DDguMTIBjqkAa28aNaEURCq%2FXZ9heNqkjqlGHc%2FgRUiubHVQq7xOn3lzBcc95ESlOmznbHBux9WfbaM4VyNvxuLsqy00Fu2t%2F7GgJWUmBsbnJILVIpzMB9Fo9pN%2FYDKfyxYj3AzLMIRliTXf1LotiCj%2Brp4X%2FIADVw6nznKBBzbtpOLKejU3tqKMk1j6BParCCipJ7K6n2l216%2FlIPduBePki54s8fM86fBSP0e&X-Amz-Signature=a5df268fefb4b149f3b1b351f5a0c940f9d821861b2fea4f9dfa44930921645b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNK25YTW%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCI5KiVE48%2BMInQoVwu6Eqs4M7pGEtJNkFHDPUHYWeh0gIhAKHcGYhbGTcklkn5Ft%2FHSvOQ14%2B4yG3YXOz%2FRCMt%2ByRcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEQOOjrWDFVdH%2F5I4q3AOz79hiA7c%2BOwAEKnQB4ou67kSO60taf9KVY5qJdOk5gC31fh7hfMmtz7EK8n3liJG9bFU77mtdO13RTHIv5GtAgxhAPXc%2BI6n0ktCMnLjI4sq4ewnk50TSMR5wdL%2B%2FiLuWhhryrMITdT8DCpKKT%2B8R%2BEhyiPTq5597dYpEl0EsMOWeg7W51MIKZ5pFzZBLNKaynonDqp%2Btpn7iaWBLAWHk8T0EbQl2FzdFuIc9FFnxw2oyPhFfbES1sCMR1BDyG6foroFoFQabobgpCVKUlMA0Zpx1cM6AjJ5erkH3kNJk7Fb3GIh2ceOdV7YufiW%2FxV5wM87W7QGVZCoIJY9%2BvA4kx1YSCh7OUXgPAFPTzlDRPX8xuH04J0XO9rGS0GoiTvWVaY6XVFNoigLmWCIYVaNwheHe1L7K9GQuvw7172pc1kok0qy0iB9bTglCS1nxij0cCFKrIVtLMwVZOqC3TCWmCc14wCFpNNlbYQ2ICUip%2BzUAS5Zn5ot2TUqSwOpXg388pVZKE6HsCcmv8hnuh7EQHdLLj2TCyJeyZoSSNQLbdj3w0f%2FdJtBmJyrU%2FsH1o%2BQ1NfG8%2FM30BYvfHrqvJcNRZJUJaBcHCyF4ky6sqLNSpVuOxIYfCdUdHLPc5DDguMTIBjqkAa28aNaEURCq%2FXZ9heNqkjqlGHc%2FgRUiubHVQq7xOn3lzBcc95ESlOmznbHBux9WfbaM4VyNvxuLsqy00Fu2t%2F7GgJWUmBsbnJILVIpzMB9Fo9pN%2FYDKfyxYj3AzLMIRliTXf1LotiCj%2Brp4X%2FIADVw6nznKBBzbtpOLKejU3tqKMk1j6BParCCipJ7K6n2l216%2FlIPduBePki54s8fM86fBSP0e&X-Amz-Signature=3bdf3e3a9633ba02a5a112e7f2f27858c764d466d84f00e6903eb079fd683d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNK25YTW%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCI5KiVE48%2BMInQoVwu6Eqs4M7pGEtJNkFHDPUHYWeh0gIhAKHcGYhbGTcklkn5Ft%2FHSvOQ14%2B4yG3YXOz%2FRCMt%2ByRcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEQOOjrWDFVdH%2F5I4q3AOz79hiA7c%2BOwAEKnQB4ou67kSO60taf9KVY5qJdOk5gC31fh7hfMmtz7EK8n3liJG9bFU77mtdO13RTHIv5GtAgxhAPXc%2BI6n0ktCMnLjI4sq4ewnk50TSMR5wdL%2B%2FiLuWhhryrMITdT8DCpKKT%2B8R%2BEhyiPTq5597dYpEl0EsMOWeg7W51MIKZ5pFzZBLNKaynonDqp%2Btpn7iaWBLAWHk8T0EbQl2FzdFuIc9FFnxw2oyPhFfbES1sCMR1BDyG6foroFoFQabobgpCVKUlMA0Zpx1cM6AjJ5erkH3kNJk7Fb3GIh2ceOdV7YufiW%2FxV5wM87W7QGVZCoIJY9%2BvA4kx1YSCh7OUXgPAFPTzlDRPX8xuH04J0XO9rGS0GoiTvWVaY6XVFNoigLmWCIYVaNwheHe1L7K9GQuvw7172pc1kok0qy0iB9bTglCS1nxij0cCFKrIVtLMwVZOqC3TCWmCc14wCFpNNlbYQ2ICUip%2BzUAS5Zn5ot2TUqSwOpXg388pVZKE6HsCcmv8hnuh7EQHdLLj2TCyJeyZoSSNQLbdj3w0f%2FdJtBmJyrU%2FsH1o%2BQ1NfG8%2FM30BYvfHrqvJcNRZJUJaBcHCyF4ky6sqLNSpVuOxIYfCdUdHLPc5DDguMTIBjqkAa28aNaEURCq%2FXZ9heNqkjqlGHc%2FgRUiubHVQq7xOn3lzBcc95ESlOmznbHBux9WfbaM4VyNvxuLsqy00Fu2t%2F7GgJWUmBsbnJILVIpzMB9Fo9pN%2FYDKfyxYj3AzLMIRliTXf1LotiCj%2Brp4X%2FIADVw6nznKBBzbtpOLKejU3tqKMk1j6BParCCipJ7K6n2l216%2FlIPduBePki54s8fM86fBSP0e&X-Amz-Signature=4584993c56702cdf6c8d19a5e925cf1f39d335e905ec67a0578e6c5927d4d51b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNK25YTW%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCI5KiVE48%2BMInQoVwu6Eqs4M7pGEtJNkFHDPUHYWeh0gIhAKHcGYhbGTcklkn5Ft%2FHSvOQ14%2B4yG3YXOz%2FRCMt%2ByRcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEQOOjrWDFVdH%2F5I4q3AOz79hiA7c%2BOwAEKnQB4ou67kSO60taf9KVY5qJdOk5gC31fh7hfMmtz7EK8n3liJG9bFU77mtdO13RTHIv5GtAgxhAPXc%2BI6n0ktCMnLjI4sq4ewnk50TSMR5wdL%2B%2FiLuWhhryrMITdT8DCpKKT%2B8R%2BEhyiPTq5597dYpEl0EsMOWeg7W51MIKZ5pFzZBLNKaynonDqp%2Btpn7iaWBLAWHk8T0EbQl2FzdFuIc9FFnxw2oyPhFfbES1sCMR1BDyG6foroFoFQabobgpCVKUlMA0Zpx1cM6AjJ5erkH3kNJk7Fb3GIh2ceOdV7YufiW%2FxV5wM87W7QGVZCoIJY9%2BvA4kx1YSCh7OUXgPAFPTzlDRPX8xuH04J0XO9rGS0GoiTvWVaY6XVFNoigLmWCIYVaNwheHe1L7K9GQuvw7172pc1kok0qy0iB9bTglCS1nxij0cCFKrIVtLMwVZOqC3TCWmCc14wCFpNNlbYQ2ICUip%2BzUAS5Zn5ot2TUqSwOpXg388pVZKE6HsCcmv8hnuh7EQHdLLj2TCyJeyZoSSNQLbdj3w0f%2FdJtBmJyrU%2FsH1o%2BQ1NfG8%2FM30BYvfHrqvJcNRZJUJaBcHCyF4ky6sqLNSpVuOxIYfCdUdHLPc5DDguMTIBjqkAa28aNaEURCq%2FXZ9heNqkjqlGHc%2FgRUiubHVQq7xOn3lzBcc95ESlOmznbHBux9WfbaM4VyNvxuLsqy00Fu2t%2F7GgJWUmBsbnJILVIpzMB9Fo9pN%2FYDKfyxYj3AzLMIRliTXf1LotiCj%2Brp4X%2FIADVw6nznKBBzbtpOLKejU3tqKMk1j6BParCCipJ7K6n2l216%2FlIPduBePki54s8fM86fBSP0e&X-Amz-Signature=ebb489185cb6767c4852407d61baa41ac916671b56756c1309f7cec34692a8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNK25YTW%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCI5KiVE48%2BMInQoVwu6Eqs4M7pGEtJNkFHDPUHYWeh0gIhAKHcGYhbGTcklkn5Ft%2FHSvOQ14%2B4yG3YXOz%2FRCMt%2ByRcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEQOOjrWDFVdH%2F5I4q3AOz79hiA7c%2BOwAEKnQB4ou67kSO60taf9KVY5qJdOk5gC31fh7hfMmtz7EK8n3liJG9bFU77mtdO13RTHIv5GtAgxhAPXc%2BI6n0ktCMnLjI4sq4ewnk50TSMR5wdL%2B%2FiLuWhhryrMITdT8DCpKKT%2B8R%2BEhyiPTq5597dYpEl0EsMOWeg7W51MIKZ5pFzZBLNKaynonDqp%2Btpn7iaWBLAWHk8T0EbQl2FzdFuIc9FFnxw2oyPhFfbES1sCMR1BDyG6foroFoFQabobgpCVKUlMA0Zpx1cM6AjJ5erkH3kNJk7Fb3GIh2ceOdV7YufiW%2FxV5wM87W7QGVZCoIJY9%2BvA4kx1YSCh7OUXgPAFPTzlDRPX8xuH04J0XO9rGS0GoiTvWVaY6XVFNoigLmWCIYVaNwheHe1L7K9GQuvw7172pc1kok0qy0iB9bTglCS1nxij0cCFKrIVtLMwVZOqC3TCWmCc14wCFpNNlbYQ2ICUip%2BzUAS5Zn5ot2TUqSwOpXg388pVZKE6HsCcmv8hnuh7EQHdLLj2TCyJeyZoSSNQLbdj3w0f%2FdJtBmJyrU%2FsH1o%2BQ1NfG8%2FM30BYvfHrqvJcNRZJUJaBcHCyF4ky6sqLNSpVuOxIYfCdUdHLPc5DDguMTIBjqkAa28aNaEURCq%2FXZ9heNqkjqlGHc%2FgRUiubHVQq7xOn3lzBcc95ESlOmznbHBux9WfbaM4VyNvxuLsqy00Fu2t%2F7GgJWUmBsbnJILVIpzMB9Fo9pN%2FYDKfyxYj3AzLMIRliTXf1LotiCj%2Brp4X%2FIADVw6nznKBBzbtpOLKejU3tqKMk1j6BParCCipJ7K6n2l216%2FlIPduBePki54s8fM86fBSP0e&X-Amz-Signature=3ad76de1a486033fff39db8fd42595e9b1454d91f541986a0c75a75354b36ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNK25YTW%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCI5KiVE48%2BMInQoVwu6Eqs4M7pGEtJNkFHDPUHYWeh0gIhAKHcGYhbGTcklkn5Ft%2FHSvOQ14%2B4yG3YXOz%2FRCMt%2ByRcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEQOOjrWDFVdH%2F5I4q3AOz79hiA7c%2BOwAEKnQB4ou67kSO60taf9KVY5qJdOk5gC31fh7hfMmtz7EK8n3liJG9bFU77mtdO13RTHIv5GtAgxhAPXc%2BI6n0ktCMnLjI4sq4ewnk50TSMR5wdL%2B%2FiLuWhhryrMITdT8DCpKKT%2B8R%2BEhyiPTq5597dYpEl0EsMOWeg7W51MIKZ5pFzZBLNKaynonDqp%2Btpn7iaWBLAWHk8T0EbQl2FzdFuIc9FFnxw2oyPhFfbES1sCMR1BDyG6foroFoFQabobgpCVKUlMA0Zpx1cM6AjJ5erkH3kNJk7Fb3GIh2ceOdV7YufiW%2FxV5wM87W7QGVZCoIJY9%2BvA4kx1YSCh7OUXgPAFPTzlDRPX8xuH04J0XO9rGS0GoiTvWVaY6XVFNoigLmWCIYVaNwheHe1L7K9GQuvw7172pc1kok0qy0iB9bTglCS1nxij0cCFKrIVtLMwVZOqC3TCWmCc14wCFpNNlbYQ2ICUip%2BzUAS5Zn5ot2TUqSwOpXg388pVZKE6HsCcmv8hnuh7EQHdLLj2TCyJeyZoSSNQLbdj3w0f%2FdJtBmJyrU%2FsH1o%2BQ1NfG8%2FM30BYvfHrqvJcNRZJUJaBcHCyF4ky6sqLNSpVuOxIYfCdUdHLPc5DDguMTIBjqkAa28aNaEURCq%2FXZ9heNqkjqlGHc%2FgRUiubHVQq7xOn3lzBcc95ESlOmznbHBux9WfbaM4VyNvxuLsqy00Fu2t%2F7GgJWUmBsbnJILVIpzMB9Fo9pN%2FYDKfyxYj3AzLMIRliTXf1LotiCj%2Brp4X%2FIADVw6nznKBBzbtpOLKejU3tqKMk1j6BParCCipJ7K6n2l216%2FlIPduBePki54s8fM86fBSP0e&X-Amz-Signature=844e746af1d45c689e48c860cf9ab421805047b8c861adcdd16a2033971ccc8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
