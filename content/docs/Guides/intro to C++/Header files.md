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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q26FA2Z%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLZ9FqFMBfpAvVimaZZxn%2Bw5dboBidVyJNg4h01UAJmAiEA0%2Fyqz%2B1BtLYa2oOlzTamF87jtqEBL71PFr5yqmkpnLQqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJN0pbbpERnwXY%2BTuyrcA2B1aNVBeH8chDd75m4fHM3%2Fx6Y55mvydqUP1pxUW4GM8CnZFCG%2B9pS3wy5wd0iQ16kF5wBFp%2FoTRvSFMj4MLd4xkyIjf8ilQ8TzmilutYaJ6pN0F9ZuEf65BakAvWBjuaB%2BNm%2BQFSluWAB9eB28gvEiuFc3eQuhbXSlX1wSlZYWK%2B5wpNMhiz7maVCPYO4Grj7qzxV4Sl1g%2F9NXsgwKj9wy4Vsl7qha1CF5qagx9uNkVZQHsXSYHYArYjNSVdX0EeKg7IDeq46sbq6TuHRSGj%2BCCGdhe5FjoqusZNpbgZyqdoBNJXs3QhOlahM5KsdO4Nve2WnqRGIZg4YfwjPcEOoQdqBZtIyVI%2BB1%2F%2FunaAFaPEaIkaeek5AyZxCeqVE%2FrurmQscbGyekHgsqWTOfadrE1bIha04Ls7MxXiKidFUH8ls9EQG9KQTsdho41edze5ZzIVxGK2raARGxE38gurytxUGfidGPZF22LbyFwYqL6JSUt28NnMVV8yveHNlrnW70528IwZr1KBmnleqqf7g0%2FF67DSm4L%2BAmCxs0tqLZHYT%2BN4%2BckBE0um6AZ0t%2Fu6ZiCrTN7m06mIOix3y21UQBbWflQqIbjnpDWJR76vffUwtZ7N%2B4JL7PHiRWMIOd%2FLwGOqUB4lMB7EIVqjIN88CkXRa7njErN8kBpYGMEuKqAJI6KknspsiG%2FA7F05JoKe%2F3HWFFVS7xyIJ%2B79j5E7ftGUPBa4uGcbKdH%2BPWAOP%2B%2B4IKjhGuFi7nhppFu3cR85DHb0ZxfgVfQEDiBlWnmSYQzgkhHpDkgwGtKMDBFSOvzUF5iSbuiXHWUwgFUCg7YxH0gcYeEIATqqus%2FufijNvKYEziaQFxVE2W&X-Amz-Signature=8c0af4c1c589f388e123e5c5c25985cfa07d4949fa3a2c93d1cfdf05d6814ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
