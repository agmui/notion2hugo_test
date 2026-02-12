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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKV7MNR%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEFFb2yhwGI059wliPbBRLijRldA5SkMU%2FNhYN8IfBMVAiAWEzKKbwBdHFfdqDM6QTxww4sXb%2FZjFjKGfSFelYvsxCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2Fg79fq5QuUvxVzkKtwDyaA8oza08dzlksO42njbfcA27fkEhHsTSdrZRY%2BLivl7v3DJNJrL6xlU1DkCQyU8edimYxdozo%2FcjurrsYC4nejEGcRjPDNkJErI7%2B45knU4ql3exuSlpwpPV5gTP7P7niH23ajXhvVbyTQJIXKc1mKCkysD%2FeQuQMVIMAsJ4mHjJWG%2FsO9HlOlQ8DBgJeM16dPWJBoEp3zOxQcHpwsgNYUV4oXx47gjTpBuRHkRt4KmqHTGYUUo1q7E8vW76VL30yWtHFCwJdkD4ihsX9jO0SG7yq5oCwYmbkWGf%2FAsxiMu9SR%2F4ALRPB3E7WiN79Uqm9TfngYLTlfd35vDSKewAc7j1F%2FLrdT7kHZ%2FL4akY%2F1Z62JkTylioW1k6VBJ6GFqaiEptfJB0B31lev%2FE1TgQe4PATiK52WMblOk%2Bg0p6RKlJ9A%2B2G0ALpNRKPEmCEPf04351ql325ha4ns9yVnb6aLVAqZISzvJtaCrQVpRCFOp3NQkuSdXsjyaqTiMEXWHc2okr9z7cyH4bbwSOhYzUoD%2F3I4RdEktpZE1oSKrssPU6%2FJitjCdUIFkvxBeGjcAwo2Z6eIAhLF2NvUPSrLTd%2BakzChdpsfon9JZ3ILt%2FXsl9QhcJXdyBsQiLwMwg9W0zAY6pgGLuqsIkTcHHSc0LIJBmo2GeE7wRBJuQjMcHEAQj4QcBd2y0LqDe0IxZQEq8L227UuFhjyyRXx%2BEV9dzzgQzXcJbDsvnWY%2BxU5JRyXLdjB7v1mZ2Wo%2BtZM4AweFVmN3ee%2FZ5DadIO7vYTNwk7uTDaYIkh%2FRYCL1wnpK%2BT5dR3Lsm6pUlulFdqaBPdtfU8pV0CIRHtPwFR21%2B8AXSLt8Q%2BWNNjLeFn%2Fp&X-Amz-Signature=50332ead8bd1c6a9424f8f3e5721c2f7e1aab023facd8ed64f07b4220bec4902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
