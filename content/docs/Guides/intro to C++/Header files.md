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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFFXLQKP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbvaNeFosZA2C%2F5w6YiRlFz3jekP2522WsR7iPNwwHoAiEA0z6v6s0%2BqCdf1I0%2BhG0zPqi1zixwBuRbk64NRKH6FSUq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDHyWJpl9vjsSjbKTTircA%2BvzoCDzvJamAGmSE68PrD27sCTXDf3RHmcLEnQJf%2Bpjt3%2FEC8didQsvX2ybqv0u2NsO3I5ZHyOxqX2uAPQJCD5BnxbNlov0ECy6yBDuwGWDIISwiaK4dCKvpqqOOBUQVpRUvhMDGS9b%2BmWCUtJY42gifxqMdBq%2BwMsgeJb9q1Zm1nEgqIg3CsVp9gMBmEkGzCM59iSnjZqbkXHRjSDdWc25cwjiXH2d9ximWQ2uHvKFJ6RjjKVwWLL9%2FbgjrhiqtEGqmbAFLMtuRHnA9rjgEUQUVCLopjEwwquOBHVvmVqPvAQyOVfHYaejvk%2FejBxWUCjPQAbPbqJTk0BN4flPK%2BN1R6uqE3hqploU7GyAqyvTmuly5gF98XfG589AFGAzzzavtoE8f0jAi1z5j46uuao9yynVQHNDC8AqZSRGNPlk0UCcMxq2rCHzGPPyaYULYaMtDJZIaYVNe9MOqR8GCwjwHgucSFrwhTMT1S2bgQex4uWNSYRN9lqb99xoLoGhXKxnPJ%2FA7OCeuDF%2FDWBhXL6TgZYINuXAT%2BiKvOOJX8G4hxwrk%2Fimqkks3BXYIklVv5iNInPtoNiOBSnx8raClb7JGMQPdLqSvYXamcHYg58v3lTT%2F4UyeppK%2B%2FYdMOntkr8GOqUBlnHVqXPS5IsdrllPWK9m4ScCmf7VsKR51fcf1Iv1JXux3nrcFk4A6rqJW19Kek%2FiLL31FxYxr3%2Fy%2FJ6CxY7w70N1IF9eCE7yDT%2BXfam0B3CXdcp1N5gYmaZtd0THrGV8uVNXrLjMvS%2BxStGqTBJZDD60Tmw9UMg0Bb%2BFk%2BMWsX%2BccBMvtFe5JTMVcwAtzuOujFYUVl9Zw%2BjE%2FdxQYJ486nGC0Wvu&X-Amz-Signature=e9ee402ef582c3346ade33f14d54ec0dfc24bb27b37d70d0ca041c26e6787039&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
