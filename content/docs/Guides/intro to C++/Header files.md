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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM5UZZPY%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDU75L%2FzTh9CBDh5IhCjE3L2qovrXKSbITJsLhLqhnCPQIhALnTMsfgkWyyf5oXrdhlkE32rcZx2dZ7QS%2BSw%2BediYtxKv8DCGkQABoMNjM3NDIzMTgzODA1IgyT6J9rbjl%2Fg9NID44q3AM8PH80HCsRUwHm7QCefX%2F2ZI%2FgH%2F4DbhWWtK1Ob09NNDrY2eB8HpNC2brA0eg%2BUyHTQ62GLgd9vYkMfZRkMwZJe%2BfaC67MLe4QSfKPABHh%2FgXVrMwzOUfW7XJ2%2B9cVBSw94wT8st8TiWe7H%2F84PcuBOvxrw5PUA3HPEfiDjxbnflTmpcUlknXH%2FnUD%2FlqxsB8d%2FsUKFlVyiILoYjs9b8O6m9LBlMQPTz6roneAdIxt9BNpA7aDiM16jSSijsDum2wgmjTsMo5XCS%2FvywOV1IybHKQPirYE4vGzdUs%2FZGj4XaA5EGiBdj1eJxteM8Zp73d2iPmmSs%2BV0x4kxsRTU9tpgrLiL9oCRx9pegqYZs2q1QfSJANC77JolwUUTXssrav4w2N4Orkg8r84SpG7tBhsL9Da9jrVIlQJYyMkv7u1w3baKyz%2BXwqfwxDTYtmTWbf7z5sjhz8trDC6i%2Faw9iMfxZMbbWqMq7r%2B4iKxS8QVE3B4B%2FABvsAte6WynnZPOqPKLyNYX0vlO0bIIYXUW8675XyEX%2B2fF9VK5GW8O%2FTHjQbPsGp5E3TkZ%2BtBdUGunCGDaOluVxvc9u7gpouOMXwFe8GEVCU1WDHkI58gTmTBrqvR6IsJgjUVahR8cDCwgcq9BjqkAT9oj9%2BssaT73KMma2b44B%2BYrwq4dgK3wQbXwfIT%2Bg%2BfDunzcyuvxHHLzV8VUfJ%2FgVgdPGG3nVI9BKIIKRwcKUDq%2Bho%2BoLdHbBRgFEb9gCghqd4Ku9mj9AWq9jvh4%2FYqE89ItlUnV6xtWm3T6ddsQG%2BWLlUqWb8O75QIBZoTY6mT%2Fyy2GRdETlqL8vasHDMFUK3kLvVgvM6umaFpojUqQ0Qdi7gG&X-Amz-Signature=3c9ab3f8b9fb9ec0a41892b12a697140c09f2d4473e57f2df1af3a234f448543&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
