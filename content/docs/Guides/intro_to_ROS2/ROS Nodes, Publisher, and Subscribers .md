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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOHT4HT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDvc9C%2Fx8XZeAP1yUDsE0EwziU39qa9QjA4o41zTy3e%2FgIhAMq5%2BZM4GZwncTKOC%2BR%2Bi025%2B%2B%2Fl%2By8jaWeaDTSVa2ocKv8DCHMQABoMNjM3NDIzMTgzODA1Igwla4lHbGbVG%2BtFfoQq3APt1w3lC5OMCajE%2Fvb3Hv0nCF4FajGiJ33A8QJyKyhKr%2B2YJzW%2B7tkv1OsUmLuX7w16HlJvMe4abfXoD9Ip%2BNwcSxFpVSSSxh0yy3L90e6c8azLTecz9SUvqhUw54KsZPigC3D%2Bl38NDaMPsuBdhYfS6MBkIog1Tf6bNhmQjiv8AvdDwZXwZ4%2FLmFL7jn3jE86InpjJzu42uGqXO74lGhXwp5Il%2BgeyHD0n1vOkA6XkGa%2BURmOVn6HdoWRl%2B1xl9eQ6v1aocpu4StkDAS0SlUt%2FXBEnygQDOzoR02m9t61%2FD1UcUcuOU%2BlvCuR11vSfgY6gpOZBscsPs%2FRHJdW8DlGWTV9y%2Bcnfaw%2BmUnMbgaIH0vqCkkk79aShFWuIjoIsBRj4Wj%2BRcHL7RQFs661c4q1pXR27E%2BNXQf5XBIQS%2FOmrhfagUAPByZg4%2BsRZVE2ieRgRlI36zzwuE%2BucD37pWqKSBwykNTJhXa5jTSGUsRaUPVfJee7fq6Dja7TkMSJovAOImvsu3qWxxMFJ4vM87FXnvRbnCgL4aoGzuI%2FZCscEyMD4m%2F0pHMz5ihTnJoDgtG%2FBVkW%2Bn9Zyyebgd3YOyIoE1imTUa5dkkSW6gIsq3cJXkps1jJsr6W6EiVtyDCX1PnCBjqkAZW70uDxUvLHgeQ81VEafEyfWIPvVU1h0MnOOYIjhzOw3dnD1tVYzND2KFgk%2BngGlGgPaafth90N%2BrOSE8X5bBfkeQWZ%2FnSUOLW2A4XR3QAw9XxtphlqpsZQTSCpKTZoWpLC51MB%2B5o4FVMYXMrYK1U%2FVOL1APUELMmJmpQxcK1n55xanheFgGWILg%2FwHTCO8pLq5aoOwS%2F3%2FzXhkrfm%2FwfG7opj&X-Amz-Signature=67def406ecea03dadcb170c4c6b4c88ef979b08ed048db07f280a0bde7a8a476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOHT4HT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDvc9C%2Fx8XZeAP1yUDsE0EwziU39qa9QjA4o41zTy3e%2FgIhAMq5%2BZM4GZwncTKOC%2BR%2Bi025%2B%2B%2Fl%2By8jaWeaDTSVa2ocKv8DCHMQABoMNjM3NDIzMTgzODA1Igwla4lHbGbVG%2BtFfoQq3APt1w3lC5OMCajE%2Fvb3Hv0nCF4FajGiJ33A8QJyKyhKr%2B2YJzW%2B7tkv1OsUmLuX7w16HlJvMe4abfXoD9Ip%2BNwcSxFpVSSSxh0yy3L90e6c8azLTecz9SUvqhUw54KsZPigC3D%2Bl38NDaMPsuBdhYfS6MBkIog1Tf6bNhmQjiv8AvdDwZXwZ4%2FLmFL7jn3jE86InpjJzu42uGqXO74lGhXwp5Il%2BgeyHD0n1vOkA6XkGa%2BURmOVn6HdoWRl%2B1xl9eQ6v1aocpu4StkDAS0SlUt%2FXBEnygQDOzoR02m9t61%2FD1UcUcuOU%2BlvCuR11vSfgY6gpOZBscsPs%2FRHJdW8DlGWTV9y%2Bcnfaw%2BmUnMbgaIH0vqCkkk79aShFWuIjoIsBRj4Wj%2BRcHL7RQFs661c4q1pXR27E%2BNXQf5XBIQS%2FOmrhfagUAPByZg4%2BsRZVE2ieRgRlI36zzwuE%2BucD37pWqKSBwykNTJhXa5jTSGUsRaUPVfJee7fq6Dja7TkMSJovAOImvsu3qWxxMFJ4vM87FXnvRbnCgL4aoGzuI%2FZCscEyMD4m%2F0pHMz5ihTnJoDgtG%2FBVkW%2Bn9Zyyebgd3YOyIoE1imTUa5dkkSW6gIsq3cJXkps1jJsr6W6EiVtyDCX1PnCBjqkAZW70uDxUvLHgeQ81VEafEyfWIPvVU1h0MnOOYIjhzOw3dnD1tVYzND2KFgk%2BngGlGgPaafth90N%2BrOSE8X5bBfkeQWZ%2FnSUOLW2A4XR3QAw9XxtphlqpsZQTSCpKTZoWpLC51MB%2B5o4FVMYXMrYK1U%2FVOL1APUELMmJmpQxcK1n55xanheFgGWILg%2FwHTCO8pLq5aoOwS%2F3%2FzXhkrfm%2FwfG7opj&X-Amz-Signature=fc0cdcb27975d87b17a9adad2c432b4703989bb35af49b7bd8f2c7c0218040a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOHT4HT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDvc9C%2Fx8XZeAP1yUDsE0EwziU39qa9QjA4o41zTy3e%2FgIhAMq5%2BZM4GZwncTKOC%2BR%2Bi025%2B%2B%2Fl%2By8jaWeaDTSVa2ocKv8DCHMQABoMNjM3NDIzMTgzODA1Igwla4lHbGbVG%2BtFfoQq3APt1w3lC5OMCajE%2Fvb3Hv0nCF4FajGiJ33A8QJyKyhKr%2B2YJzW%2B7tkv1OsUmLuX7w16HlJvMe4abfXoD9Ip%2BNwcSxFpVSSSxh0yy3L90e6c8azLTecz9SUvqhUw54KsZPigC3D%2Bl38NDaMPsuBdhYfS6MBkIog1Tf6bNhmQjiv8AvdDwZXwZ4%2FLmFL7jn3jE86InpjJzu42uGqXO74lGhXwp5Il%2BgeyHD0n1vOkA6XkGa%2BURmOVn6HdoWRl%2B1xl9eQ6v1aocpu4StkDAS0SlUt%2FXBEnygQDOzoR02m9t61%2FD1UcUcuOU%2BlvCuR11vSfgY6gpOZBscsPs%2FRHJdW8DlGWTV9y%2Bcnfaw%2BmUnMbgaIH0vqCkkk79aShFWuIjoIsBRj4Wj%2BRcHL7RQFs661c4q1pXR27E%2BNXQf5XBIQS%2FOmrhfagUAPByZg4%2BsRZVE2ieRgRlI36zzwuE%2BucD37pWqKSBwykNTJhXa5jTSGUsRaUPVfJee7fq6Dja7TkMSJovAOImvsu3qWxxMFJ4vM87FXnvRbnCgL4aoGzuI%2FZCscEyMD4m%2F0pHMz5ihTnJoDgtG%2FBVkW%2Bn9Zyyebgd3YOyIoE1imTUa5dkkSW6gIsq3cJXkps1jJsr6W6EiVtyDCX1PnCBjqkAZW70uDxUvLHgeQ81VEafEyfWIPvVU1h0MnOOYIjhzOw3dnD1tVYzND2KFgk%2BngGlGgPaafth90N%2BrOSE8X5bBfkeQWZ%2FnSUOLW2A4XR3QAw9XxtphlqpsZQTSCpKTZoWpLC51MB%2B5o4FVMYXMrYK1U%2FVOL1APUELMmJmpQxcK1n55xanheFgGWILg%2FwHTCO8pLq5aoOwS%2F3%2FzXhkrfm%2FwfG7opj&X-Amz-Signature=c553a2881a8a7294228f85d5faa5074a1d18196893eba6ded4f8e16c4cc39d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOHT4HT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDvc9C%2Fx8XZeAP1yUDsE0EwziU39qa9QjA4o41zTy3e%2FgIhAMq5%2BZM4GZwncTKOC%2BR%2Bi025%2B%2B%2Fl%2By8jaWeaDTSVa2ocKv8DCHMQABoMNjM3NDIzMTgzODA1Igwla4lHbGbVG%2BtFfoQq3APt1w3lC5OMCajE%2Fvb3Hv0nCF4FajGiJ33A8QJyKyhKr%2B2YJzW%2B7tkv1OsUmLuX7w16HlJvMe4abfXoD9Ip%2BNwcSxFpVSSSxh0yy3L90e6c8azLTecz9SUvqhUw54KsZPigC3D%2Bl38NDaMPsuBdhYfS6MBkIog1Tf6bNhmQjiv8AvdDwZXwZ4%2FLmFL7jn3jE86InpjJzu42uGqXO74lGhXwp5Il%2BgeyHD0n1vOkA6XkGa%2BURmOVn6HdoWRl%2B1xl9eQ6v1aocpu4StkDAS0SlUt%2FXBEnygQDOzoR02m9t61%2FD1UcUcuOU%2BlvCuR11vSfgY6gpOZBscsPs%2FRHJdW8DlGWTV9y%2Bcnfaw%2BmUnMbgaIH0vqCkkk79aShFWuIjoIsBRj4Wj%2BRcHL7RQFs661c4q1pXR27E%2BNXQf5XBIQS%2FOmrhfagUAPByZg4%2BsRZVE2ieRgRlI36zzwuE%2BucD37pWqKSBwykNTJhXa5jTSGUsRaUPVfJee7fq6Dja7TkMSJovAOImvsu3qWxxMFJ4vM87FXnvRbnCgL4aoGzuI%2FZCscEyMD4m%2F0pHMz5ihTnJoDgtG%2FBVkW%2Bn9Zyyebgd3YOyIoE1imTUa5dkkSW6gIsq3cJXkps1jJsr6W6EiVtyDCX1PnCBjqkAZW70uDxUvLHgeQ81VEafEyfWIPvVU1h0MnOOYIjhzOw3dnD1tVYzND2KFgk%2BngGlGgPaafth90N%2BrOSE8X5bBfkeQWZ%2FnSUOLW2A4XR3QAw9XxtphlqpsZQTSCpKTZoWpLC51MB%2B5o4FVMYXMrYK1U%2FVOL1APUELMmJmpQxcK1n55xanheFgGWILg%2FwHTCO8pLq5aoOwS%2F3%2FzXhkrfm%2FwfG7opj&X-Amz-Signature=86e739859bdd5cad721b95e5195631f26cd8225bfd2bcaf3753dea4764e5e834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOHT4HT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDvc9C%2Fx8XZeAP1yUDsE0EwziU39qa9QjA4o41zTy3e%2FgIhAMq5%2BZM4GZwncTKOC%2BR%2Bi025%2B%2B%2Fl%2By8jaWeaDTSVa2ocKv8DCHMQABoMNjM3NDIzMTgzODA1Igwla4lHbGbVG%2BtFfoQq3APt1w3lC5OMCajE%2Fvb3Hv0nCF4FajGiJ33A8QJyKyhKr%2B2YJzW%2B7tkv1OsUmLuX7w16HlJvMe4abfXoD9Ip%2BNwcSxFpVSSSxh0yy3L90e6c8azLTecz9SUvqhUw54KsZPigC3D%2Bl38NDaMPsuBdhYfS6MBkIog1Tf6bNhmQjiv8AvdDwZXwZ4%2FLmFL7jn3jE86InpjJzu42uGqXO74lGhXwp5Il%2BgeyHD0n1vOkA6XkGa%2BURmOVn6HdoWRl%2B1xl9eQ6v1aocpu4StkDAS0SlUt%2FXBEnygQDOzoR02m9t61%2FD1UcUcuOU%2BlvCuR11vSfgY6gpOZBscsPs%2FRHJdW8DlGWTV9y%2Bcnfaw%2BmUnMbgaIH0vqCkkk79aShFWuIjoIsBRj4Wj%2BRcHL7RQFs661c4q1pXR27E%2BNXQf5XBIQS%2FOmrhfagUAPByZg4%2BsRZVE2ieRgRlI36zzwuE%2BucD37pWqKSBwykNTJhXa5jTSGUsRaUPVfJee7fq6Dja7TkMSJovAOImvsu3qWxxMFJ4vM87FXnvRbnCgL4aoGzuI%2FZCscEyMD4m%2F0pHMz5ihTnJoDgtG%2FBVkW%2Bn9Zyyebgd3YOyIoE1imTUa5dkkSW6gIsq3cJXkps1jJsr6W6EiVtyDCX1PnCBjqkAZW70uDxUvLHgeQ81VEafEyfWIPvVU1h0MnOOYIjhzOw3dnD1tVYzND2KFgk%2BngGlGgPaafth90N%2BrOSE8X5bBfkeQWZ%2FnSUOLW2A4XR3QAw9XxtphlqpsZQTSCpKTZoWpLC51MB%2B5o4FVMYXMrYK1U%2FVOL1APUELMmJmpQxcK1n55xanheFgGWILg%2FwHTCO8pLq5aoOwS%2F3%2FzXhkrfm%2FwfG7opj&X-Amz-Signature=7ec2eda08cb8b724ef9e01d88fd578dc0cca53c25e3eb4feeea1dd0a5af2bf58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOHT4HT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDvc9C%2Fx8XZeAP1yUDsE0EwziU39qa9QjA4o41zTy3e%2FgIhAMq5%2BZM4GZwncTKOC%2BR%2Bi025%2B%2B%2Fl%2By8jaWeaDTSVa2ocKv8DCHMQABoMNjM3NDIzMTgzODA1Igwla4lHbGbVG%2BtFfoQq3APt1w3lC5OMCajE%2Fvb3Hv0nCF4FajGiJ33A8QJyKyhKr%2B2YJzW%2B7tkv1OsUmLuX7w16HlJvMe4abfXoD9Ip%2BNwcSxFpVSSSxh0yy3L90e6c8azLTecz9SUvqhUw54KsZPigC3D%2Bl38NDaMPsuBdhYfS6MBkIog1Tf6bNhmQjiv8AvdDwZXwZ4%2FLmFL7jn3jE86InpjJzu42uGqXO74lGhXwp5Il%2BgeyHD0n1vOkA6XkGa%2BURmOVn6HdoWRl%2B1xl9eQ6v1aocpu4StkDAS0SlUt%2FXBEnygQDOzoR02m9t61%2FD1UcUcuOU%2BlvCuR11vSfgY6gpOZBscsPs%2FRHJdW8DlGWTV9y%2Bcnfaw%2BmUnMbgaIH0vqCkkk79aShFWuIjoIsBRj4Wj%2BRcHL7RQFs661c4q1pXR27E%2BNXQf5XBIQS%2FOmrhfagUAPByZg4%2BsRZVE2ieRgRlI36zzwuE%2BucD37pWqKSBwykNTJhXa5jTSGUsRaUPVfJee7fq6Dja7TkMSJovAOImvsu3qWxxMFJ4vM87FXnvRbnCgL4aoGzuI%2FZCscEyMD4m%2F0pHMz5ihTnJoDgtG%2FBVkW%2Bn9Zyyebgd3YOyIoE1imTUa5dkkSW6gIsq3cJXkps1jJsr6W6EiVtyDCX1PnCBjqkAZW70uDxUvLHgeQ81VEafEyfWIPvVU1h0MnOOYIjhzOw3dnD1tVYzND2KFgk%2BngGlGgPaafth90N%2BrOSE8X5bBfkeQWZ%2FnSUOLW2A4XR3QAw9XxtphlqpsZQTSCpKTZoWpLC51MB%2B5o4FVMYXMrYK1U%2FVOL1APUELMmJmpQxcK1n55xanheFgGWILg%2FwHTCO8pLq5aoOwS%2F3%2FzXhkrfm%2FwfG7opj&X-Amz-Signature=6c122c608acb3ca97a7caf656d91f87b4b7da74e4677a7395c83c70274ef8323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOHT4HT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDvc9C%2Fx8XZeAP1yUDsE0EwziU39qa9QjA4o41zTy3e%2FgIhAMq5%2BZM4GZwncTKOC%2BR%2Bi025%2B%2B%2Fl%2By8jaWeaDTSVa2ocKv8DCHMQABoMNjM3NDIzMTgzODA1Igwla4lHbGbVG%2BtFfoQq3APt1w3lC5OMCajE%2Fvb3Hv0nCF4FajGiJ33A8QJyKyhKr%2B2YJzW%2B7tkv1OsUmLuX7w16HlJvMe4abfXoD9Ip%2BNwcSxFpVSSSxh0yy3L90e6c8azLTecz9SUvqhUw54KsZPigC3D%2Bl38NDaMPsuBdhYfS6MBkIog1Tf6bNhmQjiv8AvdDwZXwZ4%2FLmFL7jn3jE86InpjJzu42uGqXO74lGhXwp5Il%2BgeyHD0n1vOkA6XkGa%2BURmOVn6HdoWRl%2B1xl9eQ6v1aocpu4StkDAS0SlUt%2FXBEnygQDOzoR02m9t61%2FD1UcUcuOU%2BlvCuR11vSfgY6gpOZBscsPs%2FRHJdW8DlGWTV9y%2Bcnfaw%2BmUnMbgaIH0vqCkkk79aShFWuIjoIsBRj4Wj%2BRcHL7RQFs661c4q1pXR27E%2BNXQf5XBIQS%2FOmrhfagUAPByZg4%2BsRZVE2ieRgRlI36zzwuE%2BucD37pWqKSBwykNTJhXa5jTSGUsRaUPVfJee7fq6Dja7TkMSJovAOImvsu3qWxxMFJ4vM87FXnvRbnCgL4aoGzuI%2FZCscEyMD4m%2F0pHMz5ihTnJoDgtG%2FBVkW%2Bn9Zyyebgd3YOyIoE1imTUa5dkkSW6gIsq3cJXkps1jJsr6W6EiVtyDCX1PnCBjqkAZW70uDxUvLHgeQ81VEafEyfWIPvVU1h0MnOOYIjhzOw3dnD1tVYzND2KFgk%2BngGlGgPaafth90N%2BrOSE8X5bBfkeQWZ%2FnSUOLW2A4XR3QAw9XxtphlqpsZQTSCpKTZoWpLC51MB%2B5o4FVMYXMrYK1U%2FVOL1APUELMmJmpQxcK1n55xanheFgGWILg%2FwHTCO8pLq5aoOwS%2F3%2FzXhkrfm%2FwfG7opj&X-Amz-Signature=19dae99f2953e5ef96695077c8237a593f2d5732decbea8ff89b3f16075ccbfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOHT4HT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDvc9C%2Fx8XZeAP1yUDsE0EwziU39qa9QjA4o41zTy3e%2FgIhAMq5%2BZM4GZwncTKOC%2BR%2Bi025%2B%2B%2Fl%2By8jaWeaDTSVa2ocKv8DCHMQABoMNjM3NDIzMTgzODA1Igwla4lHbGbVG%2BtFfoQq3APt1w3lC5OMCajE%2Fvb3Hv0nCF4FajGiJ33A8QJyKyhKr%2B2YJzW%2B7tkv1OsUmLuX7w16HlJvMe4abfXoD9Ip%2BNwcSxFpVSSSxh0yy3L90e6c8azLTecz9SUvqhUw54KsZPigC3D%2Bl38NDaMPsuBdhYfS6MBkIog1Tf6bNhmQjiv8AvdDwZXwZ4%2FLmFL7jn3jE86InpjJzu42uGqXO74lGhXwp5Il%2BgeyHD0n1vOkA6XkGa%2BURmOVn6HdoWRl%2B1xl9eQ6v1aocpu4StkDAS0SlUt%2FXBEnygQDOzoR02m9t61%2FD1UcUcuOU%2BlvCuR11vSfgY6gpOZBscsPs%2FRHJdW8DlGWTV9y%2Bcnfaw%2BmUnMbgaIH0vqCkkk79aShFWuIjoIsBRj4Wj%2BRcHL7RQFs661c4q1pXR27E%2BNXQf5XBIQS%2FOmrhfagUAPByZg4%2BsRZVE2ieRgRlI36zzwuE%2BucD37pWqKSBwykNTJhXa5jTSGUsRaUPVfJee7fq6Dja7TkMSJovAOImvsu3qWxxMFJ4vM87FXnvRbnCgL4aoGzuI%2FZCscEyMD4m%2F0pHMz5ihTnJoDgtG%2FBVkW%2Bn9Zyyebgd3YOyIoE1imTUa5dkkSW6gIsq3cJXkps1jJsr6W6EiVtyDCX1PnCBjqkAZW70uDxUvLHgeQ81VEafEyfWIPvVU1h0MnOOYIjhzOw3dnD1tVYzND2KFgk%2BngGlGgPaafth90N%2BrOSE8X5bBfkeQWZ%2FnSUOLW2A4XR3QAw9XxtphlqpsZQTSCpKTZoWpLC51MB%2B5o4FVMYXMrYK1U%2FVOL1APUELMmJmpQxcK1n55xanheFgGWILg%2FwHTCO8pLq5aoOwS%2F3%2FzXhkrfm%2FwfG7opj&X-Amz-Signature=cf22775cb7d1bbd8e272439514551a35937817d006679679252ae744aee1f87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
