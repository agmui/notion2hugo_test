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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666627WGCG%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCgDSB98zcBFTl4A1WrgfkRb9YTXgw4MhuNDmMpfWtCbgIgRB%2FpyJ3X6m7kgi4ODlHRJmz8uwcBymH1vErHgeVqlqkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDAQ5PsN31J6wZdY%2BSrcA5GPnSb5CEFKEnb4N1UfZjJL7GP%2BzrAjbNXtrQC1Uy9egFnTeFfnKDjcp2sm48tgRAK4nUXH1gIKxmnucfeUDNfEDjF7NDDzBvWYZ9Boy10n5YXt3OjUDUwv3MPKu2BnGGJZJnmRnce8wB7NTcWnjZLcAfHlwVGfRpSKdcDPHxDC42kBZl6sjtXDHuWdOBl%2FEtcpKZBPjepnJRduxoSLoIk%2BoWG8Mj7n8HExsxH1ANqcxOCgjQ2VoqCgYHlvu8W0vK8nQZFQqzIC4O1y4ivqfKULYEHXpsCoEQs9U06fqMPwim9oo9ObI3r31YoZMwOv2LCaPMsMHMKjxkx%2BDpLDNOEWobAuJetWcNoMurcvQXRhbUYBz4nVa0YaM52Ev5X0kfc7MHr6ZNoR%2FATVswVyxYZ1EJwisKczkz1LQ2Q17ifrKQZR0HhuW5Bw3LvovWapimTlH5KlPEPjpdWIG8S%2BKc%2FmGymCFs3cXxNWC4yiJPa%2BsyruZTbZeQ2MYfqm9tYkklzMS63saBwmKA6VGHuXUGZvcsedzjaXlDtsq81mKHKLBQlS0M4xiRXNaKG3fAUkaxiF77qsgovr8Nycm9yQYCtcgrJA4mmhlxlAS5m4N%2FIgDNi6yWZtj8QmmyS8MMqd9cIGOqUBN5DAKKrI2ijKyh5HuBt6bP%2BXbgdSQVWKn9XTwSpH6bZRXd6Ttif06zwu%2BE%2BhuNIzry%2Bb9zqwlhhrREKtlam%2B9xzN6a9D9EHsSeqZWvmzY%2BV08xwg9E74iWcC1Un71nZHZnmG0prIYWxBIQmt95mRm8yQgS23ZYQM9T%2FOmTypiSWAs3Yl7yXVOGnZH7kQrnofvah7n6w60pLr1xzwBRJmvrQmZ5%2BP&X-Amz-Signature=8333a9f0c24e3ac8a9ea3901ce3864a50c54b53e2f333888a7cd3dd720e2000a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
