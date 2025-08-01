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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DOYK4B3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4wlNlzFjnQOI3Fl4diVRVgu4ZuGP4t1CmuwGmZi1pAAIgVXtB0b6Zr4WCiAth%2B1n9lC%2FjVKhYF1i8fu6jdEJezuIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMT8DzjRJy7V99IZcyrcA9NPp3tU8pBXIEq701KLCtXJOkIU%2FPRjKtMe%2Bc%2F%2F0GZ%2BrQVYKx0C3chYCzOrq8wwu4QwqZ4wAGB0B4esnAHEId3c26c08YXgKkULpYcrivMof%2BvprfjMW%2BxO0ipQlSyOW%2F927XpQv9RH28gapkWQSH%2Bu%2Fd3SNpnAopkDJwR9EMxMW3JUKZ32mQnKRTf47bhAbjTvkmEM9kNBOwxG41uGCHWmbEmSw7baYLtPtuMApuOs0hhjpWhDMSsTRnijbsIEKC4uNhNhItP8dsGgsvfKhRN%2FBEmBQJ7KkgNRkiO4gfv%2Bo%2BC7gNblA2030RoHcOcEQF6D%2B8BPROgzaEjOkHXIIYZj8Wf3dXJYUEZLGlu8daYpw4E4rKF4IhFKYcwTQiAhz5VyDED3uBpXRZQQFn7BQsbsapZrGkqnxwgys3rVPAG6RpPc9iZpk9AoIsPCle2c5yFp67RR13dqGwJYRmYlRgBF36IRnMQf9x%2BDs97AV0fMWEbJZCio0eRdYSXAVm6z4tCu4vbkK%2BobOatOcpTWwpOC8DJAj5MzWPBgj1QUfDWfqMjJke2XLmPJ6nzs9xeKXWckH%2BMNJTFmEvT4QT55EiRIWVYh0QHuPKLyrjNhZDzA948tVbdPIurApR3iMKvMsMQGOqUBjIMxsKdNcMd0Qoazn9N4z%2BVmQjtrTuKobeS3VPCHfjtSTjpwbBaA%2BbxEbevRVxik1Xwh8i%2FWT3mktrXcCJKUqRLKnt3L44U%2FV7%2Foe6LK9oZER%2BOARQmGjOLb%2BoHHr5w9p7zGpCXO89dlf5hOBiTQa9TW3boB82jCtueie3o4ZTVclgRZ9RSCyh4o2WFJKGr7q9PAjNWkg7qibJWjnwVkneo0LQtF&X-Amz-Signature=61b52aa5994a380dea68eeae1be1b21e09c3dcfbcfe89c1f5c3d1ad2c7a31643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
