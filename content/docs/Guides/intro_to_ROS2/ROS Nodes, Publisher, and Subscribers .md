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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQU53PU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGwMOQ1JNM7gCx0KVMpcPbV4%2BqIUvleZf4Xb3Gy3%2BryPAiEA5%2BcjoLnu1e7s3VaWttclHx6wPgENz3hGGGmBDFY6KWUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLTrHT%2Bb4aFxKnYoFyrcA4uatPtgyZ8N1Bk3BWrOJ%2BibEkInOQRozzEHgnffujGvaulydIyghFOIV9l2QC58hIeGzvQpczWWyrzODOKl64M3zNQIxBDoxvlGupbJw4RzeI0uge1%2FaIE5TtsvuARltIrCvtBVcKYLsWk7ZsXN%2BUlal5NDgLRcDLF0RO17tWbS9Bbyykz1ybjAy%2BaWonsWETlrQRM3fiZrVGtk6QhtfCGHvwnV2Nr59KZwMGyGfbCBKk%2B8CBUy%2FmUlxM4WbRSv36tRrAj0TPaJeH%2BgP8vSbtrffnVdLETFS1EDwIMHGjjUMTORBLz%2B9%2FynzN8V7r2PLBzkBP9kf6tFJKoft%2B8fpuBDVihl09lJnKN7HO2nzB0%2BE2EjtzlJxduNrsikJSskn8RE5qqhdYEyJ5fGxy2qJRPv2gIvelJW5AKGmalJzlFnDvHWuXDBUX7HtFE6Rxxb%2B9p4bnRlOCqy4Cli45W6jfvUWCRvtuxKWmVYFnPsN4efCVTNqEgecNqh0PDj0eK6noDRCGddgJgJQ0DlgAbJIodfzUkDKTw3PlK%2BWnP%2FIUiv2bjGy5wxMpjPurARfOEe8O6JRH4zeAYz0uU8fCAwM3RX%2B94Lmrvuo8fjsiv2hfQXVUCx6jVCUy5%2Boz%2BNMICJ%2F8EGOqUBeVIrnJi2FkE9jDUHT0EQk7AiBCZujYmRURdC74o70tS8XhUWndHNHIKZhKdoQ9%2FYkgJ%2BeagtdS7W81RSU%2FQfrmRISWS7%2B8nLo4toJdhnnbeJZqtMjNNAQUCGH7VUenI1rZmbunaXTEiyPplNLn7m49lHntCmOBkGEKeqxR%2BavslpXKoHJcIpT1wsWgyDwKipaRBYxKcTT4b64zKCHdF8sR0i5VWg&X-Amz-Signature=348d41462709ad90bfa9e0c4d09bf9f245da4d660d4a3afcd6bf27fe811b6ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQU53PU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGwMOQ1JNM7gCx0KVMpcPbV4%2BqIUvleZf4Xb3Gy3%2BryPAiEA5%2BcjoLnu1e7s3VaWttclHx6wPgENz3hGGGmBDFY6KWUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLTrHT%2Bb4aFxKnYoFyrcA4uatPtgyZ8N1Bk3BWrOJ%2BibEkInOQRozzEHgnffujGvaulydIyghFOIV9l2QC58hIeGzvQpczWWyrzODOKl64M3zNQIxBDoxvlGupbJw4RzeI0uge1%2FaIE5TtsvuARltIrCvtBVcKYLsWk7ZsXN%2BUlal5NDgLRcDLF0RO17tWbS9Bbyykz1ybjAy%2BaWonsWETlrQRM3fiZrVGtk6QhtfCGHvwnV2Nr59KZwMGyGfbCBKk%2B8CBUy%2FmUlxM4WbRSv36tRrAj0TPaJeH%2BgP8vSbtrffnVdLETFS1EDwIMHGjjUMTORBLz%2B9%2FynzN8V7r2PLBzkBP9kf6tFJKoft%2B8fpuBDVihl09lJnKN7HO2nzB0%2BE2EjtzlJxduNrsikJSskn8RE5qqhdYEyJ5fGxy2qJRPv2gIvelJW5AKGmalJzlFnDvHWuXDBUX7HtFE6Rxxb%2B9p4bnRlOCqy4Cli45W6jfvUWCRvtuxKWmVYFnPsN4efCVTNqEgecNqh0PDj0eK6noDRCGddgJgJQ0DlgAbJIodfzUkDKTw3PlK%2BWnP%2FIUiv2bjGy5wxMpjPurARfOEe8O6JRH4zeAYz0uU8fCAwM3RX%2B94Lmrvuo8fjsiv2hfQXVUCx6jVCUy5%2Boz%2BNMICJ%2F8EGOqUBeVIrnJi2FkE9jDUHT0EQk7AiBCZujYmRURdC74o70tS8XhUWndHNHIKZhKdoQ9%2FYkgJ%2BeagtdS7W81RSU%2FQfrmRISWS7%2B8nLo4toJdhnnbeJZqtMjNNAQUCGH7VUenI1rZmbunaXTEiyPplNLn7m49lHntCmOBkGEKeqxR%2BavslpXKoHJcIpT1wsWgyDwKipaRBYxKcTT4b64zKCHdF8sR0i5VWg&X-Amz-Signature=b94e66dce2bc72cd30eeefffb0a83c1aabef3debcd754b60c885243eed2aeb00&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQU53PU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGwMOQ1JNM7gCx0KVMpcPbV4%2BqIUvleZf4Xb3Gy3%2BryPAiEA5%2BcjoLnu1e7s3VaWttclHx6wPgENz3hGGGmBDFY6KWUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLTrHT%2Bb4aFxKnYoFyrcA4uatPtgyZ8N1Bk3BWrOJ%2BibEkInOQRozzEHgnffujGvaulydIyghFOIV9l2QC58hIeGzvQpczWWyrzODOKl64M3zNQIxBDoxvlGupbJw4RzeI0uge1%2FaIE5TtsvuARltIrCvtBVcKYLsWk7ZsXN%2BUlal5NDgLRcDLF0RO17tWbS9Bbyykz1ybjAy%2BaWonsWETlrQRM3fiZrVGtk6QhtfCGHvwnV2Nr59KZwMGyGfbCBKk%2B8CBUy%2FmUlxM4WbRSv36tRrAj0TPaJeH%2BgP8vSbtrffnVdLETFS1EDwIMHGjjUMTORBLz%2B9%2FynzN8V7r2PLBzkBP9kf6tFJKoft%2B8fpuBDVihl09lJnKN7HO2nzB0%2BE2EjtzlJxduNrsikJSskn8RE5qqhdYEyJ5fGxy2qJRPv2gIvelJW5AKGmalJzlFnDvHWuXDBUX7HtFE6Rxxb%2B9p4bnRlOCqy4Cli45W6jfvUWCRvtuxKWmVYFnPsN4efCVTNqEgecNqh0PDj0eK6noDRCGddgJgJQ0DlgAbJIodfzUkDKTw3PlK%2BWnP%2FIUiv2bjGy5wxMpjPurARfOEe8O6JRH4zeAYz0uU8fCAwM3RX%2B94Lmrvuo8fjsiv2hfQXVUCx6jVCUy5%2Boz%2BNMICJ%2F8EGOqUBeVIrnJi2FkE9jDUHT0EQk7AiBCZujYmRURdC74o70tS8XhUWndHNHIKZhKdoQ9%2FYkgJ%2BeagtdS7W81RSU%2FQfrmRISWS7%2B8nLo4toJdhnnbeJZqtMjNNAQUCGH7VUenI1rZmbunaXTEiyPplNLn7m49lHntCmOBkGEKeqxR%2BavslpXKoHJcIpT1wsWgyDwKipaRBYxKcTT4b64zKCHdF8sR0i5VWg&X-Amz-Signature=8679c6bf64d7d625c3068d668b13aff8d9d24644a9f2af332511d050a51e8182&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQU53PU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGwMOQ1JNM7gCx0KVMpcPbV4%2BqIUvleZf4Xb3Gy3%2BryPAiEA5%2BcjoLnu1e7s3VaWttclHx6wPgENz3hGGGmBDFY6KWUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLTrHT%2Bb4aFxKnYoFyrcA4uatPtgyZ8N1Bk3BWrOJ%2BibEkInOQRozzEHgnffujGvaulydIyghFOIV9l2QC58hIeGzvQpczWWyrzODOKl64M3zNQIxBDoxvlGupbJw4RzeI0uge1%2FaIE5TtsvuARltIrCvtBVcKYLsWk7ZsXN%2BUlal5NDgLRcDLF0RO17tWbS9Bbyykz1ybjAy%2BaWonsWETlrQRM3fiZrVGtk6QhtfCGHvwnV2Nr59KZwMGyGfbCBKk%2B8CBUy%2FmUlxM4WbRSv36tRrAj0TPaJeH%2BgP8vSbtrffnVdLETFS1EDwIMHGjjUMTORBLz%2B9%2FynzN8V7r2PLBzkBP9kf6tFJKoft%2B8fpuBDVihl09lJnKN7HO2nzB0%2BE2EjtzlJxduNrsikJSskn8RE5qqhdYEyJ5fGxy2qJRPv2gIvelJW5AKGmalJzlFnDvHWuXDBUX7HtFE6Rxxb%2B9p4bnRlOCqy4Cli45W6jfvUWCRvtuxKWmVYFnPsN4efCVTNqEgecNqh0PDj0eK6noDRCGddgJgJQ0DlgAbJIodfzUkDKTw3PlK%2BWnP%2FIUiv2bjGy5wxMpjPurARfOEe8O6JRH4zeAYz0uU8fCAwM3RX%2B94Lmrvuo8fjsiv2hfQXVUCx6jVCUy5%2Boz%2BNMICJ%2F8EGOqUBeVIrnJi2FkE9jDUHT0EQk7AiBCZujYmRURdC74o70tS8XhUWndHNHIKZhKdoQ9%2FYkgJ%2BeagtdS7W81RSU%2FQfrmRISWS7%2B8nLo4toJdhnnbeJZqtMjNNAQUCGH7VUenI1rZmbunaXTEiyPplNLn7m49lHntCmOBkGEKeqxR%2BavslpXKoHJcIpT1wsWgyDwKipaRBYxKcTT4b64zKCHdF8sR0i5VWg&X-Amz-Signature=be7b08860fea14984fcf23d33b0d10d2bc32be878b59bd7ba86a71b73296ebe2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQU53PU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGwMOQ1JNM7gCx0KVMpcPbV4%2BqIUvleZf4Xb3Gy3%2BryPAiEA5%2BcjoLnu1e7s3VaWttclHx6wPgENz3hGGGmBDFY6KWUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLTrHT%2Bb4aFxKnYoFyrcA4uatPtgyZ8N1Bk3BWrOJ%2BibEkInOQRozzEHgnffujGvaulydIyghFOIV9l2QC58hIeGzvQpczWWyrzODOKl64M3zNQIxBDoxvlGupbJw4RzeI0uge1%2FaIE5TtsvuARltIrCvtBVcKYLsWk7ZsXN%2BUlal5NDgLRcDLF0RO17tWbS9Bbyykz1ybjAy%2BaWonsWETlrQRM3fiZrVGtk6QhtfCGHvwnV2Nr59KZwMGyGfbCBKk%2B8CBUy%2FmUlxM4WbRSv36tRrAj0TPaJeH%2BgP8vSbtrffnVdLETFS1EDwIMHGjjUMTORBLz%2B9%2FynzN8V7r2PLBzkBP9kf6tFJKoft%2B8fpuBDVihl09lJnKN7HO2nzB0%2BE2EjtzlJxduNrsikJSskn8RE5qqhdYEyJ5fGxy2qJRPv2gIvelJW5AKGmalJzlFnDvHWuXDBUX7HtFE6Rxxb%2B9p4bnRlOCqy4Cli45W6jfvUWCRvtuxKWmVYFnPsN4efCVTNqEgecNqh0PDj0eK6noDRCGddgJgJQ0DlgAbJIodfzUkDKTw3PlK%2BWnP%2FIUiv2bjGy5wxMpjPurARfOEe8O6JRH4zeAYz0uU8fCAwM3RX%2B94Lmrvuo8fjsiv2hfQXVUCx6jVCUy5%2Boz%2BNMICJ%2F8EGOqUBeVIrnJi2FkE9jDUHT0EQk7AiBCZujYmRURdC74o70tS8XhUWndHNHIKZhKdoQ9%2FYkgJ%2BeagtdS7W81RSU%2FQfrmRISWS7%2B8nLo4toJdhnnbeJZqtMjNNAQUCGH7VUenI1rZmbunaXTEiyPplNLn7m49lHntCmOBkGEKeqxR%2BavslpXKoHJcIpT1wsWgyDwKipaRBYxKcTT4b64zKCHdF8sR0i5VWg&X-Amz-Signature=4c48f33f185457e7a30b3c6e8429f76a4401593a6a5e119b2044fc92ea7eabe8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQU53PU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGwMOQ1JNM7gCx0KVMpcPbV4%2BqIUvleZf4Xb3Gy3%2BryPAiEA5%2BcjoLnu1e7s3VaWttclHx6wPgENz3hGGGmBDFY6KWUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLTrHT%2Bb4aFxKnYoFyrcA4uatPtgyZ8N1Bk3BWrOJ%2BibEkInOQRozzEHgnffujGvaulydIyghFOIV9l2QC58hIeGzvQpczWWyrzODOKl64M3zNQIxBDoxvlGupbJw4RzeI0uge1%2FaIE5TtsvuARltIrCvtBVcKYLsWk7ZsXN%2BUlal5NDgLRcDLF0RO17tWbS9Bbyykz1ybjAy%2BaWonsWETlrQRM3fiZrVGtk6QhtfCGHvwnV2Nr59KZwMGyGfbCBKk%2B8CBUy%2FmUlxM4WbRSv36tRrAj0TPaJeH%2BgP8vSbtrffnVdLETFS1EDwIMHGjjUMTORBLz%2B9%2FynzN8V7r2PLBzkBP9kf6tFJKoft%2B8fpuBDVihl09lJnKN7HO2nzB0%2BE2EjtzlJxduNrsikJSskn8RE5qqhdYEyJ5fGxy2qJRPv2gIvelJW5AKGmalJzlFnDvHWuXDBUX7HtFE6Rxxb%2B9p4bnRlOCqy4Cli45W6jfvUWCRvtuxKWmVYFnPsN4efCVTNqEgecNqh0PDj0eK6noDRCGddgJgJQ0DlgAbJIodfzUkDKTw3PlK%2BWnP%2FIUiv2bjGy5wxMpjPurARfOEe8O6JRH4zeAYz0uU8fCAwM3RX%2B94Lmrvuo8fjsiv2hfQXVUCx6jVCUy5%2Boz%2BNMICJ%2F8EGOqUBeVIrnJi2FkE9jDUHT0EQk7AiBCZujYmRURdC74o70tS8XhUWndHNHIKZhKdoQ9%2FYkgJ%2BeagtdS7W81RSU%2FQfrmRISWS7%2B8nLo4toJdhnnbeJZqtMjNNAQUCGH7VUenI1rZmbunaXTEiyPplNLn7m49lHntCmOBkGEKeqxR%2BavslpXKoHJcIpT1wsWgyDwKipaRBYxKcTT4b64zKCHdF8sR0i5VWg&X-Amz-Signature=35aec892b997aedbf4c69f5dfe19827110fc67c013981a68119f08b2b0f2422a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQU53PU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGwMOQ1JNM7gCx0KVMpcPbV4%2BqIUvleZf4Xb3Gy3%2BryPAiEA5%2BcjoLnu1e7s3VaWttclHx6wPgENz3hGGGmBDFY6KWUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLTrHT%2Bb4aFxKnYoFyrcA4uatPtgyZ8N1Bk3BWrOJ%2BibEkInOQRozzEHgnffujGvaulydIyghFOIV9l2QC58hIeGzvQpczWWyrzODOKl64M3zNQIxBDoxvlGupbJw4RzeI0uge1%2FaIE5TtsvuARltIrCvtBVcKYLsWk7ZsXN%2BUlal5NDgLRcDLF0RO17tWbS9Bbyykz1ybjAy%2BaWonsWETlrQRM3fiZrVGtk6QhtfCGHvwnV2Nr59KZwMGyGfbCBKk%2B8CBUy%2FmUlxM4WbRSv36tRrAj0TPaJeH%2BgP8vSbtrffnVdLETFS1EDwIMHGjjUMTORBLz%2B9%2FynzN8V7r2PLBzkBP9kf6tFJKoft%2B8fpuBDVihl09lJnKN7HO2nzB0%2BE2EjtzlJxduNrsikJSskn8RE5qqhdYEyJ5fGxy2qJRPv2gIvelJW5AKGmalJzlFnDvHWuXDBUX7HtFE6Rxxb%2B9p4bnRlOCqy4Cli45W6jfvUWCRvtuxKWmVYFnPsN4efCVTNqEgecNqh0PDj0eK6noDRCGddgJgJQ0DlgAbJIodfzUkDKTw3PlK%2BWnP%2FIUiv2bjGy5wxMpjPurARfOEe8O6JRH4zeAYz0uU8fCAwM3RX%2B94Lmrvuo8fjsiv2hfQXVUCx6jVCUy5%2Boz%2BNMICJ%2F8EGOqUBeVIrnJi2FkE9jDUHT0EQk7AiBCZujYmRURdC74o70tS8XhUWndHNHIKZhKdoQ9%2FYkgJ%2BeagtdS7W81RSU%2FQfrmRISWS7%2B8nLo4toJdhnnbeJZqtMjNNAQUCGH7VUenI1rZmbunaXTEiyPplNLn7m49lHntCmOBkGEKeqxR%2BavslpXKoHJcIpT1wsWgyDwKipaRBYxKcTT4b64zKCHdF8sR0i5VWg&X-Amz-Signature=9b1dc6f1a265b7033438f665a743df74cb70d9e6a035a43ef4570c8e1c8047cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQU53PU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGwMOQ1JNM7gCx0KVMpcPbV4%2BqIUvleZf4Xb3Gy3%2BryPAiEA5%2BcjoLnu1e7s3VaWttclHx6wPgENz3hGGGmBDFY6KWUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLTrHT%2Bb4aFxKnYoFyrcA4uatPtgyZ8N1Bk3BWrOJ%2BibEkInOQRozzEHgnffujGvaulydIyghFOIV9l2QC58hIeGzvQpczWWyrzODOKl64M3zNQIxBDoxvlGupbJw4RzeI0uge1%2FaIE5TtsvuARltIrCvtBVcKYLsWk7ZsXN%2BUlal5NDgLRcDLF0RO17tWbS9Bbyykz1ybjAy%2BaWonsWETlrQRM3fiZrVGtk6QhtfCGHvwnV2Nr59KZwMGyGfbCBKk%2B8CBUy%2FmUlxM4WbRSv36tRrAj0TPaJeH%2BgP8vSbtrffnVdLETFS1EDwIMHGjjUMTORBLz%2B9%2FynzN8V7r2PLBzkBP9kf6tFJKoft%2B8fpuBDVihl09lJnKN7HO2nzB0%2BE2EjtzlJxduNrsikJSskn8RE5qqhdYEyJ5fGxy2qJRPv2gIvelJW5AKGmalJzlFnDvHWuXDBUX7HtFE6Rxxb%2B9p4bnRlOCqy4Cli45W6jfvUWCRvtuxKWmVYFnPsN4efCVTNqEgecNqh0PDj0eK6noDRCGddgJgJQ0DlgAbJIodfzUkDKTw3PlK%2BWnP%2FIUiv2bjGy5wxMpjPurARfOEe8O6JRH4zeAYz0uU8fCAwM3RX%2B94Lmrvuo8fjsiv2hfQXVUCx6jVCUy5%2Boz%2BNMICJ%2F8EGOqUBeVIrnJi2FkE9jDUHT0EQk7AiBCZujYmRURdC74o70tS8XhUWndHNHIKZhKdoQ9%2FYkgJ%2BeagtdS7W81RSU%2FQfrmRISWS7%2B8nLo4toJdhnnbeJZqtMjNNAQUCGH7VUenI1rZmbunaXTEiyPplNLn7m49lHntCmOBkGEKeqxR%2BavslpXKoHJcIpT1wsWgyDwKipaRBYxKcTT4b64zKCHdF8sR0i5VWg&X-Amz-Signature=2cb46782afbdb3d8dcc296d389af1171ae58f75c62b9dc0bcce44524f780875e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
