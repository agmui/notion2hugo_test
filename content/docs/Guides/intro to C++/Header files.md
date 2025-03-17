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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BQ57PLE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsnBaea3jipvrYEtLzlm0yKRDGC7lwPdtbVfuMUt36EQIgBZDEcSQmW%2FNKh4uQxHOIu5aq%2BwFDnQm2AtvCnZTWmYUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKL9PDmWzCOhBtVIASrcA%2BGKVN7Ks6UxauN%2B%2FdJKA%2FzN0WcJc41CpAKVZLiMUa6pUu%2FmQR3%2Bhvpawd2kKjRFP3q7btB9lNHn8GH6CBvgWoVjlTgtpZdbzLF0U3QtOZDCkSxf6O6XENw0LtNwUZD3fGt2bjcEbqvMRU4cAet%2BrN27bUUifIVh9uMeGKtin%2BoWpJ1J4OZnzMXMIsoJ1johBJ3UNAsSIK6MfxpzApqNNf97bIoQV2bmZ88Z80ZPVsnZ6PEGKY1TpNBHFTRynZkdt1EiNC9gKlzSyuCZ8pgwqDEjnmHXR%2B%2BA8xdacbWscEyseDbug%2BU1OgGYK1Y3IyztwcdeqbnvuBiOOPQ7Dq3QpTzqG0p3n26lfpDrKLSujos8PPVCuJj9aNoDS0CQt%2BZQVB6Cn5bvl%2Bz%2BVDMma6h83BhzbtfB4pWlpEAawSBp8OkwV8ejZTFUs4aphfNpacw%2BZPU5GFc%2F9%2BG5WiiZFu4%2BC8OD5AHn%2Bt19woleUn%2FSDkIqPuNY%2B7SgrzHgn3v1JgO1LbnnPWOv%2BQKS0Zmq2F6yUc7cseDddHYtdUAW7toSnUHJEG1JwA73Zkz75ujdfEbbBbVNg5aEHS64a9OIfb4vDAj0qUOFDytMCanlXH4RO8ZpGWZ%2BIPsjFZxa0hQ2MIqw374GOqUBviX4jYJo3fEGYp4Tq%2BDNkfWcF%2Bz9fwqImt9pDD%2FUGAG20wWNbZZonD6bT8KZEsDI28YLvgA8IyqJm2XODFx0i9BkMHYpyg7wJPPu9RjjWSWn7Q5uVxbmYyUeMsIfUUXA7NEKuVd%2BnkdqAaJpqahjRBWd3Gkxe3N5V8%2FwGGcm8ualZiay5pN3PUmjXEh77BV9uVnOYoJlnmkmIAF9BndgdE8FcCNB&X-Amz-Signature=6b4334e9bf5c45c66da3b743410487198ee7ab5c2632c6df9877d53093b44650&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
