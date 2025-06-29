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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP7RYO5Y%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOqrqDeERy9F2ja1jBz0RcP2fUicaQnmu6xhrTDMrwLwIgXPAGDvxXaemOiHPuVBVO4FZUkSlkGMMDZbQNxY1NfosqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxR94Aa5oo5qNU7dircA2oqXD0ADbCqcTbvyyD6U%2BHl4cVVClNVyan7zd3Rz8QyMdEeKINr6mdtgPqiH4txnCeFdfDtkfPol5Vtpt0ZbKu9kCLkjqwtQBSAKeqQXqfaITNvBfOZOPXVeMFRWW2hGLWa1U%2BaWFx1OCWorBMbBZpNM2VfeTEaOTNfU7tXO%2FCHfiSV7Q%2FypOYH7dW1uy4iBomWK9xYOdW9Ht5leUiZhb95Dd3nePy6EZTXhoImM4YtGPZsGYWyW%2BxMf0aA%2F7a7O5tqQC83FaWSYH1eQlp912rFJmtYZ%2Fd%2FbJSTVuTT1q2Jk2%2F5qTUsF%2FixKo2BEWsHMeZsUAELvKfDD5pzSFXnI9FhR4MrkQ0F2mZP0hGbNtYIlINega%2BrAHfeAmN0BgnWsRF%2FKefbWkjMimGR3FKx0BSbLf07tpm0s72V16lYHlnozaxz1IBSZzh0iNe%2FyxipDnPxqL4Pgk47CuJ2jDQ15UthHkMjGave%2B8zSW7MLXpPasX%2BKJey3RpEe6OWwZCSeM5EcGovUyNyCiZ%2F5PCheQ4DLNxRVY%2BMRs2E7A1DR9Cn9S4jJFpwTaa2p7GD64ETzrCHN25oz1RoQe3abM4XP6A5wvv9VF3br9AsRywr6Lrkc1iMSieyWlQCfNK1KMI6BhMMGOqUBCG1H7mqUOSXcYFrcouZTVYNPEzX9qmvaqk%2BinaK1KAht0W4Aj5fXVFDN23C7IVLYFIE8%2B5wya8kRcyRLN1GUo2iB3ZvFzWJQ35HsUGGAxxyCsbZ8R5%2FGK93qQbOYZLxnsAFbJ1MW%2Bl2h1qstJeqKUfuA5%2BUqgRgyS5ggQG5Q4DwtbnhVj910z20b%2B3UZ2YokEI%2Fhk2ptba9ASc0IU%2FE4dT%2F7rYbj&X-Amz-Signature=7694017d6852b547847c5093cb7ec9fedd791f65057fdd855167ee2231604c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
