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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQATTKI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAmDJLVP0PQlBWNsmCVZ4CmfTxp9XAdzVppguMm%2FOucsAiA1lTsxhh7lz9C9NTvf%2F0cUZbglTMaWWFfuoapk4uwTFyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMTBmUKQadN51JLceXKtwDO%2FZxQQ%2B7JJpaXvd6%2BIpsP%2F2WkBPiYWgw1MIsZmVMa4Ra66edZk9aU2bZjr5zJcHnoOBZLksKuHIA60W9zyOXglc9C1%2F5GUONyPiHSThOYkwgcoUOJlfzzFEfycmWlll%2FjxxH6pfsElNGv3g%2BJd6pLdbo0T%2FPNQ3Y7KxuFZLOiYLL%2FgHKPR1CfIN8hk3tLmSD2f1uiweh6NWb1mu%2Bod0DGuwEoqRwPR69vLRo71nHmaSdEN6PXwCHL8iP9ipnztQiz67D0zhCUNCTTt1cPSK9FlaEHncJRMA24pNQZ3OBbQ%2BpBjldmTnyfraNUZbqIsQNd80j6ixzXYeSjSRi655Xj31heRCV%2BOPlzlff11aV84xSdMB923rNmdvawsgp8I4%2F7LYT3Jq0MIJcrlFvYe3fBunnDe7mhwl1STbIkUh3OnGhCIDiNf1Y%2FZRaZcdSKQqHdwNZvMeYGxKa133mLrAMd4Jbd2Bge5HjIWozG0PSPRTC1kPHCzYmjLa6WvXvB46rujTFnG9nYP7wJOSqVd1v%2B%2BHn4XqJexV2y0aeO5NyPIp84%2F7e8N3jZ8QtGEDKGZWyO27WgZwOQPp58AQc9XpiodhRzFsAqykHJiw23lf1THI8xYMAJ45j1eLUspswi6rmwgY6pgHTZVVJmZNtB0EchLQvdzLwwAWOhXJiB7gKbJNXF2gM1C83LmPncck6LeN8NSaJCCfBOFbX6yUKiAaCsbqp9yiipT1GKhdOzLYbyyxCMNGalVD5KqMk8RfUuUZSVzaSYCL9yD89ohz%2B31AFHYsWpkpqJFQUg2EZ4T0YKiUiXOGXI4xpGQivctK8xui%2FWRfL%2B%2FhAtmNbLFjaAjH24b7jHRLwBKEP7k7I&X-Amz-Signature=14a35a71cb96157eaef4460f3de4690ee168c796c0f4b6f7205b58216623c395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
