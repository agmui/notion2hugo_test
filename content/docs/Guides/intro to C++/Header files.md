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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YHQYS66%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDnBqom4E2Q%2FAIY40j1mOSR2N7suWbYecq5q92CY4620gIhAO5YntoiX7h42pqgIB4%2BvAfnKqz0ONgzyLDEJTWJANWEKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIraoY%2BGXD%2B4CuIZoq3APJgOS1iZypSsh3YxV5SP0R%2BRK97H0kGlrCi%2FPKiXw9yUw9SqXHCrY4rjGRrkyVk5fy6%2Bvc8atBmW%2BJW%2BUILFMS0Gx9eygVn1ul5KNQqBlK5TSS0I9oZ69UqXLmGQN%2F5cQ4dd%2Fjf8%2FPKOmykw8eLMhCkLdOYu4XTwWV5ZlcTwRbaFKnzfPI4CZC8ygrbBLb%2FOEIt3sN17eqZvaC0eCUJQjo%2FUS0n%2FfH78AcHIPO5SIC6VIneQYa1q77DT5ByjM4g6%2FjfIJe52w%2BOKeZE9ecZGMR7BA60UU%2FGf3ANy9rwoMF16lApp0T6m%2BSRzZfvT6bgJbsGbMV9DDkGZw9MfjpjMLpq%2FWKE63McN7C2BdOmEMIRva2pzRA9KB8EhKZcPmoPPuf48YQdI1EzIQkGWdPCJ8ig7eH91Lr9yxE2L6DiH6KSJTLShGaNuVNbrsqmSpZ1GUbyP6%2B4tyC79P79f3%2BQOKnVRkoIgx6%2FZjfU4syGSKMwfHWS%2FxeKdatHj1VOMg9mZ2npLX%2BdXuTvk9itgq26u6jX6gWRrUgmaPSe6da149ADhLdeXn7r9YR6WiV0hiTCs1cv%2B7WPbucbKwPNZKU4XM14BM%2FQHXSE%2FnwNY7YEaW4h%2FmL86YlPcEd10PKuzD%2BgfrBBjqkAbpnOdHpT7Zf3rR6EXp%2FzafduOr4Y5yxGtbIRgZMgu%2FTlYR4mvyY8W84%2Be4f97YFEV7OIRyxNC3N8AFj%2Fkz7WEThPqUn4swJXmc1FC1vfgo2bA0T7Yw6tJALnVP3pYwkUkVVywPjv8ltgKquqEV%2FloP%2FjRNtIYP3fMINtXY7KQGoW3HhZOits8zh%2Fv3Q8dHmxHt%2Foanj%2FT4Y5wgBGeLGnY7ctb%2Br&X-Amz-Signature=6a7d9aa0e770596f7fd6d95b7106c63757afe3cd5a22ea042af65e4525f60d40&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
