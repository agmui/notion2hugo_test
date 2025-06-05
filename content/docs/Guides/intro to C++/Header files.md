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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAFLSWII%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCkfH4n7xWBUzZwmUIyeMuHx2KxQDr8HxkszL%2F66TpJWQIgPFBVpR6DiOp993V3ikhgBfod6%2FGM90f1U%2BpuyJhLaaUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHk%2FPf%2FUk2Ulpv%2BGgCrcA6XV2W%2Fk7YR1dopkCbt5AT0sudRCwogrPzK7YgO907GuXe9haK9ARxm0d%2FJGZfOfMrKoJVF5crv822vLhtPCngfhM%2BeXBGGegfowdjXOy%2FUdmRVuUBs4kur0l18t5z5l6XV7e4nrMf7KyvQfMvyVLviFJOm00iiaI5%2FhYlVooBz5dHq%2BXM3%2BPZF13ZeUWkdPqhPVLvWt7BeJ1ncM9W8EFLw2SPEZeEFtbzo4cs2oOQmk%2FQEs5kgixDiDWNg9e4V%2FSLGjS9%2BFYHS5hxDuZ%2FtVzS0H8GJwWqGhwbvQc8NHJYoTEPzO9DhICHCYb5DGy%2B%2Bv%2FZsADu7FDFdThrELHUMngjvWwp%2FEtVbkt3iaNTCKyeRQGYXwXpGzOZXaKA4muLqqk%2FSHZHYfyNrVl2AjcAjzfiT0hoeA7pNnxGt3tavKWretECOWIzgY5qtDELxaz77d7N0%2BgA%2BuAKvSTsxmDYQ4zvcNq9dKq441SjEMfaICUZkBRNJgZcXAjz1HKQZhyZtjCDH%2BWhsBfHKxdvFWrJyuuL5gM4HoXudAb7s5NP6ZWyp5DCQt74%2BQs3KhJLgBNNg9ti0GS8pQQHFK5AAWS7PVv7Gqaa6FfkhVqKSGGIM%2BdOY7gOF%2BfkaFdzEum0WcMPbehcIGOqUBsFrIBZ%2Fe%2Bdl168wjYY9VYKtYZDNaQY2Tg2wHmnyG6mRuClE1WGbc%2FQfBstz6CyFuPoSFADzMaxAl7I1sFG9rhc%2BC2TYj7Vc2ceyqO0jhg4NfCV0hK9cahHBJCc2fKXGdLznEhFhoEJ09wzd7zpfUEMS%2FbZl%2B3004YGbeMvArDwq%2BT93GmVWUrlcePcY2chCT7Goo3q5pVm0%2BWy77GGn29JPkXB6x&X-Amz-Signature=c7ab0e40cb7df4f5cd0f4406ac4b3a9b88aba1adf223298e1bc79d3e7dbbcf15&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
