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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN4QBVA4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCqZ%2BE4FU3ZXEnedqeo0qgfD2l9PBXRWpcFIZrGQsVsYQIhAItVMjGzYFZzHOh3VImcU3l08BxQCp0aD5DqGIAGUQmiKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0D%2BnFNaPgW6hw98wq3AO0n%2F6pzME8nn4MLB%2FgxT3BGIjMKUAh0S8xnDFlmCGOdI%2B%2FsqQ0vc03f1%2BWI%2FLNtS%2BviYaSnNqMvsW7VgvBt2GS0S7Z5SmmJpik9mEER%2Bc%2BmaGfcz5dDPdRG%2B0RqNr2e2mjF3yGBlc5sEu1jkx0qxxuXie7oQSvFRjYOTZxv7F5y%2Fp67yZ3zYVk7WLfvasADOXT1xr1QmidxDhshdMrimgv7sR48c0ADyZfYNDOJKL4pt2eX8poAyi1VfDxuty3ojOPyULbz1GjVlpkOGdBp64QyFaOdwLkN4UXZYfasPF21o2vkIgwo0MBkPDnUw90k1E3bFikyHl6SOQpKJmeWyGuAT5iQROUdkYf6c7ePRP0Bv5Q5XKGYrumrW%2BB%2BTmcjsjRiV%2FaxWd8PpmMeSe9lT8%2B1KaN%2Fg6DR%2BmO3BdVBj6JTNgcmLD7msyaVKRssA%2Bo3rLgnejOUWw9k4HeFPA2%2F1l%2Fp3oP7m40h%2BNXdr%2BbkL746PdMmYPDFNYHZVPB3eMyPDKVKiIQsQBi8M199pslM666xNMS69GIBaJB%2FhTmOW%2Bq3XUEBuSTEJRPKsaKeaEMu%2FI3flk8GE6vKX9nAjMm%2FqoXazKqcVPufU9VM%2FKOHD%2BIjDI1tk7rp%2B1jEzqzEjCm0pnABjqkAWL1a0TrLHRWoZKGsBVZ0LqaMFWr4z1C9sS%2FyVhnu3xGnVc30XhmqiGMvdq3ui%2B8BRFMPVKzVB81PULkCjwwb6%2Fo4d9JcFcGKD%2Ft0hueukr%2F82HUohgmkLf7Aw5ICxXfiM%2B6%2F7jlqWRKjsWQTxm13zotq%2B6wadDQw2CLfjQApg2UcVcxQMLWDhY9IaASwW6xbIgOTucQVGEAz7ufBYgnWjP1q8o6&X-Amz-Signature=2fac77b7ed6579a483fe54b1723f9b0230f4ec0acf412d878affb2dcca4a3e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
