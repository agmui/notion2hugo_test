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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6KUJ5XW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1e35dyzww7ZFuJHhYSC1gecd3OrNE7r8rViARjUpLrgIgBrXisrwX%2FA6Kk%2FiXhK%2BcG0lvcBWVm4et3XujTG1OwAoq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF7Uy%2FJn1IPd6tiZgyrcA%2B%2BnHsgejzg1%2BYfsQnYMAPv7AUCv0F1HegD%2FuAaoHgnES46qFSmQzr7FsmGlGJEoC3YyrBdZengMihaRyeI8eHGbfK96GIwqVBnp6mHwrvJfBt2OGIysetXVOExVDCOUmIV1luIo2j%2B%2FJ6tbebIBlji3xYXa%2BIVH4RHWAwZCwj7SMDOOg8ay8H8IWL1iMszoKwQeuYbHx7XHHzLxkhbKH1a72KQFGvaJsShuj%2Fb2UjhYrm37UQTl7OqFHWZwGbUIOvsUbwbuP93KMSmqdFPKGcE%2B5WYVT64oQ3NnUwTnvJApycfnzH48CiCPciIuXK573GJOMM5J7XG5yCNTBYRbxuP1xaj6mkSEwO8WtEWWF26APOGtvI%2FNNWsX%2Fhxlqy2izGx99vOCX7nN1PrQdftLGJH6r8dRS9XSDKoWBpIpB6g9vqnmEhJGhIZfpofpiqcXudTGpJ0EZSb6o8rKLHyrSd2W6X6WBcR3eGZ8%2FRjmxlwTFsNby%2FtSjq4cKpcaMJEC6aRCwxAmxqCvOaTC1q%2Ba69cp%2FFLxgr5N%2BUFfGeIO9xsD678Q8CIQQdscqHKf8O9VkqjdEw5kKIiRKTlUAVEaxHrA6kQidoozvcKMxguLCksBfIOFwuu%2BkIZ%2FEaujMKTSvcQGOqUBBs7Z8Pv6MGt%2By0vsAJ2ylc%2FBIdwLXWmk6t6x55oPy1eON4QueROxdbXATgjzLfvNLa4QgCCRVIzF7GNbViHAcglpYBKl5Ac9WkL02F5MFnRf3ahOT0n26Ia7ZqEcGAIlK449RpycPGeBhuu2smiVb4lTedFN4Mxm%2BTYuFP4JBIqaA3xLEAuhoPGRsv6OKoJ3ANW1ykRFik2%2FcIoV3bLGJTOfBLIS&X-Amz-Signature=bd0f029c315627bc8f1684748ce989838a1e5801aac2b984350ec8c472b7ab67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
