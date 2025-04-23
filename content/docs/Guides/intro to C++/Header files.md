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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DUZGEJS%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICmKhxMqB19nlT%2FaluC4YZzS6X%2FdgmNFQwmIekHsdT3%2FAiByw8C8Ym15uZ1ddO3gqriXOJREdkkOClOphI5u1qBCECqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhQoTSzH3LMAKcBqvKtwDXJQmNUTNETCkX%2FRkGPIpNxG%2F%2Fyh%2FCcOnsN6g8TnUM6mQGkJpboiUG5gxtV2zmvCGXq5IAQ%2Fg%2F3BLsJMqfmZGWN0uAixK2ku6ST5eK1lKmiVqCg5X4BWVIOvZatndJxO3BsWuUtmF1vaDDfzWR4TcrCueRCgoybYNgnYoHVPQdtSYw%2FwglLDriXBjT%2BHLPyzlfoMntsD99nEey9lBpcbr3w1guOtvPtQCje9fOCvLFZjSL%2BRCh6WQFDQyAjpHgWTNMijOeKN502RFm43OK9qzvXjV2ZJVozsjhxFwIRWDro935qXYRuGazDx3Vnj%2BQeMfpq8XCgoWrNo6NtE92YTYOHZ%2FXYzKrO8Ympi%2FezEDBnSu4YAjXQ7kZ9VU9WeSa9ApS47pzau0i2RCW2KeWtiBewwA4ubKugmEEEi5KXg7LF2nooOuegCRqK4cEzxEuqWc38%2BqjdPEWZPAstEk09rDxsqExeAWE2JJTprXSiOPJHYxy2m3fAzlytftCdSjtqa7qniBSO%2Bo8lXfZfESeJ8fjNR8A64EFKpyDFWPbpD3vUUREqESS%2BXJW%2Fw7gkT5qcvqwP9lqB8KCTD6tMPBJRaGeG94MiHPo5UPNlAYobf9TBwP7YR0wt0nuzu5LMAwobujwAY6pgF3aVpkmk6104w0QL7JBy%2FSoyPQ9x%2FKC%2FgzdRigIBGZkaHZkLcJIyAz%2FLKdCFn9i3JxPSG1%2Fqf9n9TjWQmHmX7hi25KFgHdGBi3WKHCOIeukZNf7pPQUevqYS3d3n4qunUDB1PKtFfNskNfs%2FVKuvShm4AIo4jQ%2FgFqFqCCsfKbytnWNW7vQ%2BOeTT72zPgMjx%2Fg6z77swuThPKYj%2BCAm4l816yByIxs&X-Amz-Signature=0fa615f356c2706d9d9843b04e768730e4435d81ef4ae4d4281f5ed40e6baff1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
