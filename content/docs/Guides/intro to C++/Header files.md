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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQGFDW6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRLAwPgKHF0yB5ceBoX0H6gPLNOXIDhouKw%2FtWgLkeYAiAebYB5ThRuITcaxjgOz%2BxAHy%2BKS1y2NqRoC1N20uaBRir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMoJhTWDearBooLQqwKtwDRW4MKY3B108LIfVJ4nvsqOMdnvwpo4Z3lYRzV5KQb5rk0v%2FTWZJqdnlTWgEhUnRseIlcZt%2B9N59LFOvuHNwVKJzk%2BqMXlcM0BAuoJhCyORm5ZOVs%2FLFYOS9jLo2RkU3drtb%2FsVFfHYayFawzuQCN13oeNctdjLpB0ittNzK%2BqKKbauTz762oNEkKqcvwN8yXnz65sdcsmvUePzirDuhQ6sdwDiKzdpjf4FEHEmhmZ4waWMu5CSBqMbJemZzUdJo4qgaNoNytatcvK0%2Bgo8mLoslUfCYsndhDej6axt91LH%2FovXGdu2an1vdl0Z6BMiDcsvcP4hfQmnjcZyQvxowJYqYDM4SfWRyXdRdAFA1H5zLwxETUpCLEFqJLiGf%2Fe9ul%2BlwXeg%2FlKEd8QoowAmtKH3vVB7c0x9SMz0cfkoO%2FE1ysEZ%2BSlDTvTdugaiES7CuDUT%2BPyrbZv%2FpMtCGk4hRC59k12tSN1Ght9Ktd0aIQJWmrsek6Y8iyykhWJdAkpnJAkRDU%2Bq4ZGaSL4NHG3E3%2F9cDrXaizUwnaGvEof%2FNTFPev%2FJ5wqf%2Bmdrr8JG1kUDUs%2FZ78GjpYNos1YVZxkFqobyk9sGho79HyA5J70qUqRRK2KgbyUcmYYBdT%2BN8wssitwAY6pgEvJznK6h12QZbLlD%2BAJ9jofMnUAArpB7D5H92N3qizFFroOmpQcTRRCEOu3lIE7iv6aUJxifQsNF16%2Bf9iUstQdCb29KTrmOb7%2FuZL%2FhxJEb1lIWPXcsAOu3x94aEjdD4%2Bg6nmzbm3OTyIRMR6sIXDU5pD2kZ%2FUVUACW%2FJXWET5eADn%2BB522yngLg%2FnBSkOipRmhnK0cmgqiTJuLYJMUhXF%2FC9ieOj&X-Amz-Signature=71baa3795708b4bd07882becefa70719e951655b4db9df8683bb6059a834d064&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
