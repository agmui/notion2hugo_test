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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRLXXIZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDdrqq1M0pUrUwshjGyTiQmuyocVBEJmmTMGWGF3QLijQIgSZGAH2JWYPVZ5MnyX8ND%2FbQ8hajlAiaMrhUoSOghtq4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKde4x%2B2tVU%2Fei9BASrcA497ul0GJpPZ2HKgAHcxRVlcbBbNhE2roTKmOZArD1doKO34xNgRKL%2Bhnxgy%2FvcN1SARXujpyptVdRdXRFVjp3H9lryVTaabaQFCbzAZjRzgGt6SjEuMHiGsK9tgzhbBOveI2pe4wyj5yHdQwxjBvHHnDhXdrr7DTBRzZ6vrgmt1cWemfGwI0xx%2BU%2FKZdlHG4KHnkoigb%2Bhrm%2B%2BN483gTZMx0HLt0g2kJz67DKVVhhQPegKWKFEW58muMe9lNT810IsLEXWTpV1761Si%2F7neBcEm0%2FwEhKOKsgZnfqdEJbYPC2vnV4FoqhzYLVsNpKJ%2Bn65Ufwv3mh8jVeu8gmUavEfIPWnJi0dOAHql31zdPiuNK0e%2BkoV3hhx%2FaM8SzauliUVjjmFaxCRNPicjitAXUkFVCsFOxlQu5u89A%2FxVlsE2qyzVpITAfw1iuebH6jt0rYbGO%2BUf%2BWu4yrBBU2e7zBZtN35vmCp%2FwGYonqID7B2J%2F7vcDhm3m%2BHS3Gq%2B1zsFC4pv66gRQCeic%2FmfyYndt313CwTXt%2FD3XFNJS25%2B3mBAblI8uTSaU%2B2V6%2Fn3YmPDCFPX2BQ141%2B0SUNZ7PVH657sVXE9a29cx76%2B7%2Ft7m4oYTHBlj5xT61viA8umMLaGnb0GOqUBPRrgoOYaTPt3yAjvziP68%2BCkbaDpjo5eQuTTGySIEiBLWSAb01vLh5sw35p%2FR4hF%2BK9tzbRmSNvN0mewLnLpHqm6%2Bauw6mBsmouAnM%2FfF7vTfIwjg1a1cF3iupperlfI%2F8v3ToJZ9FHcgLzlItnXTTY6CnuS8rY%2BNxMc2pUgcGIo6ESdtCzBKeOUr8GcGR6q1HnjwC%2BrVFxkg6xGzMOj%2FmGbSioD&X-Amz-Signature=eb633ce60a0639adb266b109c0342f7e72b5c0b024a1cc374d9265bcc6637a55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRLXXIZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDdrqq1M0pUrUwshjGyTiQmuyocVBEJmmTMGWGF3QLijQIgSZGAH2JWYPVZ5MnyX8ND%2FbQ8hajlAiaMrhUoSOghtq4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKde4x%2B2tVU%2Fei9BASrcA497ul0GJpPZ2HKgAHcxRVlcbBbNhE2roTKmOZArD1doKO34xNgRKL%2Bhnxgy%2FvcN1SARXujpyptVdRdXRFVjp3H9lryVTaabaQFCbzAZjRzgGt6SjEuMHiGsK9tgzhbBOveI2pe4wyj5yHdQwxjBvHHnDhXdrr7DTBRzZ6vrgmt1cWemfGwI0xx%2BU%2FKZdlHG4KHnkoigb%2Bhrm%2B%2BN483gTZMx0HLt0g2kJz67DKVVhhQPegKWKFEW58muMe9lNT810IsLEXWTpV1761Si%2F7neBcEm0%2FwEhKOKsgZnfqdEJbYPC2vnV4FoqhzYLVsNpKJ%2Bn65Ufwv3mh8jVeu8gmUavEfIPWnJi0dOAHql31zdPiuNK0e%2BkoV3hhx%2FaM8SzauliUVjjmFaxCRNPicjitAXUkFVCsFOxlQu5u89A%2FxVlsE2qyzVpITAfw1iuebH6jt0rYbGO%2BUf%2BWu4yrBBU2e7zBZtN35vmCp%2FwGYonqID7B2J%2F7vcDhm3m%2BHS3Gq%2B1zsFC4pv66gRQCeic%2FmfyYndt313CwTXt%2FD3XFNJS25%2B3mBAblI8uTSaU%2B2V6%2Fn3YmPDCFPX2BQ141%2B0SUNZ7PVH657sVXE9a29cx76%2B7%2Ft7m4oYTHBlj5xT61viA8umMLaGnb0GOqUBPRrgoOYaTPt3yAjvziP68%2BCkbaDpjo5eQuTTGySIEiBLWSAb01vLh5sw35p%2FR4hF%2BK9tzbRmSNvN0mewLnLpHqm6%2Bauw6mBsmouAnM%2FfF7vTfIwjg1a1cF3iupperlfI%2F8v3ToJZ9FHcgLzlItnXTTY6CnuS8rY%2BNxMc2pUgcGIo6ESdtCzBKeOUr8GcGR6q1HnjwC%2BrVFxkg6xGzMOj%2FmGbSioD&X-Amz-Signature=2f266310b6f5c0c1a2d323d0ff5c0fd1abd2befbd18220d7d22f98aed650389f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRLXXIZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDdrqq1M0pUrUwshjGyTiQmuyocVBEJmmTMGWGF3QLijQIgSZGAH2JWYPVZ5MnyX8ND%2FbQ8hajlAiaMrhUoSOghtq4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKde4x%2B2tVU%2Fei9BASrcA497ul0GJpPZ2HKgAHcxRVlcbBbNhE2roTKmOZArD1doKO34xNgRKL%2Bhnxgy%2FvcN1SARXujpyptVdRdXRFVjp3H9lryVTaabaQFCbzAZjRzgGt6SjEuMHiGsK9tgzhbBOveI2pe4wyj5yHdQwxjBvHHnDhXdrr7DTBRzZ6vrgmt1cWemfGwI0xx%2BU%2FKZdlHG4KHnkoigb%2Bhrm%2B%2BN483gTZMx0HLt0g2kJz67DKVVhhQPegKWKFEW58muMe9lNT810IsLEXWTpV1761Si%2F7neBcEm0%2FwEhKOKsgZnfqdEJbYPC2vnV4FoqhzYLVsNpKJ%2Bn65Ufwv3mh8jVeu8gmUavEfIPWnJi0dOAHql31zdPiuNK0e%2BkoV3hhx%2FaM8SzauliUVjjmFaxCRNPicjitAXUkFVCsFOxlQu5u89A%2FxVlsE2qyzVpITAfw1iuebH6jt0rYbGO%2BUf%2BWu4yrBBU2e7zBZtN35vmCp%2FwGYonqID7B2J%2F7vcDhm3m%2BHS3Gq%2B1zsFC4pv66gRQCeic%2FmfyYndt313CwTXt%2FD3XFNJS25%2B3mBAblI8uTSaU%2B2V6%2Fn3YmPDCFPX2BQ141%2B0SUNZ7PVH657sVXE9a29cx76%2B7%2Ft7m4oYTHBlj5xT61viA8umMLaGnb0GOqUBPRrgoOYaTPt3yAjvziP68%2BCkbaDpjo5eQuTTGySIEiBLWSAb01vLh5sw35p%2FR4hF%2BK9tzbRmSNvN0mewLnLpHqm6%2Bauw6mBsmouAnM%2FfF7vTfIwjg1a1cF3iupperlfI%2F8v3ToJZ9FHcgLzlItnXTTY6CnuS8rY%2BNxMc2pUgcGIo6ESdtCzBKeOUr8GcGR6q1HnjwC%2BrVFxkg6xGzMOj%2FmGbSioD&X-Amz-Signature=05d18146156072d42335a072462d08f5c81c8d4df88e5533e4de1341b47ec3df&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRLXXIZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDdrqq1M0pUrUwshjGyTiQmuyocVBEJmmTMGWGF3QLijQIgSZGAH2JWYPVZ5MnyX8ND%2FbQ8hajlAiaMrhUoSOghtq4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKde4x%2B2tVU%2Fei9BASrcA497ul0GJpPZ2HKgAHcxRVlcbBbNhE2roTKmOZArD1doKO34xNgRKL%2Bhnxgy%2FvcN1SARXujpyptVdRdXRFVjp3H9lryVTaabaQFCbzAZjRzgGt6SjEuMHiGsK9tgzhbBOveI2pe4wyj5yHdQwxjBvHHnDhXdrr7DTBRzZ6vrgmt1cWemfGwI0xx%2BU%2FKZdlHG4KHnkoigb%2Bhrm%2B%2BN483gTZMx0HLt0g2kJz67DKVVhhQPegKWKFEW58muMe9lNT810IsLEXWTpV1761Si%2F7neBcEm0%2FwEhKOKsgZnfqdEJbYPC2vnV4FoqhzYLVsNpKJ%2Bn65Ufwv3mh8jVeu8gmUavEfIPWnJi0dOAHql31zdPiuNK0e%2BkoV3hhx%2FaM8SzauliUVjjmFaxCRNPicjitAXUkFVCsFOxlQu5u89A%2FxVlsE2qyzVpITAfw1iuebH6jt0rYbGO%2BUf%2BWu4yrBBU2e7zBZtN35vmCp%2FwGYonqID7B2J%2F7vcDhm3m%2BHS3Gq%2B1zsFC4pv66gRQCeic%2FmfyYndt313CwTXt%2FD3XFNJS25%2B3mBAblI8uTSaU%2B2V6%2Fn3YmPDCFPX2BQ141%2B0SUNZ7PVH657sVXE9a29cx76%2B7%2Ft7m4oYTHBlj5xT61viA8umMLaGnb0GOqUBPRrgoOYaTPt3yAjvziP68%2BCkbaDpjo5eQuTTGySIEiBLWSAb01vLh5sw35p%2FR4hF%2BK9tzbRmSNvN0mewLnLpHqm6%2Bauw6mBsmouAnM%2FfF7vTfIwjg1a1cF3iupperlfI%2F8v3ToJZ9FHcgLzlItnXTTY6CnuS8rY%2BNxMc2pUgcGIo6ESdtCzBKeOUr8GcGR6q1HnjwC%2BrVFxkg6xGzMOj%2FmGbSioD&X-Amz-Signature=f465e3974fd369b77efbd6147234312050845c467a18ecbc42ea355d5cec90ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRLXXIZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDdrqq1M0pUrUwshjGyTiQmuyocVBEJmmTMGWGF3QLijQIgSZGAH2JWYPVZ5MnyX8ND%2FbQ8hajlAiaMrhUoSOghtq4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKde4x%2B2tVU%2Fei9BASrcA497ul0GJpPZ2HKgAHcxRVlcbBbNhE2roTKmOZArD1doKO34xNgRKL%2Bhnxgy%2FvcN1SARXujpyptVdRdXRFVjp3H9lryVTaabaQFCbzAZjRzgGt6SjEuMHiGsK9tgzhbBOveI2pe4wyj5yHdQwxjBvHHnDhXdrr7DTBRzZ6vrgmt1cWemfGwI0xx%2BU%2FKZdlHG4KHnkoigb%2Bhrm%2B%2BN483gTZMx0HLt0g2kJz67DKVVhhQPegKWKFEW58muMe9lNT810IsLEXWTpV1761Si%2F7neBcEm0%2FwEhKOKsgZnfqdEJbYPC2vnV4FoqhzYLVsNpKJ%2Bn65Ufwv3mh8jVeu8gmUavEfIPWnJi0dOAHql31zdPiuNK0e%2BkoV3hhx%2FaM8SzauliUVjjmFaxCRNPicjitAXUkFVCsFOxlQu5u89A%2FxVlsE2qyzVpITAfw1iuebH6jt0rYbGO%2BUf%2BWu4yrBBU2e7zBZtN35vmCp%2FwGYonqID7B2J%2F7vcDhm3m%2BHS3Gq%2B1zsFC4pv66gRQCeic%2FmfyYndt313CwTXt%2FD3XFNJS25%2B3mBAblI8uTSaU%2B2V6%2Fn3YmPDCFPX2BQ141%2B0SUNZ7PVH657sVXE9a29cx76%2B7%2Ft7m4oYTHBlj5xT61viA8umMLaGnb0GOqUBPRrgoOYaTPt3yAjvziP68%2BCkbaDpjo5eQuTTGySIEiBLWSAb01vLh5sw35p%2FR4hF%2BK9tzbRmSNvN0mewLnLpHqm6%2Bauw6mBsmouAnM%2FfF7vTfIwjg1a1cF3iupperlfI%2F8v3ToJZ9FHcgLzlItnXTTY6CnuS8rY%2BNxMc2pUgcGIo6ESdtCzBKeOUr8GcGR6q1HnjwC%2BrVFxkg6xGzMOj%2FmGbSioD&X-Amz-Signature=5034e5e1832c984a88fc6d3019d7252e1001ffaacaa63a6680b3f7b3d32213ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRLXXIZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDdrqq1M0pUrUwshjGyTiQmuyocVBEJmmTMGWGF3QLijQIgSZGAH2JWYPVZ5MnyX8ND%2FbQ8hajlAiaMrhUoSOghtq4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKde4x%2B2tVU%2Fei9BASrcA497ul0GJpPZ2HKgAHcxRVlcbBbNhE2roTKmOZArD1doKO34xNgRKL%2Bhnxgy%2FvcN1SARXujpyptVdRdXRFVjp3H9lryVTaabaQFCbzAZjRzgGt6SjEuMHiGsK9tgzhbBOveI2pe4wyj5yHdQwxjBvHHnDhXdrr7DTBRzZ6vrgmt1cWemfGwI0xx%2BU%2FKZdlHG4KHnkoigb%2Bhrm%2B%2BN483gTZMx0HLt0g2kJz67DKVVhhQPegKWKFEW58muMe9lNT810IsLEXWTpV1761Si%2F7neBcEm0%2FwEhKOKsgZnfqdEJbYPC2vnV4FoqhzYLVsNpKJ%2Bn65Ufwv3mh8jVeu8gmUavEfIPWnJi0dOAHql31zdPiuNK0e%2BkoV3hhx%2FaM8SzauliUVjjmFaxCRNPicjitAXUkFVCsFOxlQu5u89A%2FxVlsE2qyzVpITAfw1iuebH6jt0rYbGO%2BUf%2BWu4yrBBU2e7zBZtN35vmCp%2FwGYonqID7B2J%2F7vcDhm3m%2BHS3Gq%2B1zsFC4pv66gRQCeic%2FmfyYndt313CwTXt%2FD3XFNJS25%2B3mBAblI8uTSaU%2B2V6%2Fn3YmPDCFPX2BQ141%2B0SUNZ7PVH657sVXE9a29cx76%2B7%2Ft7m4oYTHBlj5xT61viA8umMLaGnb0GOqUBPRrgoOYaTPt3yAjvziP68%2BCkbaDpjo5eQuTTGySIEiBLWSAb01vLh5sw35p%2FR4hF%2BK9tzbRmSNvN0mewLnLpHqm6%2Bauw6mBsmouAnM%2FfF7vTfIwjg1a1cF3iupperlfI%2F8v3ToJZ9FHcgLzlItnXTTY6CnuS8rY%2BNxMc2pUgcGIo6ESdtCzBKeOUr8GcGR6q1HnjwC%2BrVFxkg6xGzMOj%2FmGbSioD&X-Amz-Signature=9fc587554bcd15556faadfce6edb3494b601a4d871f8f92c7b42c5579a1c3888&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRLXXIZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDdrqq1M0pUrUwshjGyTiQmuyocVBEJmmTMGWGF3QLijQIgSZGAH2JWYPVZ5MnyX8ND%2FbQ8hajlAiaMrhUoSOghtq4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKde4x%2B2tVU%2Fei9BASrcA497ul0GJpPZ2HKgAHcxRVlcbBbNhE2roTKmOZArD1doKO34xNgRKL%2Bhnxgy%2FvcN1SARXujpyptVdRdXRFVjp3H9lryVTaabaQFCbzAZjRzgGt6SjEuMHiGsK9tgzhbBOveI2pe4wyj5yHdQwxjBvHHnDhXdrr7DTBRzZ6vrgmt1cWemfGwI0xx%2BU%2FKZdlHG4KHnkoigb%2Bhrm%2B%2BN483gTZMx0HLt0g2kJz67DKVVhhQPegKWKFEW58muMe9lNT810IsLEXWTpV1761Si%2F7neBcEm0%2FwEhKOKsgZnfqdEJbYPC2vnV4FoqhzYLVsNpKJ%2Bn65Ufwv3mh8jVeu8gmUavEfIPWnJi0dOAHql31zdPiuNK0e%2BkoV3hhx%2FaM8SzauliUVjjmFaxCRNPicjitAXUkFVCsFOxlQu5u89A%2FxVlsE2qyzVpITAfw1iuebH6jt0rYbGO%2BUf%2BWu4yrBBU2e7zBZtN35vmCp%2FwGYonqID7B2J%2F7vcDhm3m%2BHS3Gq%2B1zsFC4pv66gRQCeic%2FmfyYndt313CwTXt%2FD3XFNJS25%2B3mBAblI8uTSaU%2B2V6%2Fn3YmPDCFPX2BQ141%2B0SUNZ7PVH657sVXE9a29cx76%2B7%2Ft7m4oYTHBlj5xT61viA8umMLaGnb0GOqUBPRrgoOYaTPt3yAjvziP68%2BCkbaDpjo5eQuTTGySIEiBLWSAb01vLh5sw35p%2FR4hF%2BK9tzbRmSNvN0mewLnLpHqm6%2Bauw6mBsmouAnM%2FfF7vTfIwjg1a1cF3iupperlfI%2F8v3ToJZ9FHcgLzlItnXTTY6CnuS8rY%2BNxMc2pUgcGIo6ESdtCzBKeOUr8GcGR6q1HnjwC%2BrVFxkg6xGzMOj%2FmGbSioD&X-Amz-Signature=6e234a810aa17ae36c1f3c87c1a1e396e3c1c9df31ac6c8aa911efda7ee07490&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRLXXIZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDdrqq1M0pUrUwshjGyTiQmuyocVBEJmmTMGWGF3QLijQIgSZGAH2JWYPVZ5MnyX8ND%2FbQ8hajlAiaMrhUoSOghtq4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKde4x%2B2tVU%2Fei9BASrcA497ul0GJpPZ2HKgAHcxRVlcbBbNhE2roTKmOZArD1doKO34xNgRKL%2Bhnxgy%2FvcN1SARXujpyptVdRdXRFVjp3H9lryVTaabaQFCbzAZjRzgGt6SjEuMHiGsK9tgzhbBOveI2pe4wyj5yHdQwxjBvHHnDhXdrr7DTBRzZ6vrgmt1cWemfGwI0xx%2BU%2FKZdlHG4KHnkoigb%2Bhrm%2B%2BN483gTZMx0HLt0g2kJz67DKVVhhQPegKWKFEW58muMe9lNT810IsLEXWTpV1761Si%2F7neBcEm0%2FwEhKOKsgZnfqdEJbYPC2vnV4FoqhzYLVsNpKJ%2Bn65Ufwv3mh8jVeu8gmUavEfIPWnJi0dOAHql31zdPiuNK0e%2BkoV3hhx%2FaM8SzauliUVjjmFaxCRNPicjitAXUkFVCsFOxlQu5u89A%2FxVlsE2qyzVpITAfw1iuebH6jt0rYbGO%2BUf%2BWu4yrBBU2e7zBZtN35vmCp%2FwGYonqID7B2J%2F7vcDhm3m%2BHS3Gq%2B1zsFC4pv66gRQCeic%2FmfyYndt313CwTXt%2FD3XFNJS25%2B3mBAblI8uTSaU%2B2V6%2Fn3YmPDCFPX2BQ141%2B0SUNZ7PVH657sVXE9a29cx76%2B7%2Ft7m4oYTHBlj5xT61viA8umMLaGnb0GOqUBPRrgoOYaTPt3yAjvziP68%2BCkbaDpjo5eQuTTGySIEiBLWSAb01vLh5sw35p%2FR4hF%2BK9tzbRmSNvN0mewLnLpHqm6%2Bauw6mBsmouAnM%2FfF7vTfIwjg1a1cF3iupperlfI%2F8v3ToJZ9FHcgLzlItnXTTY6CnuS8rY%2BNxMc2pUgcGIo6ESdtCzBKeOUr8GcGR6q1HnjwC%2BrVFxkg6xGzMOj%2FmGbSioD&X-Amz-Signature=b56421356988b39d1679e9f77af4a9ce3feee27c735d146402e372949cf3d41e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
