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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6IKZJ3Z%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIcM0o1XfLYi72LlrqPwyqC7S4c1wKjSYmhtMwRBf5NgIhAMjizDuO2ELDgzbeJKVnl9%2BiGnzlHOT7jicVaSLFtI9gKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDNHJj%2BnckPl%2FeYaQq3AODRdKjVnQq5PCiWV1UUALRg00UPH5onFpckLX0Ffbk4KFWajKmo1GfhwNrMNGVnUGzTGrwUC9Z8CfIgv4zQfbY44aOxJc7JFsIjAzvoOkYkWVpBTQFrBeDwSnmORmnM4RsDyol957HluZDf19YKxHengbx2iDTzUmLBoYqITx40tVgfmuYu%2BUaFDFBct0utvQ9jjxt9dE6J%2FI0t47mfLVBJWGwoa%2Br%2FmGAnqGZFcn%2BkEinJsPO4PNF1VxKaXrwbDVisjjQnYN5bck9wgRBKaUoLphRd3n308BVSxiJfxLkkx2umSvVUHxoxWnvZHTa%2Fvo7887cXYTYoqeWlEk%2BoFJUyskfcOdWQzq4eHAhY6iYDaynOxcu72HmGI56FX7%2BZeHLhUJChaESrGDyRmzTlHGW0IN79TTnwAJXFR16lZrozF9yIQWx8%2BUo3Et%2FLgnJcGb4%2FPy4ihfdRmDw47k%2F01y1iq4hZn8CDNeFmCTKO6WyRVNrIc4xHpna1bQ8onBeY5Gf9h0hARHq77wkJVpWSykSXVJs0eNU7o6EPc1QdvFa5pXAh%2B4eOd2Vaievb5saMZIdFKzNYHCEGMRZIr%2FYITwh2i65CjFF9O3ZLvb8Gb6os33rPPbMjrT4NmvX0jDrvoW%2FBjqkAWoCbjGQvLItMjOj0VSZSeCQTNmF%2FNIGrlxwD%2FjsTTgc6Z4G0KFOB6IrwI%2FowNRsdoMAeQs4%2BErLZioP1etdfANTXUs3S2%2BSXeo8Gj6%2FXt1ePpFZbTae21PAvHUTIsQ6QWrrQjjx%2B8Zr4qycV2AzVLJVuVluhFHZpbaqUbVhgmr6EWnVKEQz%2B83xxQHEJAxwX3w0jMBQUer%2FDz%2BcC9tzUUlqqYmJ&X-Amz-Signature=6e51d42bcf0380bab1fccb139e1cd22bb843fe004b7a9a1e05fa7c232fd4fbc1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
