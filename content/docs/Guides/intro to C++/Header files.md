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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QXM5WOH%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLEITsX7SdgpxQIsNJA2MIoCHQa0LrJI0aLcwnCX%2FLsAiAeN0%2FtTihhgIp2Bz%2B3%2Fs6yjvZ63z0mUlIXQLRKg61e9SqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPsg4FDx%2B0%2BZoYz5iKtwDSeWiIvBQxctQoglNbZBWGb7XufzmDgBtKOGQSKV9cIBEs0%2BKt3KB2B3tKRTLmp74UXsoT12yBz1Uk7%2BAgKU5BgHhUlGvbd82izBg1mhq4tqk1BzMW1ZSjlHbZnL0BIXOnPgbOsUzq7licWH58Ral4X9s05S7Al9%2FfWVsACRyCv0G3t1kO%2BlTkFoBhtOI3YMZ%2Fu7awmtvPAD80OgVB4iY%2FDfY7E75%2B13fjz6e1GgcYggt59kXlVqCChkg2sD0KYNnYtdw%2Bw%2FOtOITzafFUnlR3Eq2NEONjA9dnFV079bSwDAjWOXLHg0q5E%2BMtbN9shY6FTrNsYDR3wejnQEotXF%2Fg954tM%2B0OlErK2So8cdzKxe7xHgA2uEo3dIAzuy2jT07y5vAbkRP1v2ZGAVt4%2F6yl4m%2BZN6Rn1dN7Mh7ufGbBiIlXYgbq6TrPTNts%2BWdKTqe%2FnaWWV%2FidbxPgWNaGUZGPuCYV9rKbjORTuxrFMjLd3F5CRul32n5uS8Vrxx%2BL6%2BhJ0OvRtQCnOrkBJFMF6QL%2BpGdQ0x%2Bssu6gKAn5U%2FGiOSaBiR%2BUm0sa6eJCIiRrSjGkIQXtG3U243Nf85xDlkaTddDwHy%2FuOTstXXxgk7D%2FLA%2FCtBZ8DtO1VUzaJswj4GEwwY6pgFkvqSHYoisyQ6O3qGvPIczprarATUocC7vQIWR0Yw%2B9W09lwzXLF6NfafWKWaM3JXDcFvE3xJLMEwqpFfcenF4gc1nCs4nLAuntzsEDfzlYokSSsUUK3l%2BAzAwFfAQGiPhPrW4ula%2BlhwdXpVuqydcF0KBzpQHiiEcbAUfWVF4K0nzBXf8K%2F9kfLtrDC1Ff987CGI4A31jVgnAspBWhDfkU6iFinlN&X-Amz-Signature=121974b90cb1f25e56e1233bebe962482bb0108f2e6e88d621260cc2548085ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
