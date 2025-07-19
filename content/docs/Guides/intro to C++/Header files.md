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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2P5JOGF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5oECf6IgDtTmqvY1sg4uwPMNt6aZ6wyca1hgYiEhm2gIhAP73pTdO%2F2g%2B2ngVQ7IEloZIFZVVwNu7dWxJJA2pTkbCKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys%2FDfVn9OLAfSoTZYq3AMq0Bp4fyoBLFfOFjA5lHLIY8cbS8KKx8B2QorhKrBOB9iF%2FkSk011sRNheCknGd4og2E3xTVbiegQYxxOc6XgAxRrQqWxGTKludB%2B%2B2F30qEYwB5R2BkJYLh02Q5Oc7Kv4G%2F%2FrtSOcBTZr3lAajEh6D8l1WAclDOeCjcfajvag1b0b%2FPvxTiaGEPak8QxyNQRH%2FB9pnM5Cg8Ze1PYtVChHcfAtK5VtOthsHbkWkXFwVkWLmN0lfvIDGXqVTxjzEY9ueg0yWMA2XhaKiLwKj2Jja11SZM9I1eGFlZRwRpf755eNVCx0flx7idoLGCqQ68gLDQBrUqy7RPkY8BVg81RdOBtYuRhqYTTpJXP3Bad149%2BGCReaD9ud6ysTQErmGHGhaOqXaLLWrcPk21pRga6d8U2CC0qWNsjjQnZSKCKOMqIH%2FRNMnIgoKYo3AsJh2%2BXv7WIYwK4oLXvQDwyhBVg5FtkFsPsOq477swf7doCgsLV%2B6Y4RSuT7309jDYO7KrTQClV%2Fxavue2quSNkp74yYJAqNLnuHlIYvEbPtIzUJs44XDth3UjEq33SYg2rF%2FDc4A%2FCEQNWMxpgYRmX5Og7ZlsCO1hn45qGNXruuNsJ4yXmJesZ1Op92%2FBXBAzCI4O3DBjqkAf3nQhrFqQRrdt%2Bb6YnegaWubFW461akOZhb%2BILAJUIdl0MhkARU8%2FGQpP%2FLd2d%2BCfW1yFb9qvnbTqOH8IHf27X9FzBaNrigTq3RLhcMY9SugndpXFqfczPEQ8wRz45c1BQS6D0GiyVjyhkiIq3AAhAHA50WTiWxRhMdUXYx0v5UtuOmBM9c8KZNp81v34d7bjPzasDqW3X4Ii5reYrOWA1UyYsh&X-Amz-Signature=dc820406923ccc87e58d3868d33d98a57ee4d338fb55e0a8f9efd31ebf74eca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
