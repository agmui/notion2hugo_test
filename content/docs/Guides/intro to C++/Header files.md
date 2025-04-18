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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRP7RJBW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FNQWMe3%2FgOSb%2BAlhzGMlmCxmY5SS8MND%2FFLOorwXfSAiAmLhPXWRbtDyac31kx8sYyH%2FfOAjj9TOhESgV2f%2Fo55Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMvpO6SQQz6uixOyg0KtwDFFXq%2FHN2a5TUtujyABrejJWEa1xHPuFO2xiFB4c4nbdmSy7%2F9xdttO4zG2sDrZnmzjwtz%2BZGoBFd77HFlgRBXASACk%2FCWgOaHf7fTBqlF%2Fyl9xy%2B%2Bmb0zXe%2B5xwSLu6XLGN95UwbAQ5jZ4bgklyNdo%2Bk71RdKDBpj09tR8cDVv0OFszcPSFNMQwhiq%2Fse20dcZYWHKRY%2FKm73Cjym45ESI1o%2Fs5hQe7aDw86z9nuGdcSaI29FJOuwitq%2BtCEOLcvFW4y5KZPIT6%2Bb13q8v4Pod82EUDt1ev3zt1QfWYHYnd5enNtB%2B9GNtqXY8l67Bnwc75c9LCtxD1Z7xPIhCpKvCuSmkPLUO%2F3sAK90zY4mx64QNvqsDegfIaEUFrvQyRuimRy5lLC5bVnxmGjsuMMmGZwomKtyIU6XNblXJa6IY1INKtJa7Paa6biqAovr1YjIBGKxR3NIxffSNYaW0WNU7ZGX7PzVyhq0A5AB%2Bt3NIdn%2BXkVKoX463DpsHzBeDAyVsyPClI%2BozUFZ%2F8Dmuxv8mj0jSMRF8mMGiWnWcQ2%2FgF12VRKk5sl%2FmAxufkcPz98MRt9BgnCwIu7rhpgqL%2B1%2FZrObhyvHVVbZPHzW0S3EGQJTxzOuUVzu3HLfOEw4sOJwAY6pgHjbE39G%2BVvrk7mE96VlZBVaGI11MVed39%2F36zWiCeXGItu1LoEGWnnEJioju1sFKpr51hO4w01lIvmFjYdzQUY0oKAMOr6VwYAV6PCnLwci0AyA%2F%2BIpCqlLMpEr6S4XZ94%2Bxokax0K%2BZeZgIw3if%2B9sqRCdROKcGg%2BBa1CizJiTwdtyWXNyGiB2ytGwlphH%2BkIKjwbjqUfF0i5iyZvAsuUTSV2drj9&X-Amz-Signature=232e8a9687e7685e13783720f49ab6c5f14e22fce1ff4c7323ddc9724c862158&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
