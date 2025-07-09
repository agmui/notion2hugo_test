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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2OYZP4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8yv0J8V3TOldJZX%2Bd7uNkBOro3eGfvrsB48Ulo9oA3AiEAoHQ1InOY2n5y5syosNoTlWjZRhf%2BdvMAnrBbCyUv9RcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHw96r4bEhGYPoPnrircAxMKY0i6O%2BfkTNNrkYXapPEmtdTpJww7Y9xp5imWa2jRb9wgSFXTgNpF9tG3kC%2BPq1at4PkviDRfJ46DlTmz7%2BD9I9gUPsRoc%2BWN6A7u4g8e0Jmpi%2FY6ZENj63yArast79wm%2BT%2BqVR4qdClwIMKysNKi0Ya7MMm63%2B61UjzZXlG8prHkSdMGrGQbGqWLuIoBEb5NPLug34995bRmN8vZ1%2BHI%2FgfCsRWSvGTf%2FFdCT9bZ0iYXnkz7irNsb4xm8Vaw0jsRu%2B%2Fvnz6VAs2Ra2npmC%2BS2dF9TaFQ5MOiPP8QXpkP9aZMuFUbwc2GHohQrnHn88BFZ2uO3cq1PiPpjHVrWYXxuKnptYud9jpIA1hQ0cW9itCT8BoRJL7i3hJGVEuwFtu6LVViekAiaCMfm%2BTsGeP62tbZgpjnZEW6Yoc6Up5p3pri%2B4U%2BqXL1SuvN3voK5AwD2pAUPd6u2BzFdT5FvwiW1vnCUa8kjobKGc5BskaDajPTM7TVK0Ubz7rcYOCTb8gkmAaBgbCio3%2BUgT7P%2BeP9N1SQVWcZ5SM7mV8XtghClzjdnYvI06mWrpFMcW5U1L82jCvQA0iL%2BTco%2BVZabrA%2B9T61VmccQS2CPYMCWOXSj%2FalKMtdrv24xbQ1MMOLucMGOqUBJJ6WjntRerqjw3XBcLJLib8JNuaxAv6jEzfRWoTlSQWXPvKwJeL62nURMmoG%2BPUrCmgzSfLXp6CwtszdhQEobokydgYPoXK%2BKkYONfvOv19WheM6dGiTXoGnqnyLDqQ%2BHiJ2K9YeIm1W1krzyfOTGmdRQgFm8oZrXNfsCkfj8wO8gwhhw9WW3UA3pnCEjEoe%2BseCedq1GDSSpvdLc2IZj9O3tO9K&X-Amz-Signature=7fc65ac0a89248059fade425aa3e7366982410f1fe278190af3e09bf42cc27f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
