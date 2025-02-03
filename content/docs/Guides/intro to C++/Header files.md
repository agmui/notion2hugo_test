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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I63KMC3%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtnQEC3rndHUVxmxdjP%2FTVAOI2nQeeGbBS2GvDjaS7rgIhAKSuUE%2F7hkhwDu3zVKQAffrlnBh6EcFPkshamVmZCEM0KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp%2ByXF5YM21ulTB%2BMq3AOwuKAVLoENS1IbBsf7gd30tu%2FCaAYt%2Fc9aWvW3W0MY5d5OAA%2Bs58h05kR0Z9lXSqM1wBdxwKoen7W2rdfo0T%2FpZndx3OtWUI8LgqlESE8oiaReps89OE7UAOfhci1fjmdRVl2JZ3Q6pUkiWWvsGy141uqu87uQmDQz4bLeiKlfYk9JzBYbr4JU7IWL1aFt83eD133VwLWmzqfpQQ8TF%2FQcf3gk%2Bq1WO4fOUPf87Lfnk%2FUUFhML9CJ857%2F2P6525%2BT01Yp0cEmY18xildquhpv4Jo84sPtxBvHvrCE68psNRx1HfpkdDAPrhWAJ63tPFMY449eaFFAwxqm5Y3Sy1pPLxmvCy5Ww8%2FNQRgToEVbGrXpeIwkhLeHBtXFyF6zJD7Gf59oY4OK1YSVW59%2FYhXqFYuVHomv3KQ14oe%2FJbRpBvqp0rjnPT%2B6h%2BKb8iA8voXI7Q0QLKj3sx9Ks8ZJANdMwdfT%2FFlw0V4AfpHbEJ3rFWaB4jReZettjJ2z%2FbZw%2FpqWU7JiIlPC%2F99rLn94OQM%2FQ99DL0OmOT7%2F%2Bylxq46ijBtTo5MYlTZ3%2BFmXgK2iACmhrfbR5heAgmoOdV6aQYUhls7%2FfNleYSo%2BGogGF95IpRQEep5d1FRuYAFaYVjCBwYC9BjqkASy7uxgkk6JXBRzqQIc7h57fzpScQh58WPrEZknHNgz3jYeDqYu70pXZ4ajvrLRoUN4zMZqwDIlipW5VAxumMy2nLET3G758b%2BEXG9xDHUBKe%2F0msvNuWnbI60g%2BqoSnOlLeEamK%2BjLtwzSImvcsZRbsU3EQUezeeqowdTNtMOESTWxGpht356Wesh7UsWtXWgDcli4mYlBsv9fEtUWoLFVsFi9H&X-Amz-Signature=fa20633f6f52129b66201352659f99cdc1383fd5108c41cd99831a179a56ab69&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
