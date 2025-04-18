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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PSP72UT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyJCd8D7zMFDsiwG7F82FCZ7iSW5swJ8soALyjgqwHgAiAT%2Fs%2BvIdWDe3JFXYZQpnrQXQirlNrinv5%2BEDbt0zaY7Sr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMmEfH1v1R6yRAxjWZKtwDnYpcleRkTRRTrb02RLF5oR6oGATAotQ9zAqH9L9nVitsFmfIOPgue10WKykmmkWR6aL3W7CKXSmwFcsntyekOpHS7gH4inS6s1hYj85Axn0xP5s8ISjuctfeupIlgH0vc8NZqh42o6ZNA83VusrsdZUxFzOtvyDn50O0ijddZ82osj2Am%2BVKKBougwUWhEre39YeX1Wu0fMzzePmKWY3at8rb4T0IW6cu0vambt7mtCiHgw7Uzyeom4%2Fukl0cqTlxTmdVbfM6JmVcuibZHJvWzrLZmE4b%2BLFllgGofI69ywg6%2FEDSLT6ghAb%2BHkOwHFzM0PirVREzQYHsHz53GnW%2BmDKwEsoqvCku11oGk073BT7p9m8ertEp%2BrzJjNh1RJA%2B4vDmoFubI8Ir4NJ%2Bf3BhTG9B6Aa8YtGLm8ZgTUuQkrBqqF3vDRWx8AshQ6GiKCDu8%2BUnM8QrPUKl2zCcOTavPnQB1sH9konH1lqofJ7InOvAJH6r%2Bftz6Kmr%2BWarf5KT5CHea4vrPulQpP10UJh843YoBmU7UER%2FNfyCpndzGv%2BQskmlFJbuGAVpPpPFb43Pyl0fQ7w54AMZCD%2FdpyUV60zQxo%2BapsCoLvKgc%2BuHiCn4bQJ3RYvOmKdQNMw4I2JwAY6pgE7nE0vMSFh2ba%2FPqYawzpyYwkuqEPUAyF0RushMbQYdsg1M0pbKtSU02HHOx0Qy3UXPRc4c%2Fbj%2FUs0ijD%2Ba511ZmOuETDD0oouGKJGiXmnA31XiWUVhQOOkfHQDzT3SFxUrkauUCKurYF4W1zkpOTGTbR%2FQ%2BWZyRydsEI5uLTzDmKG%2B8tT3RXo91pxQTmeS3%2FLy5q2A%2B9jTJdC47P5LpP%2FWwsbGP%2Fb&X-Amz-Signature=cc4f01e3adf731d170d971fdb25fdd067ed0f95a9476c6eca0d9ffca1086db7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
