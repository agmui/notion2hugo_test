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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2WP2TCQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3l6IvyKP9rcZbbErLyvL6G2A9zbbvxP%2FGI9RPou20KwIgeoUJQ8jA6Rdg05nduyAVSgkThS3rZ3ZvHh7eGZPDdQAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5CfSF1a2oPYUhdvCrcAxymLsMgI0hZyPAezOpKWldnnWs%2FvJ%2B9SkpFStky4nPd0uuIlleylOREsbf65PeSbjlBU9PH3lBMtKm0xWfUKtpo8AKJV%2B4u84od%2B4lPlwgODKW0FigTmTAtnXIEQlo%2Fb9L4OCUmEKDGl2o9ZEsEDSBgEkzg987Eh2hvtmGfUNgxBSP%2FgjW7fgLrq9FoLc7OMfprNpHFdGAUmigqFpBrx1URNGNm6C6lS2ZyjyGYjFS6xy3Mh8NPhkdFl2jzxtssuyTDUXfGw75eaprS9O7Ssdd4CLw3qgNKFG3olkqKj5RTV%2BZ2q%2FSssJyc0lK84Y%2BOqiYpch31KMf3bIhgx6rqUoGSaRuEsKSsTdqJz7Zy%2FSDaJTRPmGEm4mkQ7w5GFWfNaOIgka0tNmsIOyVftS9j982jeil240SpcH9F8LNbCXYzwp2EO1zxl%2Fvl%2BT%2Fmyij8%2B%2F2ng41%2FskDo32T8JIbxx1Ef8tmHly2EZUI9rRP8LiDdwSF524kgJkxUIHXP57C6UcjhL5LCAmaz466Fxsi%2FgO2yibuCNl8NEMO3K5JmCswFiRmQS4OCkCZ1COSONsekEK1jPCNCRcsZ37shA3aiLUXayniSIQm9bFLZQhvdmNgeTnCNS1fvbwC9%2BxEfMIqDpcIGOqUBwu6d29OhXbXYKBBVzyhr%2BQ%2FyEb5Pso24RiYfqZDqNkfTh49w5cNFXiD%2FSobF6URrYGpqcaMpF9tvDXTOb9uSQiVSdjHEmg9HyxMO8uv2cnpsxluLXxvpFS4rbCkK%2FvTBeN9TY%2BnA8tKZ7ivDqxxlMIjddxaxRBP%2FjLAX%2BIsn8Tm13QnrQnUA%2B3xqUE4JPqn4v5WhCdF7gUxdjpXSvAjPMonsP67r&X-Amz-Signature=e0e81be3aba3db8469626b0fdc230ac0753068404a16a8719f954913ff1275a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
