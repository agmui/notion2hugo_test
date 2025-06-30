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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG7CFIWR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F73tU82wGSP%2FY3P0npV72Xo9Ss7t6aGKkuZVwo3vhzQIhAKyAM4hSxfHKPJlmwez9d6vfMUNnK6Zwq%2B23ztmw5m4eKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaFVmitQ3gcSA3wSwq3AMmf%2BNT87UVGtG0cTO1%2BVPxPd4vJVgQvlPyrv46Mr%2FXhIDoHfgAQUfkwFGNZrNSiHqneTSyQVzdewF%2F6fjjiGHF6CwXQB6XWuof%2BHVPq1bxpQ3tcAnnxtNs9I1OlM9Hc%2F8GFnJ0nLeVeC7Z3Y0KCNqeR7H3mQbyMRf3%2FGQimObU3joJSTml0m0u58rzbR6ovMWJXAj7Zbwc8Ll3eT54K%2F3hd%2FuonB%2BH%2FgZ9JP1JEj%2BQd9bMrN9UpXBrKyWQDqLh%2BjbNYsPytOSuAWrzFjtAnLXX0jO7Gh6G6h4fhvxxUNrUha2Eprbe1R2F%2FHFxfmfxdo%2B9mjoK3HrTu0OmgPJAGFTOz437JMoBhK0Dqp78J%2F%2BlN9alYXIKemvGYSNBqTd%2Fgz5MZzbdhnJMnBy1nGWtyu8hWQ61pMs9sUgygYFmBOUWVRmRIMy5C1QP8AseUff8QnyB0QvvM6P6IXYjX2ooY5Iqc7viGvGwaJgLI0tjW3vYCQX%2FmRN4BPFy%2BwsGcAcD8RMHhyJ7fLtVWco14C7Y314oG5sSb6a4vE7YCUQgx8yUK6SZeA%2BSOaLumUDSPeMhzFCzVsO7KSOxV6Ab%2Fi%2F3%2FEbLOUWh6QUz4Z8W8%2F5mPKmULnfUCrfbrMxn8AMEkDCx%2BYvDBjqkASuD3xbuqsKjeKS8mDm8TGMK1D7NMzPptpIDv1DmQTyoqZ449ctcga9A0wtZ%2Fyvasn53qHyaGc7w3Zyq%2FBPCCh8qwcgdnzCUeCpupYwiSMAnEpbq3OpiOZ9szloCfsD4%2BiVuroXgkM3E3ajx5fkplxdR4C24lOn3aRSycFWyvNTPd2pvXPcqdIo5LDs8t%2FCrMMiSo0v8pG5oixLEIF6Gt8QwMy6j&X-Amz-Signature=76fef0c350fbd4e42068a8043087bb14e3b86362000a5947ee52022b32a74ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
