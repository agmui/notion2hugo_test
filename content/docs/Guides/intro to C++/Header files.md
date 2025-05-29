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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5S4Q4KR%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYSzmAeTQgfd5taeZL%2BpW8ok%2BswgotW9VsTGvUggqe%2BAIhALPBm1X%2FyVcJbnumKZVC2acARrBy0UA7fjG58ASbWnSIKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwLUjtZZyzHs%2BP01sq3AOhby5ZuJiePK2my6OP3rjD6QfhkfpeppcqfcT4QrumCDpCjNP%2FwfLxBBcfNj83fwbH5vtad%2BIEdeTADIJPcbOpSTBAbGnlG5mRoigkrEPYS3pAUbryXLRJM6jcdggH6E3MwfQDr8Zfs29%2Fh%2BF9wR%2BjL4fYZhcxSaY3rw0fCJIhESUCCGvXQMYX4W7Zgsk17707gROXR%2FWgJfqSbMUevGIkonRlo7OdD2zGMdhPdgQ3%2BHrGpHY1wxbZAE0apj1Dji1V9TzfWyhhvKUrImFoQ7P52T7R%2FBabq6IS1zJemOhfqGE5lfb1WjQ%2F1e7bXJs4rKi8ZNUA9wefzCXmLKgh%2F80ZmPmo0Pjkj9A9wgG1b%2Brh9jHa0aeGrsKwpToWbBCHvJESSttcSVSUDolsZXDc50k9eUOSlwbqnS%2FyFczJ%2BfClh5D1IVxpaLvlbRsuMiW%2FkPFhOUmKdt%2Boj1g2FTgDRD50l4I6ZsGTNSttTQMF%2B7B%2B5NkjjtO7Za3WgXhO7WofGq1EOQpi6thwfFOnC%2Fhr%2BhYYQ%2FnIKnF0tida%2BCpOa%2FlqbvrIo2QouDKBGRZm3dkd%2FFS76QfjC3CCqSyX4Dnsyd0UWEHMPxUHMkEbdG4sSaC%2Fh9BeXvIBZds%2BUUp2SzCLsuHBBjqkAaC0CDfDp%2B%2BxnY7fqiiwrcQWnNnbyHhHhCLi9w18g90RxX69y2JAOmhV8mKqKEzgcQmZ3MXjaCLvXXihAMZY9YyqB4C4JBnNMddbl84OmSp1DbI1y4DiSJvOVzNRUWtjzAv%2FxkQldBg15Zv1LaU1bfPtnDf2CFogJwsSlnWszLFNWyQrkq173XWV2XgOWYuTnUEw9e2N%2F5lVjTRoM74NpJjwg2nL&X-Amz-Signature=2dac7282debe71d6403e2db7cad433e7d229b1e8fb11ff204c2e7b57ffdb6817&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
