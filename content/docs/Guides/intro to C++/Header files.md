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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WK2Z7ZU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICe4K6HZO3RnAzzmGX1o1lmz2tUjW8ctGfw02J1XkaxXAiEAmk3CgGIJv8bvDWwF3d193NTTseviKxgnLyrf7b3wXFwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjnLxCpaJmLgwk2xSrcAzUpP96q4zQBxdb9Y3YuqIs9dqEslwCvFlR0y49UW0YNR5gFWvlmXz5ARhTuupJjXHdWC40b41rI9AwInG5C9UyJCabKXprEEBBUqohxio3pCeErIYqMmSPgHi18R28SzqPsQCF6ha%2BbB9xUZihBmv4U2D8xBkTMvUCNBCjQMAiq%2BcH%2FyXOWtX30HQ3mpPIOROPDVFOP8marKAtGmfvDsxOltmE2WXkIRWfbiGf39VG1ZxOYDvK0shwV%2FQoxonz1fDUcJpd0seG6G1dDI%2FaXfmsqp0o2tJykkft75Xia2ct5r85RKr4MlGPU3AfcIUUxraY%2B5fyvDMGG%2F1Trtq3fmgo5kndAm5ViA0eu%2F0FGJh%2BuLgThByDtJSLZeRFmPLEe3wX0dk9yIOsKwl%2FRZNr%2FGMyVUkvkUKeJ1Iq05s8R07nuwoRdkUHm6GqJZx2RFEzLvRXEjOg52u6nEgwx2BCYRRefO3OYMjmQnCm0YuhuThjvuXqDPEvLVx4gkFvz%2F2tPS1j2kjFVTa18kMeKWVbVEcDQcj%2B9QsVG17Wvwx9PiOudJKZCFCUSoOe6CUisVkhZEG0wdet0rNM%2B%2B5VCDDzi3xqS6to%2BZUSPYoE%2BqN7PDd%2Fp1G8uIEXJozXWgOUAMLnQ2sQGOqUBsSLWxnxOga4F42e2JWXhehCrjKgydoIxPCVU8FOBv4F5FlFypWdzxNI8NCPk5aIaJ6SlVFwWgt7B5DqopIWl%2B4YIs8ztiE4uhNEEectjkQvD8VmQDkP8MUtf0vIW5w2piWNEzxFps9HeoSf1iG3C8LJ48qF5ATUxrLMfV1hXHE3xpYovoXSDf8cs5yke7vlHa4MjMYD5V28fly9RN8mxJJrC%2F84X&X-Amz-Signature=28c27551474b1d61617757cf6b4fab23564d3e5c55df762dd6d8e867f53145d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
