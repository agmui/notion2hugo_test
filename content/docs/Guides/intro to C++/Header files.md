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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBICD34H%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAdczc8zaJ83vxN4v3pgTIUFk5ADBWf%2BDs2J9F4K2PSWAiB4Gfz76ozr85WWNd08za2SA%2FXZ7CJ4aYAVW8AsoE%2BeWSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLSWpd5WNobOSyAroKtwDaj68jdb%2BF4s8yPKeQ6dy31Hkfyw9c%2FsDoUI%2B0T5J5ssh5g%2BqeF9YaWu5HC32rcw3NrO6Q6tsmwMfbDkgpugk7c2RTh0%2FKHv%2BuF9iZ8wTtoCNXIMHiyguWWX78V3dgKDF3H35sqsDX4iXoSmSEoVV2Vhw7c5CvfPbiemSDhwBPkz%2BCmQmmGrejUjDAWCwbVPsLac%2B9aocvYPrdS0CPFK5MwIry%2Bz4b20g0tb%2FYFAcf1AcpL09eZprWUbl2%2FuZJQE6q4X0YFNO2RqZ0Zk6QF70WskxFr81maf8oz6c5nWjoAXeP1FziN68nRwt0qgJoA09J5So173%2By4WTj0FsOUJJFc%2B4WengYSn%2BuQ0OFLaT9Ko1vfOHtHmSBjdAfdHMn3q%2Fcp90FAqi85TYx40xax7h8gGAdr0yp1mGG7hlEB3TkUWiFHeYZIA2NYqk88JHy5Ya7fzYi9PBW3q0ry06AkFYCyenD%2FaesxtRGfsQ8qBaybdFcbhnFOGw3eRtxBaBtUHsqxZ%2Bqyr5oTn%2FhJB5ZhfGas1OuvSMlCsyrfkw6142mGfsGIyoASiK82%2FM%2BBg0zUe1vOahEjdmskpcWK0TPA60xKO%2BLm930hgv5sseaH8AA6nyviYNmSsQcAAOBrIwxsy5vgY6pgHsy4Jz6wka4hTAILYlUr9y%2BiqAsgjuhUWDRezVfNapYDSPudjkhWcA2yJmVgUpw9Z94ZKx0JHy7drBIFpuQ5jg%2BiGk%2F9NuAxVWV0h4zmt%2BIHi2u3g1PQui9d3oRvPI0KC%2BO7hPXpuIxmpV0lfpL1VobEYRedQjbBAOoFL1yMQ8oJKEF5M89vromktpqqmaORigZ5C421%2FJDeCzOq7wOjRmAo5tdH9h&X-Amz-Signature=4a555b9ccd948aab803547da1e8976045c1b552b3d77136498116b6afb66f7cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
