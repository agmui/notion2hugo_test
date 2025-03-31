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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPERESCT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIEtkiCrIicq44OkwS36MjMv0aOCiz71RKHOI7E8GBm%2FnAiAhgavc3FqHXQLBkD45vrQCH4q8jyCeh4rtmnOUqctwWiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx6iZzjS5%2FNIn43iNKtwDDQlZVbHHzy37mv6iIp05c78h0Lnn%2B94D0tMUV39uobnVoJgshG0y60w7vHD5CzAVAUGXHWy%2FWbIYGEo4bQdLtOtvz6B6W6vNsMBOJIzOXm7%2B3act35PSusUA1RwSgRG3%2FCAE2TOWtTFl3jhJvJDHt9L2mQjaMx5LTF6uktSSZlUt9mVt8NaZ124MSOO41rLg3eTGRroxsljhP9OgTHbjDWCSXKnj7M0WBMeggRzuXm%2BpL4g3xDaoI71oEOxPSzQcZamMVJNWyZrXA3ssuisNTWPU75W8hbIQ%2B9yaXY6QwJblFpP5k8P2VPxlPkLSDdaEdwrMhzKCan23ZF2njkBF2wkIRQpWrdUEyZiD9v6u9BOn42SRXowfzPdQZALLGf473H3Zxw2V3rxmtgqkXZ4TteihsBtgjXhwfqG7xveKbDorqp2U0VSl1ZhRsmkQhNarrZ%2BTv7Niek3mitXjVhC2tMn8a5I%2FxQZ%2B3DE0JOMoVhWTjhvdJGEjf6UB9m21qRt%2FIEx3xXEaX1h68DBGrMuTFRfGw%2BQLLxpSZ1IUvVbTWZJ7Jk%2Fz8YFfoeG%2Bb5h8LONrw72V4CssFLHOeYRh%2B9sO3jPiTULkyBN6Tb7jlFiRMCr8AMFZbwza18fTsj0wnsqovwY6pgFktZh2ZmMrc%2BRc8N%2FCLxX1AkUAYOl5a1lqpc9yzbj14InGEnFSIlxFnQOB496EuU4Gjz24EGFB8Q0E8asjMatKaNcjZYLeca%2B6XNYUegQMftAL4TKSw47zolpwZ1K4sHgLRauR7%2FZMrLPDdNiL8YVR4gxUbYWPW2pnYsNVuZgdwIV34ZGD0llRDaD9nMWf784PZvs%2FHT5sAfoQjhx%2BFw1Stc2F7400&X-Amz-Signature=8c4cac1cdf410b9f51edb3f388b33cec32402cfe353fdbde7f8f6a23ce9fc9ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
