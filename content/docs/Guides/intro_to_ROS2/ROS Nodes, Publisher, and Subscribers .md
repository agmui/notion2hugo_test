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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATOFBQI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwkLtHiTBE%2BEAHLwICMPF15tyXLW2OYBgsO0iavqQRhAiEA6Ogfvf79pxxVGjsbmpZL1x%2F2PII4PVM%2FhDDw8TmQx2YqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOi9P0kOckL7U%2FUrSrcA8wnspuOz32nr1RmGlUJWdgs0W7TMTqIkdegvCFcd8G%2Bp6QfxSY%2Bj%2BGAv%2BDnAFlcrtXDAqEroIhz2g4eNiODol%2F5DM%2Fmcy2xylTZPBfb9J9V%2FC66Swx9bnXHrsqDF1dssFhPMWtwT6i8jrSosIMgGpVQhV0zFLqjLO%2FFLT3CMMF9ZcIT0FPvAbVTez1B6%2BfdgwBYInQyveMJ2egPNH6tnPOilFUHSxAVtcdHs0Awyu0e7XQm%2BkEY1DMg%2BvWU2IXGRV6xMaN0%2B%2Bgfsof%2BEVv0%2FEkoRAjTDMlQZGeHsS71od8yZsLSp55V0dSN72QHMjACVToioV2A06rpramybrIT5t2JeAzoNVKkSYHqvfcQbc7tukttl%2B7NRjbQugrNlhp5E79P6Qi%2BXHEOe4th%2FmfVUc%2FFM%2F9Y2FHJE6F5S2u7mT7UNSOL8n27wpFVlBCi0t%2BDTAMEj%2Fu9rXpqCQx%2BKg4Q36kJAz6yknq6z7y2Lctb0U64PFc90ZIaUiIWnoBYNRjw7uMn6zEZBmOrY7UGLeYszc73FPze%2BJdGIKns3Z3pWZN4Vr8K27ieoI5CditswUVe1HF3iPrtP4bqXf3J3%2FSP%2FOHU2NumlP2Va6DUH9qdoYL9iHg5ln%2Fz%2FnRVqm0%2BMIv%2FvMMGOqUB9IBDggUx7yTI43io27wzzoAZpoO%2BHUikZ0TVdYM6I1AzFyPw1bOznqfY7jH3XK90M6RRBn3H2o05ObczDppM3seMI3B0%2F7XGyog5nFSPhYyjdyoAUliQ09zvuwwUfTTILNC7zfmCKIX1ixYmyhzohDP%2BGMu5oFNHFfmDNM3Dlpzjk7xmpvE8JSIbh8aOU%2FwdYxfg9noayzebAwqZbmcB%2FfmQabef&X-Amz-Signature=1fd92ee76f37c7cdd27595f3af9d43d768d76dd8969a0fc3ec4b01b0eb8ea877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATOFBQI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwkLtHiTBE%2BEAHLwICMPF15tyXLW2OYBgsO0iavqQRhAiEA6Ogfvf79pxxVGjsbmpZL1x%2F2PII4PVM%2FhDDw8TmQx2YqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOi9P0kOckL7U%2FUrSrcA8wnspuOz32nr1RmGlUJWdgs0W7TMTqIkdegvCFcd8G%2Bp6QfxSY%2Bj%2BGAv%2BDnAFlcrtXDAqEroIhz2g4eNiODol%2F5DM%2Fmcy2xylTZPBfb9J9V%2FC66Swx9bnXHrsqDF1dssFhPMWtwT6i8jrSosIMgGpVQhV0zFLqjLO%2FFLT3CMMF9ZcIT0FPvAbVTez1B6%2BfdgwBYInQyveMJ2egPNH6tnPOilFUHSxAVtcdHs0Awyu0e7XQm%2BkEY1DMg%2BvWU2IXGRV6xMaN0%2B%2Bgfsof%2BEVv0%2FEkoRAjTDMlQZGeHsS71od8yZsLSp55V0dSN72QHMjACVToioV2A06rpramybrIT5t2JeAzoNVKkSYHqvfcQbc7tukttl%2B7NRjbQugrNlhp5E79P6Qi%2BXHEOe4th%2FmfVUc%2FFM%2F9Y2FHJE6F5S2u7mT7UNSOL8n27wpFVlBCi0t%2BDTAMEj%2Fu9rXpqCQx%2BKg4Q36kJAz6yknq6z7y2Lctb0U64PFc90ZIaUiIWnoBYNRjw7uMn6zEZBmOrY7UGLeYszc73FPze%2BJdGIKns3Z3pWZN4Vr8K27ieoI5CditswUVe1HF3iPrtP4bqXf3J3%2FSP%2FOHU2NumlP2Va6DUH9qdoYL9iHg5ln%2Fz%2FnRVqm0%2BMIv%2FvMMGOqUB9IBDggUx7yTI43io27wzzoAZpoO%2BHUikZ0TVdYM6I1AzFyPw1bOznqfY7jH3XK90M6RRBn3H2o05ObczDppM3seMI3B0%2F7XGyog5nFSPhYyjdyoAUliQ09zvuwwUfTTILNC7zfmCKIX1ixYmyhzohDP%2BGMu5oFNHFfmDNM3Dlpzjk7xmpvE8JSIbh8aOU%2FwdYxfg9noayzebAwqZbmcB%2FfmQabef&X-Amz-Signature=587f8a7d47fbea5485d0e162c58547aa0546c0cf3b383498bde4c2a02b66a5bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATOFBQI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwkLtHiTBE%2BEAHLwICMPF15tyXLW2OYBgsO0iavqQRhAiEA6Ogfvf79pxxVGjsbmpZL1x%2F2PII4PVM%2FhDDw8TmQx2YqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOi9P0kOckL7U%2FUrSrcA8wnspuOz32nr1RmGlUJWdgs0W7TMTqIkdegvCFcd8G%2Bp6QfxSY%2Bj%2BGAv%2BDnAFlcrtXDAqEroIhz2g4eNiODol%2F5DM%2Fmcy2xylTZPBfb9J9V%2FC66Swx9bnXHrsqDF1dssFhPMWtwT6i8jrSosIMgGpVQhV0zFLqjLO%2FFLT3CMMF9ZcIT0FPvAbVTez1B6%2BfdgwBYInQyveMJ2egPNH6tnPOilFUHSxAVtcdHs0Awyu0e7XQm%2BkEY1DMg%2BvWU2IXGRV6xMaN0%2B%2Bgfsof%2BEVv0%2FEkoRAjTDMlQZGeHsS71od8yZsLSp55V0dSN72QHMjACVToioV2A06rpramybrIT5t2JeAzoNVKkSYHqvfcQbc7tukttl%2B7NRjbQugrNlhp5E79P6Qi%2BXHEOe4th%2FmfVUc%2FFM%2F9Y2FHJE6F5S2u7mT7UNSOL8n27wpFVlBCi0t%2BDTAMEj%2Fu9rXpqCQx%2BKg4Q36kJAz6yknq6z7y2Lctb0U64PFc90ZIaUiIWnoBYNRjw7uMn6zEZBmOrY7UGLeYszc73FPze%2BJdGIKns3Z3pWZN4Vr8K27ieoI5CditswUVe1HF3iPrtP4bqXf3J3%2FSP%2FOHU2NumlP2Va6DUH9qdoYL9iHg5ln%2Fz%2FnRVqm0%2BMIv%2FvMMGOqUB9IBDggUx7yTI43io27wzzoAZpoO%2BHUikZ0TVdYM6I1AzFyPw1bOznqfY7jH3XK90M6RRBn3H2o05ObczDppM3seMI3B0%2F7XGyog5nFSPhYyjdyoAUliQ09zvuwwUfTTILNC7zfmCKIX1ixYmyhzohDP%2BGMu5oFNHFfmDNM3Dlpzjk7xmpvE8JSIbh8aOU%2FwdYxfg9noayzebAwqZbmcB%2FfmQabef&X-Amz-Signature=2beb44f25d05b9f37ce6979b3f284391d958c03da7bb8900b563afd396b4778f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATOFBQI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwkLtHiTBE%2BEAHLwICMPF15tyXLW2OYBgsO0iavqQRhAiEA6Ogfvf79pxxVGjsbmpZL1x%2F2PII4PVM%2FhDDw8TmQx2YqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOi9P0kOckL7U%2FUrSrcA8wnspuOz32nr1RmGlUJWdgs0W7TMTqIkdegvCFcd8G%2Bp6QfxSY%2Bj%2BGAv%2BDnAFlcrtXDAqEroIhz2g4eNiODol%2F5DM%2Fmcy2xylTZPBfb9J9V%2FC66Swx9bnXHrsqDF1dssFhPMWtwT6i8jrSosIMgGpVQhV0zFLqjLO%2FFLT3CMMF9ZcIT0FPvAbVTez1B6%2BfdgwBYInQyveMJ2egPNH6tnPOilFUHSxAVtcdHs0Awyu0e7XQm%2BkEY1DMg%2BvWU2IXGRV6xMaN0%2B%2Bgfsof%2BEVv0%2FEkoRAjTDMlQZGeHsS71od8yZsLSp55V0dSN72QHMjACVToioV2A06rpramybrIT5t2JeAzoNVKkSYHqvfcQbc7tukttl%2B7NRjbQugrNlhp5E79P6Qi%2BXHEOe4th%2FmfVUc%2FFM%2F9Y2FHJE6F5S2u7mT7UNSOL8n27wpFVlBCi0t%2BDTAMEj%2Fu9rXpqCQx%2BKg4Q36kJAz6yknq6z7y2Lctb0U64PFc90ZIaUiIWnoBYNRjw7uMn6zEZBmOrY7UGLeYszc73FPze%2BJdGIKns3Z3pWZN4Vr8K27ieoI5CditswUVe1HF3iPrtP4bqXf3J3%2FSP%2FOHU2NumlP2Va6DUH9qdoYL9iHg5ln%2Fz%2FnRVqm0%2BMIv%2FvMMGOqUB9IBDggUx7yTI43io27wzzoAZpoO%2BHUikZ0TVdYM6I1AzFyPw1bOznqfY7jH3XK90M6RRBn3H2o05ObczDppM3seMI3B0%2F7XGyog5nFSPhYyjdyoAUliQ09zvuwwUfTTILNC7zfmCKIX1ixYmyhzohDP%2BGMu5oFNHFfmDNM3Dlpzjk7xmpvE8JSIbh8aOU%2FwdYxfg9noayzebAwqZbmcB%2FfmQabef&X-Amz-Signature=0c1319a9fb2371b25a1bb8e1a43dfded575b9ead6644ddb398cb98b98a4cfad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATOFBQI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwkLtHiTBE%2BEAHLwICMPF15tyXLW2OYBgsO0iavqQRhAiEA6Ogfvf79pxxVGjsbmpZL1x%2F2PII4PVM%2FhDDw8TmQx2YqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOi9P0kOckL7U%2FUrSrcA8wnspuOz32nr1RmGlUJWdgs0W7TMTqIkdegvCFcd8G%2Bp6QfxSY%2Bj%2BGAv%2BDnAFlcrtXDAqEroIhz2g4eNiODol%2F5DM%2Fmcy2xylTZPBfb9J9V%2FC66Swx9bnXHrsqDF1dssFhPMWtwT6i8jrSosIMgGpVQhV0zFLqjLO%2FFLT3CMMF9ZcIT0FPvAbVTez1B6%2BfdgwBYInQyveMJ2egPNH6tnPOilFUHSxAVtcdHs0Awyu0e7XQm%2BkEY1DMg%2BvWU2IXGRV6xMaN0%2B%2Bgfsof%2BEVv0%2FEkoRAjTDMlQZGeHsS71od8yZsLSp55V0dSN72QHMjACVToioV2A06rpramybrIT5t2JeAzoNVKkSYHqvfcQbc7tukttl%2B7NRjbQugrNlhp5E79P6Qi%2BXHEOe4th%2FmfVUc%2FFM%2F9Y2FHJE6F5S2u7mT7UNSOL8n27wpFVlBCi0t%2BDTAMEj%2Fu9rXpqCQx%2BKg4Q36kJAz6yknq6z7y2Lctb0U64PFc90ZIaUiIWnoBYNRjw7uMn6zEZBmOrY7UGLeYszc73FPze%2BJdGIKns3Z3pWZN4Vr8K27ieoI5CditswUVe1HF3iPrtP4bqXf3J3%2FSP%2FOHU2NumlP2Va6DUH9qdoYL9iHg5ln%2Fz%2FnRVqm0%2BMIv%2FvMMGOqUB9IBDggUx7yTI43io27wzzoAZpoO%2BHUikZ0TVdYM6I1AzFyPw1bOznqfY7jH3XK90M6RRBn3H2o05ObczDppM3seMI3B0%2F7XGyog5nFSPhYyjdyoAUliQ09zvuwwUfTTILNC7zfmCKIX1ixYmyhzohDP%2BGMu5oFNHFfmDNM3Dlpzjk7xmpvE8JSIbh8aOU%2FwdYxfg9noayzebAwqZbmcB%2FfmQabef&X-Amz-Signature=52a52db75d20ff7bb9ad2c7e17c152d0b5fb797e8b79ddd4655345b2977597dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATOFBQI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwkLtHiTBE%2BEAHLwICMPF15tyXLW2OYBgsO0iavqQRhAiEA6Ogfvf79pxxVGjsbmpZL1x%2F2PII4PVM%2FhDDw8TmQx2YqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOi9P0kOckL7U%2FUrSrcA8wnspuOz32nr1RmGlUJWdgs0W7TMTqIkdegvCFcd8G%2Bp6QfxSY%2Bj%2BGAv%2BDnAFlcrtXDAqEroIhz2g4eNiODol%2F5DM%2Fmcy2xylTZPBfb9J9V%2FC66Swx9bnXHrsqDF1dssFhPMWtwT6i8jrSosIMgGpVQhV0zFLqjLO%2FFLT3CMMF9ZcIT0FPvAbVTez1B6%2BfdgwBYInQyveMJ2egPNH6tnPOilFUHSxAVtcdHs0Awyu0e7XQm%2BkEY1DMg%2BvWU2IXGRV6xMaN0%2B%2Bgfsof%2BEVv0%2FEkoRAjTDMlQZGeHsS71od8yZsLSp55V0dSN72QHMjACVToioV2A06rpramybrIT5t2JeAzoNVKkSYHqvfcQbc7tukttl%2B7NRjbQugrNlhp5E79P6Qi%2BXHEOe4th%2FmfVUc%2FFM%2F9Y2FHJE6F5S2u7mT7UNSOL8n27wpFVlBCi0t%2BDTAMEj%2Fu9rXpqCQx%2BKg4Q36kJAz6yknq6z7y2Lctb0U64PFc90ZIaUiIWnoBYNRjw7uMn6zEZBmOrY7UGLeYszc73FPze%2BJdGIKns3Z3pWZN4Vr8K27ieoI5CditswUVe1HF3iPrtP4bqXf3J3%2FSP%2FOHU2NumlP2Va6DUH9qdoYL9iHg5ln%2Fz%2FnRVqm0%2BMIv%2FvMMGOqUB9IBDggUx7yTI43io27wzzoAZpoO%2BHUikZ0TVdYM6I1AzFyPw1bOznqfY7jH3XK90M6RRBn3H2o05ObczDppM3seMI3B0%2F7XGyog5nFSPhYyjdyoAUliQ09zvuwwUfTTILNC7zfmCKIX1ixYmyhzohDP%2BGMu5oFNHFfmDNM3Dlpzjk7xmpvE8JSIbh8aOU%2FwdYxfg9noayzebAwqZbmcB%2FfmQabef&X-Amz-Signature=d2103ca4abe94eb52a6ff9b67aed3052e2d502d5b23cb4dfa1386891e53f6364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATOFBQI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwkLtHiTBE%2BEAHLwICMPF15tyXLW2OYBgsO0iavqQRhAiEA6Ogfvf79pxxVGjsbmpZL1x%2F2PII4PVM%2FhDDw8TmQx2YqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOi9P0kOckL7U%2FUrSrcA8wnspuOz32nr1RmGlUJWdgs0W7TMTqIkdegvCFcd8G%2Bp6QfxSY%2Bj%2BGAv%2BDnAFlcrtXDAqEroIhz2g4eNiODol%2F5DM%2Fmcy2xylTZPBfb9J9V%2FC66Swx9bnXHrsqDF1dssFhPMWtwT6i8jrSosIMgGpVQhV0zFLqjLO%2FFLT3CMMF9ZcIT0FPvAbVTez1B6%2BfdgwBYInQyveMJ2egPNH6tnPOilFUHSxAVtcdHs0Awyu0e7XQm%2BkEY1DMg%2BvWU2IXGRV6xMaN0%2B%2Bgfsof%2BEVv0%2FEkoRAjTDMlQZGeHsS71od8yZsLSp55V0dSN72QHMjACVToioV2A06rpramybrIT5t2JeAzoNVKkSYHqvfcQbc7tukttl%2B7NRjbQugrNlhp5E79P6Qi%2BXHEOe4th%2FmfVUc%2FFM%2F9Y2FHJE6F5S2u7mT7UNSOL8n27wpFVlBCi0t%2BDTAMEj%2Fu9rXpqCQx%2BKg4Q36kJAz6yknq6z7y2Lctb0U64PFc90ZIaUiIWnoBYNRjw7uMn6zEZBmOrY7UGLeYszc73FPze%2BJdGIKns3Z3pWZN4Vr8K27ieoI5CditswUVe1HF3iPrtP4bqXf3J3%2FSP%2FOHU2NumlP2Va6DUH9qdoYL9iHg5ln%2Fz%2FnRVqm0%2BMIv%2FvMMGOqUB9IBDggUx7yTI43io27wzzoAZpoO%2BHUikZ0TVdYM6I1AzFyPw1bOznqfY7jH3XK90M6RRBn3H2o05ObczDppM3seMI3B0%2F7XGyog5nFSPhYyjdyoAUliQ09zvuwwUfTTILNC7zfmCKIX1ixYmyhzohDP%2BGMu5oFNHFfmDNM3Dlpzjk7xmpvE8JSIbh8aOU%2FwdYxfg9noayzebAwqZbmcB%2FfmQabef&X-Amz-Signature=8a582ae743b73bc381b17af6396c34d91b218be1041515b5526536499bf35251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATOFBQI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwkLtHiTBE%2BEAHLwICMPF15tyXLW2OYBgsO0iavqQRhAiEA6Ogfvf79pxxVGjsbmpZL1x%2F2PII4PVM%2FhDDw8TmQx2YqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOi9P0kOckL7U%2FUrSrcA8wnspuOz32nr1RmGlUJWdgs0W7TMTqIkdegvCFcd8G%2Bp6QfxSY%2Bj%2BGAv%2BDnAFlcrtXDAqEroIhz2g4eNiODol%2F5DM%2Fmcy2xylTZPBfb9J9V%2FC66Swx9bnXHrsqDF1dssFhPMWtwT6i8jrSosIMgGpVQhV0zFLqjLO%2FFLT3CMMF9ZcIT0FPvAbVTez1B6%2BfdgwBYInQyveMJ2egPNH6tnPOilFUHSxAVtcdHs0Awyu0e7XQm%2BkEY1DMg%2BvWU2IXGRV6xMaN0%2B%2Bgfsof%2BEVv0%2FEkoRAjTDMlQZGeHsS71od8yZsLSp55V0dSN72QHMjACVToioV2A06rpramybrIT5t2JeAzoNVKkSYHqvfcQbc7tukttl%2B7NRjbQugrNlhp5E79P6Qi%2BXHEOe4th%2FmfVUc%2FFM%2F9Y2FHJE6F5S2u7mT7UNSOL8n27wpFVlBCi0t%2BDTAMEj%2Fu9rXpqCQx%2BKg4Q36kJAz6yknq6z7y2Lctb0U64PFc90ZIaUiIWnoBYNRjw7uMn6zEZBmOrY7UGLeYszc73FPze%2BJdGIKns3Z3pWZN4Vr8K27ieoI5CditswUVe1HF3iPrtP4bqXf3J3%2FSP%2FOHU2NumlP2Va6DUH9qdoYL9iHg5ln%2Fz%2FnRVqm0%2BMIv%2FvMMGOqUB9IBDggUx7yTI43io27wzzoAZpoO%2BHUikZ0TVdYM6I1AzFyPw1bOznqfY7jH3XK90M6RRBn3H2o05ObczDppM3seMI3B0%2F7XGyog5nFSPhYyjdyoAUliQ09zvuwwUfTTILNC7zfmCKIX1ixYmyhzohDP%2BGMu5oFNHFfmDNM3Dlpzjk7xmpvE8JSIbh8aOU%2FwdYxfg9noayzebAwqZbmcB%2FfmQabef&X-Amz-Signature=7caacfe46e01cf9ff2a0347117d357c2939e82962e95988fb1c01f1d73fcaead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
