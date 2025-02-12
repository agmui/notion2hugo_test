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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJR42MU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSxvpFaiizhWbwTbtQlqGyaWF9uKlYCLIjg7gUUC19ogIhANJ8hF9jdm%2F1Nb71zW8JAO0Xx8AOYwywTSuddxZxmCWiKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLUgNEmGSTz3xHQSsq3AOeQ3nTjzbygthhjGKMBJuO6CoaODyQsmMfY6up3FAx0ZP18CunPY6NuqQfheWwQWTrEeSX8aM8iMMEqe61sSJPxChQJqzrMZqNhj9yiyPRU9YoEDioQ9EJxsF9ruK%2FThKOcsy3wSED%2B%2B67p3F7%2FohVcsaLAUNNV5V%2B0ioftO4rL2oG%2BZOJUtKDzFiJ4OfmnseTv2JJtIvzOygRH3wQLbsYqmJQVkT2WbLZ0YgcdowuYyjgbqCwX6smbCALXw8OeIeJFQHfIRXF8vCNw3Ovq3p%2FKXbH0ht71RtnDL5IMUjQKvyv5hwn22AQKn%2BkHzbJgpv7n4JL28CoFHmNKr26KOHJe0FltDx5XfFzIXnb6lGQPW1aNhfIDlWapUL%2BeInNqM%2FOxWvDfjwjofCKx1%2BPb8b7rB2VR4Z%2B8XjpBGltrPnqUDuNRUKXSW62QGWU1hBYSLMGtKdKkD%2F7rLIrPOiRU3eYXVXsrn3z8BsWesTcUS8iXyAdppT5CDheg5AofBVLVQVo2lCFY6end4vjERaAapLKcBiW9BeJD2eXmwBgUe0hZ9yfei%2BU3dzN9dfwZ96n0qxhHOpLEXMv68wvfD8Wb0HOawNSgOY7jI0wTtEdcnNWsHqiDOSP4XQ5Mp2siTCH7a%2B9BjqkAfahRynJN%2BhQkWjTq9d88eYLnIbmg4d98wykUMPgrbLsfB5B1JaPLfjresZfcHoCAseNZBETN66O%2FTTNVPS7wWAKV718hbVqYuzxeWNwc5Vl73xu3llrv2eZVCOy1RR2gG9AHOXylWH%2BCIxy%2FGLkNKos5CERNiEKVXxyiajaZwMLe5As6XdzbNgkSY%2F2Ie85jf5kvLUqRD4V%2Be1vf4HOVFWXaGLd&X-Amz-Signature=276e1a1e6850426477d6db3fd3c8fd64def69996a1b0ca11410d4b94e21ef774&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
