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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXNYLA3R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrIJESdcIa3NfdeSYLRJsiUyfgFzZoo6MJdIAfZ1stSgIhAPcAJ%2BdnUKzBCatHnUpia%2BBvBj2TEcVP%2BnWBPUaRNu3YKv8DCBoQABoMNjM3NDIzMTgzODA1Igztv49kVxKL9cowsa0q3AN8WTZFT6fdsYnfWIYk%2Fab0CTWbsi%2BfvGcmy5H3VJOD8hPGB8BIx22eVLaxp43DAgTl%2BHbtSxpgFVWRF5fB0oXM0TL8aFFaKMVw1%2B%2FIXcEVHASAqy5Y3KhHZAkvk44ix0ACvf7zI0sHGDS7WmcjHEDfWNL9RaZ665ofcAwHKpTXK3p05dSWVaCXkf6nh2F9BTCPkzCAD7Tgnl5rpT5nkapiTr3vk40M2skr2%2FqCS8Xq2pfmc0mJDJUG45mGWO34fhRY%2FEXJ4qRsxCJnKseSKQ9ki0WQ48pekJ8%2FVXDA8BVsI5IDUel5XasGZrFpGGeDW2W0IfqIwVVtrWd4eWN83HFevVY2ZEVeOXUcjBvzLynhyG79Nf7006xHWUjAzjqGpY064jOuj%2Bp9fe5ShpTKVWIC63RoAp3HJ%2Fv86fsnri4bSEvmmVrnyJiUQA1hRq5%2BEMMHD%2BGhrpZf2Sa66wIwoMedvFmdXjvBl1TnNo8I4%2BENbROSGEqWWaEQrF46BeU%2FNalEqgLs38Us4NT4zVggAqei8ONKD%2Bne3oIJuqVZMpxY8L6slPbL6iJHQnfYurlSP68baYgjuH4ynHscVRM8i9rUSBKQGIUocHCxdG6EOgs%2BpseP82CogHudYsm3sTDu1anABjqkARZKWFsFbvxTW4hMC6fByiSnCIPNNt6qAhFRqlDPuvuTQOHujlqihRgYWUSDi2ED0Z0aLpiKK86DGVssZxeN8C9vCKdyVHFSiljhtQOh0UgCppn4YpevxQ7XYKl%2Bba61hJmo1sH813vaO2wqDVxERaZoE%2BqUJLoEVI%2Bi7VK125rovtvNRStqd7PcWexKYeZ3Hf3X7JpHFUwPzyBDArK0eTSQI%2Fiw&X-Amz-Signature=2075b8198febdaa0945dc96622bad540603fc439ff61fd8cd0f089b403278f82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXNYLA3R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrIJESdcIa3NfdeSYLRJsiUyfgFzZoo6MJdIAfZ1stSgIhAPcAJ%2BdnUKzBCatHnUpia%2BBvBj2TEcVP%2BnWBPUaRNu3YKv8DCBoQABoMNjM3NDIzMTgzODA1Igztv49kVxKL9cowsa0q3AN8WTZFT6fdsYnfWIYk%2Fab0CTWbsi%2BfvGcmy5H3VJOD8hPGB8BIx22eVLaxp43DAgTl%2BHbtSxpgFVWRF5fB0oXM0TL8aFFaKMVw1%2B%2FIXcEVHASAqy5Y3KhHZAkvk44ix0ACvf7zI0sHGDS7WmcjHEDfWNL9RaZ665ofcAwHKpTXK3p05dSWVaCXkf6nh2F9BTCPkzCAD7Tgnl5rpT5nkapiTr3vk40M2skr2%2FqCS8Xq2pfmc0mJDJUG45mGWO34fhRY%2FEXJ4qRsxCJnKseSKQ9ki0WQ48pekJ8%2FVXDA8BVsI5IDUel5XasGZrFpGGeDW2W0IfqIwVVtrWd4eWN83HFevVY2ZEVeOXUcjBvzLynhyG79Nf7006xHWUjAzjqGpY064jOuj%2Bp9fe5ShpTKVWIC63RoAp3HJ%2Fv86fsnri4bSEvmmVrnyJiUQA1hRq5%2BEMMHD%2BGhrpZf2Sa66wIwoMedvFmdXjvBl1TnNo8I4%2BENbROSGEqWWaEQrF46BeU%2FNalEqgLs38Us4NT4zVggAqei8ONKD%2Bne3oIJuqVZMpxY8L6slPbL6iJHQnfYurlSP68baYgjuH4ynHscVRM8i9rUSBKQGIUocHCxdG6EOgs%2BpseP82CogHudYsm3sTDu1anABjqkARZKWFsFbvxTW4hMC6fByiSnCIPNNt6qAhFRqlDPuvuTQOHujlqihRgYWUSDi2ED0Z0aLpiKK86DGVssZxeN8C9vCKdyVHFSiljhtQOh0UgCppn4YpevxQ7XYKl%2Bba61hJmo1sH813vaO2wqDVxERaZoE%2BqUJLoEVI%2Bi7VK125rovtvNRStqd7PcWexKYeZ3Hf3X7JpHFUwPzyBDArK0eTSQI%2Fiw&X-Amz-Signature=e26b04bf234fc98859b911baa72df7271ca3513a7d374970f9e4b18570fd6624&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXNYLA3R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrIJESdcIa3NfdeSYLRJsiUyfgFzZoo6MJdIAfZ1stSgIhAPcAJ%2BdnUKzBCatHnUpia%2BBvBj2TEcVP%2BnWBPUaRNu3YKv8DCBoQABoMNjM3NDIzMTgzODA1Igztv49kVxKL9cowsa0q3AN8WTZFT6fdsYnfWIYk%2Fab0CTWbsi%2BfvGcmy5H3VJOD8hPGB8BIx22eVLaxp43DAgTl%2BHbtSxpgFVWRF5fB0oXM0TL8aFFaKMVw1%2B%2FIXcEVHASAqy5Y3KhHZAkvk44ix0ACvf7zI0sHGDS7WmcjHEDfWNL9RaZ665ofcAwHKpTXK3p05dSWVaCXkf6nh2F9BTCPkzCAD7Tgnl5rpT5nkapiTr3vk40M2skr2%2FqCS8Xq2pfmc0mJDJUG45mGWO34fhRY%2FEXJ4qRsxCJnKseSKQ9ki0WQ48pekJ8%2FVXDA8BVsI5IDUel5XasGZrFpGGeDW2W0IfqIwVVtrWd4eWN83HFevVY2ZEVeOXUcjBvzLynhyG79Nf7006xHWUjAzjqGpY064jOuj%2Bp9fe5ShpTKVWIC63RoAp3HJ%2Fv86fsnri4bSEvmmVrnyJiUQA1hRq5%2BEMMHD%2BGhrpZf2Sa66wIwoMedvFmdXjvBl1TnNo8I4%2BENbROSGEqWWaEQrF46BeU%2FNalEqgLs38Us4NT4zVggAqei8ONKD%2Bne3oIJuqVZMpxY8L6slPbL6iJHQnfYurlSP68baYgjuH4ynHscVRM8i9rUSBKQGIUocHCxdG6EOgs%2BpseP82CogHudYsm3sTDu1anABjqkARZKWFsFbvxTW4hMC6fByiSnCIPNNt6qAhFRqlDPuvuTQOHujlqihRgYWUSDi2ED0Z0aLpiKK86DGVssZxeN8C9vCKdyVHFSiljhtQOh0UgCppn4YpevxQ7XYKl%2Bba61hJmo1sH813vaO2wqDVxERaZoE%2BqUJLoEVI%2Bi7VK125rovtvNRStqd7PcWexKYeZ3Hf3X7JpHFUwPzyBDArK0eTSQI%2Fiw&X-Amz-Signature=d927ed94ac18287edbbcff3f9e97dea88f71f5202542d54b80eb6221eaeee1c3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXNYLA3R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrIJESdcIa3NfdeSYLRJsiUyfgFzZoo6MJdIAfZ1stSgIhAPcAJ%2BdnUKzBCatHnUpia%2BBvBj2TEcVP%2BnWBPUaRNu3YKv8DCBoQABoMNjM3NDIzMTgzODA1Igztv49kVxKL9cowsa0q3AN8WTZFT6fdsYnfWIYk%2Fab0CTWbsi%2BfvGcmy5H3VJOD8hPGB8BIx22eVLaxp43DAgTl%2BHbtSxpgFVWRF5fB0oXM0TL8aFFaKMVw1%2B%2FIXcEVHASAqy5Y3KhHZAkvk44ix0ACvf7zI0sHGDS7WmcjHEDfWNL9RaZ665ofcAwHKpTXK3p05dSWVaCXkf6nh2F9BTCPkzCAD7Tgnl5rpT5nkapiTr3vk40M2skr2%2FqCS8Xq2pfmc0mJDJUG45mGWO34fhRY%2FEXJ4qRsxCJnKseSKQ9ki0WQ48pekJ8%2FVXDA8BVsI5IDUel5XasGZrFpGGeDW2W0IfqIwVVtrWd4eWN83HFevVY2ZEVeOXUcjBvzLynhyG79Nf7006xHWUjAzjqGpY064jOuj%2Bp9fe5ShpTKVWIC63RoAp3HJ%2Fv86fsnri4bSEvmmVrnyJiUQA1hRq5%2BEMMHD%2BGhrpZf2Sa66wIwoMedvFmdXjvBl1TnNo8I4%2BENbROSGEqWWaEQrF46BeU%2FNalEqgLs38Us4NT4zVggAqei8ONKD%2Bne3oIJuqVZMpxY8L6slPbL6iJHQnfYurlSP68baYgjuH4ynHscVRM8i9rUSBKQGIUocHCxdG6EOgs%2BpseP82CogHudYsm3sTDu1anABjqkARZKWFsFbvxTW4hMC6fByiSnCIPNNt6qAhFRqlDPuvuTQOHujlqihRgYWUSDi2ED0Z0aLpiKK86DGVssZxeN8C9vCKdyVHFSiljhtQOh0UgCppn4YpevxQ7XYKl%2Bba61hJmo1sH813vaO2wqDVxERaZoE%2BqUJLoEVI%2Bi7VK125rovtvNRStqd7PcWexKYeZ3Hf3X7JpHFUwPzyBDArK0eTSQI%2Fiw&X-Amz-Signature=acb0fd59c26309467c10af8ed690adc31cd8757cd13ca37ae92320b3471841fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXNYLA3R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrIJESdcIa3NfdeSYLRJsiUyfgFzZoo6MJdIAfZ1stSgIhAPcAJ%2BdnUKzBCatHnUpia%2BBvBj2TEcVP%2BnWBPUaRNu3YKv8DCBoQABoMNjM3NDIzMTgzODA1Igztv49kVxKL9cowsa0q3AN8WTZFT6fdsYnfWIYk%2Fab0CTWbsi%2BfvGcmy5H3VJOD8hPGB8BIx22eVLaxp43DAgTl%2BHbtSxpgFVWRF5fB0oXM0TL8aFFaKMVw1%2B%2FIXcEVHASAqy5Y3KhHZAkvk44ix0ACvf7zI0sHGDS7WmcjHEDfWNL9RaZ665ofcAwHKpTXK3p05dSWVaCXkf6nh2F9BTCPkzCAD7Tgnl5rpT5nkapiTr3vk40M2skr2%2FqCS8Xq2pfmc0mJDJUG45mGWO34fhRY%2FEXJ4qRsxCJnKseSKQ9ki0WQ48pekJ8%2FVXDA8BVsI5IDUel5XasGZrFpGGeDW2W0IfqIwVVtrWd4eWN83HFevVY2ZEVeOXUcjBvzLynhyG79Nf7006xHWUjAzjqGpY064jOuj%2Bp9fe5ShpTKVWIC63RoAp3HJ%2Fv86fsnri4bSEvmmVrnyJiUQA1hRq5%2BEMMHD%2BGhrpZf2Sa66wIwoMedvFmdXjvBl1TnNo8I4%2BENbROSGEqWWaEQrF46BeU%2FNalEqgLs38Us4NT4zVggAqei8ONKD%2Bne3oIJuqVZMpxY8L6slPbL6iJHQnfYurlSP68baYgjuH4ynHscVRM8i9rUSBKQGIUocHCxdG6EOgs%2BpseP82CogHudYsm3sTDu1anABjqkARZKWFsFbvxTW4hMC6fByiSnCIPNNt6qAhFRqlDPuvuTQOHujlqihRgYWUSDi2ED0Z0aLpiKK86DGVssZxeN8C9vCKdyVHFSiljhtQOh0UgCppn4YpevxQ7XYKl%2Bba61hJmo1sH813vaO2wqDVxERaZoE%2BqUJLoEVI%2Bi7VK125rovtvNRStqd7PcWexKYeZ3Hf3X7JpHFUwPzyBDArK0eTSQI%2Fiw&X-Amz-Signature=f24c52ba81e6570d1934350eb177ef8d64d80d76dec92200524530cc84345cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXNYLA3R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrIJESdcIa3NfdeSYLRJsiUyfgFzZoo6MJdIAfZ1stSgIhAPcAJ%2BdnUKzBCatHnUpia%2BBvBj2TEcVP%2BnWBPUaRNu3YKv8DCBoQABoMNjM3NDIzMTgzODA1Igztv49kVxKL9cowsa0q3AN8WTZFT6fdsYnfWIYk%2Fab0CTWbsi%2BfvGcmy5H3VJOD8hPGB8BIx22eVLaxp43DAgTl%2BHbtSxpgFVWRF5fB0oXM0TL8aFFaKMVw1%2B%2FIXcEVHASAqy5Y3KhHZAkvk44ix0ACvf7zI0sHGDS7WmcjHEDfWNL9RaZ665ofcAwHKpTXK3p05dSWVaCXkf6nh2F9BTCPkzCAD7Tgnl5rpT5nkapiTr3vk40M2skr2%2FqCS8Xq2pfmc0mJDJUG45mGWO34fhRY%2FEXJ4qRsxCJnKseSKQ9ki0WQ48pekJ8%2FVXDA8BVsI5IDUel5XasGZrFpGGeDW2W0IfqIwVVtrWd4eWN83HFevVY2ZEVeOXUcjBvzLynhyG79Nf7006xHWUjAzjqGpY064jOuj%2Bp9fe5ShpTKVWIC63RoAp3HJ%2Fv86fsnri4bSEvmmVrnyJiUQA1hRq5%2BEMMHD%2BGhrpZf2Sa66wIwoMedvFmdXjvBl1TnNo8I4%2BENbROSGEqWWaEQrF46BeU%2FNalEqgLs38Us4NT4zVggAqei8ONKD%2Bne3oIJuqVZMpxY8L6slPbL6iJHQnfYurlSP68baYgjuH4ynHscVRM8i9rUSBKQGIUocHCxdG6EOgs%2BpseP82CogHudYsm3sTDu1anABjqkARZKWFsFbvxTW4hMC6fByiSnCIPNNt6qAhFRqlDPuvuTQOHujlqihRgYWUSDi2ED0Z0aLpiKK86DGVssZxeN8C9vCKdyVHFSiljhtQOh0UgCppn4YpevxQ7XYKl%2Bba61hJmo1sH813vaO2wqDVxERaZoE%2BqUJLoEVI%2Bi7VK125rovtvNRStqd7PcWexKYeZ3Hf3X7JpHFUwPzyBDArK0eTSQI%2Fiw&X-Amz-Signature=41c7cca0c0510f1b5dc530163b7d01234444d41d7a17110f0f87a76efbb8355e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXNYLA3R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrIJESdcIa3NfdeSYLRJsiUyfgFzZoo6MJdIAfZ1stSgIhAPcAJ%2BdnUKzBCatHnUpia%2BBvBj2TEcVP%2BnWBPUaRNu3YKv8DCBoQABoMNjM3NDIzMTgzODA1Igztv49kVxKL9cowsa0q3AN8WTZFT6fdsYnfWIYk%2Fab0CTWbsi%2BfvGcmy5H3VJOD8hPGB8BIx22eVLaxp43DAgTl%2BHbtSxpgFVWRF5fB0oXM0TL8aFFaKMVw1%2B%2FIXcEVHASAqy5Y3KhHZAkvk44ix0ACvf7zI0sHGDS7WmcjHEDfWNL9RaZ665ofcAwHKpTXK3p05dSWVaCXkf6nh2F9BTCPkzCAD7Tgnl5rpT5nkapiTr3vk40M2skr2%2FqCS8Xq2pfmc0mJDJUG45mGWO34fhRY%2FEXJ4qRsxCJnKseSKQ9ki0WQ48pekJ8%2FVXDA8BVsI5IDUel5XasGZrFpGGeDW2W0IfqIwVVtrWd4eWN83HFevVY2ZEVeOXUcjBvzLynhyG79Nf7006xHWUjAzjqGpY064jOuj%2Bp9fe5ShpTKVWIC63RoAp3HJ%2Fv86fsnri4bSEvmmVrnyJiUQA1hRq5%2BEMMHD%2BGhrpZf2Sa66wIwoMedvFmdXjvBl1TnNo8I4%2BENbROSGEqWWaEQrF46BeU%2FNalEqgLs38Us4NT4zVggAqei8ONKD%2Bne3oIJuqVZMpxY8L6slPbL6iJHQnfYurlSP68baYgjuH4ynHscVRM8i9rUSBKQGIUocHCxdG6EOgs%2BpseP82CogHudYsm3sTDu1anABjqkARZKWFsFbvxTW4hMC6fByiSnCIPNNt6qAhFRqlDPuvuTQOHujlqihRgYWUSDi2ED0Z0aLpiKK86DGVssZxeN8C9vCKdyVHFSiljhtQOh0UgCppn4YpevxQ7XYKl%2Bba61hJmo1sH813vaO2wqDVxERaZoE%2BqUJLoEVI%2Bi7VK125rovtvNRStqd7PcWexKYeZ3Hf3X7JpHFUwPzyBDArK0eTSQI%2Fiw&X-Amz-Signature=653de15a72453304ae7022ce225ab0a535cbfb61b9f3ef289e4ccf69fb35e4b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXNYLA3R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrIJESdcIa3NfdeSYLRJsiUyfgFzZoo6MJdIAfZ1stSgIhAPcAJ%2BdnUKzBCatHnUpia%2BBvBj2TEcVP%2BnWBPUaRNu3YKv8DCBoQABoMNjM3NDIzMTgzODA1Igztv49kVxKL9cowsa0q3AN8WTZFT6fdsYnfWIYk%2Fab0CTWbsi%2BfvGcmy5H3VJOD8hPGB8BIx22eVLaxp43DAgTl%2BHbtSxpgFVWRF5fB0oXM0TL8aFFaKMVw1%2B%2FIXcEVHASAqy5Y3KhHZAkvk44ix0ACvf7zI0sHGDS7WmcjHEDfWNL9RaZ665ofcAwHKpTXK3p05dSWVaCXkf6nh2F9BTCPkzCAD7Tgnl5rpT5nkapiTr3vk40M2skr2%2FqCS8Xq2pfmc0mJDJUG45mGWO34fhRY%2FEXJ4qRsxCJnKseSKQ9ki0WQ48pekJ8%2FVXDA8BVsI5IDUel5XasGZrFpGGeDW2W0IfqIwVVtrWd4eWN83HFevVY2ZEVeOXUcjBvzLynhyG79Nf7006xHWUjAzjqGpY064jOuj%2Bp9fe5ShpTKVWIC63RoAp3HJ%2Fv86fsnri4bSEvmmVrnyJiUQA1hRq5%2BEMMHD%2BGhrpZf2Sa66wIwoMedvFmdXjvBl1TnNo8I4%2BENbROSGEqWWaEQrF46BeU%2FNalEqgLs38Us4NT4zVggAqei8ONKD%2Bne3oIJuqVZMpxY8L6slPbL6iJHQnfYurlSP68baYgjuH4ynHscVRM8i9rUSBKQGIUocHCxdG6EOgs%2BpseP82CogHudYsm3sTDu1anABjqkARZKWFsFbvxTW4hMC6fByiSnCIPNNt6qAhFRqlDPuvuTQOHujlqihRgYWUSDi2ED0Z0aLpiKK86DGVssZxeN8C9vCKdyVHFSiljhtQOh0UgCppn4YpevxQ7XYKl%2Bba61hJmo1sH813vaO2wqDVxERaZoE%2BqUJLoEVI%2Bi7VK125rovtvNRStqd7PcWexKYeZ3Hf3X7JpHFUwPzyBDArK0eTSQI%2Fiw&X-Amz-Signature=961b6ef64140161fa4f3ecaaab72bd4693bc2fd836b9c8da0d7c10482220beee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
