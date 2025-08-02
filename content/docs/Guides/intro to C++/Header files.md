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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLJVFV3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD09m4KuB3%2B9gk%2FQOtrUeopfgzT%2F9YXCaXqVjQg05H11gIhALnBzpgZhbUKZDaArM3XxJWlCeQk44WIbfGIEmIjYtQnKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdLFs%2B%2BLoDCDEiSogq3ANYreeZugl9tJKkaHqubL4e3iyuVZwMcj8kwgTQd3d3f1RFRZJ2%2BHt5w7eWg5W5oSLW5J2LLOS4mR56J4FHQpB5oGlI0%2FyaYxhzXnw0dii5xTUgiG5Y0s8ik1j8CLEkgfWuPaJJ84SblsyNiDkeW1%2BdX9ISHr8Z2BetrpelaAyfpzHhMI5uFvpKm8u3ZrHx2j5NOskncnLA7nUKXNHe8x9VZAwJU5xSGRu1XrPXpb94XgLOam0qVsCGvNZLOj0tsQpKoi2r7tbCb7Q7z%2Fuq6KmpXRaJygA4G7Ajv2HbE%2B6X92Jmm6sde%2BMJMQTlTbObUmHMCrhE5BZUAqx7K%2FAjcNuueIq9f5HTwtQAf0VtIfbgzJIDLvrAkqzGi61Kul2IaqXzbQa10wor9eclW29zeOWji4B8WCU2VElyLQB%2F6ukY%2FYgSbfrK%2FIaLXw%2BqouixyUjGpsmQxrXp0YHDIAM1S1xIzQ5uhrAd7Kko65BDE%2BuwYyNXdPlyCH876VGY5UaSJ6qjkKX72vwoe37kpIz3S3jx5CtXQRrC8IiYrMP%2Bzfs5DOViaXqPYqpV%2F1A6%2BWunHY4xI9aKkfpOErhQoAhRaJN7c%2BbYS0yZP3Vp3YO%2BglQdG039mRQZnCrc%2BaK2rTC7nLbEBjqkATwxMDO%2BZq%2F3n1VF0s5RIGIS4eoYWQXIl6cNc7RpiPVafrV5t%2Bn84hHFIfFnJVJxKvDDVtV1nthr5%2BmLk%2F2HmmKsRSrkWtjineXQ8bt6%2FEU9OcFKscF4Xu%2BGkTnEleQPLyOXpAk9QD9sjCkCq078BjcGGzPmF4QiP747vijnbc1eSwHs%2Fkfu0UeD7CrAlh5FztHSMPszBWBov%2F21ix6Tiaaq9j6S&X-Amz-Signature=0a02a2e36bf8471227ce58d5d535c551ea57e0fa7c73349f8af3e350d3668acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
