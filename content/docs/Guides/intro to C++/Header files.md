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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7VFCUU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCNe8UTmiJNVTaWSiYapJx0Lcb3MbcAJMFFKKbitSHLVQIhAIddeHU6TSa7tu2Peu2wf31dpxbLkpglS5QPwM2pyzo4KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxdfat5%2BbqCronZ8Bwq3AOI9oXblC%2BZJNCbkfqQUf6x1ZxURxkxpXsnSN6gzYqFiFNMJe6UPvh4s98hHBFIc36%2FFfw%2BEeC%2FP0BEQ0k7CM85SznBYnc%2FPo9zY4GmJkD7lKCbLwxVg3t2Fq9S39ZCDhq9lzmhWdKaqTlGsrO3IXLTSsGPL5DWQYwi9UtXUPjnC9H4qnj6pesoUQyUlFBT3oewyMYB9x8c3ubmu1SZElXFiE4ihh0W8QTO4PyenIXkd330gQ6pL8DgED5jg%2FhYfcg4YEOKqbyoBmuLCwGktChRc7jZB17cDQMaItpDC%2FkvSlnd0WYRjXL%2FbNkZPSVi88khjThtjGHk319O8AhTPkxmTUIcZjd6JXbhRbpf712tSBV9HFQD0SP4kL1wx5QRkElSvpQpTpSsZCxmBg%2BQcEbika6djnDjJ6tfcy%2FquJDHHnrHIIokguEnLuafpUz2kBMmlHtt1w4%2Fu%2FdAxmSk0PMQtGaOyhBQ%2Bg4qI0tTenJA63oubUk9ywgnOEcezhpiQtP7aYshFhgWPpU%2BuWcbpE1oA7kY%2Fq8jyDZkt62DeCQ0q1dT41JF7e8uEtVNiI7DyBMLc7ZYU8zbdqxXaaCWeADJ7jWRQmS3E43TG5RTC1CZwna8Jg%2BC%2F8nz%2FBmoYDDHxpzEBjqkAVsIrk1KNExAnSS%2FlAAu4rubJKHSHbJjmbrHHWE3iioBJ9kVcxkoHrH8QYraAkX10PLwMGzCKbHuX4uRy9x%2BX3SG8X8npQI1eDBFlXwN5vH3GSSnu2lsnYqhXJslaLwLuCRSWL9o8s3qHRiADX9c2gEcpQzND%2BpBBgBvIeUriqiUFHIee67M%2FNW18iePlS1ViiH%2BowY1NOb%2BV7IdGpAVcftwH5CO&X-Amz-Signature=d41776b55c6f7d42085e4306e3d82185d0a70eb9528424925348eaa109a756ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
