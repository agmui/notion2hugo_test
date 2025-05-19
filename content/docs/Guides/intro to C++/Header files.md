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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJOUWTJV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNIf%2Foqk37t2rO8W8oP2uikgrbK%2BRxTm5tK7tlebEMVwIgWzsspVgojFo6wTjN%2Faz8YnrBIjD4eKmPdSkaJ2j1mcEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcCyDyf6KM0JC%2FLpircA9s2z6%2FRuz2GxdUOvH4RBP0R3OBW5l52xhnPRSrgS4GyYP3qIl0BCEGEidz94bkGh1UKAdNBWvL2Immb7TG6KoIgsCDmf7QyNAOUT%2B0Mkw2l2MYi4CD%2BBgBU18iFXpDRGp4XKOVz1EFsgXmjPGLZExJqm4y8Pjblj431Uxkhf5NoFHYEsdozj5mU9F9Vl7LwpHqelUtyjWpebQEvXzECVxN5XgUD6gs2l8%2FeCGeDHcN9y0MJA7fN3syU9MjPw%2Bj8G9Ou8WAmgR6XZLyo7%2B261PTKLDt8X02UtqN6voPOzhiyzT5%2Bbpt5TB5s5mH1204Xyoa4lu4Qc5W3t9TppxHcMsVX7vR9Sgqs%2FB7xTAoy8NGnvNUBItf%2BZ3xRzdnZEdLmxnIe6cLL2dY6RrpYR7AbErL9dLc05S8uvmNW9RkD2eBBLeJj2Zy%2BWp33RvTxsYfHKIQdP47cHd5w%2F5f%2F8LmYwZIb9gv08jXUnAYCv1njld594s0L21q9qhvBKEUl%2Bdy0C%2Bmqt9m15Eyo5cUL%2FKcAcBxuF2eTzKavINZ3I4B8KXyhwTH6TZqTexyl7Pz9sx%2FU69USAQqDr%2BYjVkQ9F6XB9bAdTFLtMLkCoMndX%2FaPmVxJIzDHcPTFkOvmjZWiMIyCrMEGOqUBjp8WGLzQ280yfxfuKuyUvKpCifd%2FRU0O1vRKEAqzmscNdbyn9EGEoijPZWdCdPCN2g0qn5f62Hs5w20GHoaVH%2FjMY4ghValBDQXe7nwkJOiH0n%2FyL8I%2BD7XGN1v3Bw7%2B7LJRGpd4cHPzXo2bE6vHtxtV%2FyrOT6e%2F0T%2FHvCwjH6rqUblRuH89%2Bj3rjH0D%2BTsotwqtUMFMr0i%2FIyJLy58KbhGpbc9N&X-Amz-Signature=99b6551b9d10c17f6231d01e5c5cf6d914df579b2356ac827d6ae634564529ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
