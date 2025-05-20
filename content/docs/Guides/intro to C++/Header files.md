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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S44PYKGZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOjUSUuEEQSi7fbYCaXE%2FSVhIZ6kQlFClVuHuoeMJuXAiBa7OwafHAnqKT5uvwuPCM9OHEB3lgv%2FfyPuoAEqSww2SqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgbdDYxuPA%2BJSDGM%2FKtwDn5N%2BpjqLK9a0i7%2F4%2F7Eyl3I2szX9zuH3Co7BY285V84tLcznCb6sSBMMSkkc0ku0XaqrWgk0YyC26MK%2B24cM7MGDCb1oZUArwtFvNxsUJybxZnCaTb6ZjT7esMsAmCk4auawGWFj3iIODBeoFnqY5n5qEwioP%2FeXx0JnZGLvHlJus4WjYH%2F0YciTRwTKpz5MKvoSxCtNlMr9zr17vz7ELzLbTsP6lKcSMpgIfT7bY46qlCSMVvY%2B%2B6UXhYlCt57g0UKrMh3qpFqKZi%2FfRohXg4oO30V2vZdlvVI6QQtabEJb99g%2B6CNdEAe27qLuhhs%2BRkxBLjK8ILFPjZh4QiAj1zesyydZa%2BybQXnnBQEHLEjol%2FdAqY9Zy2XpklfySUD9btkzBpDaJrh7wqlrEYfymB288du%2FNmYpP%2FvLu7MRNpioBkqdyNz0vaUqTOSPwFOsUlpwO0hWGZwok3dJxY%2BftI19ZH2oNC%2BdQSyq5ohKVBi1FXbBTE0cyo9kpG%2BzkQU4WDgY%2FYXsITcxNxtnyot7w9yP6MiWZ70lzAIpTD8RgyXOv20NHuKoeM%2F%2FUhKREysNDOBZLySvVU8Twb76I%2BJYrsIh9Zio%2BbzUNr%2BYgQTmmxhfeb78r3zBjLqJYBgwrOOywQY6pgHnTz%2FdgoGuzHKDxOYuVd7BJA4lryVtUBJgHM3nu%2FowWEcHqUPWMn0zD7fygwLBLxyM1H%2BUwg7wOJwIsY0M1xyYUYuWZksTaINHyo8CDIavMGfJwUBxmGqB1jWBybw9OLV57%2BDb74kZbfd%2B%2B3W7W2eEYQUYVOtS9LdmWxCePhBrkD4MmfFTFn9mwmu%2FsjY5QMdcaZCl2biqJBalT2nnlYFCLvuFjjdz&X-Amz-Signature=1637704eb307cea2cc8b16b90c7552d964ed45377abe32855209a70e2db8504e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
