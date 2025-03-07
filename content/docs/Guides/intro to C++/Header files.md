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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZIBABI%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJFMEMCH06pCHG8%2Bbe%2FPhItCy4zo5tecFXnMzh7qnORb2OK%2BQ4CIA3nWX%2FW0adsmTPFEzaG9%2BgcQaQ0JPxDS3piCeQzjDoYKv8DCE0QABoMNjM3NDIzMTgzODA1IgwmEV792LSXsE3TO4Aq3AO52sCM0V5m%2BROXWp5PZ7oMvTYYS5DY5Aq%2Bk1jPV1pl2k8crlCDb%2FMNn%2Fbi8zc3BepwZ4fqUfNNWYgHbbce%2FRt%2BKn%2FZ5su83HENaB%2BA5xvMt4Qu%2FeYZSJAlJ7i9Upm%2FEarDC%2BmO8MSx3ieWMHpvkptPFoPw0dEgDOf45mXREU4Az08u8QchuieTUUKkrsN4GvLcSas4C17otqb1hnWL%2BNP8LGd41NfV4PxfaGDk3ASRKjVtKuEbD5RV3vOpRG%2FE%2FdAEf7QECwpOBc3hNhYp5p%2Fc%2Fsfj29S4w3Q30iWwcfmWXoVVN9gLy8dKfZ0OFLtaujwKSTv2cNHL%2Fgl9KLoee8lkiSRIndrqqJzfLU6ue0gLvNaU9DEW4u66iEDzUyZcAVJ88q%2FrTW4opxaIiLqq6Tk8GVIkkF7%2Fj6190hoiTc%2B3uy59D7T5E6e2XQSS8CrSRGLPx0la92HZ4wSNjh1eziEmzLwGx6ARbl%2FexXf010hjGuKz7uW44BgdY7KHQw9qP4swmBWjk4%2BAhtvEFCjoZFL8ccAHO1TJCFP3hHwe5lEipowZhedHA%2FLY52d2idxO7bt5za41cJo%2BoxPa3gmJVWOY73qB882PbxsFidLZUDGPGeifIDibF6obYanq7zCGoK2%2BBjqnAUuugQC%2FrvvbDTqdIfDnYF%2FddnfmUQJro41wxdsQUw6KbAuoZysgMM%2BYzNTHAiukip9SnDt7A6M51Ai6s2%2F%2BkDtGOJRmQgIXsCCHks3jiEo8fkxql0gFodduq3yacY71eNWmz%2B9y%2BY2WOOT4nbFH%2BQBS3Q4RkEmCEOCz6XqC4G%2BszHT01bjK0C5%2BFKE7IljMbHW0MaN%2Bv1jHZlmkPtL5ba188P7AaUlS&X-Amz-Signature=679bf423f6e15080683c537de741eb0c1e47cc651d782e8b065cad85a7108640&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
