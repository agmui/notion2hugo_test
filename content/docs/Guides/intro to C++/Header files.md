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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHV7WHU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIFLM24Rl8R9UxonC%2FrEuEUOVYf0Rrfgz53clMxfcgdjPAiEA3GppmGYt1sMrMgt9TwnTfHnsg1M9xpFTiYWOAjW4b98q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJuSm6PA7PSEKtWmACrcA4kjD7ywyMLcpuRtS0RjjhMJky7sNi5NI3eNsvYE%2BMqcLeg7PoGmD6Ykcnon5t9Wbqy%2BxhIGvQmJIQNnMRbFfFXpoZoI0jsS0OLcOxowzoQxpiT51Wfoc3%2BSJfjM7LmA4e0%2F8KiHfVWD8XBC13XMa9CNJcrJ6eITte2w0AL4ymVxXgmJc9jaKeZYZet%2Fr5vzbeg%2BAKHoky7i9YF16HnrXcVHSnmbN%2BNxLUZwJdYMJp2cXVZcXmtRpYWQx0C1vxGVpyLuZd4ZvyQ01e%2BXc7d668jKQeLHwBULg6F%2FykQyTFmPuFKuqrDtzGgrN5kW18ZshnXWRM5XeFuhhgnRT5O7KdGbaAX5s4AqXXFG8WoMH5%2FUy72E7%2BI53KMMzq7298VZIYCAdJs7m9uG7nojSkUnUec4VMiDOhM0Pm9m9qn1YVVERHI3p1e3I%2BfFqXBWkBlD5xIXFOQHA2MwoDVk0Ffcw%2FcUoYbeYJOhjfINf5r55IJcMPI9dttI36syp%2FqbutyjKwtE1BKuJr5mfQjTuTGAJqRltfkc%2FaVoz8yN7GawBy0oKa2AqilHUXIOpzXAgnQFpXF0RBarbp1eWAku0jTsinEwD9J2uaWByrS3ZoyIq%2BwFy0qp3mwIZ6NxkuakMJPYisQGOqUB6WkyP0z70PwRR4xqWlSpY0jr4BZsJeA1jDu556AhUEm1qrWULgTQC9zBXOMksNXZNSLG4TyDYW5RcC0MOUIGX%2F5EfZRDitgtrRJOoNZ1qJaUsouazKLyZxoAIw1CdXXxQYPl%2BniZHa92VQnNx9QF4qLCGDrHNCRuaZKLrYIt0thpP0I%2FDVpvg2V9gx75OFHrjzS3I2S3cAgcTvBNXooQyR6RL4ja&X-Amz-Signature=7270edd535e4210da18803190a6b41155a2c157d9362d2a565bd70fd3cb143c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
