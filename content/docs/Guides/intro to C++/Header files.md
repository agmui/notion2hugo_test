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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODBQ4OK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC3lXzffLRAOf3%2B8iuPMmaNTop5k4DxHIxy%2BfouXHnChQIgJxBsQ4Vt2ELb7IiNbCIwgtAxhmmDmK7ljoAI%2B1bpAwsq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDKEvbhSkVCVbe3Ki7yrcA4Lv%2BH7Ft%2F0AznZbPjk9lKVgH0Xlu79uZ%2BjrySVi75QhpMt5OO%2BSoGtyu%2BpFVK1jLZnZAwjEurdxoydlXa3NdLQgIBtBdcsMVW99wjFD5lLaD2ZU%2FNuk8LWnUrqzvVr%2FgykSr%2BgphYhoOdsCAqI%2FnyvofOSsCp7GC6Xas1wWCZV6VimdAq3guL5djLmapAfQIFIt47APP2IrgvmCTKH%2BKiYIurFFbYt9FrdWEsP72UBZCeMHZSdoVg5nePAVYVIILs3AQ1uerml8nbCjzOk8FfTmqX4d%2BxkG0RCT57h%2FhNHhBGXLWaQPddv6OJGdcrJ7ph%2BYX4BzmXn6uFU%2Bc1GJLXV8KqVONyDYc3vu5JVRBE9jOx%2Bkkh9IUZOuHmH%2F6kJVbYp%2Bcpjd%2BFN7Wv4HsZQgnp7uq3QcQnotcUmY3%2F1cHx07zIwDVIr4GivwbJpFN2tCR6C75wN1sk0BPZNNGMekf6YiiRTV9u5%2FnAzSRazaJ5sqC9to8mo9X%2BG%2FFwj%2B0xPq4yEyNJo5CVs46USKTrgrec2rHweHy6oi5Da8hGzcQDW0AfQOyoTpaZK9bMGXpjBAOLyY0jwDJjAPYII5MRvULhuu2ezLWuzTVDf6hTVcXoaaXG%2BtShYMiEI2De66MPqDyMQGOqUBnnbxIkhS4CdHXu%2BbqkT5K2W9AxKwfHdrgCbDi6HfOqvzrX4V7GJqbqReRCzyKeSRoMXWM5YZm2NN2RqI7PyKOf3hQ9UHDCrJHwcQnvYJn8UKCoOEg2aOrCIdEMqo0rfVUng%2B7RaXCQJ1oVimFBQV7wGa2m9JOV9fyXF8%2FanwebOgzsUxSWYMdn4sYri7x2zSzWcW7%2FjRb8KIj9PpfZp%2BCCPgqUyI&X-Amz-Signature=67909dd28d0786af573d4e9884a029b799d233c22dc73a80df6890ca3674d120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
