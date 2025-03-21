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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JAXBBKJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGTPu6frQjawlrqWGrPGxaifLIdqJkDTav31FPoSVTPJAiBG9tYllCerr%2BUZ7eTfUNBX227YsPo3NVWRqOGoMhGvGiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4cRFTjx53%2B%2BcsQnyKtwD8QTNGZ2cRPcFyi7wjGH1HFaZzcQ795EVImNr4v5xnlwv1z%2FNiYoIiVUPtBhoF%2BQ45BnJSrYTGakyNHlov1goJ6FlfcbsVgxES1nwTlsBLtZ9e5BUPcOfE1TnCOuT4kC0%2F%2FFQvvkIG%2FlxC9d169T%2Bjtxl2sYfiHTVTwiS6j4g%2FzKUTdYNYMXcbkWBh39ARXqIQ8ZYOYdXx889hNhOKWGqj5HU0NRctslotN3ZexxPXafY3HfbPu7v3RUBSBACx98YtyFN3tKBwfQzjixwe%2FkYD9hnFosqqTBQK1uouJLsDeqwUMDnwSo0Fk68MevC7SXxm6ZtN0G1DXP%2Fbp43N4py1u28nj3Dz3jKozicglWL8LsfzXnCSx%2BdkYNFKuyGNVqffPmQLHyi4dsTVJmAkUPHDhqoozordix3frxD%2Bfxs6QjeoXQNQCXaBP6k5xCh6%2BujfwT%2BK0JfpQkHYjhnK5U9QVaXf2xwk1DOcNHBlL5Q9QMumX%2FmbooCjfwFPDk9u9Si95YDurF3YQnmMga742F2KbgQrIL2jqVLXsuVOCdI8OulUOVe8eFSQckck%2BARVPQyKQJJwHCUa2aVzAlyd5QDDpBJKHIgwbvAyjGs9z5VNK%2FdENOMqi0VpVdUwHYwzrv0vgY6pgH88k6S9PHjXVESh%2BKOek6%2FzpUwt1cCg0KwY7vR6a8fBX%2BaO7o1dB54xoIaspOyrkre%2Ff9yPQklorx2%2Brq154MRIuk%2BwRemq9sLyxojphkNx%2FmMOaDggwF8BL%2B%2FmhcPFF9fu9Bq2vXRumwniwb%2FL87Ql5yxsdI8ceTyuLp%2FV3n4y5%2BbL%2BXrRwehpwo8iMFRp8Lhyb6Sndt1EwDVbiPX%2F4T8HXjc9k0o&X-Amz-Signature=e6971a556f3f261d5d1c2f9f0a7aa83fbcbd6808973696bef25e621f2eb59bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
