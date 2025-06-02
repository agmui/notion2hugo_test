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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKO26KWJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIF6ABSeTYg1FbI%2BbjFIPD3JR2vznfLSpP%2BXZuwh8Es1wAiAFAHkytQYjSy3o0dr9fFlDEyRDujqe6B5sIUexDuVdvCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOgg0b1q%2B4bXISTCSKtwD7AE1MNdoAtVl2wPu%2BD251fqqWn3Y4U8mNjFTDQhu1X4znjiqOLoImPS24pgMpHKGkB00RM7OzklZf9%2BUY195zEVByEHeD1V8o7AdQ%2FNFmKdS2VbnQsFBGSAhJ4kvACsmWUmXPhGB%2BpCBTbkPz%2B8SrkZyrWk%2B54sJfn7tNnNvSAG%2B%2B%2BV2eQzD%2FA%2B2NRObIjKU3SCk8OAqoKxYOC1VsL3Zxy1lGzzpnkYD1KiX133%2Fsyfv1AbkupeLv7LVGUB9EAsp0HHWfhgyXcSma4%2BQOUchR8PZD9EvIzvm%2Btu1c6TFxq%2BZ63Oe6dJfhUA8t7o0wOnDBuBR5kwxeTPKzK1nj9z8R7wG62PYfrPpt27o2P2lKJ7RQoh%2FcByX7bpCGS3i%2FrQgK1hPtQNp%2F1okameog020eOikZGdZC%2ByVdmYAEy5%2F2PjBzNugiBufHBGufcTgkKg00n8GqnxqsVuV2NKbXMGag8dIXVClvfy9pZ6GSge06OD4blW9dXfsqL%2BVeJ0pvLcoWq8rXjHLN1TAuoA2ZcCrwoHWro%2BmE%2F3OzP8hqRQ5EjrJwWoNPZc%2FaF%2FhOL6Uaj0cTuViBIeEQ5M5M3t505VosxitJrWQV%2FZdgQGBo4xazx%2BDFGhicftJjMeTvHkwq9f0wQY6pgH1FPOgyF1hecUz9aknhM%2BrgEc%2F%2F9WKIheAMEHegimmozcuxhwtbzr%2F1YoQj997SRRZOfKj9XdJgNxgOLiRr5h8LTcX2hbnZ5QiXLFR8y9BAW1w596do6vYZllw66T%2FVYrnK1sQJSfrd8%2BYUh1Q%2BDF%2BNQL8TVN5k6kBLazIDPx%2Bhy1Y0tLDiAPo8PXO8P3y00X3e%2BwLOYudzQM9hoTsetwKegyZa5hj&X-Amz-Signature=d7230c70ee48312ba9ab37a82b7c90741e0189c4ff02e2e82bd18555f764afe8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
