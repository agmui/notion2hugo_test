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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3NU5MI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0Y08zps%2B%2B1Zwypu%2FwhJpQXG%2BjJ%2BokMMZpheLI8jQXcgIhAI%2FhIE6oHDUZtf31HcJUsrmQH2tItYBle7iMdTXvRj2jKv8DCDUQABoMNjM3NDIzMTgzODA1IgxEEzRs0fbSou%2FLJtUq3ANlza0eREKEgYjE2sP1g6nPbk6JhE0I7J43XUmyRegXohfJFUeUVybhIFqQQLTjZj%2BfFMTrhU4Ygr%2Bo73s528qDomrC3WFmFyPza9tAtunC%2FdiERRw5efhLh0qjCZ9yJR75%2BEFdbd7iEFk8iJ2P1u8zkkFOXXSrC4sj8fjieQqm6aTlA%2FzwYZF6f833TGMOjWQDjijPo%2FXgtTlOwNVxAtt426W1R2BJ8h19ALtzrpSoWImSWbJt437KVh7soKhv971RnRUT5pUKeorH27Jy6zzpq40XCPQd4SK0VEjRli6DbJaEWjNvtcPmo8P%2FtFDyhD94Exk4liSCPWlBVMEkCc9AU%2BduCqsqNGhvqWMU9FUTl2hk4Z%2FJznSB1f5L%2BcLEJIYJQAAqt4ds%2FH%2F1DOv7aR557xvoVGH3jQC43du0xn0ZqGm8D93amUOBeyDzFNNccoqUhva5T00ssxMgOg4r3qNN3QN78Glr10n7wp%2FP0sKXUCHprTddi6dWqsecvSDAKCJrpqEoz6pb6WvYDdLWZ2p6p90NBQKGg4IPhmB1h4UAzH5%2FDbq6HU4G1fL%2BMvjoAlhbhZGbIIjzQ3lbXa99f87uUpXdXEW9tXKpU9pFkgQH4gnQzC2z6otNsKkNOzCyksa%2FBjqkASPBLvG4BZxEBy9Lfa2YcJMNTawLdHhzfscqdulg5pM9XZCry0BAz1bj%2BmC4%2BJOUUhQVfmErI4RxK3V0DxQe7BTv0tikloA6mpz3wV2WwsVt07PNOg6Z9WK%2FzSIl%2F5GwT74gGnYF%2BVtavJWHSFDjRkZz972r%2BSxujnQJkPQRl0ARw2th2PMw3N%2FqcJPRtrFNp5p3lNL6ciwZqBMJ95VoB0nu0Op5&X-Amz-Signature=18d6979b79a323cfb229b9aabdd84606954d2a273aece2008e5c7b48b0969a3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
