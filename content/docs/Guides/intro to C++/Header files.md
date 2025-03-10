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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BGIFKSR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFnn6bc0oeGvwg2zv4gC9XdjY8Mnqn7Z1Yo6M5Xgv5UgAiBRAvkPjFOCjoaAYotC4jVn1KletBzWYFVN3ggkvgYB%2BCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG7fgSOK6QAeW8MQbKtwDZV%2FFWFkJ1HK3nWCu%2F2JChSUdp6VLNdvYAdmFpe7QA%2Bgc5ueJ7ZxbQae3wMGOetjQdDbYjWKErkIX%2FSQH5nzVcCe6wjYUjJMnlMcZpO1R6nn%2BdjnxzeMwe4XeENJw6bbN6T5MRcZ%2Foedwrg6%2BAV0C0OBJb9cQdPr7KBuHjXbqlu4XoC96L0S9dKkk38iF9xvZPJhQOx%2FHJ9bycbHBMpP5L2ZAWB08RTGgVzMMLn94hbuIQVUVEdGJYnvrpw%2FGaiY1tb%2BfJDHoUbP1ZLsNhNniuuE9wVW88kTfOIShGWhqlB1LQTsCJQv9b67abWDgF3D2C%2BYDxgecYnk5n%2B4eGXLw3oBHSsyXbe8XBL74u1rtgfTr%2BGD3uO8Q5xIy1x9zczNnZ%2BLlDzUt0SrqbnzT38ML3CROikRlMNz1yAnVN2lPy1a0YW19B1BC2j11CeKU4pU0q0VHv%2F%2BVJZOuew8cFbKZszDUr2b%2ByuKWGuX29Qc1ta6X7i7uGD0BaDQzzIiLjaR6dzvxQtF%2BgXisUUiL85fMNKolEQkhjfTGw4uYGnHobc3LoJfbRTihhLuWQGh6gp%2BTNbjYywv8Z2QWGWUN6tMM3O3kEncf8dbB1J48xcG9UJbZ19UxqGUJWxkSrhQwtMu8vgY6pgEsGcthMDy1C9IyCpLjVKxl6d1OyLmf2vdvAt%2ByJsCBVIXXjHS22QROE6ThPn5VmBjB5ZXmpxLA6ARtACwTZyxD6ul5y9vR98jaMLzE%2Bg%2FONFBXS4bXYclHTwiqwEp%2FilQSr4PSOT29KfuWxnsT%2FmUU9i3x%2BpH7t93Bo4H8oinEZ3ZN1S8%2BzSAKqHkAroekyqq7ZLPICjpMH%2FuTj0txi68D35OF4aLn&X-Amz-Signature=c4616adc69744f693651096caa4566f00b0f03a56c5f48a07f8edf333b20c01c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
