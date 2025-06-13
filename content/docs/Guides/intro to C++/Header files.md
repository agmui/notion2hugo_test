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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6WKLQY%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDzE5dRwqckksE93diuh31OqXSSK0igoAh84JgYqA2%2FKAIhAJnAiZuS%2FVZXeKtGfxTBQaxhFR8EoexbWa0QlrdD9jDhKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5ajvk7qXTqQbKEvQq3AP%2F67D%2Fw4ehhuKbb6IeZEURDGALVuThQMMmurvotnEobIiyNdJXEwZA%2F2IKdt0HJcBVQQ4drz6N3vTEZZ1GIzE6Push5I9ZxilAIHAh7r8u4v8kDz67Ki9DnpF9HugUG5uVmZ2sdBpH8en%2FE6dUb%2BCmIQ62MxEYLLkIZl1A%2BPOixLrcawrEKBdGcj92uzbgLrBgX%2Be0QJP4cVAfv7OYeCvu9aO64IqO13HC3w14tpLulUxz7JShLP5CjGj4tM6VruawKbGurdD7qzdFcL%2Bm%2BC31pS7w6H7HJez%2BZFo9JMp29eGi8Yf2c3Np5qfvebsh0pbwKofwpN5QdO4Dx2Ee9u%2F1Bf8cEybIECXyI%2BFOjWxtpXZgZUvVqdBNCd4%2BgRiMgb1Vuy51b%2FJe%2FpuQQw46stiAi9uBcT%2B5G8HRxnyoHd%2FjgcaWyj6TyHYVvdNIk3hrY3uBxUnejhWgjEtG6vsP5v5Gz%2Fn%2B7azagfObDCEOHK7yJAMXvJdO0VNVBt4k%2FdySACBpAvgVDlLkdKum1IwU4QVr%2BXLTKMCf2pF%2BPLq93qgE6JeNTNDzPJfE3Y1EPfAMzxBINCKqywoNjPThlGF479IzMvRnCu%2B4heJj8oJf1qmyODo85rbwp3aK9NxRfzCPgK%2FCBjqkAa%2FKy5xx3Ph1WkEiBvrumakPiVeQzGoNZRVDHVYhvBefVZkVfRiFtSxN70Bni8QC7FDRmxOm13z3pW9wmZkcsq7%2FLNX4R6GqBDDj3EFIBy8rJRss5YmEv5sCw0esnb25QhGF3VtD6zhLpbBfLP0Qls1krwXFzkp0GHrT6wdOuIuGVbi4SAuQQoiCThd5jprFgbiJgSD1x8%2BfFi%2FEwvPuikEuizyt&X-Amz-Signature=e3f415a118acffad1eea7d3209d75db8f8a664978cd997a19b8a14ac7b92b596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
