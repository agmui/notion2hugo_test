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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UTEOU56%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNtYd6snAoi1Ucd7dB0u%2FLYOKjuvbQ3YOmbZiDj0F7GAIhAIhxJ%2FvW0KbMJHwlz3siyFxWv0LOD1MBW6ExHsdgxNKfKv8DCFsQABoMNjM3NDIzMTgzODA1IgxPO82a7hty47kLhlwq3AMrEzzZJJxcvWi%2FaeVnsC5vNFeA5djSLiw8FcYsSwv7ot%2FP9P4BQY6y9zD%2F3dLySLTGRHN58i1hwBD55bIgJzhFWDgkGGP8mdWbDzX4QtZyE3omVD8wcZTIjpPWOguBc8KKb0MV9TBv3%2FMwd4tmC%2BL9RNBAA4hjDdEo6Y0vNQsFBLvo%2BhPHFGP%2F3sassh1xplJqUfprCXKgRLVEI8AE4zDlSLMjcxELZwA7GTj75xsRppK844A8J%2FO7IAiysi1h3wf89ehpvqVwsrDd5EgPoK6vZBdFKIEvK%2FBuudqZw0FithK9g6vzDThKCa%2F9io6%2FG3BTuUXkIHgG5g4VErJnB9JwvqykMtzcrcxRpDf%2F3iKrzfmdQXv22g1ejXmcu6aQohPFrrsA6FGkuLcfjhkt%2B2P%2FIw7iC0I4IBAdpruvP51JET%2F221qDavbAzspryJ58Bkyamqhtp%2BmRq5Dwj9obISubVrP6FYirT%2FWVruXfgssW1%2Bh5%2FUmLvCird1kzlg%2FD%2FWoaY1W%2Bd87eRmK2QyxuX%2FxyABZ7uqBLeU1aZFEBDyTCGSeXCSrrOExRzliePDk3WqlaXETZOnOp9z589iWrXlpYS%2BlY6Dbp5wP5d22qJvWEsnhQncQM9JTJ5MOrhTDUvKHBBjqkAQaPewByfywDQni9SgVoWmFgYKuPeQjZ8QG2%2F8h%2FqO57xdKVkTHGdePh1%2BXKo3pYEaEWvRX1MoS2bw0CRlf7yq6BvZulglRthpvG0RAdYGewtZVCZRsrAoOiwcHIlX451YZgV5YRWufa9GitxKNIe2d2CY4KNb5Vl6yqTkQNOi970a668bpNgEsvFQ21kXgd3vy4Apld4aAL6XsMHiAPWo7S%2BMrb&X-Amz-Signature=b3b30d27457973525a69ede8f1213f5d6b87850ff1460cbcd1d014882f528131&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
