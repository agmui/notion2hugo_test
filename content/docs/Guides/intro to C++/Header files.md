---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5EQVMRP%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIGmJQpud%2FhGELcRP1E1nPxLk88ZOQJ%2Boi71lf%2BRrpKFEAiEAj9r%2BmUTFN1MQBx5HIi%2FgMzqmjVbDHfBi0SOkuq0i%2FZ4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZPoOet7M8uTTr8uSrcA%2FanlhYaCZeqW%2Fyt1gHz%2FpqBwPuVxIVZ%2BeFDI9hlrbX4L3D2vXpEdiQfwU4OOtlQQi82lZbaE1GBGT807zyiLqXo0V%2B9igXZX9j%2FcjmBAjSxHedpNjZFlABEHg5aOt71iZDNESLy7OgDUihzyZar5iob8wibtvZiXD47K77ee0aI8u2rghOSPCWFrjN%2FLcCVL7G7lfl3ShoQpwz2QU9RirHd%2FAHDooZ8P0gBpvqvpSE4GCDVL9V6eHQGmoYWVqunWuuHUmZWMr1RrLZ760qLsa40suzYyW%2FdKlrVVgLEPM5%2BDFV7KsGt1scqGOQR9CQLcQoAnyYsWp8W7XGKp2Yk76UTlAHY06tzdfBtWtHXHZqObKMy7KdNqxEm2WVJbM9YFzDX3TJwm3O4DcNjz2fiIQOKo1PQXzBsETk11Ev%2B%2Bg9zsIxrR%2BlVF%2B%2B4ApV%2FT1p7DMa0TYRan%2BhygCazgUrJJPJEv7sjlSEf4l5%2FGCH6rB9xBi%2FiQcnPPijZxGbpWP5xVvyMTxipLAGERvbWuNy4Bx%2BSGRgcjOAbTH5S3E6H%2FaBOTzQKFMuRhEPQ7%2Bth7oG0I4GDrwFURxk9KfWfX%2Bx73KhiRc%2B35vEY6uF50GoJQDPYQLiYGNWw5P%2BItHsjMOKnpb8GOqUB1Jcb7fPHGRvhkPTfdJh3nwwDTafmZJsLExb7UVUHZ4H4f5buf5hpjCXMn07X7JOn%2BtGThhbrJXON%2Bd2WTjKgGA%2FFcWYKb0JEpnY9n%2FeGUQSBgBJQ5GxfQoycX6ZmJgBzx4AHSacmeyUPEc4pjKJY2RGuJpgSClDwUx09URvcxrYWIf1EgIy1xBdWnOiSy9TYZf6AaQRQ9zd2Fnu4e8XZHSK5z2X9&X-Amz-Signature=e66f6e46c6ca5b496cf5a19c8f840d9859cb7a6daf4cdd1e028bd76ab5fb2a2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
