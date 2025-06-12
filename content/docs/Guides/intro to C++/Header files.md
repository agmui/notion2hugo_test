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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWT2DC3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCpUguhswMQHcgivkJgppVKgxoeXyBbNdWcCIKqZYBmXwIhALvgbVVLsFfMWnyvc9uxbKZji7BuS1oovZABvM3OuHBgKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNcbHJ3J%2F9gQyIt6kq3ANkQ8K%2F%2BuYgaz5yiTNW7JXbAEi2z9Y3jWzq78SlBXPkcagE%2BCnZnYvyAqoBt6hdENXaNZd5aUbAd0lA01RraMxy4%2FCVlTp8eFZZF44j34iDNtmjey8WiIm7SHJBmo7OPX27h1vmZ8MR1P4zhpM89JlwNQKH286Kegnb3Zl1wUkj4OkyBPKyBYdRKGAtjuBVkrf2SgNHxv6ExDRvNZDcPbsC9GdxeS3mN3StUKxV74Eh6SZPYOg3dMEW1bUYxPW8MYsc3dpSHAmesouaYJdaHRkXMT8zhqR9v8ODyaBE%2FB9ZCq8T8fNnyYfkmv6zOF27ZvlexwfpBNme15oWAmiTynvTaDekOs6RUQEIozgvO2f0gbdift2iPkvtab6DO7dVf%2FKK6z8y1hkEvluvXsIrIRI%2BYWQtYafb0kQVYLGTfS43ZnXRFreVgY5fC%2F%2B5f6DlgWkZChMefOzBQiBPIbMJDBKqTexfAH%2BBMhNbrhTjl7OZKFEG3jMzQpuY%2Fi0UXt0k5FJW9%2FMCGPmPNQxrT54HoYLguocDvUxXy1KbA6Qq%2BBeeLrebxT58nEkiYp4ZH%2FPC9GHc6H5d9dTrq9HWHBakXVUsUf5gcfaf64cJ%2Bprwf6oyuREu4%2BluCRMO77%2BpNjCzlKnCBjqkAV1Gp8dMM8wbmn0Z0uH4N4wAnLnxGqf91VI7xfWO3KWxgRzKfYTXqxEHLIcfCq9zGp7V62jvzSxXmxszWisUtQEXUHycbLoatcl6v4JWMOaVF1NCvRsjptGYvRmgUqAqxaHo7gzN6VwRd51kUkbD4VLnC83L1Pkv7yYiQ3IupOfrYTYgcgGniQLCEFlhxGqj%2BHbb3fiDnOSFOHJEBTgX9%2FU0MAEL&X-Amz-Signature=3ceb9085e6843680046fe0ebe888b6017770d26d48df9cc468522e5a76578050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
