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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYOJBKR%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz40YRqzEKILpz4mVGDLB2sxFH89J8y1fdpxAYmgx6%2FAIhAP0uumCzQp2N%2FLAOzGdjs3HbQfHdyuVDKqnU%2Fx4kXTnXKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuNH2Wve3LAqGee%2BUq3AN%2FIf0cftqfv8O9ZSQ8gu%2FwSfoEtsS05b8r9DKdGrR79DHJbHmSo%2FwZ2rnRsXXILoqCqwnv7UDCiY3rBcru2SnweA9Ks%2Fq9HoHzjwEw9Od9JsaQmbWKAAx4CA4075iNz9Ur01ia78KVuQBcJqcwdZbIy72p3%2B0MpnuALZTXd%2BNn9hMJr5bfRjVg0g2jHyYp9gnteFxQSK2hAHswaVD%2FFEsyGWM0JLrOtjkF%2FfzCi7l24UuNvd%2FIjaP8jpEYk%2FMw637SgrIvTdwRe0DAOhkfKUddZtXH%2Bh3zwMkO5%2BACoAiNovK6KfzxFX168FZYIUuw9rxVMUXecsEmNebmFhzsoN4%2B07casEjtSBYFI8ymjsG%2FnRaO8mTtLsVTlMzLtySpq%2FAlW8aJVFF8MK4mTFtAkPRlNVPZqzRe3VT99F2fWY8kK5Y7LPMtJMRN4mdlafo21czymD6GQlvQtrwTXw0GdZNMJvna0KvWLqgr8%2B7DnPcAP681pSpnTB90cm90Lak5C%2BUvFNbmMlXYlLlK8UBWFBAV267KhtMvYz0XA9%2BNke5gFUlcCjvEnKNUnIDa4iUkUCDW95ckHE4C3HFKpiNxGMzjn9OIENfKJkO5aTkeMAAzuZHK0xkpn3yHEkDG%2FTCosuPBBjqkAQJzJEfAjOxlSupwG7e1vZmjUQTXkQbGN51DnYMBZW1sOFYWRvdJpTDrjy56zyT5m8ODQ3GxKsXj2K%2ByCeDO3FA6Hjpxi4CbHOa4FV2r%2BBThvQOVfTwBkSnIXhw6s%2BEsuuOgvStJKzvzWfzzIUjW76FMyp1VRt2Lv%2FsdrtNhkASzLegBxNomfA4s9hyOjVpbMWa%2Fo%2FeoSdqz8F8JrpbPCoKigbVU&X-Amz-Signature=1720b66c7f9c701a0a8d82c11b988eec03e2f3e8d37fa45e84f964af2e17940a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
