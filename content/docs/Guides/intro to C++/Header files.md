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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHOYZ4Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjnW2lH9YgSnsrrkSXywMYC%2B0C4ngiH4ZLpAwbj4YyYAiEA4jUJlgg%2B2XsVwTpiordUY0gbL9eWggsCBRoJMFzOBcwq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDIwUH%2FGPVmpRAJ1eNCrcA3TTacXzpdtNX9kSDSLdrXG37rMfgMVsHsxPE9fnPsd2kjoAHZUgDgMVd3Av13D2vpWJKMYz6R39pTZk%2FuQp9Hy%2B1YyLSi7C4fr1jdybzMVHWOvQYpHZLtwYgZV%2FQwxvwY5wDK5sCC%2BpZvrBVrUrxu6GytRY9g8qjvn4m5RTASo7C3v2eJatAGhxdkT80gXwiO5f5dHVkvP9LVeNENPtE61Gbjo1zjaEnt7Cc9c5jiylvHyGhaIiupyN5K6pqZGC0%2Fn2%2FXocugD04clo%2FbKE9wxVLMpyu8zusszIo%2B057I5I9t7qY1YtmtZRbhdai911vgf3dnah0NJdJ%2BWsCs6WCsu2Ntp5u7ZPdEwZzqinN8lFvYyAc%2BJ9P%2BMscoXk9dbsAvblsiJyYdeiERlK%2BpsNNOag751NgOA7693YxbPJdARK4ccmNS%2FIgQlOXoqqEqUJILocnfsyo8NzyXeAJPcaSwKmi6kJkAg4oDvgIFTKtRJDBuPtjlcYfvKloE9maGBudGwpCZFfyIL6%2BTkUMkXnOwq50gHRpABruo67wJFjuCAZ57FL38gcuge2Rlzsl47H9u6K7tHWo5QuHbmvJchB%2BvYjWLp%2BAouTFe%2BbCYdQ95Rn3Ov1jtUgdUY%2Fgkv8MJTNrsAGOqUBLm%2FPm7K0izQfzsxLRDMjAO4YgQF8wCVKUF321ZFpJjB1pMW6xICN0GzPH4BOXomLyUZ6%2B%2F42t1BKIrgUzYZKIeoWjCn6GlkkkqBpR00I3o0jmtyIaeorz4Q%2F%2F%2BH7lQXdvFCDYTI8GckjVaY4RF%2F%2Fmusk3CD9I16G4Fp5NVmsHJs%2BeEYzkzkSfdceXMxSJuqYLpleOnuOx30hDOKXfyE27oqMxVTt&X-Amz-Signature=e185f312d393d4037cf6492511d8c7b0872598df19b87628fe4ca2e2ad81dd89&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
