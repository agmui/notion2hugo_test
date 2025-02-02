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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRRVIM5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjTudoxXQACo%2FO4tBrv40TtOI%2BpPfS4D1OTdl9wlPkwgIhAPd1656v88O5OscT%2BNbOJpJdXHeIzSkHcjS7P4PdHxzXKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOy7HU7hy7EF31rG0q3AOgIQFOMfRhDaD7BAv4h4Qti%2BmCIVbIeLbQJseFHTfPv6EsXpl0DvqVXsVw4lK3pD1xj%2BHDYrQH0ocDqnAts17A52fZW%2F%2FVISuwLUaN%2FclCq9oO10hcuXCUCYbi3AcOD4jY9B00oyWcS2%2FwtVvabFHCWfAgKYFYxw4QCVm%2FG4xNyJi%2BO%2F74ZObmmJGmRJnqbkHCBomblccz2Igts2y4v%2FCTj9zY36vT3G7uNf6G9HBFsEhIxEPxwoYcdP9hZg116NdhxH882fsWmwqVLoqieUn5TrdMZzurSlaEpLLSNDv1qa1DwfguyyzINoJAcIA6Zh886aoo2IQSe2hn3GEFv90ZbD%2Fc%2Fe9e%2Bdutwq1N0Qk0xqP5CjSaSlljTy8iqUcUaUb%2FfyVmunuruaUCBtSXLVqDR4mKprI5XqOHmJ1%2FDAqnwjrr86kPZAYuB%2BtqR3JMjmeNc004h1hVb6mQ7%2BjVHTXmi8ySe09aSd5cTs1QNRyLQVvOZ00ULpv0xhN1wKm%2FXLgoF1aO7JozvLkPK6ndaUBfNAxmgyBmism0oq%2FM7QN0A5aTwoQ%2FI%2B9I8lxgxYWgua8fiwbjI69d9p2ak2c2KCjt5ETUgVbMZrL0MXRWWPhAAKScpQa00v8jMga1dTCH8%2Fq8BjqkAeiZri3yTVwbQSedUR4EcAViSm60S63SbcRmTJifWu0audD8egFZ4PysxCVLH%2FzPLmXTY5FMGiFMUXYfAVkW5iqiJQQEut9c5xdKD8%2BEA3B7TdbcT6q%2BH8O%2BRKInuRaqN%2Bq79tTSQYsw1gxM%2F4y%2BmSSYlwPkExhvRKbjrDrZtWgxos4qdaxbjSCyQb6wxHLM7Q1HGTEVyqPbT4pd8OdvdOyUGarB&X-Amz-Signature=4a58590a493a86895a2696dcbfe0a94b8d0b58c7ca1f028298ca10732b5be7be&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
