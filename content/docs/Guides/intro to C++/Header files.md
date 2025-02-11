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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7BJOOZT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEW6Pd48Rnhc5eEY3e0JzHpyLe8n8EeQ8UfPClwO%2FQGAiAEvx4Jni%2BQuziKenMG7tEVxmzo9j29SXKyznoRarStSCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqzYTlWA6NOYknFdZKtwDXIIx1KtgtTlzpdwUVwvIPVGACrZdGZ67%2FrXXoYfP0Ryp8GSXNuIhU%2FXzL6VZw4OeQf74yr4%2BOyqKz2nUcg0kOYZtzg2CUlixomARE53jpylrvZtMxH5S4NzCLMkxEM2bUh4%2BgvMD88fHH8%2BDeHmIhFOMdLM5th86Klevt80c9CQZ8q9kLmZfEE0Pu%2BSXvIfImRiOQNmE%2FZNvkm01VglPIeYggBvwRzWmWWq9seGGSLAjs7F3NGNqWpGo1I14BoSg%2FO9kwRzqDz01I2%2BNTrRE5x3ske6ovbnpKHv4v0kAdscoSebQ46kuFkHBoFsG9DT%2FrWP1rw7HG7FygTq%2FnrQ143IgW2EATai%2BplbzDcAc1xZvQZo6Q1T%2FxGqC8IKFqcL3m8U0LbEfSMz4PXJ6IeEVyZUkwXzYuigRGwrYv01heiAMJu%2BfEFvGU2qIi8geJ%2FTBp6KYNLMAhnt6pFb491%2BaLePCYMPBNuetpgNNl%2BLFvByno5%2FMdK2lIAjjgo0bbYswXQ04CcLMZ2w01oMU33ZJAG9%2Bj4jMXNu3Ec8zTa0sFZKuN74eZFD4LEDpxzkBXJKSJ%2FVPv3YCjFnxmZaDeZPMlrp8H9YGVx6yULoBntTQlJwS8pDQziJ6SIlHhPswvK6uvQY6pgGhtGl%2Fsd%2FMDVYiYLTgju%2Fl70Xp7xgdfwYfTPkpCtNSN7jtStyQuLLqWFHR203KHIFOihij0WpsvA7V%2F4RSi2MBIf5OA5Gua03rBZZalkgNdwrJdmJSO92JXFtp84YygZRvvucwzCiBNjF6f13w99hyZUcPwWVnLiOYSCBCor%2FTJpBcdwbS3Vn6aWNR5RJ3UDD6nfukmSCG8rzqKfDRgw6sJCtT9mIK&X-Amz-Signature=2e703ccbce2742f3af5057bd7340a31a33c6cbb99ae6cf6c3eb1c27f6eb2ccde&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
