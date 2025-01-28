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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WRHZNTR%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFO0W4tfeidSybqJur7U2PBLJefVZlZ4m%2Be%2FNR%2BBHkWFAiBQfbPYI768JFmDZhpVvxAy5HDKaJzNPsEONqjJu6qaTyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMGCY5ht0%2BT7IOOvWMKtwD60jNFoCS1EvViJii%2FrYrzEs%2FOLq2Fnn9k8Rt1yhmeef8UwToNNnAepaRFhyjjUvCMMT5JKGwBwpgERLlZqNOmOazIlv1Y4fqvK0MvSVr9DXHCFWZhwUl8Af7ECVnnsPTqYH%2FoOi7H3qB7hcCZFwJVe6uZdOcTRJPEHP0Wjcq%2FUhUo%2BbJ6j6VrOz5FT%2BTuU9%2BXaB8VFYRLxZfGuWOzAdCirGe2mqKGj1rcz58N75AU0hCGBM348RtZYVsGUMz7PWq9uZ7CvEdw6xJHoukkc3VwBqh1ZfEb9Y22BnQTVR4zkiix%2BatUzMjIFerxp2hYbEdaD2Jmha7UDPSGZvur0kJguZsjlhef8iHP%2B2mmpeNw8i358zXopDFhmf6jIQqkIdXF8O4kEPKGM0MewiOjbL7fdzIFkvpjPYIAkuE33cko3BCahXhwII3RKEMcD5QSVZxlxnT%2BxI6kDBoMG9AIh1iBzJUz%2FB9NSZdeZmi4p%2BzQ65YQt0Ex4uxCsGkWH0bYehLSRYn5S1Y8hCpuIq8vTVjf3Rw2adDkmHDaEhcP1UuUhxfzZbeNdX6%2BWDVnnqg%2BliWGacqeAfYhTDAThXogsTOciItileudCL2UW%2BxamPWqmuQ1h2tZFM%2BSl%2F5Zg4w4JXlvAY6pgHBrElKbyl02UIMsZI68H6n4aqdxG%2BDZq%2B9gpg%2BG5FPX4qAhMzep%2BBmUZZxVXl%2BYpZmmCkkHK%2FCZ6yVfRQzbZduTx0JIs1%2BwOMbaiXTYZ8PpKn%2F2jP6FxgqMH8qGRoRRN7gRMtRu09AfSZ6dqicmTQ5VYnHVOE3H9hUakWGPDB8Cj1FLaJkIQhTmudeOGQWG3p6wUPccAlXsYULcfLcrvcW6Dx33RzI&X-Amz-Signature=90b44ce1fe81636996356301c9952d380679cb5aed789b99e2e22a1bb77fcc68&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
