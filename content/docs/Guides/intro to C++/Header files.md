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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYA235TB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDwFzN4zP7BKAAKKC2Pk0hPeF9IlJ37ppskJrdFuDeJrQIhAL9fX3wIsJw%2BMrqb3paiejo7D64RsjG%2Bn4FHOJHSOxaUKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy10%2F0Qi%2Fiy1cJJSO8q3AMFOueNjjfA%2BT8Civ7s%2BgEqlaosqmnZJ%2B1V%2FCo1RFwIp3hln%2FwXbFODeblhazCRlxv%2FO8LONkj4g3ue39PET9PngXRnWPDTlkAQZhAjGSYUbfHNK66j1lSKfi5kVhbCzOwv0nsKtBWcV8mKk2KVjwGtylzHE8xKGpEFBzYctPmw14T%2FtNpWnWrYIO4BkgwThEWF37AgQqSR1KY%2F3SVkKfYUt0VVSc2t5kCS9BIxGY%2FUzmrtV69NhLR%2BDnrSDFSkswLBHgiklwVzq4QT9E454Nmw8FEmVv89hp2cWShL8gAiy3zcT6rRlvosPJwM1adXRD%2BoZM0%2BwEjxwPZhv0YRUCyLVKeuW5OpwXyBxQWZcdqk3%2B%2Bdo4XOEad4saFXUBk55MEuqzUjJJUyeucivx5aokbN%2BexIyGT%2BlV3m6xYV34KrGD05huunKfqWjlvO2GsE7BGIH9DjkdbHFAiIeUU7WbqQvZDVbQPE6Gx4URe7JTLMYRhoTND1xze8uq9280s9whgCBnrPDENHdflxWX0v%2FqRpjO%2BX0o4zHKdHpA7oOGw1MIhjh7AHqh%2B%2B6inQ8fYypjTf8ZdMhmEzGACKiK70L3GPT1ked9COkqkwYIHU6JQ9A8PxyNyeHzHhMGJuuDChsuC%2FBjqkAdrT4%2BRpd8C%2FrTn6VJTxI9SG5K7NnQ8LR%2BEZDDTqmu2%2BUMabcNbYszyS%2Bxg1eQLR06pt%2B5mGOXLgSpST6dDduFiMHOtMtSSp9OXWa4YkHylTeQ1a%2B%2BxJ%2B461ZwECqYZJ%2FlL3i8wQbvA1qhetNghDuFc41QdtsIi29hhJDoQS%2FErRxzlaTAPAVAU45sLTodYcQrT8w3HIw4zkdTlgBM7cyjJgRjbr&X-Amz-Signature=1d5bd6f0ad6b5b70d0249b8156888d3f8640e5b9b64d4fd6c482cedf82c01bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
