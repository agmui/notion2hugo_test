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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PJWJUQP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwuKPC2zfJFoWizt6sjAk88EJXnMk6k%2BwGHnv8ywt0KAiEAn%2FEcFw%2F0wIGKSCQZbacqUdddYzOKQD3njFHhG5MBTdAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxGf6AumPaMwcrwYSrcAwLWGkVYoe%2Fin5IxYmUVBe5crc94dN%2Boxj7NPnagtImo9WWj4y7DCnXDwDOfL5K6IgGM9pCXQIEMIrt6tGUzC95JB4TfZ0Kom747%2B8jMueyFc%2FHqW1dGyXima5G7Ocn0HvDC7CBQGTAqJb8kVLrGcmI2p3geigAa3X84G3KNMrZeSGbBHLqsGrJ2aYeTa3XyuUzxn1kQjZ%2Fqpg46eS4sX9jtGKBQHPXdsjuXdnWXrYtM%2BsxjzA%2BHGglqI%2B116vQg7DUA3pvYQHzlomC4vVVLloEaQoTbUN8mZjoaHDwwhimm1OMif129ZMj7W5lfxKHetCcsF3dUHCddNQCVUm%2B0T5hzPFVZ7ZVdOXvzuRHyi1uw3d6MLOz8z%2F01ILHq5HiiI3pByrCuM%2BfNv0Eql3NOVUGna57naibltv%2B1oVDQiZDxPkBGaQTraq6rANiY%2FYijUWfOL31%2BFGsG4TfYIk7sgsKYFr3ai1FnNlB5AU1q3tBO3RMwi18VfF%2BdSsv3G0pVxJIuk9ZJtsQL1lHGW7cI9UzinbEeWCT6qDAtGOq6zOHfCUL0Cd8K5eGLDRp0%2BK9grpOaS0dheEWvf%2FQ%2BqeqTQTktsY%2FFjszABVhQj5mGL8hcZVkC7OXvwigaYJBLMIXdrsQGOqUBupiY%2B8X4pmg%2BMbCtY0vyvwLICX3p7TiIYc1mpRDTi%2FL05TgDHsR3aVyopvuPhIox0rZR91JRC7KB1PCIhXyTiGwQipWgM%2Ff%2BXJv3uvhJ3%2BiNOR5ubG1pGS0HxCuvg3%2F7fZd28KzGuJ42ZfM4y2tkRJzTS2QRIJRoBt6JC6sC%2FMEzO8ddX2Z4s36441x%2BdOnlgAQ6BU84o2DW6JXi1XeTwYfN7flK&X-Amz-Signature=bd05f912d3eda3c9e5338011bf62c735f72baeb4bcafec16c6903a1a3f649006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
