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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOTLKIHU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAsaDrKxOw48QmLc3QQ65qww01jPLPhjCDa2A2mhiupKAiAK%2FfDHImnxWVzFbkHK3E6ltOKN8opQfMlzlCORE4POoyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMIhtwozTWGG%2FUxJP8KtwD1cbHA3MwBYAO4hM8nG9uDMqZ%2ByTbkIw4RFDFmEdKG4hJKOFUGv5jM0S3NCI4j5VPaXPX5lsS0ucWRAWnUN9%2BbAhkIFBMrZDBAbl0qNlaM%2F6oTbXpJZTDaizGjIYoTwiRk8YiYuGTU5dm0HaJJFBGTVsrd8mNiDDeyb2OH4WRdRax7MBD6TjDI3o%2B51gW0hgJ2%2BuxPyhGdIyULFf3qBObos6EwHYxeqc6HudxDc0Eog9aMGqH4CMEtdHBZCCMEvz0MHBej%2BCxdACZrJ%2FzWAFDwWQClFe3qNXohKWNZ4xCRIyMtYSB2Mh%2BS%2BecDowcybnb7AaLnOCkEvGoSFUhdDqNY9l0EYEybpCX70aiY620hD%2BdmFrPwDy%2FWTrPwolX8eR2RVNREv36bWvPrw1u8tj6kH61DVt7%2Fy2YOlEPm4Wp2k6hUKrOkstMNai19jjrTxzKM%2Bw7FyD94BrhIUGnsq8m%2FEhaWIfjMPLBjGawQslo3vLOQ1Q5uhXJsy5KYyefMiNKOe00hVw49W2yZ4efmPSM2Ka3JZN9qy4Rg5MLMmh7WAmmkOqiaMbwCySUmGu%2Bggw1%2FBsFPSLAqHQ3borrCZ1h8mfE8QIiUK6RBxM6UEX4Q6Jwl6vBKwR1RCIJyrQwu%2BigwwY6pgFoyHwFEje2m5lex%2BWwMyTkBeGj0%2FLN4UW%2BvfpECHfhXSWHFQgcuR2tDasQRQSWkUoQhGbEEIz9D2KRp%2BG6Yq%2BBapSt2sjnnwwdPQHYbEie5tX3yNCxrNNbklmMOXKw%2BBfkeFto7xaxECJ5vdVAPU24nSMtOuMzjNoZlVUsYQJEPP%2FPWtQEIH0vbMntRy1caxnlZ5yPofFexzomLNs3VQgY786Oxi5r&X-Amz-Signature=af912741aaa8cc5bf254047d7e07ec0d0e3382b9f1c36ebe479b9696cc9fe9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
