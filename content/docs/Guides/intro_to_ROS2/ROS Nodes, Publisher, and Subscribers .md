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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEDRPXN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFDYuGRp0S9YF3BiAomMQhhGl3beHOH9bmWMrTD4sHgoAiEA%2Bx607IxVHUVJSvlCI8N7CEgY%2B1OQCn2Pvy3JfO778wAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDL%2BLCmdlwoGqShXMNSrcA2XSOL%2BahkbCbo6agsV8k5JjVjmG9gniBWe8dEs8ZYeq1DULP09J6KoUfPAM4pmZfWpuz4A31W2EERe9JJvRGrIwjGNmdQsHTabUPPigTDgSkheomI%2BsSiFNJ7lWmLTi7FS9iroTNc6bOMhHqmNybl5QiTcMsFlFAnnG39uWifLFhriVEVxtT8xtQ7BNAB295OLdQJ9BhhZ0plZ%2F30AMTe4EaDfay2sCzTJOlG0%2BzFdH3tWmnySb6hLfx1Jv6Uxz2D4D%2Fd89vhEwm6YcnYoouKEegwo5XHIBtxQczzVaT4UVlS4WKiNLt41glyNOmRJpfI949LXIyRCikT%2BaoJBRlKvHQH%2F3y0iHGTjeJjkQvC3h4xd8t37SsJ1xedFhB6uLKkxTz8WM2T6Pv7yOiSqg2BcJUxZrdho33HfS7YRmkS%2B98L2bh1vWCAKPKnHGU0yLW7ckUjX1Sv5RXh3srGF7poi58peCeZJdudutALqGswLOo7lUmrWVKWfLPWI3K29HEVzS%2BZ%2FTKsZ12RGs986wqGok461e5x2wtCGfVNrIkbLpuKPCV%2Fb%2FOxjV17kFa5JRhfZ3xehPf0iFY%2BIgLjA%2Bh48ivb9Mqlv7ascCc3X4jicwv4476fSv16mJdzK5MKLm%2B8EGOqUBNH5h5In%2BFBxC2Sp0JSqsr34mAuHKdOlRqo0YLkFLJt1TAAnVMP%2F8TEnTHCOvY8f91TPmz74gFjtwgN%2FSKAxd1wmO5zh0hFjaTPVdVGWWprMuP%2FgSH3xQXdr39kzPOM%2FKiNW5AH7d%2BDRVvfn9lsvafs14AOcByL7599d9xmdLUjLVcP96B5koM%2B%2FYJvU3AQt1LAVTWGb4tIx0VPNj6idfc8%2FTvBz9&X-Amz-Signature=9961cd2ce5c86600c9a945012a40cf6c050379db7ea4bd593a9639b73cf0c2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEDRPXN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFDYuGRp0S9YF3BiAomMQhhGl3beHOH9bmWMrTD4sHgoAiEA%2Bx607IxVHUVJSvlCI8N7CEgY%2B1OQCn2Pvy3JfO778wAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDL%2BLCmdlwoGqShXMNSrcA2XSOL%2BahkbCbo6agsV8k5JjVjmG9gniBWe8dEs8ZYeq1DULP09J6KoUfPAM4pmZfWpuz4A31W2EERe9JJvRGrIwjGNmdQsHTabUPPigTDgSkheomI%2BsSiFNJ7lWmLTi7FS9iroTNc6bOMhHqmNybl5QiTcMsFlFAnnG39uWifLFhriVEVxtT8xtQ7BNAB295OLdQJ9BhhZ0plZ%2F30AMTe4EaDfay2sCzTJOlG0%2BzFdH3tWmnySb6hLfx1Jv6Uxz2D4D%2Fd89vhEwm6YcnYoouKEegwo5XHIBtxQczzVaT4UVlS4WKiNLt41glyNOmRJpfI949LXIyRCikT%2BaoJBRlKvHQH%2F3y0iHGTjeJjkQvC3h4xd8t37SsJ1xedFhB6uLKkxTz8WM2T6Pv7yOiSqg2BcJUxZrdho33HfS7YRmkS%2B98L2bh1vWCAKPKnHGU0yLW7ckUjX1Sv5RXh3srGF7poi58peCeZJdudutALqGswLOo7lUmrWVKWfLPWI3K29HEVzS%2BZ%2FTKsZ12RGs986wqGok461e5x2wtCGfVNrIkbLpuKPCV%2Fb%2FOxjV17kFa5JRhfZ3xehPf0iFY%2BIgLjA%2Bh48ivb9Mqlv7ascCc3X4jicwv4476fSv16mJdzK5MKLm%2B8EGOqUBNH5h5In%2BFBxC2Sp0JSqsr34mAuHKdOlRqo0YLkFLJt1TAAnVMP%2F8TEnTHCOvY8f91TPmz74gFjtwgN%2FSKAxd1wmO5zh0hFjaTPVdVGWWprMuP%2FgSH3xQXdr39kzPOM%2FKiNW5AH7d%2BDRVvfn9lsvafs14AOcByL7599d9xmdLUjLVcP96B5koM%2B%2FYJvU3AQt1LAVTWGb4tIx0VPNj6idfc8%2FTvBz9&X-Amz-Signature=b74f57cb06f4e7b904b5c4fe0ff6644af48463ee3c76d920b6eba9703ed53e9e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEDRPXN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFDYuGRp0S9YF3BiAomMQhhGl3beHOH9bmWMrTD4sHgoAiEA%2Bx607IxVHUVJSvlCI8N7CEgY%2B1OQCn2Pvy3JfO778wAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDL%2BLCmdlwoGqShXMNSrcA2XSOL%2BahkbCbo6agsV8k5JjVjmG9gniBWe8dEs8ZYeq1DULP09J6KoUfPAM4pmZfWpuz4A31W2EERe9JJvRGrIwjGNmdQsHTabUPPigTDgSkheomI%2BsSiFNJ7lWmLTi7FS9iroTNc6bOMhHqmNybl5QiTcMsFlFAnnG39uWifLFhriVEVxtT8xtQ7BNAB295OLdQJ9BhhZ0plZ%2F30AMTe4EaDfay2sCzTJOlG0%2BzFdH3tWmnySb6hLfx1Jv6Uxz2D4D%2Fd89vhEwm6YcnYoouKEegwo5XHIBtxQczzVaT4UVlS4WKiNLt41glyNOmRJpfI949LXIyRCikT%2BaoJBRlKvHQH%2F3y0iHGTjeJjkQvC3h4xd8t37SsJ1xedFhB6uLKkxTz8WM2T6Pv7yOiSqg2BcJUxZrdho33HfS7YRmkS%2B98L2bh1vWCAKPKnHGU0yLW7ckUjX1Sv5RXh3srGF7poi58peCeZJdudutALqGswLOo7lUmrWVKWfLPWI3K29HEVzS%2BZ%2FTKsZ12RGs986wqGok461e5x2wtCGfVNrIkbLpuKPCV%2Fb%2FOxjV17kFa5JRhfZ3xehPf0iFY%2BIgLjA%2Bh48ivb9Mqlv7ascCc3X4jicwv4476fSv16mJdzK5MKLm%2B8EGOqUBNH5h5In%2BFBxC2Sp0JSqsr34mAuHKdOlRqo0YLkFLJt1TAAnVMP%2F8TEnTHCOvY8f91TPmz74gFjtwgN%2FSKAxd1wmO5zh0hFjaTPVdVGWWprMuP%2FgSH3xQXdr39kzPOM%2FKiNW5AH7d%2BDRVvfn9lsvafs14AOcByL7599d9xmdLUjLVcP96B5koM%2B%2FYJvU3AQt1LAVTWGb4tIx0VPNj6idfc8%2FTvBz9&X-Amz-Signature=beb577e187aac0b48e333217e8a14bdf0d0a5da8c5a16f8082d9e5209dc0f874&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEDRPXN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFDYuGRp0S9YF3BiAomMQhhGl3beHOH9bmWMrTD4sHgoAiEA%2Bx607IxVHUVJSvlCI8N7CEgY%2B1OQCn2Pvy3JfO778wAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDL%2BLCmdlwoGqShXMNSrcA2XSOL%2BahkbCbo6agsV8k5JjVjmG9gniBWe8dEs8ZYeq1DULP09J6KoUfPAM4pmZfWpuz4A31W2EERe9JJvRGrIwjGNmdQsHTabUPPigTDgSkheomI%2BsSiFNJ7lWmLTi7FS9iroTNc6bOMhHqmNybl5QiTcMsFlFAnnG39uWifLFhriVEVxtT8xtQ7BNAB295OLdQJ9BhhZ0plZ%2F30AMTe4EaDfay2sCzTJOlG0%2BzFdH3tWmnySb6hLfx1Jv6Uxz2D4D%2Fd89vhEwm6YcnYoouKEegwo5XHIBtxQczzVaT4UVlS4WKiNLt41glyNOmRJpfI949LXIyRCikT%2BaoJBRlKvHQH%2F3y0iHGTjeJjkQvC3h4xd8t37SsJ1xedFhB6uLKkxTz8WM2T6Pv7yOiSqg2BcJUxZrdho33HfS7YRmkS%2B98L2bh1vWCAKPKnHGU0yLW7ckUjX1Sv5RXh3srGF7poi58peCeZJdudutALqGswLOo7lUmrWVKWfLPWI3K29HEVzS%2BZ%2FTKsZ12RGs986wqGok461e5x2wtCGfVNrIkbLpuKPCV%2Fb%2FOxjV17kFa5JRhfZ3xehPf0iFY%2BIgLjA%2Bh48ivb9Mqlv7ascCc3X4jicwv4476fSv16mJdzK5MKLm%2B8EGOqUBNH5h5In%2BFBxC2Sp0JSqsr34mAuHKdOlRqo0YLkFLJt1TAAnVMP%2F8TEnTHCOvY8f91TPmz74gFjtwgN%2FSKAxd1wmO5zh0hFjaTPVdVGWWprMuP%2FgSH3xQXdr39kzPOM%2FKiNW5AH7d%2BDRVvfn9lsvafs14AOcByL7599d9xmdLUjLVcP96B5koM%2B%2FYJvU3AQt1LAVTWGb4tIx0VPNj6idfc8%2FTvBz9&X-Amz-Signature=5fb86af811d94c7f801f73809f86414d3cca265a19c4dc06425a3baf5ee18f21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEDRPXN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFDYuGRp0S9YF3BiAomMQhhGl3beHOH9bmWMrTD4sHgoAiEA%2Bx607IxVHUVJSvlCI8N7CEgY%2B1OQCn2Pvy3JfO778wAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDL%2BLCmdlwoGqShXMNSrcA2XSOL%2BahkbCbo6agsV8k5JjVjmG9gniBWe8dEs8ZYeq1DULP09J6KoUfPAM4pmZfWpuz4A31W2EERe9JJvRGrIwjGNmdQsHTabUPPigTDgSkheomI%2BsSiFNJ7lWmLTi7FS9iroTNc6bOMhHqmNybl5QiTcMsFlFAnnG39uWifLFhriVEVxtT8xtQ7BNAB295OLdQJ9BhhZ0plZ%2F30AMTe4EaDfay2sCzTJOlG0%2BzFdH3tWmnySb6hLfx1Jv6Uxz2D4D%2Fd89vhEwm6YcnYoouKEegwo5XHIBtxQczzVaT4UVlS4WKiNLt41glyNOmRJpfI949LXIyRCikT%2BaoJBRlKvHQH%2F3y0iHGTjeJjkQvC3h4xd8t37SsJ1xedFhB6uLKkxTz8WM2T6Pv7yOiSqg2BcJUxZrdho33HfS7YRmkS%2B98L2bh1vWCAKPKnHGU0yLW7ckUjX1Sv5RXh3srGF7poi58peCeZJdudutALqGswLOo7lUmrWVKWfLPWI3K29HEVzS%2BZ%2FTKsZ12RGs986wqGok461e5x2wtCGfVNrIkbLpuKPCV%2Fb%2FOxjV17kFa5JRhfZ3xehPf0iFY%2BIgLjA%2Bh48ivb9Mqlv7ascCc3X4jicwv4476fSv16mJdzK5MKLm%2B8EGOqUBNH5h5In%2BFBxC2Sp0JSqsr34mAuHKdOlRqo0YLkFLJt1TAAnVMP%2F8TEnTHCOvY8f91TPmz74gFjtwgN%2FSKAxd1wmO5zh0hFjaTPVdVGWWprMuP%2FgSH3xQXdr39kzPOM%2FKiNW5AH7d%2BDRVvfn9lsvafs14AOcByL7599d9xmdLUjLVcP96B5koM%2B%2FYJvU3AQt1LAVTWGb4tIx0VPNj6idfc8%2FTvBz9&X-Amz-Signature=695429253c3f13ca0904ac4987d8e085d70dcd9a29d53c28647d41bbadfd5216&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEDRPXN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFDYuGRp0S9YF3BiAomMQhhGl3beHOH9bmWMrTD4sHgoAiEA%2Bx607IxVHUVJSvlCI8N7CEgY%2B1OQCn2Pvy3JfO778wAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDL%2BLCmdlwoGqShXMNSrcA2XSOL%2BahkbCbo6agsV8k5JjVjmG9gniBWe8dEs8ZYeq1DULP09J6KoUfPAM4pmZfWpuz4A31W2EERe9JJvRGrIwjGNmdQsHTabUPPigTDgSkheomI%2BsSiFNJ7lWmLTi7FS9iroTNc6bOMhHqmNybl5QiTcMsFlFAnnG39uWifLFhriVEVxtT8xtQ7BNAB295OLdQJ9BhhZ0plZ%2F30AMTe4EaDfay2sCzTJOlG0%2BzFdH3tWmnySb6hLfx1Jv6Uxz2D4D%2Fd89vhEwm6YcnYoouKEegwo5XHIBtxQczzVaT4UVlS4WKiNLt41glyNOmRJpfI949LXIyRCikT%2BaoJBRlKvHQH%2F3y0iHGTjeJjkQvC3h4xd8t37SsJ1xedFhB6uLKkxTz8WM2T6Pv7yOiSqg2BcJUxZrdho33HfS7YRmkS%2B98L2bh1vWCAKPKnHGU0yLW7ckUjX1Sv5RXh3srGF7poi58peCeZJdudutALqGswLOo7lUmrWVKWfLPWI3K29HEVzS%2BZ%2FTKsZ12RGs986wqGok461e5x2wtCGfVNrIkbLpuKPCV%2Fb%2FOxjV17kFa5JRhfZ3xehPf0iFY%2BIgLjA%2Bh48ivb9Mqlv7ascCc3X4jicwv4476fSv16mJdzK5MKLm%2B8EGOqUBNH5h5In%2BFBxC2Sp0JSqsr34mAuHKdOlRqo0YLkFLJt1TAAnVMP%2F8TEnTHCOvY8f91TPmz74gFjtwgN%2FSKAxd1wmO5zh0hFjaTPVdVGWWprMuP%2FgSH3xQXdr39kzPOM%2FKiNW5AH7d%2BDRVvfn9lsvafs14AOcByL7599d9xmdLUjLVcP96B5koM%2B%2FYJvU3AQt1LAVTWGb4tIx0VPNj6idfc8%2FTvBz9&X-Amz-Signature=c4ab4ea82c95fccad4524c711d86a3c6082243638ad81d1c9fdb25a0c303469a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEDRPXN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFDYuGRp0S9YF3BiAomMQhhGl3beHOH9bmWMrTD4sHgoAiEA%2Bx607IxVHUVJSvlCI8N7CEgY%2B1OQCn2Pvy3JfO778wAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDL%2BLCmdlwoGqShXMNSrcA2XSOL%2BahkbCbo6agsV8k5JjVjmG9gniBWe8dEs8ZYeq1DULP09J6KoUfPAM4pmZfWpuz4A31W2EERe9JJvRGrIwjGNmdQsHTabUPPigTDgSkheomI%2BsSiFNJ7lWmLTi7FS9iroTNc6bOMhHqmNybl5QiTcMsFlFAnnG39uWifLFhriVEVxtT8xtQ7BNAB295OLdQJ9BhhZ0plZ%2F30AMTe4EaDfay2sCzTJOlG0%2BzFdH3tWmnySb6hLfx1Jv6Uxz2D4D%2Fd89vhEwm6YcnYoouKEegwo5XHIBtxQczzVaT4UVlS4WKiNLt41glyNOmRJpfI949LXIyRCikT%2BaoJBRlKvHQH%2F3y0iHGTjeJjkQvC3h4xd8t37SsJ1xedFhB6uLKkxTz8WM2T6Pv7yOiSqg2BcJUxZrdho33HfS7YRmkS%2B98L2bh1vWCAKPKnHGU0yLW7ckUjX1Sv5RXh3srGF7poi58peCeZJdudutALqGswLOo7lUmrWVKWfLPWI3K29HEVzS%2BZ%2FTKsZ12RGs986wqGok461e5x2wtCGfVNrIkbLpuKPCV%2Fb%2FOxjV17kFa5JRhfZ3xehPf0iFY%2BIgLjA%2Bh48ivb9Mqlv7ascCc3X4jicwv4476fSv16mJdzK5MKLm%2B8EGOqUBNH5h5In%2BFBxC2Sp0JSqsr34mAuHKdOlRqo0YLkFLJt1TAAnVMP%2F8TEnTHCOvY8f91TPmz74gFjtwgN%2FSKAxd1wmO5zh0hFjaTPVdVGWWprMuP%2FgSH3xQXdr39kzPOM%2FKiNW5AH7d%2BDRVvfn9lsvafs14AOcByL7599d9xmdLUjLVcP96B5koM%2B%2FYJvU3AQt1LAVTWGb4tIx0VPNj6idfc8%2FTvBz9&X-Amz-Signature=196ee8f681b4332bbe4bed0b286be531de5dbafadc7a8f8de7d98d2e61796496&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AEDRPXN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFDYuGRp0S9YF3BiAomMQhhGl3beHOH9bmWMrTD4sHgoAiEA%2Bx607IxVHUVJSvlCI8N7CEgY%2B1OQCn2Pvy3JfO778wAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDL%2BLCmdlwoGqShXMNSrcA2XSOL%2BahkbCbo6agsV8k5JjVjmG9gniBWe8dEs8ZYeq1DULP09J6KoUfPAM4pmZfWpuz4A31W2EERe9JJvRGrIwjGNmdQsHTabUPPigTDgSkheomI%2BsSiFNJ7lWmLTi7FS9iroTNc6bOMhHqmNybl5QiTcMsFlFAnnG39uWifLFhriVEVxtT8xtQ7BNAB295OLdQJ9BhhZ0plZ%2F30AMTe4EaDfay2sCzTJOlG0%2BzFdH3tWmnySb6hLfx1Jv6Uxz2D4D%2Fd89vhEwm6YcnYoouKEegwo5XHIBtxQczzVaT4UVlS4WKiNLt41glyNOmRJpfI949LXIyRCikT%2BaoJBRlKvHQH%2F3y0iHGTjeJjkQvC3h4xd8t37SsJ1xedFhB6uLKkxTz8WM2T6Pv7yOiSqg2BcJUxZrdho33HfS7YRmkS%2B98L2bh1vWCAKPKnHGU0yLW7ckUjX1Sv5RXh3srGF7poi58peCeZJdudutALqGswLOo7lUmrWVKWfLPWI3K29HEVzS%2BZ%2FTKsZ12RGs986wqGok461e5x2wtCGfVNrIkbLpuKPCV%2Fb%2FOxjV17kFa5JRhfZ3xehPf0iFY%2BIgLjA%2Bh48ivb9Mqlv7ascCc3X4jicwv4476fSv16mJdzK5MKLm%2B8EGOqUBNH5h5In%2BFBxC2Sp0JSqsr34mAuHKdOlRqo0YLkFLJt1TAAnVMP%2F8TEnTHCOvY8f91TPmz74gFjtwgN%2FSKAxd1wmO5zh0hFjaTPVdVGWWprMuP%2FgSH3xQXdr39kzPOM%2FKiNW5AH7d%2BDRVvfn9lsvafs14AOcByL7599d9xmdLUjLVcP96B5koM%2B%2FYJvU3AQt1LAVTWGb4tIx0VPNj6idfc8%2FTvBz9&X-Amz-Signature=1bc79fafe97d42512cbb904b9d961d2896db1a0202219e5a470788ab306342c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
