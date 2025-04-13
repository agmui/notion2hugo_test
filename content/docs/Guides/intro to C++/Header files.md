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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755WUNYE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCMhCqIx39zgg5F6ZhLvBvD4HN4RzuiEZ6KkicmoUw2BwIhAMzB3JOUOtFbLfnrETuMg%2BPbOTg5sUMX3lacouFvpqRgKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtKLgumUbwW3l33Qgq3AO5YZmxuGN00GoRdT9wdsU3iS04pWGMyPurdcGeeEkMINUt7owPJdXEy4pri35UkJdWimQad6gbo%2BdNQBV5z75dioJ68tjvH7o81e86UzlK94mOCwGaaXhxO2LZEfeqPkKIr4rGRtM5NoUQcyTUPQFMHQTWlY1flJCbX%2F7CdMQNWQ2pCw7%2FQkUjs%2BSqnqgAkt59W%2FiA4JVApPBvSoFjfFlIFqsmEAQFsUEc6gDmdeJzA7iylwUWdmt09ZpvGJmfdU5SbbMvAAXi4LSlNaMJQXp7Zrq7aDmScWpHqO%2BuA%2BYlQU%2BeKDCbNY%2BM1l1yfzwkqbT3di5llMx7lzVotPoiqvBhngTmizcCDd64Ab4rRDqL2s2qpGV%2Fhc9XjRDykaU6DG63%2BYI8sZjsLXAdbXty0Ah4qxYUmXlufvK05NaIokxSBPfTAJRVn2iiNkjCu4b4M1nc7%2BeQxVtxZx%2BKTIWvYVVGJfXu2H9rXy6Bm7W%2BkPGiK2b7P9GaRfUVgisT77tGsylnGw2eg0BCB9Es4bskE4OjmLMC8nC1EKHrExiAxYvmG50YZwfKC2HPbKzAy4amECRqk1B24xdcssK599anbR7cqzAkf93SobVaHYxfT2%2FyKv8%2B3uRBx0GqepF54jCsie%2B%2FBjqkAUiRVJ4q%2FUnNITd3ApLWL0gFffuIqMieu97ibPgX1FBEXNoPfbXCKDtQm0gjgm3unp9ZHaYjuc1EpP5OLD%2BBE34pAzaCWRnaOT8be89aF8AWTQ9ION%2BQW1aErXI3Utpm%2Fs0ihD5hmVqKxwxrX3tQ%2FMFJQ2m3hTjo%2BFaXQ6lb3dc%2B06nFxpoZpCWBuVYDCjrcAV%2FG4yeqVp495KT2SU4B9Uug5u0u&X-Amz-Signature=ac572934db31e61fc23a1edda973f6aacb2520b78c2005601b0370c577f60b61&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
