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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37NISCY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSW7Q%2F6sP8PbUBqv9BxJUQ1aq8Icb%2Ffl1o8CHsG5JdkAiAMGphd6L5sbFYxlR0zhMU65XTMvExipx6%2B7YHzgVYvtiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcypduMbizTs62p6fKtwDBSScYuq17OW2qRPwnaP7CGo8tkWqKHjxPv4UKt3S03SNhLxflHOpjo6GpuTtagMsNtGNZxhrShRjU4E4ZeqVokLvxn%2B0ub72zChQrFLDi0lP1%2Bo5PtD6OmJXH1k2Ouh3JB4SWryoNdcNrqmrFI64vSUzZj2VKZP64wCOh2rfMUwjQ06GBah%2FP0zpvfAdxDRYhvC9Y5sft2jD5%2BBLKhGKVJWtAx4xKDu7UAsXhUKALelDeprggJXCJn5%2Fcatt8oeLKq%2FDR0mlHigvpL0vXyWQmvHW5p07lVWR7fTWAgEpINyo8sF0Z1iaBH2j7FRSRaWMB7H68QAxlFxTqQ3GzGYz5bjicPOB8bp1kkx3kD4bw%2BhRdcUr0%2F4mKhG59Z9%2FE%2BnlN9g9bifgl8xxfbtUnYwRO2iQYM1RAawVAdjikmQ1%2FZwXTujtXbDKrc901NasL6fU6jY8UjZWtpDFJecTLpIuNHIuti0HUQ7YUEJB9dVDWtDGYC1dkxLRk8YmoKZKaNXgNYjheLns7rkUHLoTYMTWLQj3woeGgkIX%2FBZco4%2BimEjPJefKe3j91iROMPZCFLR8yQqnhPblUIx%2FUSFbaa5cnShAy0RdoUgpLxDzz1g8b5oephRvem3KB9zV4GEwr%2BKJwwY6pgGNt88XoX0ydbTT%2FIU5wYSKbHfbGOCLJ6IC%2FGAXSFxumsteMBuXbquDjd9EHUj5FXKAUc4H9xqFtR82rka%2BdhDwSQZLMjoolrJJP2Vlv4iVfapvLJnJU1LuuYFuw8mNAAXlBurOOFbNosEdfBPxRJxQvKgFnH7%2BYL8UHahGp240TeXLmqjL908s%2BZraKm6WIFBVlDWjpjeFDEAhsP3iVwgMsGrW%2BToi&X-Amz-Signature=a1fc21a6850227c6ba1914a29e184359a64bd667323a3c7d9d094578281f5b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
