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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MASNY6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2FyFJP1extWS0RctX5hzzpNd4bi5mck19s49Y%2B6cf%2BgIhAJvEfv%2BzvbDr994Iymn0e6lSHXAX5K8ymHKzfO%2FjdWCLKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc%2FqSMWKP7wY84Jjwq3AO9gyNv3bHGgrOFRBDIG33lquwzghkjQnZstfrHJkjz2s7%2BmKuE3pVDj77Iq7bJqvXra6VR3vraPJFjUEY5Ks7eMtoiRvU8POeMn0kh7KI%2BvNz5rN8%2FCYFvXH4ScbCKzFJELtyx74aDhlljnKk63BdaxNXRd33l0KWMfFNxj6z4t9C9Lny4npIfGR7LoLKDJngqM0eBuxeBAUcwzMttsWHag8axaa5UcSsA9DgwwCXJWmuUNr6vivMYcPQyN%2F2kQbygNdGD%2FfA%2FUEMQQuF%2BR0gIqv8flithvNtCt9qyqfh%2FmirS%2BKwnhs8DJSkHBlazWFw5s1nWcHhPEB97wM1%2BhQHHoWPSmXpPg9teFJZQzQYMeHbqcT798O0UIJ18D1SVp56njRXA%2FtRdlOgRhJ%2B7fIZzqSuB%2FMkTl5zGPKE6gBy9IymloeKoP0nCY0W4%2F8fE4bpWCqqSwteUhm8luXyKHQmNISnMFA2IRP8yEmWkL7EgD%2F6JWaqdQ6slc0o3e9m1%2FC6vFm2o1%2FZD%2FfBWjy74iRexRazNAFmtC7diOYYoUSGYDz5%2Bb3czBf1KMylS5uQG3bMiONFxhu06o1aQ9MhSAeKqnS9scqTmWzOurzCgjpqafEn6JVeM4%2Bn7QV6tNDC1mZ2%2BBjqkAXKhpRKNA2pssYMGx63s2ztu%2Bz2uwkZa5bu5T5cLWnslaI837wALNMzGMArdufiF%2Bu5YzqpP1zpOCIOOTGkn6HrnNS5QnykJ%2FQYxiPjY2dH5WmaLSM50n9sAlMmGzYV3v0ivrCqRCl4JaW7nI7UO5JlODrxdIT9WCHhzT3nWitQm%2FquyaETddlD%2FS2NgAYnrZ5ufkQxTH3f%2BY9Kz9P6l5eGzXxy%2F&X-Amz-Signature=68e3f394b28a520accaf718182841e111edeae0ed85b3360bca5dfdba0fe36be&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
