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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN242J5E%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgeAXKfdFmZ2qkowYkuxpmblNw%2FDj891%2FyiZXtfj7mIQIhAMsDq%2Bor%2FkGLHMQfq%2B%2FfJ%2BNq7Mf4fwvoD72K0zd7BIxAKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkT8uPJzy2b5dULgEq3AO2CZ9vgm4t0lFklwX%2B%2FbdV%2BtnbS6DgrQQjGdvOkj2uOpYD%2FbSSC%2BOWYqwawUjvre6dzXgULLj52AA6nhBDu0NsZVHKBBcmB8rEFaZc1msiaga2omsbwlz1RW4vlEoLnJOX8TTbyDtIF6UoWXE0E6VMxQ1G9m0g1CasxxFYkMiVzghsdygFI0QvHcpuehlRVUmDD6VK89LhW32Q%2Bz4%2F3hnXXnt6vXepuwdQnEMMvCNmYQ%2B%2BFgtafD%2B0xXCP3xTcRGlyNiZLYkYBlyTEYPhqQzrCZBl7GvXSnh1iAsyBlB6PvbwemIu%2Bnbci4JunFRZM%2B%2FsSbcnYjV%2FHLg6Su%2F9OEUviSsmLsmBwKs8kfMQZwOnn7tDuVJhVRccWy33QTwidfVicktPR0yJnE4rXHQ7O1njH%2BNtuI5DXzxwk1x54iuC6tLQsUx8UKwOn2r5TlQFrOyLOL9%2FgSI%2BKj9R0uBYakjqc27%2FdhocNYO9oQQt%2FLS5%2F%2BzGGqe9XoxmCMNP1GlDb1KZxD4ECy34n06sZH5zQfAqsaUrTN5rrZOnVmGMFyqP76Nxx53FFJ7ywM3XPebxSxav%2BtA8kbqS5iJmyd6Ff8Y1Ue2c%2FFy6C070HX8NM%2BOf4Byzr4ZFbT86ghKyYBzDkraTEBjqkAShR0BfOM%2Bxymg%2BUreJfqeY3VPPyh9P7sIcxVyHWZPzQ%2BZrU0MxRhdBQ9BmmgzBfCaZjdMdOsV%2B0V8gpFcXWWQBQ5BWKECDxcnWx4%2BQkcFDRZONiSi9fRyMvvjSNzzgjpyXEEbDD%2FVTfb%2FJ5mQU5oAoAvOGU6lbvgv7CuWQAnhkoPVP8BC5rE7EcXPgFPXxKHg2dBMJN6HsI%2Fy818m1Nzaq8VzgB&X-Amz-Signature=c8e85b519b891920794a4a0ce704116a2df5f53c3425e154faa2e3830c669a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
