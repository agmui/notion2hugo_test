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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL7B4OXT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDt7iMgSsmM7YdzQD249y%2B89fnj6CwRKUBGme7E9Wu1bAiEAkWVhQbVqes1VC%2B2djrAOeTfWr%2B5x9r6t%2FmWJk26wQTsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlaETwDQKUH0g9FeCrcA9AZbr0XPM2higlyMmZ8j1eqjQ6n%2FOcVFobUJnsoK1weVbxFbLu5WxRerYhT7u017MFdkUh3U5ukOGgdJplIBG6Nx6BTfoU3bprGvxgsPRgrMsVQhp47ReffV9SoGNIM2MuIUp6rmH8ZlPv%2FzzmfgKNoUgMx7fWHFHXVtCD5hfNvwDydvxHLsu4VlOyyfBM8tVbNRg%2FD%2FUzDSOWLw8aMmOckym2FA%2FRGNmnlO8zaO%2FSgogcVUl6XTUciFCFNnk81wHMVVBK8lPDywfrk9EJQRPPd3eSL9PprCTK0EzgNWCEWXGgj06QFXr6h1W%2Bj3lX7sC6zlZAf5xuxhLxp6Y0WSduy1nlVPUS%2BOygUKKCSdAbQNKfST%2BcVIZPnn741gva2T2439yHEI9W42Jztf%2FATkN6pJMgoMKeEapoYrtTX3ywW7R3caYF55NunBUwhFoSKxQW84QEx%2BZNfFG7vT8hRU4M99JTg6EGchYHLZwMCpHJoUNsDlS2KuXdZv7ebcvdX%2FE51adD1fRWmfDpuNDJaunOAUwoYuZoCgZGCOkdLXWnRdYqjAiGPVKc05MAKtQP1KbvzGyGt8LXKqfZnZJR9fiTefVNOfBcDNRJSOFMm4GODrqdLC6U%2BB6My6Z%2BWMKbivMEGOqUB5qvjmHaYyz%2FBMwl5pNGn3aZ9QyXi483DxSs%2F%2B4XEJcyEDKQFQXteJXmBnE6f1XM542HiF3jwj8KpMYmdPH%2B%2BVR%2B3mDN2dpuB34%2BjLME%2BLR3gYjaXV0%2BbL%2FGqouD5XRHz8WzwVMz9mKhL7k9Cv2IsL%2Bxopz%2FkEP0HgVxU5wt3ODqCNylhKNGbFZIqpMyuTcVCb0mqVXYt4LPCyxGdPDjblTks4bex&X-Amz-Signature=c59edd47a0825381c12a39e996bc04197c05e867d58f940fb96c72bad3d051e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
