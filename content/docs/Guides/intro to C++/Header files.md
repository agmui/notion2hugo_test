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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM7BY5CS%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIERQ%2BvB6%2F0iUyq9TxNZ6dxBPQzs49QgzSPEUIiZ%2FyLAGAiAWB1XOxnzD01kKQm1urk5IhFQN9ww%2BloKviWPVv%2FZ4KSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEj1kquLx2E6VkKwEKtwDS%2BRQLfm1JtgvSBNP8Wtcks6vRq7LDnIFQE3G0Yoi1xaVL%2FU%2FqFuUTA1dvTtY9f567z5oizn5vYgnGv6iv2AHptQ6EVqA4O3rY4srNm5HKpcrvIeqtu5kfwIqG4ysftgcI80KvN1tv3AuwJDFSNwzEMuRVZRxgHxE1ZrWxf%2BZTuVQtWTxJpvqUWQG5z88D9PnTUqisYZnno47URb0fy7c327hOpPjXaldG6aY0vcTij2YIOMIe93%2BYj%2FpPvGCZe34hThHgEFIzt2iVsR3TSnUZaKNbPw5Z2573z%2F96yEVpW24XSMVicFNR%2FV%2B0yhzSyA2LaWe9Q8NwZkUP7KaQ1qGQAOOeBIxQa4bcAuOsbEGTZu7%2FYG3gSOBTxxZ2WUu%2FppsRZjFxFyXPOQuF82OGbtmKw6P0xMPjcCjkKM8nNdlD5yfpmAEOTrsX1aTkKLhmwFUop2h387xK4uoY%2BKg1D8YzweocvxNzzbEtqnxgLlXZy35wjyeRCm5dXwdRoPtKZy3qNtZbyx6fXBNWQ58xhIo2hN87JLhXhp8y0BAdu18msW5%2ByH6HUadOOa36eMA5OmDalHivfLdMumd%2FGy5ogzN2FCg4W8Hf86YekQL29c7yP8Kkq6sSFhEsl7N740w38KpwgY6pgHXqIJsHGFrfcwm7FrEgX7oY9D8P5nGY7TZ5bQClodRsoMQhH%2Bq1n6KieJATr0e1X6EPpcO72BKwdOxjn3nNfJwMv9ub69y8rwk%2BTNz%2FAaEISaOliEjanNcriMpQ7gT24PpMoLMAfVULKKwZWl6XXueVJ1RmajZD5ur5f5e5fUJ7%2FMGrg52NYd68DB8OdSIjUBiRgG7S0lPVaA42FsdhxOIcy80uQQ0&X-Amz-Signature=db2e306c26002daa8587e61946a3c1ca0cd4f2b4e69f3d8f0ca9ff4f0fffb100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
