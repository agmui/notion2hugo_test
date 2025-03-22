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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXZWT6Y%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD%2Ft1AEOcaF2ITakP6UiF27JmroJS0r1gO8vYIhAeFOggIgMKoFkOhwv56sX5Gy%2BQ2gEec1pjNR8j1O3cYvfaurQwQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIMuva6elPdA%2BPozircA7g7gaVEoovIYf5Acr85vWfiaC8pjGji6fDDrIiieXO2iHyg6TKHUzRtAi93RwWjyGQGIZeDAcMNxLejKuE6BuExQi05%2BwmY9%2Fm5AcugjU21OcP8TuoXCHu%2Fu5lTGFmozqQX60zRAt41AzH0pJQsA9xuP9uDzlmG4TTbIvBWv5bsF2tTsOEhrOEy1QtO%2FFJ96RQ%2F2jLrmUF98tg9znhIaEbzCOIkBXG8UvtRMVXSRuxWjEmQG4omCQekNN8eZPhkfH7N7v4Goue9hLXZ6KJomHKU39HAJ0IijlWdRC8jOcc8xufzigUZDMDpPA3%2FYBgcdm7jCQA1rOSjOoIBuMYlc%2BaI0Kvc98P2LzRHtM6i0ekBSdjpvE6emoTxnqJ3x4KJDICfbe8iWG9fkxPRdvjJqgw%2FcCtIgN%2BhRfbY16IES9rNbxMzPkBAegWCCJpkgo7T%2FnvJzxnFEYlVHg65UkW3vocZgPbKSCWKxHAt4kR%2FUvp4f8XdpNgh%2BZlLVKTfMzOiEp4EpfWbVpRtaEh7k%2BnE20KmC%2FFKqTs9Cbu7wMtzL5EFl%2BRXOBAG7UnzjXDKy%2FKmcd5AB64VPcF6JzvhwEYFkL0Z5e1lbvWST5pKC6m5faGVxWasQTipNfTC35peMIb3%2Br4GOqUBTt4pcnzRCaAx%2FA7ktjwPIp749eaxCfkeG5i4SPJ%2BfiyfVCtWAhCYkcsLyIR8Iz5GXHootI55fG17Vod28VvDzPIz%2FceDV9TjAe5cnEpm70ittlIgsTExYZRFmZlpns3OU5XdU5UbkP6l688AtY9MzOeMz1EAhLocQMpjkSNEyHlcr9X3RzQ2OXF%2FXtvzSskl5dI3dszpzM%2F3B1thexBG2Z%2B1gvYF&X-Amz-Signature=d2d47a40a8b6557c6e24ebf9ffce422f9d722c72799b10b7dea862cf1cd12356&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
