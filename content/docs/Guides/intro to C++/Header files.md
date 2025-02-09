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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYLBEPQY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPkQu7PuWy4Bk8WTfsoGdjNjCqrpSUb0uuW5Lhe28e2AiAt8cid1DGUutvtpJL3dhCYK14y3LjVMMweazvqVCmhACqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSjJN%2FTJK%2B4jstZQ1KtwDwle4X9bKyT%2F9CbO5y8b%2B%2FvVhDMrR3LxKOE2kbHKFKMCEj1fceX7p5xKgCAKnkuxaCb2t2MzHj7x5RXjCeT80gwo2IuYv9V2kj1EnuxXnico2lslWItq2UTYd1p6HbwUj0C8o7IskCevjM%2F1geIa5UQoh0EEx6sORWHU%2FfM4XPEb6Px0AQrV7NwUwBmt9o2x1uZbnEqGz99SvK92LOWM%2FFYtVvGUczTawW3CbM1W9ahur1SQxglFzoGOZFYIQJEbNA7gj7h3bTlNv%2BEhciVttFFgGqNOh3Eaa6V5JM3VfAYMNABz%2B8o0HL0vnGoLLsdlMj9QfAwLsMb7mhPXF6GD%2B%2BcLYA7InF5Vj5dY8hBydc5YrYD9DJge%2B%2FYW6KLnEwY04PwWa3WX8Gzc8nRh%2FL6stTOtnFJAkGoGL1svjJCdQa954Q13sft%2FOG6gKFU%2FatbfTFBR6Fn6MhDxrBoNhtj%2FCXRVcckSrIPLBVthCPbka1RyJ%2Fau2XdtvXuRLEoI23PezKgeNH%2FdcuNsML0RmYCuE5ErvnHcwIyNrrL3act0UUqb3yiLwGNNF9vM7Im%2FefZl36no%2FyMGckVzTIHpuV7RVuNUHfWLfFPgE2jQbkgoPy0XKjm5D1rccqGjWW70w4r6gvQY6pgEXU29XvFAYqxUytn%2F5iQISIf3fJ5mhHkWQcDumlBl%2F3eFTXsarVXdGwGYUJiJn%2FVhlupHBomrvnOHLfpXVPKtjIS6thYNA5M7dHdpBJr4EBdh37ZYQfZ%2Fckjx5%2B5nAKeoDbV2l9KjcQ7hX38NzayvY%2BRHIz1qAgBkXOriwfOlvz4Kk9xYSQLhb%2B6EHAMV2%2FB1l9zse7C0n0Y4hYkYvGN6lB8KfKVqZ&X-Amz-Signature=fd355526f485745f6dfdb9a66d698e2f0f00998fe7b73a76c82adfb6ccd701b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
