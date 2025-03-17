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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEHNZ4F%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1TwyhZsKn2l%2Fpf1txk3vj5Jr45Wkt%2BqG3to2RFduXhAiAZtpTE0C8hCksB99%2B2e40ZnKqsb6Q3kPPNesCwDIkKuSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMLxrcBabJ5rup0%2BbdKtwD77jR%2FZ5UoZR8EFQqu1PBTiHfMtOYmxgv%2BJfVCLW%2Fa%2FHsmg44O%2FbfM10j%2FlQvMJhX0Tj%2FnAiqIds0DiPeLQixSvxsdREYBCz0PCkxgO8OwJNnTQ5%2BKol2xfkPYevmhpzeced8ChIymmwp%2B6wUN%2FUTnwefNkQ2%2FkD1nSP6yR6S7I9ETneDIJbpVEbwP1qg%2FP4gNvjusFcyC1RHnTCFzqiisEdMHWiYG3NWmkG08cwpwlWj6jxoGiI9%2FSNWUnMYYqgv3%2BS21rS5UnLE9YvPJEFBZyXf7LQVfQL77IbBnNdbRU%2BRVWJ3IS6II7%2BdbkP4ZNYEZ51XdKF61rdiHBTDhzgLvYdJkkGlkZsArOG7Yzv28K39CeblMtbXqjzWrCB8H8McOJ%2BTWyVd5OFcTbT5YRkFyW0tcIszEt7fxQoEF%2FqC0Zf52BBgFKJG8PLS83EoSxdorTZqrbGNR73SrTJ68uU0r75w2PGN%2FQ6c%2Fc0EA8JHxjvXUY6uEAHjg1WZqb9YB3lN2RGRmOedma8O5nTJ7cNpMWS2cjLfvc%2B2DWjlLJh%2BSAGv8krtBZKGhYKtotFLwsuVAQBkyRlTBy0DFTKnQ6fWHWG6RvScAjrdZpmWFwBXVSdT7ATXJk%2FAVqbsQ%2B8wkKvgvgY6pgE0xi8yUOjuR2VP8VaBajNwbJmUsyBUpq9UImBReJnwdxswTFTkI9JDr9xoPBG12hofvDKGw0LTie%2F9b4G3xfwbVvS1Zcw%2BV6In%2FDN%2F%2BHMGuVWW0sarNJ3edKkgfqq6bcW6xeLylYzCh7ekapdq%2F8aZquS0DIpp0CPC%2BNyRlvv0f3mOE43s99gwHidgUzittHVluCburospq9Ixqqu7fS2jwe8iIE1b&X-Amz-Signature=231c8ff4bc21613afd6be5ed24230f7e193556d8798ec339e16baecb3cfe6283&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
