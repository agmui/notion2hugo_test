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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJGIMDF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwZ1%2FvLt4PjqsWQXoXgXAmelcy%2BYO2cb5Bq5N0a8h7rAiBCZ3JU8cLRysUPUuqZUA%2FmQ7GgTWnti8KhFTlxWRzWmyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEFkVteV45oCAewDVKtwDTJwA9wR3Lwt5ebZlt434FtrK3tcOFHdM9VDiXpRuL%2BxTtGXbc1%2BaSc0aw3r0l%2F%2BA9NG5QByTR6H%2FVFq0IEZrTImCngSOKfNh4jhmxPlF1aYByZZ%2FoinvkqIF7IaN16CxT1FYEe36Mcv%2B2a0lE6EYGk0HiT3fVozZMEmgdyvu5jlexxqNF05O0gJ6%2FQueLx3OV5TbYwwzjjKTA2E2CFKnLL01mkq0nmQAM57wV2oxsoTA5y6gpXgFRIi7K6eCC4n2ArL0chn1XreJf21aqcIRBtRvCqJJcv%2FhwujWgxBu9%2FwmCwjp0NZntQ3ESmXs7l%2BnMcUX2WOa16vMgkEqMZ%2FH69nK8I6dZ8%2BTRTv6EMhTJrYDNwNjHX%2FkjynLwzAC9X9KWstxfwLuBTi848kVB9ARH5bFJEPv%2FJV9HGNHi5fx0%2BRtttq1bWbzcGiJdrcv805BEOzQpX7v5TSigI8ryYpILrvLoee0mkppZ5lpdjsENab%2BRuvfnHTzAra7aJsVSqYujNe%2F6rZLF7wWDxVkxKRkMwCG5%2B%2BFsm5AIBmA6r3qTeiwtkL1wfz2SjwIy3NC5gMkvp6FtVfFWxbXhJvcOtvcArFjy489ullAI181EfsRBxUmU4m6aI0%2FWAB4C%2B8w%2F5SavwY6pgE6PAawCXEj5Fa3hsp91uvpbiZG%2FGEVswlMB0nUI7Hsjw8mthRj8D%2Bmie%2FQnTkHabsIbvKZG0CQyiq0FsaP8A2gCGxYfQaognVo3hKCQ4CiAC143dRIpnOixTm4%2FPYzFXcPWuLlc6%2BK6tlU4yoTgqxDJj8TbcWJorwswytRdH7Vkbby8ts%2B3jo%2Fi6hHJ1dBHq8xZtPmoYYeBAgHr15RBzWSIXXEjEZY&X-Amz-Signature=ab992425a6b4305072bb1bb49719513ecf1c22d30655e7a1c2b056ed619b1a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
