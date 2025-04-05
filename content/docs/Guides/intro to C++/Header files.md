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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GKMODL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5ryL0ugCHHlv3wruZT%2FNQkqcp3EhMay1a3thwioB6BAIhAMpojWxm5urY022UOAYW2hDIxQVECdsJq6Nq8jECWuCXKv8DCDIQABoMNjM3NDIzMTgzODA1IgwIpVxlzgJ44CXBz4Qq3APWV0hZ9I3BuyN5tURMLBIhXh%2F7FZmTro2AHZ4KLU1WSCUdsU6EOQd1TYAirRjQiGxAILEvNC27dt9vzT6CHKvdF8WVr0vGgh055A2F%2B3X8ZaaMpPhbKdRfZk3SndKlUInScqzG6vRsvj%2B9cUrpIJkUjjoRrwZWmiMgvzw6YeFyEku8adrCqyL9nSwOfMwU%2FbdRVGq6ObkFD3PQk0Afx%2BSywxeV1wyS8tVnWQNS5XbKltpRfSiAMMX4D4AlvqjjNbjzOMEESDJVgiaUvT0WVvitelg0HC2yWwl8Zrm%2BXvNS6jTqFJ0%2BSJUQpSPwe02DLNCfVrIQDl%2FEvJ9QlNYyQvK%2BRQDQ31Cj2CUhjbBoNEH%2BhWxhaB9vlL9H%2BAl0Gd2m5oWQ3KZaVhi8SGw6OlFqPG09v2S1VZ%2FVtTPb%2BJG1dsHp8DDXLt0NHtbg2CH5Lm2kuXXdaU%2Bv04ch7AlY4nA6W8wXIOyuTTSWjQrCHYi3iknbNoX%2Fj8nPnx3Mt0GCDXWHiqy8stR0nZf%2FVCypquSkV5LJWvnjaEJiE0%2FmD6TrE8F252GHSZKUU7k9i%2Bwm%2Bclrov35RLSu344%2BZA%2FhlJMrCG%2BxSU8fJnUGVEaUkZsshOlbDWitSMd7iV2gzSQFRTDXx8W%2FBjqkASMnB1hA6u8%2F96EpfcPp%2Fph0NpK4huCpDA%2Fp9DPDHI%2FlGkDxlM9pUrGg9n3xZiTPFLS2VzqQPFhLIqq3h2aWsEmjiM7NcFFmjoEyL9slfywU7kpeQS43Kv8YRyZTKTSB0%2FcOD%2Fq2H5w6FsldCFvjVC3VxjG7sKwrNWVNp%2BBQEOigkc%2B%2F7zFJ5PZYPITBI1kMFaYmN8KN07apkUfdFvk9CNBg%2BHCe&X-Amz-Signature=773c197b509e0dd2a6732555e537d0a20216bd5f54178f6d9a8282d8ad7444e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
