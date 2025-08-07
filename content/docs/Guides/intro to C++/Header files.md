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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDKEQWP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCr290HWtoopVen%2FAYfrrtHWN%2BSPe51fmqcpdnIu28fsQIhAP1fpYg54P3kZqX68RpIJGVGbHPFz%2FS4HrOw7okkYqtpKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxFT4AQWIjtM%2FPb80q3AMH1ReRCRXrHpyAr3JyoHDZ2QEB%2FTRbphWjYh%2FrTIStjbO3h5rZUKQedpPlJ1UwcvhSn5wRNKwmKvXHmKe7leT%2BEBSjS2SE%2FcbR4bzSbh2L26MNYSIZxzDRBD8Soi9%2BvEHoeKjvFgQLedPB5Bed4LDTF6AbZKZIsss8yixD5rFkkWtjynnA5mr0dJudYfplP0LRP%2BlMT3QyU%2Bijn%2BcOwIXPMiNFwybrq3FPVvxx5xu1c6E8Hbfp5%2FDENzBG8GYZNiqDhz2rjutW7WQQ%2Bo1gfErNFZiQGzF4vmTBK35AZ3Y%2Bfu6A2lCqxpV6AVGvrZiiIqx7WJNVF3rh9omX1nYozLt2kQY8ibn1ZtFmk25TPQax4ercwODBJHP8jcq4KOwWA12kVNQ4AdNiY6wIn%2FxUBt9YYP2arxTtC%2FvwcQnWsHBK08PZ5938tgB%2Fb3PaviwLQK1Cq2K%2BAWJ9YJF%2BM8QDfFsO8wkNO2pavM0dzj99sV2iWaR3PlrevUcjbpOy8%2BjKLywtR6sqdJV17RpRXuci5cwUgD7sEOpd%2F08eJVRY5PKBYS95jG18XIATcyNyNUg80%2BLzTF8H9cz7nJ%2FWtG8w%2F7w6UU2hBEn%2BWXac%2F6qhVrbn6RVnC0jCoQO%2BAF3dIzDMtNHEBjqkAY4zoS0h8ziET3MfFg54hhykiipuute4bZMjc0ClECDbQwUZutiN8%2FXNy648FjuGJkBYWY38CeLg0zsp3SgWaYcXqzqW7oUeOU%2FSOu9GnVgpNFCcDxNeY6k7I3RGDZMahrJa%2BWLryobjOZ4kbCPsjiKv%2F%2Fae%2BVByUvKhTv9%2F9HL3evHrAm6WbPYTHgow5STz72mL0N02qg4f7MASpiUCjsXJfRGq&X-Amz-Signature=db3fa47ac91849e82fac3d6ec1b2aa8a2b328e9f9c348a596c00faed5177f9c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
