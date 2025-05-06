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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHXNBXMS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHOxoAfnUVFSEYTF%2Bohbk7HFnyN8Bf90qukUksYVYJzAiEA43V%2BApeBvpcUhA5UFqnnHoU7N7ikKIVqYScss5497JYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFfBxcto0a%2BRIgqZIircA0D9wUGP6Enho0zcAaJuBmGahzmmHa7hpOWBOKvSgzb9hz8LJF9u1buzoNYXH74vFDDngBkjXlvqF%2BdVN93HS0FucjOCUSNc4JFfqbKRBHgbik32AgIU0YSElWvBBJ6mUoDbXVaxCRg%2FF0d2utD5V1uaYmma6C1d9zy1CCpYB64NRAvBYM%2BVazz76l9dgs2X80qgWeF2sHptRMwqP5uxBCocASo5OVZnGhPYf6BAkJCjoqLHctdCciNCDwnF5TYuSH34kvpu3CNU%2FxDWRiRR1lAxxnmHVYgUoEZ9to1GRjN83Kc1lpVSy6dCxa4foJda1EPaPga0NkBPOul6OCRaMt4YhQBOl0g3fFFbA3UyHXxB%2BSVvHp6920Y4OefJplehu3atrxoMPwoyn7QiUP9wND7Kq09v6IJrgSat2KQMyuiZuS60RF1mtkxa%2BV3W6Ot3RmTXnatDFBSxlbSXZ%2BiMUkCvcRVhJndySBebmNm9JUhjgnZSq2QaH7mmENF2%2B6hO67uhT%2Fx3Uo7dS1Zlh4fbJVz2IYdCcqd8Gtvyo4Hxb6vyHC6MxBmdnPby25gLf6g%2BOkEY%2F5FEdbvZURh%2F2OXEMlSD02goQkeAQIIgtnawfxA4KPXQLjDI9neqSv%2FGMPiz6cAGOqUBvYhEbbPaPnm7vmy%2FTo4ZPF1DSgmU5CHK5QyctBuOgE7J5Q4jgSWq%2FmxLeG4iOX8QwDCM7uylVIiNcTbgiwG7tZqJiacq4pskj4DKlr%2FIp2vc%2BqBhjqsGmdc6OfJ%2F%2BIjroj%2BeyRG8gOJcTxtjz2%2Bf3T1hafY17eJ6Y8Am9NG%2FTLv9f%2BEv8%2BgIIZQG06mzuxW2n5%2BJP35j1TzL9rYwgRCAcP8kz5to&X-Amz-Signature=27afc471fe8c244536d17389fe51bfdea7807d29aff33e52fdd145de322809d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
