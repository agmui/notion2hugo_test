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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQPWAZM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJmaZwZ02rnvxIeR7Dz680%2FFVuq3ag%2FwZ6dP04z9yeiAiAuy91TXyEf2W9ANXgW20gljxBdj7%2BcmuO5IMc11xuH%2FCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0yWN06AyViQXYunvKtwDf2D2dY2k4qdV6xm0n%2FC%2Ft9AQa%2F0mslQxaak4uFb8c1r5zg4M4ktPduCpqA114%2FcwBzijOCFNt8p5SjM00q7LDuxj%2FVyNpcQuZPLNpxTGSGuK0WZBkZe7MxA%2FOgnZWqjaGW3tX5h2p6r6CGFBy99RhNn59ASCV%2F1qVWjzP1R%2BBK1e7wQT8kC2YIZBjCWnhEhygzJT5F0brbSj7vHQ6C3q3TJ34cL%2BSMKDV43eRKkuFlcf%2FMH0xhqICmZHmBu8PpUl%2F%2Btet2OQmNLNo4VW1NuDtS0ZjcSQ85buwNLGBFBiSL2mJTZc7z4JDFw%2FJO9azlXgOYHJKl1EqcyVXb86gH4p2yG6tQ0QAiJq5FaypwU09GHmHbcJT9SC37adSimTWaSc9sXrjPe0iqm5qKCJWeQdZ7w33J8zCHwtEf4qS4WE1PFgV4Sfx2LGT7yUrnvyjpFkrSDhcTmPFCWLZLvAiHUbDKhyxYTY%2FPosRTOOJQCMXQlZKu%2Be0u2Wr3FASjAFcZ2ID%2B6IVdLxEN7hxTmImMqrGIbMhy2L%2BcTxJbkzY%2Bjs5ncEJdePoMWdmkHwltEpPoqoJrgMO15U41iA9sT%2BRrck36NiKOu4m1wF68mLceF7irpZiu6tx%2FymYm9RU88w%2BIOKwwY6pgEP3UEWFbDyEu7Obu%2BhtUWDLrg2pfe9wG89boMwb0ASg5GoE0hdLpoWfJLQNyQDD6SJsOs1aWh2OFyKaRkMAMczogVD%2FHOboV1JvRt2AQyYaQECrm6ZkTDegerEK6hO070Q5MScaHir7QN7fsFNY%2BcGkWBJqIEX3jg1fka7T3W6uJlTsZPEavuQau8OpRC5PLmJYn%2BCLoEbF7F7vtFNMphRUyNrqu1m&X-Amz-Signature=ca24d6b32d52918d28bd31410c21650b9edbd272eb4ee01f55304c1335c57a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
