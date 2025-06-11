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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRG7SJYG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGqenZGoiugVoSoeJzsdPkH%2FagSk%2Byt9A21YCr1HpALdAiEA2NvKONHb7zujfi7PQx5MEtwo6o6eIeNl7Zn5JG0GTLgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiEo47Csp4%2BOHdIUCrcAztm%2FOFTSOm2Trpo0wOirq60ieSUxfM5F8FYrgPIxKqZA4rnE5KOzrz5Ue63ZbBuajoLuAbAGtgD%2F61y9zX2rWgi7iHUurgsQ79xugkOgot1jOy3Zw0cMF%2BNuYdizH8kg2RbbxhShBmb5NmR84Ay9hyBc54PrO5y4v1KdnrVq11xAum4S%2BlhfKLyrCHJtoUi1t9ejsooVWp3vXMAfZEfr27D53Zi5mVMr98RgSLkhJFK5jPIlsishHfVViR%2Flzp68qIIMPgV8f7vIo0Mqzo1%2Fb5jXfQgQtibttCWEM0L%2B0fchHBb%2F1mUvkeRK4zrzDSlO33LbBic0I50onntrGWdpTOY42kzM00FFOv4dd5agbTJ57CiYyrYSDujBdsZHiAQ8kZQh0%2FmJQJSSwBYOkItmnmMQWqdmWvjjxClnkizBHmoWQSw9oAY0ubbmrpy7tsDtS9l8MmSwjRxNRUeC%2FPH%2Fkv%2FBGXQPjMKeJKnloQ9ejagZjtDxJo9Kl6HqfZbBrAcMA4XdvPcNF7vEa2nqj9GYhwfrjX65xqdY2c07NdLkUiTVL%2BSo9YzRO97i8nsu5yQM041ihv6fHHQFcndCsxPyEyZ6kdW8J68fJ8TVkFZp2vZ17T3fcPa%2BGuptmNWMNOap8IGOqUBJvhRqKi3IeubEnA0zrMle%2FCzhwayjH0qNsLwgGw57wZFND%2FSCkunsn%2B2WG38CkQb2w4EWkZPz2MLKOH%2FSYKEv%2FU0aoptSikKXrqAg30dEWfWYMpJgmYXsYBRMoSEepxCS1yyCw0AGb9B11U3QChGlAAIYPuOop%2BBgjvHGTIgIf9e7DPstwpUyOIZ9JLhMy8pBhAsJqGIlUZJftAh7q6wgoHD%2BHtQ&X-Amz-Signature=697e64ae5c0d121cc0cd1f19b5b133bd627b10fbedb2ec21b2f7a1a11119c431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
