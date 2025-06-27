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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CBUMFG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfU5kHPwRJ03L2c0C091XyVDOx2sCvo3L44keWzLZHgwIhAI%2FaPOZl6c0luMu7whOW%2BCv3fZbAvV%2FO6dzOIcJMWlPRKv8DCHwQABoMNjM3NDIzMTgzODA1IgzWhtNxsHNM4pohjZ8q3ANVSmd7IHDHmTjflsvFHwoVM09UHnKMaTtRc1XwTcH%2F6TIIx9vwqSUfvOBnpLktTqL%2BesqdsDe9ZZHx8nhiQAhXEYVZixbCCrrULBNe9%2FF720HQmiZks2nIvHDdeYBmhWC%2BMOIsCMR3z2bO7iP0W2h0Rx1PwNNduJy4KwvDeqRH3tvg0EYUd%2FJ1zzMKWFt3w9jGIUEA%2BUIWmkxObm2NCWgJBv9F%2F6MmxNyXyLvL2A2meM922Z1p4rI%2FqM94rjhEDr8xwA%2BjlMiHGSOkNi8Ef8sEuaPhhJfngVI%2F4UzbaK4iWzSFpgLGe%2BOpOI6iOhz49sGoihEqhnSh53rgqBPZxQp6Le5P%2B83iqNUVdw77dXPxOqi4774O3diFlF2GbB%2B%2BkzaDR%2BcSTvGXmf9g3A7hAPus4VOz6vWHVAXxXKAL41leTFpEtwQhO6TOt3sp73Rmzk8J9S2INoadjyN0i%2BeKuHqPIAzXNGArQsoRq6%2B7wNMaytmpzMWz7Q49eMIzN9oXpdc4SNxYwvWFo2SHSOAgGwXYD1K3A%2FkRngC59k%2BTrT41nxzwLQTxc341IfuyXQBoYHJLh7g9ro7jhNT9NETesgJWzwK3aR%2Bz2P5Ys3gseEpXOrj0TJ%2FzHhPSNScE6TClyvvCBjqkAf5Gl3lIPydQaynbBq%2FsqBbZO985FZ5TEfkrfwM4i1Vw%2F0jb0A3LGD6qdZ%2F04xbseZUQpwIvMSnQj0J5eJDilhTIAcafJWNSVyQcTetGypXhmuWKdMzEjOCtTJ6ccBxoHw6i7LTCNqmRLeB83sA%2B6wn2RJLvTIVV2C0kIJNXm3mOhWcBbrxFIuzHhb7GW62jdwPD6vm0Byflg1%2Fje2IbD3PI1REM&X-Amz-Signature=364aafa625cda5fc36e92df159854da2fb0068bcf3d0530f46f1f25fc5484a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
