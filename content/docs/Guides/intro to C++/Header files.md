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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTY3ESNP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPh0WZLSReFZC8II%2BbW8AkNW%2BwMa%2BsM6k5omB78ePhlAIgdE193YvZWxfD%2F9KQ5aRVSLiBNU6jWLCQ7FQ%2BcPY1tpkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKQVRaG9fuftu02cVSrcA36GEQoA%2Bxh%2BhDBmmZDTtBUZsmUkPZvZ6q893DxIE%2B2YfK9ChWI2Axyqva592yFqNMP663v4Kj%2Bk5%2Bw%2BmXYp7jOiyPiMLQSqGVZA5jlPrURNZdZV7Q1e%2FGJahBnpzsTvxd%2FS4HzaN3TWdmh9NN2dU5dWCudAuV6Dj1tYnWQWdhMcnMYSmP0Cx56s3TwIZnjivKnyoKUrgJx%2BP8dycZV0W%2FdAnu9I9G%2BzFCqrSQlhvIdrIavg%2BHEGHS0qbrp77KlZqAxARCzGVNSEUyShuS8KzyW50j84raZLKzrsIUZwJ9Bvyz1umcrvNTAh9xA0KlZfk6s2FiNFK%2FFJ%2BFRVpX%2Fy9tGL1WmYSEkC%2Bxk%2FkxJclI0mk1VHPtCtPSuZIxBbfz5pBCrYtwi4VMf4yygsoicztvj%2FsyN7UiOGQtwyoPDExGDESma69BrTydNlNgcz2zJYr7Bbm9ESXELEGCZ2CczJVfspgfCwmodkyf1idnIEKnmQWF6V%2BAB1ioDKkZo1SZiA2ywKRsFbzBeQHzwH%2Fjy1asMlZITXMgJWIfQJowL21EijvEB7sJFpWiZ22PYkqDi9QcqMbO3DeAmUkY39eCX7pbblOM6xYPEvXp5M8PUdBWXB61GAwGoluvbhPv7qMLKkzcMGOqUBebVk6nX3u6stZuTtcpoJEms5zs73D30wLyXKmsSJFYF9P6DjT7gQViGn6iok3JpzolVzjeDF5G%2F1Kp%2F4Adm2L%2FpjhP5JcR%2BZbNqDFHdt19bA10sjaYFI72wuRmkwV8ilponTVqfnMpCSg0yaRtWfGwT9KBqOUfpExA1IlhkHrg7JbABvq%2B7pMtM3SAnmGZR9U%2BKUM7qhx2NlxMqz1Z35eIyZ6tMf&X-Amz-Signature=0b32aac106912dcc5c10550d608326da0e5197e157bb18e71b24b7113b649996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
